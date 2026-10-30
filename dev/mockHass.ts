import {
  NumberFormat,
  TimeFormat,
  type CurrentUser,
  type HomeAssistant,
} from 'custom-card-helpers';
import type { HassEntities, HassEntity, HassServiceTarget } from 'home-assistant-js-websocket';
import { ref, shallowRef, type Ref } from 'vue';

export interface ServiceCall {
  time: string;
  domain: string;
  service: string;
  data?: Record<string, unknown>;
  target?: HassServiceTarget;
}

const toArray = (v: string | string[] | undefined) =>
  v === undefined ? [] : Array.isArray(v) ? v : [v];

/**
 * A fake `hass` object. Like the real one, every state change produces a NEW hass object
 * (and a new `states` object), so cards that rely on reference changes behave the same here.
 */
export function createMockHass(initial: HassEntities) {
  let states: HassEntities = structuredClone(initial);
  const calls = ref<ServiceCall[]>([]);

  function build(): HomeAssistant {
    return {
      states,
      user: { id: 'mock-user', name: 'Dev', is_admin: true } as unknown as CurrentUser,
      language: 'en',
      locale: {
        language: 'en',
        number_format: NumberFormat.language,
        time_format: TimeFormat.language,
      },
      themes: {
        default_theme: 'dark',
        themes: {},
      },
      callService,
      callWS: async (msg: unknown) => {
        console.info('[mock] callWS', msg);
        return undefined as never;
      },
    } as unknown as HomeAssistant;
  }

  const hass = shallowRef<HomeAssistant>(build()) as Ref<HomeAssistant>;
  const publish = () => (hass.value = build());

  function setEntity(id: string, patch: Partial<Pick<HassEntity, 'state' | 'attributes'>>) {
    const old = states[id];
    if (!old) return;
    const ts = new Date().toISOString();
    states = {
      ...states,
      [id]: {
        ...old,
        ...patch,
        last_changed:
          patch.state !== undefined && patch.state !== old.state ? ts : old.last_changed,
        last_updated: ts,
      },
    };
    publish();
  }

  function replaceAll(next: HassEntities) {
    states = structuredClone(next);
    publish();
  }

  /** Teach the mock more services here as your cards need them. */
  async function callService(
    domain: string,
    service: string,
    data: Record<string, unknown> = {},
    target: HassServiceTarget = {},
  ) {
    calls.value.unshift({ time: new Date().toLocaleTimeString(), domain, service, data, target });
    const ids = [
      ...toArray(target.entity_id),
      ...toArray(data.entity_id as string | string[] | undefined),
    ];
    let handled = false;

    for (const id of ids) {
      const e = states[id];
      if (!e) continue;
      const entityDomain = id.split('.')[0];
      if (domain !== 'homeassistant' && domain !== entityDomain) continue;

      if (service === 'toggle') {
        setEntity(id, { state: e.state === 'on' ? 'off' : 'on' });
        handled = true;
      } else if (service === 'turn_on') {
        const attributes = { ...e.attributes };
        if (typeof data.brightness_pct === 'number')
          attributes.brightness = Math.round(data.brightness_pct * 2.55);
        if (typeof data.brightness === 'number') attributes.brightness = data.brightness;
        setEntity(id, { state: 'on', attributes });
        handled = true;
      } else if (service === 'turn_off') {
        setEntity(id, { state: 'off' });
        handled = true;
      }
    }
    if (!handled)
      console.warn(`[mock] unhandled service call ${domain}.${service}`, { data, target });
  }

  return { hass, calls, setEntity, replaceAll };
}
