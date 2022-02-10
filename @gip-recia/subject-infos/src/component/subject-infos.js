import { LitElement, html } from 'lit'
import { subjectInfosStyle } from './subject-infos-style.js'
import { subjectInfoLabel } from './subject-infos-label.js'
import { bootstrapStyle } from './bootstrap-style.js'

/**
 * Subject Infos component.
 */
export class SubjectInfos extends LitElement {

  static get styles() {
    return [
      subjectInfosStyle,
      bootstrapStyle
    ]
  }

  static get properties() {
    return {

      /**
       * Objet contenant les données à afficher.
       * @type {Object}
       */
      subject : { attribute: false},

      /**
       * Configuration du subject-infos.
       * @type {Object}
       */
      config: { attribute: false },

      /**
       * Fonction appelée au clic sur l'élément.
       * @type {Function}
       */
      onSubjectClicked: { attribute: false },

      /**
       * Propriété interne pour l'affichage et la manipulation de l'élément.
       * @type {Object}
       */
      _subject: { state: true },

      /**
       * Propriété interne pour stocker les labels affichés par le composant.
       * @type {Object}
       */
      _labels : { state: true },

      /**
       * Propriété interne pour stocker la langue.
       * @type {String}
       */
      _lang: { state: true },

      /**
       * Propriété interne pour stocker le tooltip.
       * @type {Object}
       */
      _tooltip: { state: true },

      /**
       * Propriété interne pour indiquer que le tooltip est en train de se fermer.
       * @type {Boolean}
       */
      _tooltipClosing: { state: true }
    }
  }

  constructor() {
    super()
    this._subject = null
    this._labels = subjectInfoLabel
    this._lang = 'fr'
    this._tooltip = null
    this._tooltipClosing = false
  }

  render() {
    var rendering = html``
    if (this._subject) {
      if ('modelId' in this._subject) {
        rendering = this._htmlFromDTO(this._subject)
      } else if ('keyType' in this._subject && 'keyId' in this._subject) {
        rendering = this._htmlFromKey(this._subject)
      } else if ('keyValue' in this._subject && 'keyAttribute' in this._subject && 'keyType' in this._subject) {
        rendering = this._htmlFromExtendedKey(this._subject)
      }
    }
    return html`
      <div class="subject-infos">
        <slot></slot>
        ${rendering}
      </div>
    `
  }

