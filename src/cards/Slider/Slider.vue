<script setup lang="ts">
import { computed, ref, toRef, useTemplateRef, watch, watchEffect, type Ref } from 'vue';
import { fireEvent, stateIcon, type HomeAssistant } from 'custom-card-helpers';
import { useEntity } from '@/composables/useEntity';
import { useLight } from '@/composables/useLight';
import { onLongPress, useCurrentElement } from '@vueuse/core';

interface Config {
  entity: string;
  name?: string;
}

const { config, hass } = defineProps<{ hass?: HomeAssistant; config?: Config }>();

const slider = useTemplateRef('slider');
const entity = useEntity(
  () => hass,
  () => config?.entity,
  () => config?.name,
);
const { isOn, rgbColor, brightness } = useLight(entity);

const formattedName = computed(() => {
  if (config?.name) return config.name;
  return entity.name.value;
});

const rgbCss = computed(() => {
  if (!rgbColor.value) return 'var(--accent-color)';
  return `rgb(${rgbColor.value.join()})`;
});

const icon = computed(() => (entity.state.value ? stateIcon(entity.state.value) : undefined));

const localBrightness = ref(brightness.value ?? 0);

watch([brightness, isOn], () => {
  if (isOn.value) localBrightness.value = brightness.value;
  else localBrightness.value = 0;
});

function moreInfo(e: Event) {
  console.log('moreinfo');
  if (!slider.value) return;

  fireEvent(slider.value, 'hass-more-info', { entityId: config!.entity });
}

function updateBrightness() {
  const value = slider.value?.valueAsNumber;
  if (value === undefined) {
    return;
  }

  localBrightness.value = value;
  brightness.value = value;
}

onLongPress(slider, (event) => moreInfo(event));
</script>
<template>
  <label :aria-checked="isOn" class="card" :style="{ '--rgb': rgbCss }">
    <button @click="isOn = !isOn">
      <ha-icon :icon="icon" />
    </button>

    <span class="label">{{ formattedName }}</span>

    <div class="fill" :style="{ '--value': localBrightness }" />

    <input
      ref="slider"
      type="range"
      min="0"
      max="100"
      v-model.number="localBrightness"
      @change="updateBrightness"
      step="1"
    />
  </label>
</template>

<style scoped>
.card {
  background: var(--ha-card-background, var(--card-background-color, #fff));
  color: var(--primary-text-color);
  border-radius: var(--ha-card-border-radius, 12px);
  box-shadow: var(--ha-card-box-shadow, none);
  border-width: var(--ha-card-border-width, 1px);
  border-style: solid;
  border-color: var(--ha-card-border-color, var(--divider-color, #e0e0e0));
  width: 100%;
  isolation: isolate;
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr;
  min-block-size: 3.5rem;
  box-sizing: border-box;
  gap: 1rem;
  align-items: center;
  overflow: clip;
  transition: color 250ms ease;

  &[aria-checked='false'] {
    color: var(--disabled-text-color);

    > button {
      background-color: var(--secondary-background-color);
      color: var(--disabled-text-color);
    }
  }

  > * {
    z-index: 1;
  }

  > .label {
    pointer-events: none;
    font-size: 0.875rem;
    font-weight: 600;
  }

  > button {
    display: inline-grid;
    place-content: center;
    aspect-ratio: 1;
    block-size: 3rem;
    margin: 0;
    padding: 0.25rem;
    margin-inline-start: 0.25rem;
    border: none;
    box-sizing: border-box;
    border-radius: calc(var(--ha-card-border-radius, 12px) + 0.25rem);
    background: var(--secondary-background-color);
    color: var(--rgb);
    display: grid;
    cursor: pointer;
    place-content: center;
    padding: 0.25rem;
    transition:
      background-color 250ms ease,
      color 250ms ease;
  }

  > .fill {
    position: absolute;
    inset-block: 0;
    inset-inline-start: 0;
    width: calc(var(--value) * 1%);
    border-radius: inherit;
    background: var(--rgb);
    z-index: 0;
    transition:
      width 100ms ease-in-out,
      background-color 250ms ease;
  }

  > input[type='range'] {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    appearance: none;
    background: transparent;
    border-radius: inherit;
    cursor: ew-resize;
    z-index: 0;

    &::-webkit-slider-runnable-track {
      height: 100%;
      background: transparent;
    }

    &::-webkit-slider-thumb {
      appearance: none;
      width: 0;
      height: 0;
    }

    &::-moz-range-track {
      background: transparent;
    }

    &::-moz-range-thumb {
      width: 0;
      height: 0;
      border: none;
    }
  }
}
</style>
