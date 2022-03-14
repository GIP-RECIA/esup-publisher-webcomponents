import { LitElement, html } from 'lit'
import { classMap } from 'lit/directives/class-map.js'
import { subjectInfosStyle } from './subject-infos-style.js'
import { subjectInfoLabel } from './subject-infos-label.js'
import { Localization, ToolTip, Utils, bootstrapToolTipStyle } from '@gip-recia/esup-publisher-webcomponents-utils'

/**
 * Subject Infos component.
 */
export class SubjectInfos extends LitElement {
  static get styles() {
    return [subjectInfosStyle, bootstrapToolTipStyle]
  }

  static get properties() {
    return {
      /**
       * Objet contenant les données à afficher.
       * @type {Object}
       */
      subject: { attribute: false },

      /**
       * Configuration du subject-infos.
       * @type {Object}
       */
      config: { attribute: false },

      /**
       * Fonction appelée au clic sur l'élément.
       * @type {Function}
       */
      onSubjectClicked: { attribute: false }
    }
  }

  constructor() {
    super()
    this._subject = null
    this._localization = new Localization(subjectInfoLabel, 'fr')
    this._tooltip = new ToolTip()
  }

  render() {
    var rendering = html``
    if (this._subject) {
      if ('modelId' in this._subject) {
        rendering = this._htmlFromDTO(this._subject)
      } else if ('keyType' in this._subject && 'keyId' in this._subject) {
        rendering = this._htmlFromKey(this._subject)
      } else if (
        'keyValue' in this._subject &&
        'keyAttribute' in this._subject &&
        'keyType' in this._subject
      ) {
        rendering = this._htmlFromExtendedKey(this._subject)
      }
    }
    // prettier-ignore
    return html`
      <div class="subject-infos">
        <slot></slot>
        ${rendering}
      </div>
    `
  }

  willUpdate(changedProperties) {
    super.willUpdate(changedProperties)

    // Si les propriétés subject ou config sont modifiées, on initialise les éléments
    let initDatas = false
    if (changedProperties) {
      initDatas =
        changedProperties.has('subject') || changedProperties.has('config')
    }
    if (initDatas) {
      this._localization.labels = subjectInfoLabel
      this._localization.lang = this.config && this.config.lang ? this.config.lang : this._localization.lang
      // Surcharge des labels
      if (this.config && this.config.labels) {
        this._localization.mergeLabels(this.config.labels)
      }
      // to resolve and complete subject
      if (
        this.config.getSubjectInfos &&
        (!Utils.isDefined(this.config.resolveKey) || this.config.resolveKey)
      ) {
        if (
          Utils.isDefined(this.subject) &&
          Utils.isDefined(this.subject.modelId) &&
          !Utils.isDefined(this.subject.attributes) &&
          'GROUP' !== this.subject.modelId.keyType
        ) {
          // is DTO
          // On teste si on n'a pas déjà récupéré les infos
          if (
            this._subject === null ||
            !Utils.isDefined(this._subject) ||
            this.subject.modelId.keyType !== this._subject.modelId.keyType ||
            this.subject.modelId.keyId !== this._subject.modelId.keyId
          ) {
            this.config
              .getSubjectInfos(
                this.subject.modelId.keyType,
                this.subject.modelId.keyId
              )
              .then(result => {
                this._subject = result
                this.requestUpdate()
              })
          }
        } else if (
          Utils.isDefined(this.subject) &&
          'keyType' in this.subject &&
          'keyId' in this.subject
        ) {
          // is key Id
          // On teste si on n'a pas déjà récupéré les infos
          if (
            this._subject === null ||
            !Utils.isDefined(this._subject) ||
            this.subject.keyType !== this._subject.modelId.keyType ||
            this.subject.keyId !== this._subject.modelId.keyId
          ) {
            this.config
              .getSubjectInfos(this.subject.keyType, this.subject.keyId)
              .then(result => {
                this._subject = result
                this.requestUpdate()
              })
          }
        } else {
          this._subject = this.subject
        }
      } else {
        this._subject = this.subject
      }
    }
  }

  updated(changedProperties) {
    super.updated(changedProperties)

    this._tooltip.updateToolTip(this.shadowRoot)
  }

  /**
   * Retourne le html à afficher dans le contexte où l'attribut 'modelId'
   * est fournit dans le subject.
   *
   * @param {Object} subject Objet contenant les valeurs nécessaire à l'affichage
   * @returns Html à afficher
   */
  _htmlFromDTO(subject) {
    const type = subject.modelId.keyType
    if (['PERSON', 'GROUP'].includes(type)) {
      const isFound =
        subject.foundOnExternalSource === true ||
        (subject.displayName && subject.displayName.length > 0)
      const cssLink = {
        'icon-users': type === 'GROUP',
        'icon-user': type === 'PERSON'
      }
      const cssSpan = {
        'icon-question': !isFound
      }
      // prettier-ignore
      return html`
        <a href="" class="subject-infos ${classMap(cssLink)}" data-subject-id="${subject.modelId.keyId}" @click="${(e) => this._onClick(e)}">
          <span class="${classMap(cssSpan)}" data-tooltip aria-describedby="tooltip" @mouseenter="${() => this._tooltip.showToolTip()}" @mouseleave="${() => this._tooltip.hideToolTip()}">
            ${isFound ? subject.displayName : ''}
            ${this._tooltip.renderToolTip(this._tooltipSubject(subject))}
          </span>
        </a>
      `
    } else {
      // prettier-ignore
      return html`<span class="icon-question subject-infos"></span>`
    }
  }

