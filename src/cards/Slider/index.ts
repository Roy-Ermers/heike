import { defineHaCard } from '@/lib/defineHaCard';
import Card from './Slider.vue';

defineHaCard(Card, {
  type: 'heike-slider',
  name: 'heike slider',
  description: 'Edit lights in a smooth way',
  stubConfig: { entity: 'light.all_lights' },
  validate(config) {
    if (!config.entity) throw new Error('You need to define an entity');
  },

  getEntitySuggestion(hass, entityId) {
    if (entityId.split('.')[0] !== 'light') {
      return null;
    }
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
            },
          },
        },
        { name: 'name', required: false, context: { entity: 'entity' } },
      ],
    };
  },
});
