import { ref, toValue, type MaybeRefOrGetter } from "vue";

export function useSmoothedValue(target: MaybeRefOrGetter<number>) {
  const value = ref(toValue(target));

  return value;
}
