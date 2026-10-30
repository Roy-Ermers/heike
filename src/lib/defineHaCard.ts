import type { LovelaceCardConfig } from 'custom-card-helpers';
import { defineCustomElement, type Component, type DefineComponent } from 'vue'

export interface CardMeta {
  type: string
  name: string
  description?: string
  stubConfig: Record<string, unknown>
  validate?: (config: Record<string, unknown>) => void
}

export const cardRegistry: CardMeta[] = []

declare global {
  interface Window {
    customCards: LovelaceCardConfig[]
  }
}


export function defineHaCard(component: Component, meta: CardMeta) {
  const VueElement = defineCustomElement(component as DefineComponent)

  class LovelaceCard extends VueElement {
    setConfig(config: Record<string, unknown>) {
      if (!config) throw new Error('Invalid configuration')
      meta.validate?.(config)
        ; (this as unknown as { config: unknown }).config = config
    }
    getCardSize() {
      return 2
    }
    static getStubConfig() {
      return meta.stubConfig
    }
  }

  customElements.define(meta.type, LovelaceCard as unknown as CustomElementConstructor)

  window.customCards = window.customCards || []
  window.customCards.push({ type: meta.type, name: meta.name, description: meta.description, preview: true })
  cardRegistry.push(meta)
}
