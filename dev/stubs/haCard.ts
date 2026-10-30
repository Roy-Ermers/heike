// Home Assistant ships <ha-card>; in the playground we provide a look-alike.
if (!customElements.get('ha-card')) {
  customElements.define(
    'ha-card',
    class extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({ mode: 'open' }).innerHTML = `
          <style>
            :host {
              display: block;
              background: var(--ha-card-background, var(--card-background-color, #fff));
              color: var(--primary-text-color);
              border-radius: var(--ha-card-border-radius, 12px);
              box-shadow: var(--ha-card-box-shadow, none);
              overflow: hidden;
            }
          </style>
          <slot></slot>`;
      }
    },
  );
}
