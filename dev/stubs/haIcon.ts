import 'iconify-icon'

customElements.define('ha-icon', class extends HTMLElement {
  static observedAttributes = ['icon']
  set icon(v: string) { this.setAttribute('icon', v) }
  attributeChangedCallback() {
    this.innerHTML = `<style>svg { height: 100%; width: 100%; }</style><iconify-icon height="100%" width="100%" icon="${this.getAttribute('icon')}"></iconify-icon>`
  }
})
