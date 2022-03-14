import { html } from 'lit'

/**
 * Classe permettant de gérer l'affichage d'un ToolTip.
 */
export class ToolTip {

  /**
   * Constructeur avec argument.
   *
   * @param {String} id Identifiant HTML du ToolTip
   */
  constructor(id) {
    this.id = id || 'tooltip'
    this.tooltip = null
    this.tooltipClosing = false
  }

  /**
   * Mise à jour du tooltip.
   *
   * @param {Object} shadowRoot ShadowRoot du Lit-Element parent
   */
  updateToolTip(shadowRoot) {
    this.tooltip = shadowRoot.querySelector('#' + this.id)
    this.tooltipClosing = false
  }

  /**
   * Retourne le code HTML du tooltip.
   *
   * @param {String} tooltip Texte du tooltip
   * @returns Code HTML
   */
  renderToolTip(tooltip) {
    if (tooltip && tooltip.length > 0) {
      // prettier-ignore
      return html`
        <div class="tooltip fade bs-tooltip-top" id="${this.id}" role="tooltip" style="display: none"
          @mouseover="${() => { this.hideToolTip() }}">
          <div class="tooltip-arrow"></div>
          <div class="tooltip-inner">${tooltip}</div>
        </div>
      `
    } else {
      return html``
    }
  }

  /**
   * Méthode affichant le tooltip.
   */
  showToolTip() {
    if (this.tooltip) {
      if (this.tooltipClosing) {
        setTimeout(() => this.showToolTip(), 50)
      } else {
        // Affichage et positionnement du tooltip
        this.tooltip.style.display = 'block'
        this.tooltip.style.width = 'max-content'
        if (this.tooltip.offsetWidth >= this.tooltip.parentNode.offsetWidth) {
          this.tooltip.style.left = '0px'
          this.tooltip.style.transform = 'none'
        } else {
          this.tooltip.style.left =
            Math.round(this.tooltip.parentNode.offsetWidth / 2) + 'px'
          this.tooltip.style.transform = 'translateX(-50%)'
        }
        this.tooltip.style.top = -(this.tooltip.offsetHeight + 1) + 'px'
        this.tooltip.classList.add('show')

        // Positionnement de la flèche
        const arrow = this.tooltip.querySelector('.tooltip-arrow')
        arrow.style.position = 'absolute'
        arrow.style.transform = 'translateX(-50%)'
        const left = Math.round(
          Math.min(
            this.tooltip.offsetWidth,
            this.tooltip.parentNode.offsetWidth
          ) / 2
        )
        arrow.style.left = left + 'px'
      }
    }
  }

  /**
   * Méthode masquant le tooltip.
   */
  hideToolTip() {
    if (
      this.tooltip &&
      !this.tooltipClosing &&
      this.tooltip.classList.contains('show')
    ) {
      // Masquage du tooltip
      this.tooltip.classList.remove('show')

      this.tooltipClosing = true
      setTimeout(() => {
        this.tooltip.style.display = 'none'
        this.tooltipClosing = false
      }, 100)
    }
  }
}