  /**
   * Retourne le html à afficher dans le contexte où les attributs 'keyType' et 'keyId'
   * sont fournit dans le subject.
   *
   * @param {Object} subject Objet contenant les valeurs nécessaire à l'affichage
   * @returns Html à afficher
   */
  _htmlFromKey(subject) {
    const type = subject.keyType
    if (['PERSON', 'GROUP'].includes(type)) {
      const cssLink = {
        'icon-users': type === 'GROUP',
        'icon-user': type === 'PERSON'
      }
      // prettier-ignore
      return html`
        <a href="" class="subject-infos ${classMap(cssLink)}" data-subject-id="${subject.keyId}" @click="${(e) => this._onClick(e)}">
          <span class="icon-question" data-tooltip aria-describedby="tooltip" @mouseenter="${() => this._tooltip.showToolTip()}" @mouseleave="${() => this._tooltip.hideToolTip()}">
            ${this._tooltip.renderToolTip(this._tooltipSubject(subject))}
          </span>
        </a>
      `
    } else {
      throw new Error(
        'Subject Type not managed and should not be tested :' + type
      )
    }
  }

  /**
   * Retourne le html à afficher dans le contexte où les attributs 'keyValue', 'keyAttribute' et 'keyType'
   * sont fournit dans le subject.
   *
   * @param {Object} subject Objet contenant les valeurs nécessaire à l'affichage
   * @returns Html à afficher
   */
  _htmlFromExtendedKey(subject) {
    var elem = null
    const type = subject.keyType
    const id = subject.keyValue
    const attr = subject.keyAttribute
    switch (type) {
      case 'GROUP':
      case 'PERSON':
        // prettier-ignore
        elem = html`
          <a href="" class="subject-infos icon-user" data-subject-id="${id}" @click="${(e) => this._onClick(e)}">
            <span class="icon-question" data-tooltip aria-describedby="tooltip" @mouseenter="${() => this._tooltip.showToolTip()}" @mouseleave="${() => this._tooltip.hideToolTip()}">
              ${this._tooltip.renderToolTip(this._tooltipSubject(subject))}
            </span>
          </a>`
        break
      case 'PERSON_ATTR':
      case 'PERSON_ATTR_REGEX':
        // prettier-ignore
        elem = html`<span class="subject-infos icon-users" data-subject-id="${id}"> ${attr + ' = "' + id + '"'}</span>`
        break
      default:
        throw new Error('Subject Type not managed :' + type)
    }
    return elem
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
   * Retourne le label à afficher dans le tooltip.
   *
   * @param {Object} subject Objet contenant les valeurs nécessaire à l'affichage
   * @returns Label à afficher dans le tooltip
   */
  _tooltipSubject(subject) {
    const userAttrs = this.config.userDisplayedAttrs || []
    if (!Utils.isDefined(userAttrs) || !Utils.isDefined(subject)) return ''
    if (Utils.isDefined(subject.keyId)) {
      return "'" + subject.keyId + "'" + this._localization.getLabel('disappear')
    }
    if (!Utils.isDefined(subject.modelId)) return ''
    if (
      Utils.isDefined(subject.modelId) &&
      subject.foundOnExternalSource !== true
    ) {
      return "'" + subject.modelId.keyId + "'" + this._localization.getLabel('disappear')
    }
    if (subject.modelId.keyType === 'GROUP') {
      return subject.modelId.keyId
    }
    if (!Utils.isDefined(subject.attributes)) return subject.modelId.keyId
    var index
    var attrs = subject.attributes
    var resHtml = ''
    for (index = 0; index < userAttrs.length; ++index) {
      if (
        index > 0 &&
        Utils.isDefined(attrs[userAttrs[index]]) &&
        resHtml !== ''
      ) {
        resHtml += ' - '
      }
      if (
        Utils.isDefined(attrs[userAttrs[index]]) &&
        Array.isArray(attrs[userAttrs[index]])
      ) {
        var subIndex
        for (
          subIndex = 0;
          subIndex < attrs[userAttrs[index]].length;
          ++subIndex
        ) {
          if (subIndex > 0) {
            resHtml += ', '
          }
          resHtml += attrs[userAttrs[index]][subIndex]
        }
      } else if (Utils.isDefined(attrs[userAttrs[index]])) {
        resHtml += attrs[userAttrs[index]]
      }
    }
    return resHtml
  }
}

if (!customElements.get('esup-subject-infos')) {
  customElements.define('esup-subject-infos', SubjectInfos)
}
