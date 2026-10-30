import { computeName, type HomeAssistant } from 'custom-card-helpers';
import { type MaybeRefOrGetter, toRef, type Ref, computed } from 'vue';

export function useEntity(
  _hass: MaybeRefOrGetter<HomeAssistant | undefined>,
  _id: MaybeRefOrGetter<string | undefined>,
) {
  const hass = toRef(_hass) as Ref<HomeAssistant>;
  const id = toRef(_id);

  const state = computed(() => (id.value ? hass.value.states[id.value] : undefined));

  const name = computed(() => {
    if (state.value) return computeName(state.value);
    return '-';
  });

  return {
    name,
    state,
    hass,
    id,
  };
}

export type Entity = ReturnType<typeof useEntity>;