  updated(changedProperties){
    super.updated(changedProperties)
    
    let initDatas = false
    if (changedProperties) {
      changedProperties.forEach((value, key) => {
        if (key === 'subject' || key === 'config') {
          initDatas = true
        }
      })
    }
    if (initDatas) {
      this._labels = subjectInfoLabel
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
      // to resolve and complete subject
      if (this.config.getSubjectInfos && (!this._isDefined(this.config.resolveKey) || this.config.resolveKey)) {
        if (this._isDefined(this.subject) && this._isDefined(this.subject.modelId)
            && !this._isDefined(this.subject.attributes) && 'GROUP' !== this.subject.modelId.keyType) {
            // is DTO
            // On teste si on n'a pas déjà récupéré les infos
            if (this._subject === null || !this._isDefined(this._subject) || this.subject.modelId.keyType !== this._subject.modelId.keyType || this.subject.modelId.keyId !== this._subject.modelId.keyId) {
              this.config.getSubjectInfos(this.subject.modelId.keyType, this.subject.modelId.keyId).then(result => {
                this._subject = result
                this.requestUpdate()
              })
            } else {
              this.requestUpdate()
            }
        } else if (this._isDefined(this.subject) && 'keyType' in this.subject && 'keyId' in this.subject){
            // is key Id
            // On teste si on n'a pas déjà récupéré les infos
            if (this._subject === null || !this._isDefined(this._subject) || this.subject.keyType !== this._subject.modelId.keyType || this.subject.keyId !== this._subject.modelId.keyId) {
              this.config.getSubjectInfos(this.subject.keyType, this.subject.keyId).then(result => {
                this._subject = result
                this.requestUpdate()
              })
            } else {
              this.requestUpdate()
            }
        } else {
          this._subject = this.subject
          this.requestUpdate()
        }
      } else {
        this._subject = this.subject
        this.requestUpdate()
      }
    } else {
      if (!this._tooltip) {
        this._tooltip = this.shadowRoot.querySelector('#tooltip')
      }
      this._tooltipClosing = false
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
   * Retourne le html à afficher dans le contexte où l'attribut 'modelId'
   * est fournit dans le subject.
   *
   * @param {Object} subject Objet contenant les valeurs nécessaire à l'affichage
   * @returns Html à afficher
   */
  _htmlFromDTO(subject) {
    var displayName = ''
    var css
    var elem = html`<span class="icon-question subject-infos"></span>`
    var type = subject.modelId.keyType
    var id = subject.modelId.keyId
    var cssnotfound = ''
    switch (type) {
        case 'GROUP':
            css = 'icon-users subject-infos'
            break
        case 'PERSON':
            css = 'icon-user subject-infos'
            break
    }
    if (subject.foundOnExternalSource === true || (subject.displayName && subject.displayName.length > 0)) {
        displayName = subject.displayName
    } else {
        cssnotfound = 'icon-question'
    }
    if (css) {
        elem = html`
          <a href="" class="${css}" data-subject-id="${id}" @click="${(e) => this._onClick(e)}">
            <span class="${cssnotfound}" data-tooltip aria-describedby="tooltip" @mouseenter="${() => this._showToolTip()}" @mouseleave="${() => this._hideToolTip()}">
              ${displayName}
              ${this._renderToolTip(this._tooltipSubject(subject))}
            </span>
          </a>
        `
    }
    return elem
  }

  /**
   * Retourne le html à afficher dans le contexte où les attributs 'keyType' et 'keyId'
   * sont fournit dans le subject.
   *
   * @param {Object} subject Objet contenant les valeurs nécessaire à l'affichage
   * @returns Html à afficher
   */
  _htmlFromKey(subject) {
    var css
    var elem = html`<span class="icon-question subject-infos"></span>`
    var type = subject.keyType
    var id = subject.keyId
    switch (type) {
        case 'GROUP':
            css = 'icon-users subject-infos'
            break
        case 'PERSON':
            css = 'icon-user subject-infos'
            break
        default: throw 'Subject Type not managed and should not be tested :' + type
    }
    if (css) {
        elem = html`
          <a href="" class="${css}" data-subject-id="${id}" @click="${(e) => this._onClick(e)}">
            <span class="icon-question" data-tooltip aria-describedby="tooltip" @mouseenter="${() => this._showToolTip()}" @mouseleave="${() => this._hideToolTip()}">
              ${this._renderToolTip(this._tooltipSubject(subject))}
            </span>
          </a>
        `
    }
    return elem
  }

  /**
   * Retourne le html à afficher dans le contexte où les attributs 'keyValue', 'keyAttribute' et 'keyType'
   * sont fournit dans le subject.
   *
   * @param {Object} subject Objet contenant les valeurs nécessaire à l'affichage
   * @returns Html à afficher
   */
  _htmlFromExtendedKey(subject) {
    var css = "icon-users subject-infos"
    var elem = html`<span class="icon-question subject-infos"></span>`
    var type = subject.keyType
    var id = subject.keyValue
    var attr = subject.keyAttribute
    switch (type) {
        case 'GROUP':
        case 'PERSON':
            css = 'icon-user subject-infos'
            elem = html`
              <a href="" class="${css}" data-subject-id="${id}" @click="${(e) => this._onClick(e)}">
                <span class="icon-question" data-tooltip aria-describedby="tooltip" @mouseenter="${() => this._showToolTip()}" @mouseleave="${() => this._hideToolTip()}">
                  ${this._renderToolTip(this._tooltipSubject(subject))}
                </span>
              </a>`
            break
        case 'PERSON_ATTR':
        case 'PERSON_ATTR_REGEX':
            elem = html`<span class="${css}" data-subject-id="${id}"> ${attr + ' = "' + id + '"'}</span>`
            break
        default : throw 'Subject Type not managed :' + type
    }
    return elem
  }

  /**
   * Retourne le code HTML du tooltip.
   *
   * @param {String} tooltip Texte du tooltip
   * @returns Code HTML
   */
  _renderToolTip(tooltip) {
    if (tooltip && tooltip.length > 0) {
      return  html`
        <div class="tooltip fade bs-tooltip-top" id="tooltip" role="tooltip" style="display: none"
          @mouseover="${() => { this._hideToolTip() }}">
          <div class="tooltip-arrow"></div>
          <div class="tooltip-inner">${tooltip}</div>
        </div>
      `
    } else {
      return  html``
    }
  }

  /**
   * Méthode appelé au clic sur l'élément.
   *
   * @param {Object} event Evènement
   */
  _onClick(event) {
    event.preventDefault()
    event.stopPropagation()
    if (this.onSubjectClicked) {
      this.onSubjectClicked()
    }
  }

  /**
   * Méthode affichant le tooltip.
   */
  _showToolTip() {
    if (this._tooltip) {
      if (this._tooltipClosing) {
        setTimeout(() => this._showToolTip(), 50)
      } else {
        // Affichage et positionnement du tooltip
        this._tooltip.style.display = 'block'
        this._tooltip.style.width = 'max-content'
        if (this._tooltip.offsetWidth >= this._tooltip.parentNode.offsetWidth) {
          this._tooltip.style.left = '0px'
        } else {
          this._tooltip.style.left = Math.round(this._tooltip.parentNode.offsetWidth / 2) + 'px'
          this._tooltip.style.transform = 'translateX(-50%)'
        }
        this._tooltip.style.top = -(this._tooltip.offsetHeight + 1) + 'px'
        this._tooltip.classList.add('show')

        // Positionnement de la flèche
        const arrow = this._tooltip.querySelector('.tooltip-arrow')
        arrow.style.position = 'absolute'
        arrow.style.transform = 'translateX(-50%)'
        const left = Math.round(Math.min(this._tooltip.offsetWidth, this._tooltip.parentNode.offsetWidth) / 2)
        arrow.style.left = left + 'px'
      }
    }
  }

  /**
   * Méthode masquant le tooltip.
   */
  _hideToolTip() {
    if (this._tooltip && !this._tooltipClosing && this._tooltip.classList.contains('show')) {
      // Masquage du tooltip
      this._tooltip.classList.remove('show')

      this._tooltipClosing = true
      setTimeout(() => {
        this._tooltip.style.display = 'none'
        this._tooltipClosing = false
      }, 100)
    }
  }

  /**
   * Retourne le label à afficher dans le tooltip.
   *
   * @param {Object} subject Objet contenant les valeurs nécessaire à l'affichage
   * @returns Label à afficher dans le tooltip
   */
  _tooltipSubject(subject) {
    const userAttrs = this.config.userDisplayedAttrs || []
    if (!this._isDefined(userAttrs) || !this._isDefined(subject)) return ''
    if (this._isDefined(subject.keyId)) {
        return '\'' + subject.keyId + '\'' + this._getLabel('disappear')
    }
    if (!this._isDefined(subject.modelId)) return ''
    if (this._isDefined(subject.modelId) && subject.foundOnExternalSource !== true) {
        return '\'' + subject.modelId.keyId + '\'' + this._getLabel('disappear')
    }
    if (subject.modelId.keyType === 'GROUP') {
        return subject.modelId.keyId
    }
    if (!this._isDefined(subject.attributes)) return subject.modelId.keyId
    var index
    var attrs = subject.attributes
    var html = ''
    for (index = 0; index < userAttrs.length; ++index) {
      if (index > 0 && this._isDefined(attrs[userAttrs[index]]) && html !== '') {
          html += ' - '
      }
      if (this._isDefined(attrs[userAttrs[index]]) && Array.isArray(attrs[userAttrs[index]])) {
          var subIndex
          for (subIndex = 0; subIndex < attrs[userAttrs[index]].length; ++subIndex) {
              if (subIndex > 0) {
                  html += ', '
              }
              html += attrs[userAttrs[index]][subIndex]
          }
      } else if (this._isDefined(attrs[userAttrs[index]])) {
          html +=  attrs[userAttrs[index]]
      }
    }
    return html
  }

  /**
   * Retourne true si la valeur fournit est défini.
   *
   * @param {Object} value Objet à traiter
   * @returns True si l'objet est défini, False sinon
   */
  _isDefined(value) {
    return typeof value !== 'undefined'
  }
}

if (!customElements.get('esup-subject-infos')) {
  customElements.define('esup-subject-infos', SubjectInfos)
}
