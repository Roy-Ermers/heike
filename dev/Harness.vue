<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import type { HassEntity } from 'home-assistant-js-websocket';
import { cardRegistry } from '../src/lib/defineHaCard';
import CardPreview from './CardPreview.vue';
import { defaultStates } from './fixtures';
import { createMockHass } from './mockHass';

const { hass, calls, setEntity } = createMockHass(defaultStates);

const selected = ref(cardRegistry[0]?.type ?? '');
const text = ref('');
const config = ref({});
const moreInfo = ref('');

watch(
  selected,
  (type) => {
    const stub = cardRegistry.find((c) => c.type === type)?.stubConfig;
    text.value = JSON.stringify({ type: `custom:${type}`, ...stub }, null, 2);
  },
  { immediate: true },
);

// keep the last valid config while mid-typing
watch(
  text,
  (value) => {
    try {
      config.value = JSON.parse(value);
    } catch {}
  },
  { immediate: true },
);

const toHex = (rgb: number[]) => '#' + rgb.map((n) => n.toString(16).padStart(2, '0')).join('');
const toRgb = (hex: string) => [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));

function setColor(e: HassEntity, ev: Event) {
  const rgb_color = toRgb((ev.target as HTMLInputElement).value);
  setEntity(e.entity_id, { attributes: { ...e.attributes, rgb_color } });
}
</script>

<template>
  <div class="shell">
    <aside>
      <select v-model="selected">
        <option v-for="c in cardRegistry" :key="c.type" :value="c.type">{{ c.name }}</option>
      </select>

      <textarea v-model="text" rows="8" spellcheck="false"></textarea>

      <div v-for="e in Object.values(hass.states)" :key="e.entity_id" class="entity">
        <code>{{ e.entity_id }}</code>
        <input
          v-if="e.attributes.rgb_color"
          type="color"
          :value="toHex(e.attributes.rgb_color)"
          @input="setColor(e, $event)"
        />
        <input
          :value="e.state"
          @change="setEntity(e.entity_id, { state: ($event.target as HTMLInputElement).value })"
        />
      </div>
      <button @click="calls = []">Clear</button>
      <pre><span v-for="call in calls" :key="call.time"><strong>{{call.domain}}.{{call.service}}</strong>
{{ JSON.stringify(call.data, null, 2)}}
<time>{{call.time}}</time>
<hr></span></pre>
    </aside>

    <main @hass-more-info="moreInfo = $event.detail.entityId">
      <CardPreview :tag="selected" :config="config" :hass="hass" />

      <dialog :open="!!moreInfo">
        <pre>{{ moreInfo }} {{ JSON.stringify(hass.states[moreInfo], null, 2) }}</pre>
        <button @click="moreInfo = ''">Close</button>
      </dialog>
    </main>
  </div>
</template>

<style scoped>
.shell {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  min-height: 100vh;
}

aside {
  min-width: 0;
  padding: 16px;
  display: grid;
  gap: 12px;
  align-content: start;
  border-right: 1px solid var(--divider-color);
}

main {
  padding: 32px;
}

textarea,
select {
  width: 100%;
  box-sizing: border-box;
}

textarea {
  font-family: monospace;
}

pre {
  margin: 0;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}

.entity {
  display: flex;
  justify-content: space-between;
  gap: 8px;
}

.entity code {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.entity input {
  flex: none;
  width: 90px;
}

.entity input[type='color'] {
  width: 32px;
  padding: 0;
}
</style>
