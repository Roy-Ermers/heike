import { ref } from 'vue';

export default function onShortPress(
  handler: (event: PointerEvent) => void,
  threshold: number = 200,
) {
  const startTimestamp = ref<number>();

  function pressStart() {
    startTimestamp.value = Date.now();
  }

  function pressEnd(event: PointerEvent) {
    if (startTimestamp.value === undefined) return;

    if (Date.now() - startTimestamp.value < threshold) {
      handler(event);
    }
  }

  return {
    onPointerdown: pressStart,
    onPointerup: pressEnd,
  };
}
