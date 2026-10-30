<script setup lang="ts">
import { computed, ref } from 'vue'
import { computeIcon, computeName, fireEvent, stateIcon, turnOnOffEntity, type HomeAssistant, type LovelaceCardConfig } from "custom-card-helpers";

interface Config {
  entity: string
  name?: string
}

const { config, hass } = defineProps<{ hass?: HomeAssistant; config?: Config }>()

const state = computed(() => (config?.entity ? hass?.states[config.entity] : undefined))

const name = computed(
  () => {
    if (config?.name)
      return config.name;


    if (state.value) return computeName(state.value)
  })

const rgb = computed(() =>
  `rgb(${state.value?.attributes.rgb_color.join()})`
)

const brightness = computed({
  get: () => {
    if (isOn.value)
      return Math.round(((state.value?.attributes.brightness ?? 0) / 255) * 100);
    return 0;
  },
  set: value => {
    if (!config) return
    if (value === 0) {
      hass?.callService('light', 'turn_off', { entity_id: config!.entity })

    } else
      hass?.callService('light', 'turn_on', { entity_id: config!.entity, brightness_pct: value })
  }
})

const icon = computed(() => state.value ? stateIcon(state.value) : undefined);

const isOn = computed({
  get: () => state.value?.state === 'on',
  set: value => {
    if (hass && config)
      turnOnOffEntity(hass, config?.entity, value);
  }
})

function moreInfo(e: Event) {
  if (!config) return

  fireEvent(e.currentTarget as HTMLElement, 'hass-more-info', { entityId: config.entity })
}
</script>
<template>
  <label :aria-label="name" :aria-checked="isOn" v-if="state" class="card" :style="{ '--rgb': rgb }">
    <button @click="moreInfo">
      <ha-icon :icon="icon" />
    </button>
    <span>{{ name }}</span>
    <div class="fill" :style="{ '--value': brightness }" />
    <input type="range" min="0" max="100" v-model.number="brightness" step="1" />
  </label>
</template>

<style scoped>
.card {
  background: var(--ha-card-background, var(--card-background-color, #fff));
  color: var(--primary-text-color);
  color: contrast-color(var(--rgb));
  border-radius: var(--ha-card-border-radius, 12px);
  box-shadow: var(--ha-card-box-shadow, none);
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

  &[aria-checked="false"] {
    color: var(--disabled-text-color);
  }

  >* {
    z-index: 1;
  }

  >span {
    pointer-events: none;
    font-size: 0.875rem;
    font-weight: 600;
  }

  >button {
    aspect-ratio: 1;
    block-size: 3rem;
    margin-inline-start: 0.5rem;
    border: none;
    border-radius: 100%;
    background-color: var(--secondary-background-color);
    display: grid;
    place-content: center;

    >ha-icon {
      block-size: 1.5rem;
      inline-size: 1.5rem;
    }
  }

  >.fill {
    position: absolute;
    inset-block: 0;
    inset-inline-start: 0;
    width: calc(var(--value) * 1%);
    border-radius: inherit;
    background: var(--rgb);
    z-index: 0;
    transition: width 50ms ease;
  }

  >input[type='range'] {
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
