<script setup lang="ts">
import { computed, ref, useTemplateRef, watch } from 'vue';
import { fireEvent, stateIcon, type HomeAssistant, computeState } from 'custom-card-helpers';
import { useEntity } from '@/composables/useEntity';
import { useLight } from '@/composables/useLight';
import { onLongPress } from '@vueuse/core';
import TileIcon from '@/components/TileIcon.vue';

interface Config {
  entity: string;
  name?: string;
  hidePercentage?: boolean;
}

const { config, hass } = defineProps<{ hass?: HomeAssistant; config?: Config }>();

const slider = useTemplateRef('slider');
const entity = useEntity(
  () => hass,
  () => config?.entity,
  () => config?.name,
);
const { rgbColor, brightness, isOn } = useLight(entity);

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

const state = computed(() => computeState(entity.state.value!));
</script>
<template>
  <label :aria-checked="isOn" class="card" :style="{ '--color': rgbCss }">
    <TileIcon @click="isOn = !isOn" :icon tag="button" :color="rgbCss" />

    <span class="label">
      {{ formattedName }}

      <template v-if="isOn && !config?.hidePercentage">
        <small v-if="localBrightness > 0">{{ localBrightness }}%</small>
        <small v-else>{{ state }}</small>
      </template>
    </span>

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
  font-family: var(--ha-font-family-body);
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
    > button {
      background-color: var(--secondary-background-color);
      color: var(--disabled-text-color);
    }
  }

  > * {
    z-index: 1;
  }

  > .label {
    display: grid;
    pointer-events: none;
    font-size: var(--ha-font-size-m);
    font-weight: 600;

    > small {
      font-size: 0.75rem;
      font-weight: 500;
      opacity: 0.75;
    }
  }

  > .fill {
    position: absolute;
    inset-block: 0;
    inset-inline-start: 0;
    width: calc(var(--value) * 1%);
    border-radius: inherit;
    background: var(--color);
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
