import type { HassEntities, HassEntity } from 'home-assistant-js-websocket'

const now = new Date().toISOString()
const entity = (entity_id: string, state: string, attributes: {
  [key: string]: any;
} = {}): [string, HassEntity] => [
    entity_id,
    { entity_id, state, attributes, last_changed: now, last_updated: now, context: { id: 'mock', user_id: null, parent_id: null } },
  ]

/** Default entities. Run `npm run snapshot` to use your real ones instead. */
export const defaultStates: HassEntities = Object.fromEntries([
  entity('light.living_room', 'on', {
    friendly_name: 'Living Room',
    brightness: 180,
    supported_color_modes: ['rgb'],
    color_mode: 'rgb',
    rgb_color: [255, 120, 40],
    hs_color: [22.1, 84.3],
    xy_color: [0.58, 0.37],
  }),
  entity('light.bedroom', 'off', { friendly_name: 'Bedroom' }),
  entity('switch.coffee_machine', 'off', { friendly_name: 'Coffee Machine' }),
  entity('sensor.living_room_temperature', '21.4', { friendly_name: 'Living Room Temperature', unit_of_measurement: '°C' }),
  entity('binary_sensor.front_door', 'off', { friendly_name: 'Front Door', device_class: 'door' }),
])
