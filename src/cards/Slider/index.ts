import { defineHaCard } from '@/lib/defineHaCard';
import Card from './Slider.vue';

defineHaCard(Card, {
  type: 'heike-slider',
  name: 'heike slider',
  description: 'Edit lights in a smooth way',
  stubConfig: { entity: 'light.all_lights', hidePercentage: false },
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

    if (supportedFeatures?.includes('onoff')) return null;

    return {
      config: { type: 'custom:heike-slider', entity: entityId },
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
              supported_features: [],
            },
          },
        },
        {
          name: 'name',
          required: false,
          selector: { entity_name: {} },
          context: { entity: 'entity' },
        },
        {
          name: 'hidePercentage',
          required: false,
          selector: { boolean: {} },
        },
      ],
    };
  },
});
