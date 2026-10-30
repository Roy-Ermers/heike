import { defineHaCard } from '@/lib/defineHaCard'
import Card from './Slider.vue'

console.log(Card)
defineHaCard(Card, {
  type: 'heike-slider',
  name: 'heike slider',
  description: 'Edit lights in a smooth way',
  stubConfig: { entity: 'light.living_room' },
  validate(config) {
    if (!config.entity) throw new Error('You need to define an entity')
  },
})
