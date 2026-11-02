import { defineHaCard } from '@/lib/defineHaCard';
import Card from './Toggle.vue';

defineHaCard(Card, {
  type: 'heike-toggle',
  name: 'heike toggle',
  description: 'Turn lights on and off',
  stubConfig: { entity: 'light.all_lights' },
  validate(config) {
    if (!config.entity) throw new Error('You need to define an entity');
  },

  getEntitySuggestion(hass, entityId) {
    if (entityId.split('.')[0] !== 'light') {
      return null;
    }

    const state = hass?.states?.[entityId];
    const supportedFeatures = state?.attributes.supported_features as unknown as
      | string[]
      | undefined;

    if (!supportedFeatures?.includes('onoff')) return null;

    return {
      config: { type: 'custom:heike-toggle', entity: entityId },
    };
  },

  getConfigForm() {
    return {
      schema: [
        {
          name: 'entity',
          required: true,
          selector: {
            entity: {
              domain: 'light',
            },
          },
        },
        {
          name: 'name',
          required: false,
          selector: { entity_name: {} },
          context: { entity: 'entity' },
        },
      ],
    };
  },
});
