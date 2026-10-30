import { computeName, type HomeAssistant } from 'custom-card-helpers';
import type { HassEntity } from 'home-assistant-js-websocket';
import { type MaybeRefOrGetter, toRef, type Ref, computed, toValue } from 'vue';

declare module 'custom-card-helpers' {
  interface HomeAssistant {
    formatEntityName(state: HassEntity, name?: string): string;
  }
}
export function useEntity(
  _hass: MaybeRefOrGetter<HomeAssistant | undefined>,
  _id: MaybeRefOrGetter<string | undefined>,
  _name?: MaybeRefOrGetter<string | undefined>,
) {
  const hass = toRef(_hass) as Ref<HomeAssistant>;
  const id = toRef(_id);

  const state = computed(() => (id.value ? hass.value.states[id.value] : undefined));

  const name = computed(() => {
    if (!state.value) return '-';

    if (toValue(_name)) return hass.value.formatEntityName(state.value, toValue(_name));
    return computeName(state.value);
  });

  return {
    name,
    state,
    hass,
    id,
  };
}

export type Entity = ReturnType<typeof useEntity>;
