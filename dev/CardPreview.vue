<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import type { HomeAssistant } from 'custom-card-helpers'

const props = defineProps<{ tag: string; config: Record<string, unknown> | null; hass: HomeAssistant }>()

type CardEl = HTMLElement & { setConfig(c: unknown): void; hass?: HomeAssistant }
const host = ref<HTMLElement>()
const error = ref<string | null>(null)
let el: CardEl | null = null

// Mirrors Lovelace: a config change recreates the card (setConfig, then hass, then attach).
function mount() {
  unmount()
  error.value = null
  if (!host.value || !props.config) return
  try {
    el = document.createElement(props.tag) as CardEl
    el.setConfig(props.config)
    el.hass = props.hass
    host.value.appendChild(el)
  } catch (e) {
    error.value = e instanceof Error ? e.message : String(e)
    el = null
  }
}
function unmount() {
  el?.remove()
  el = null
}

watch(() => [props.tag, props.config], mount)
watch(
  () => props.hass,
  (h) => {
    if (el) el.hass = h
  },
)
onMounted(mount)
onBeforeUnmount(unmount)
</script>

<template>
  <div v-if="error" class="error">Configuration error: {{ error }}</div>
  <div ref="host"></div>
</template>

<style scoped>
.error {
  padding: 16px;
  border-radius: 12px;
  background: color-mix(in srgb, var(--error-color) 15%, var(--card-background-color));
  color: var(--error-color);
}
</style>
