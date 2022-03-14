import { LitElement, html, css } from 'lit'
import { evaluatorStyle } from './evaluator-style.js'
import { evaluatorLabel } from './evaluator-label.js'
import { Localization } from '@gip-recia/esup-publisher-webcomponents-utils'

/**
 * Evaluator component.
 */
export class Evaluator extends LitElement {
  static get styles() {
    return [
      evaluatorStyle,
      css`
        :host > ul {
          padding: 0;
          margin: 0;
        }
      `
    ]
  }

  static get properties() {
    return {
      /**
       * Objet contenant les données à afficher.
       * @type {Object}
       */
      evaluator: { attribute: false },

      /**
       * Indique si on utilise l'affichage simple ou non
       * @type {Boolean}
       */
      simple: { attribute: false },

      /**
       * Indique si l'élément est affiché dans une liste ou non
       * @type {Boolean}
       */
      isChild: { attribute: false },

      /**
       * Configuration de l'évaluateur.
       * @type {Object}
       */
      config: { attribute: false }
    }
  }

  constructor() {
    super()
    this._localization = new Localization(evaluatorLabel, 'fr')
  }

  render() {
    var rendering = html``
    if (this.evaluator && this.evaluator.class) {
      switch (this.evaluator.class) {
        case 'OPERATOR':
          if (this.simple) {
            // prettier-ignore
            rendering = html`<esup-simple-evaluators .collection="${this.evaluator.evaluators}" .config="${this.config}"></esup-simple-evaluators>`
            if (this.isChild || this.evaluator.type !== 'OR') {
              // prettier-ignore
              rendering = html`<span>${this._localization.getLabel('forAdvancedOnly')}</span>`
            }
          } else {
            // prettier-ignore
            rendering = html`<span>${this.evaluator.type}</span><esup-evaluators .collection="${this.evaluator.evaluators}" .config="${this.config}"></esup-evaluators>`
          }
          if (!(this.isChild || this.simple)) {
            // prettier-ignore
            rendering = html`<ul class="evaluator"><li>${rendering}</li></ul>`
          }
          break
        case 'AUTHENTICATED':
          if (!this.simple) {
            // prettier-ignore
            rendering = html`<span>${this._localization.getLabel('authenticatedUsers.text')}</span>`
          } else {
            // prettier-ignore
            rendering = html`<span>${this._localization.getLabel('forAdvancedOnly')}</span>`
          }
          break
        case 'USERATTRIBUTES':
        case 'USERMULTIVALUEDATTRIBUTES':
          if (
            this.evaluator.attribute === 'uid' &&
            this.evaluator.mode === 'EQUALS'
          ) {
            const userModelId = {
              keyType: 'PERSON',
              keyId: this.evaluator.value
            }
            if (!this.simple) {
              // prettier-ignore
              rendering = html`<esup-subject-infos .subject="${userModelId}" .config="${this.config}"><span>${this._localization.getLabel('userAttribute.subjetIs')}</span></esup-subject-infos>`
            } else {
              // prettier-ignore
              rendering = html`<esup-subject-infos .subject="${userModelId}" .config="${this.config}"></esup-subject-infos>`
            }
          } else {
            if (!this.simple) {
              // prettier-ignore
              rendering = html`
                <span>${this._localization.getLabel('userAttribute.attribute', { attribute: this.evaluator.attribute })}</span>
                <span>${this._localization.getLabel('userAttribute.mode', { mode: this.evaluator.mode })}</span>
                <span>${this._localization.getLabel('userAttribute.value', { value: this.evaluator.value })}</span>
              `
            } else {
              // prettier-ignore
              rendering = html`<span>${this._localization.getLabel('forAdvancedOnly')}</span>`
            }
          }
          break
        case 'USERGROUP': {
          const groupModelId = { keyType: 'GROUP', keyId: this.evaluator.group }
          if (!this.simple) {
            // prettier-ignore
            rendering = html`<esup-subject-infos .subject="${groupModelId}" .config="${this.config}"><span>${this._localization.getLabel('userGroup.memberOf')}</span></esup-subject-infos>`
          } else {
            // prettier-ignore
            rendering = html`<esup-subject-infos .subject="${groupModelId}" .config="${this.config}"></esup-subject-infos>`
          }
          break
        }
        default:
          break
      }
    }
    return rendering
  }

  willUpdate(changedProperties) {
    super.willUpdate(changedProperties)

    // Si la propriété config est modifiée, on initialise les éléments
    let initDatas = false
    if (changedProperties) {
      initDatas = changedProperties.has('config')
    }

    if (initDatas) {
      // Initialisation des données
      this._localization.labels = evaluatorLabel
      this._localization.lang = this.config && this.config.lang ? this.config.lang : this._localization.lang
      // Surcharge des labels
      if (this.config && this.config.labels) {
        this._localization.mergeLabels(this.config.labels)
      }
    }
  }
}

if (!customElements.get('esup-evaluator')) {
  customElements.define('esup-evaluator', Evaluator)
}
