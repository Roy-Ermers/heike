import { computed, ref, watch, type WritableComputedOptions, type WritableComputedRef } from 'vue';

export default function useLocalValue<T>(
  options: WritableComputedOptions<T, T>,
): WritableComputedRef<T> {
  const localValue = ref<T>(options.get());

  const value = computed({
    get: () => {
      return localValue.value ?? options.get();
    },
    set: (value) => {
      localValue.value = value;
      options.set(value);
    },
  });

  watch(options.get, () => {
    localValue.value = options.get();
  });

  return value;
}
