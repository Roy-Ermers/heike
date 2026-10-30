import { turnOnOffEntity } from 'custom-card-helpers';
import useLocalValue from './useLocalValue';
import type { Entity } from './useEntity';
export function useLight(entity: Entity) {
  const rgbColor = useLocalValue<number[] | null>({
    get: () => {
      if (entity.state.value?.attributes.rgb_color) {
        return entity.state.value?.attributes.rgb_color;
      } else {
        return null;
      }
    },
    set: (value) => {
      entity.hass.value.callService('light', 'turn_on', {
        entity: entity.id.value,
        rgb_color: value ?? undefined,
      });
    },
  });

  const isOn = useLocalValue({
    get: () => entity.state.value?.state === 'on',
    set: (value) => {
      if (entity.hass.value && entity.id.value) {
        turnOnOffEntity(entity.hass.value, entity.id.value, value);
      }
    },
  });

  const brightness = useLocalValue({
    get: () => {
      return Math.round(((entity.state.value?.attributes.brightness ?? 0) / 255) * 100);
    },
    set: (value) => {
      if (value === 0) {
        turnOnOffEntity(entity.hass.value, entity.id.value!, false);
        return;
      }

      entity.hass.value.callService('light', 'turn_on', {
        entity_id: entity.id.value,
        brightness_pct: value,
      });
    },
  });

  return {
    rgbColor,
    isOn,
    brightness,
  };
}
