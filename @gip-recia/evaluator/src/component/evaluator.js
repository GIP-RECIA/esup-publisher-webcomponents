import { LitElement, html, css } from 'lit'
import { evaluatorStyle } from './evaluator-style.js'
import { evaluatorLabel } from './evaluator-label.js'

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
      config: { attribute: false },

      /**
       * Propriété interne pour stocker les labels affichés par le composant.
       * @type {Object}
       */
      _labels : { state: true },

      /**
       * Propriété interne pour stocker la langue.
       * @type {String}
       */
      _lang: { state: true }
    }
  }

  constructor() {
    super()
    this._labels = evaluatorLabel
    this._lang = 'fr'
  }

  render() {
    var rendering = html``
    if (this.evaluator && this.evaluator.class) {
      switch (this.evaluator.class) {
        case 'OPERATOR':
          if (this.simple) {
            rendering = html`<esup-simple-evaluators .collection="${this.evaluator.evaluators}" .config="${this.config}"></esup-simple-evaluators>`
            if (this.isChild || this.evaluator.type !== 'OR') {
              rendering = html`<span>${this._getLabel('forAdvancedOnly')}</span>`
            }
          } else {
            rendering = html`<span>${this.evaluator.type}</span><esup-evaluators .collection="${this.evaluator.evaluators}" .config="${this.config}"></esup-evaluators>`
          }
          if (!(this.isChild || this.simple)) {
            rendering = html`<ul class="evaluator"><li>${rendering}</li></ul>`
          }
          break
        case 'AUTHENTICATED':
          if (!this.simple) {
            rendering = html`<span>${this._getLabel('authenticatedUsers.text')}</span>`
          } else {
            rendering = html`<span>${this._getLabel('forAdvancedOnly')}</span>`
          }
          break
        case 'USERATTRIBUTES':
        case 'USERMULTIVALUEDATTRIBUTES':
          if (this.evaluator.attribute === 'uid' && this.evaluator.mode === 'EQUALS') {
            const userModelId = { keyType: 'PERSON', keyId: this.evaluator.value }
            if (!this.simple) {
              rendering = html`<esup-subject-infos .subject="${userModelId}" .config="${this.config}"><span>${this._getLabel('userAttribute.subjetIs')}</span></esup-subject-infos>`
            } else {
              rendering = html`<esup-subject-infos .subject="${userModelId}" .config="${this.config}"></esup-subject-infos>`
            }
          } else {
            if (!this.simple) {
              rendering = html`
                <span>${this._getLabel('userAttribute.attribute', { attribute: this.evaluator.attribute })}</span>
                <span>${this._getLabel('userAttribute.mode', { mode: this.evaluator.mode })}</span>
                <span>${this._getLabel('userAttribute.value', { value: this.evaluator.value })}</span>
              `
            } else {
              rendering = html`<span>${this._getLabel('forAdvancedOnly')}</span>`
            }
          }
          break
        case 'USERGROUP': {
          const groupModelId = { keyType: 'GROUP', keyId: this.evaluator.group }
          if (!this.simple) {
            rendering = html`<esup-subject-infos .subject="${groupModelId}" .config="${this.config}"><span>${this._getLabel('userGroup.memberOf')}</span></esup-subject-infos>`
          } else {
            rendering = html`<esup-subject-infos .subject="${groupModelId}" .config="${this.config}"></esup-subject-infos>`
          }
          break
        }
        default:
          break;
      }
    }
    return rendering
  }

  updated(changedProperties){
    super.updated(changedProperties)

    // Si les propriétés datas ou config sont modifiés, on initialise les éléments
    let initDatas = false
    if (changedProperties) {
      changedProperties.forEach((value, key) => {
        if (key === 'config') {
          initDatas = true
        }
      })
    }

    if (initDatas) {
      // Initialisation des données
      this._labels = evaluatorLabel
      this._lang = this.config && this.config.lang ? this.config.lang : this._lang
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

      this.requestUpdate()
    }
  }

  /**
   * Retourne un label dans la langue actuelle.
   *
   * @param {String} key Clé du label
   * @returns Label dans la langue actuelle
   */
  _getLabel(key, params) {
    var label = this._labels[this._lang][key]
    if (params) {
      label = label.replace(/{(.+)}/g, function(match, param) { 
        return typeof params[param] != 'undefined'
          ? params[param] 
          : match
      })
    }
    return label
  }
}

if (!customElements.get('esup-evaluator')) {
  customElements.define('esup-evaluator', Evaluator)
}
