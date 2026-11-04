<script setup lang="ts">
export interface Props {
  tag?: keyof HTMLElementTagNameMap;
  icon: string;
  color?: string;
}

const { tag = 'span' } = defineProps<Props>();
</script>
<template>
  <component :is="tag" class="tile-icon" :style="{ '--color': color }" :data-color="!!color">
    <ha-icon :icon />
  </component>
</template>

<style scoped>
.tile-icon {
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
  background-color: rgb(from var(--state-inactive-color) r g b / 0.2);
  color: var(--state-inactive-color);
  transition:
    background-color 250ms ease,
    color 250ms ease;

  &:is(button) {
    cursor: pointer;
  }

  &[data-color='true'] {
    background-color: rgb(from var(--secondary-background-color) r g b / 0.9);
    color: var(--color);
  }
}
</style>
