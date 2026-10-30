import type { HomeAssistant, LovelaceCardConfig, LovelaceCardEditor } from 'custom-card-helpers';
import { defineCustomElement, type Component, type DefineComponent } from 'vue';

interface SchemaEntry {
  name: string;
  type: 'grid' | 'entity';
  required?: boolean;
  selector?: { entity: unknown };
}
interface ConfigForm {
  schema: [];
}
export interface CardMeta {
  type: string;
  name: string;
  description?: string;
  stubConfig: Record<string, unknown>;
  validate?: (config: Record<string, unknown>) => void;

  getEntitySuggestion?: (hass: HomeAssistant, entityId: string) => Record<string, unknown> | null;

  getConfigForm?: () => any;
}

export const cardRegistry: CardMeta[] = [];

declare global {
  interface Window {
    customCards: LovelaceCardConfig[];
  }
}

export function defineHaCard(component: Component, meta: CardMeta) {
  const VueElement = defineCustomElement(component as DefineComponent);

  class LovelaceCard extends VueElement {
    setConfig(config: Record<string, unknown>) {
      if (!config) throw new Error('Invalid configuration');
      meta.validate?.(config);
      (this as unknown as { config: unknown }).config = config;
    }
    getCardSize() {
      return 2;
    }

    static getConfigForm() {
      return meta.getConfigForm?.();
    }

    static getStubConfig() {
      return meta.stubConfig;
    }
  }

  customElements.define(meta.type, LovelaceCard as unknown as CustomElementConstructor);

  window.customCards = window.customCards || [];
  window.customCards.push({
    type: meta.type,
    name: meta.name,
    description: meta.description,
    preview: false,
    getEntitySuggestion: meta.getEntitySuggestion,
  });
  cardRegistry.push(meta);
}
