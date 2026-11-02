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

const toggle = useTemplateRef('toggle');
const entity = useEntity(
  () => hass,
  () => config?.entity,
  () => config?.name,
);
const { isOn, brightness } = useLight(entity);

const formattedName = computed(() => {
  if (config?.name) return config.name;
  return entity.name.value;
});

const icon = computed(() => (entity.state.value ? stateIcon(entity.state.value) : undefined));

function moreInfo(e: Event) {
  if (!toggle.value) return;

  fireEvent(toggle.value, 'hass-more-info', { entityId: config!.entity });
}

onLongPress(toggle, (event) => moreInfo(event));
</script>
<template>
  <button :aria-checked="isOn" class="heike-toggle" @click="isOn = !isOn">
    <span class="icon">
      <ha-icon :icon="icon" />
    </span>

    <span class="label">{{ formattedName }}</span>
  </button>
</template>

<style scoped>
.heike-toggle {
  background: var(--ha-card-background, var(--card-background-color, #fff));
  color: var(--disabled-text-color);
  border-radius: var(--ha-card-border-radius, 12px);
  box-shadow: var(--ha-card-box-shadow, none);
  border-width: var(--ha-card-border-width, 1px);
  border-style: solid;
  border-color: var(--ha-card-border-color, var(--divider-color, #e0e0e0));
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
  align-items: center;
  min-block-size: 3.5rem;
  inline-size: 100%;
  box-sizing: border-box;
  font: inherit;
  text-align: start;
  padding: 0;
  margin: 0;
  cursor: pointer;
  transition:
    background-color 250ms ease,
    color 250ms ease;

  > .label {
    pointer-events: none;
    font-size: 0.875rem;
    font-weight: 600;
  }

  > .icon {
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
    background-color: var(--secondary-background-color);
    color: var(--disabled-text-color);
    transition:
      background-color 250ms ease,
      color 250ms ease;
  }

  &[aria-checked='true'] {
    background: var(--accent-color);
    color: var(--primary-text-color);

    > .icon {
      background: var(--secondary-background-color);
      color: var(--accent-color);
    }
  }
}
</style>
