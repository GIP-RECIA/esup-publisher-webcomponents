import { LitElement, html } from 'lit'
import { colorPaletteStyle } from './color-palette-style.js'
import { colorPaletteLabel } from './color-palette-label.js'
import { bootstrapStyle } from './bootstrap-style.js'

/**
 * Color Palette Picker component.
 */
export class ColorPalettePicker extends LitElement {
  static get styles() {
    return [colorPaletteStyle, bootstrapStyle]
  }

  static get properties() {
    return {
      /**
       * Couleur sélectionnée initialement.
       * @type {String}
       */
      color: { attribute: false },

      /**
       * Configuration du color picker.
       * @type {Object}
       */
      config: { attribute: false },

      /**
       * Fonction appelée au changement de couleur.
       * @type {Function}
       */
      onColorChanged: { attribute: false }
    }
  }

  constructor() {
    super()

    this._colorModal = null
    this._color = null
    this._originalColor = null
    this._labels = colorPaletteLabel
    this._lang = 'fr'
  }

  render() {
    // prettier-ignore
    return html`
      <div class="color-palette-picker">
        <div class="selected-color" tabindex="0" style="background-color: ${this._originalColor}" @click="${() => this._showModal()}"
        @keydown="${(e) => this._onKeyDownSelectedColor(e)}"></div>

        <div id="colorPaletteModal" class="modal fade" role="dialog" tabindex="-1" aria-hidden="true" aria-labelledby="modalTitle"
          @click="${(e) => this._onClickCancel(e)}">
          <div class="modal-dialog">
            <div class="modal-content" @click="${(e) => e.stopPropagation()}">
              <div class="modal-header">
                <h4 class="modal-title" id="modalTitle">${this._getLabel('select.color')}</h4>
                <button type="button" class="btn-close" aria-hidden="true" @click="${(e) => this._onClickCancel(e)}"></button>
              </div>
              <div class="modal-body">
                <div class="color-palette">
                  ${(this.config.colors || []).map((col) => {
                    return html`
                    <div tabindex="0" style="background-color: ${col}"
                      class="${col === this._color ? 'palette-selected-color' : ''} ${col === 'transparent' ? 'transparent-color' : ''}"
                      @click="${(e) => this._onClickColor(e, col)}" @keydown="${(e) => this._onKeyDownColor(e, col)}"></div>
                    </div>`
                  })}
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default btn-outline-dark" @click="${(e) => this._onClickCancel(e)}" >
                  <span class="icon icon-cancel" aria-hidden="true"></span>&nbsp;<span>${this._getLabel('cancel')}</span>
                </button>
                <button type="button" class="btn btn-primary" @click="${(e) => this._onClickValidate(e)}">
                  <span class="icon icon-validate" aria-hidden="true"></span>&nbsp;<span>${this._getLabel('validate')}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  }

  willUpdate(changedProperties) {
    super.willUpdate(changedProperties)

    // Si les propriétés color ou config sont modifiés, on initialise les éléments
    let initDatas = false
    if (changedProperties) {
      changedProperties.forEach((value, key) => {
        if (key === 'color' || key === 'config') {
          initDatas = true
        }
      })
    }

    if (initDatas) {
      // Initialisation des données
      this._color = this.color
      this._originalColor = this.color
      this._labels = colorPaletteLabel
      this._lang =
        this.config && this.config.lang ? this.config.lang : this._lang
      // Surcharge des labels
      if (this.config && this.config.labels) {
        Object.keys(this.config.labels).forEach(lang => {
          if (!Object.keys(this._labels).includes(lang)) {
            this._labels[lang] = this.config.labels[lang]
          } else {
            Object.keys(this.config.labels[lang]).forEach(key => {
              this._labels[lang][key] = this.config.labels[lang][key]
            })
          }
        })
      }
    }
  }

  updated(changedProperties) {
    super.updated(changedProperties)

    if (!this._colorModal) {
      this._colorModal = this.shadowRoot.querySelector('#colorPaletteModal')
    }
  }

  /**
   * Retourne un label dans la langue actuelle.
   *
   * @param {String} key Clé du label
   * @returns Label dans la langue actuelle
   */
  _getLabel(key) {
    return this._labels[this._lang][key]
  }

  /**
   * Méthode affichant la modal de sélection des couleurs.
   */
  _showModal() {
    // Add backdrop
    let backdrop = this.shadowRoot.querySelector('.modal-backdrop')
    if (!backdrop) {
      const backdrop = document.createElement('div')
      backdrop.className = 'modal-backdrop fade'
      this.shadowRoot.append(backdrop)
      backdrop.offsetHeight
      backdrop.classList.add('show')
    }

    // Show modal
    this._colorModal.style.display = 'block'
    this._colorModal.removeAttribute('aria-hidden')
    this._colorModal.setAttribute('aria-modal', true)
    this._colorModal.setAttribute('role', 'dialog')
    this._colorModal.scrollTop = 0
    this._colorModal.querySelector('.modal-body').scrollTop = 0
    this._colorModal.offsetHeight
    this._colorModal.classList.add('show')
    this._colorModal.focus()
  }

  /**
   * Méthode masquant la modal de sélection des couleurs.
   */
  _hideModal() {
    // Hide modal
    this._colorModal.classList.remove('show')
    this._colorModal.setAttribute('aria-hidden', true)
    this._colorModal.removeAttribute('aria-modal')
    this._colorModal.removeAttribute('role')
    setTimeout(() => {
      this._colorModal.style.display = 'none'

      // Remove backdrop
      const backdrop = this.shadowRoot.querySelector('.modal-backdrop')
      backdrop.classList.remove('show')
      setTimeout(() => {
        backdrop.remove()
      }, 200)
    }, 200)
  }

  /**
   * Méthode appelé à la navigation au clavier sur la couleur sélectioonée.
   *
   * @param {Object} event Evènement
   */
  _onKeyDownSelectedColor(event) {
    if (event.keyCode === 13 || event.keyCode === 32) {
      // Touche Entrée ou Espace
      this._showModal()
      event.stopPropagation()
    }
  }

  /**
   * Méthode appelé à la navigation au clavier dan les couleurs sélectionnables.
   *
   * @param {Object} event Evènement
   */
  _onKeyDownColor(event, color) {
    if (event.keyCode === 13 || event.keyCode === 32) {
      // Touche Entrée ou Espace
      this._onClickColor(event, color)
    }
  }

  /**
   * Méthode appelé au clic sur une couleur.
   *
   * @param {Object} event Evènement
   * @param {Object} color Couleur cliquée
   */
  _onClickColor(event, color) {
    event.stopPropagation()
    this._color = color
    this.requestUpdate()
  }

  /**
   * Méthode appelé au clic sur le bouton annuler et de fermeture de la modal.
   *
   * @param {Object} event Evènement
   */
  _onClickCancel(event) {
    event.stopPropagation()
    this._hideModal()
    this._color = this._originalColor
    this.requestUpdate()
  }

  /**
   * Méthode appelé au clic sur le bouton valider.
   *
   * @param {Object} event Evènement
   */
  _onClickValidate(event) {
    event.stopPropagation()
    this._hideModal()
    this._originalColor = this._color

    this.requestUpdate()

    if (this.onColorChanged) {
      this.onColorChanged(this._color)
    }
  }
}

if (!customElements.get('esup-color-palette-picker')) {
  customElements.define('esup-color-palette-picker', ColorPalettePicker)
}
