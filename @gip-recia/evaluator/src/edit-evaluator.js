import { LitElement, html, css } from 'lit'
import { editEvaluatorStyle } from './edit-evaluator-style.js'
import { editEvaluatorLabel } from './edit-evaluator-label.js'
import { bootstrapStyle } from './bootstrap-style.js'

/**
 * Edit Evaluator component.
 */
export class EditEvaluator extends LitElement {
  static get styles() {
    return [
      editEvaluatorStyle,
      bootstrapStyle,
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
       * Objet contenant les données à éditer.
       * @type {Object}
       */
      evaluator: { attribute: false },

      /**
       * Indique si l'élément est affiché dans une liste ou non
       * @type {Boolean}
       */
      isChild: { attribute: false },

      /**
       * Configuration de l'edit-evaluator.
       * @type {Object}
       */
      config: { attribute: false },

      /**
       * Fonction appelée à la modification de l'évaluateur.
       * @type {Function}
       */
      onModification: { attribute: false }
    }
  }

  constructor() {
    super()
    this._evaluator = undefined
    this._labels = editEvaluatorLabel
    this._lang = 'fr'
    this._tooltip = null
    this._tooltipClosing = false
    this._dropdown = null
    this._userAttributes = []
  }

  render() {
    var rendering = html``
    if (
      this._isDefined(this.config.operators) &&
      this._isDefined(this.config.stringEvaluators) &&
      this._isDefined(this._userAttributes) &&
      this._isDefined(this._evaluator) &&
      this._isDefined(this._evaluator.class)
    ) {
      switch (this._evaluator.class) {
        case 'OPERATOR':
          if (this.isChild) {
            // prettier-ignore
            rendering = html`
              <div class="row g-1 align-items-center">
                <div class="col-auto">
                  <div class="row g-0 align-items-center">
                    <div class="col-auto">
                      <select class="form-select" @change="${(e) => this._onChangeType(e.target.value)}">
                        ${this.config.operators.map(op => html`
                          <option value="${op}" ?selected=${this._evaluator.type === op}>${op}</option>
                        `)}
                      </select>
                    </div>
                    <div class="col-auto">
                      ${this._renderButtons()}
                    </div>
                  </div>
                </div>
                <div class="col-auto">
                  ${this._renderDeleteEvaluator()}
                </div>
              </div>
              <esup-edit-evaluators .collection="${this._evaluator.evaluators}" .config="${this.config}"
                @childDeletion="${(e) => this._onChildDeletionEvent(e)}"
                @childUpdate="${(e) => this._onChildUpdateEvent(e)}">
              </esup-edit-evaluators>
            `
          } else {
            // prettier-ignore
            rendering = html`
              <ul class="evaluator">
                <li>
                  <div class="row g-0 align-items-center">
                    <div class="col-auto">
                      <select class="form-select" @change="${(e) => this._onChangeType(e.target.value)}">
                        ${this.config.operators.map(op => html`
                          <option value="${op}" ?selected=${this._evaluator.type === op}>${op}</option>
                        `)}
                      </select>
                    </div>
                    <div class="col-auto">
                      ${this._renderButtons()}
                    </div>
                  </div>
                  <esup-edit-evaluators .collection="${this._evaluator.evaluators}" .config="${this.config}"
                    @childDeletion="${(e) => this._onChildDeletionEvent(e)}"
                    @childUpdate="${(e) => this._onChildUpdateEvent(e)}">
                  </esup-edit-evaluators>
                </li>
              </ul>
            `
          }
          break
        case 'AUTHENTICATED':
          // prettier-ignore
          rendering = html`
            <div class="row g-1 align-items-center">
              <div class="col-auto">
                <span>${this._getLabel('authenticatedUsers.text')}</span>
              </div>
              <div class="col-auto">
                ${this._renderDeleteEvaluator()}
              </div>
            </div>
          `
          break
        case 'USERATTRIBUTES':
        case 'USERMULTIVALUEDATTRIBUTES':
          var userRendering = null
          if (
            this._evaluator.value &&
            this._evaluator.attribute === 'uid' &&
            this._evaluator.mode === 'EQUALS'
          ) {
            const userModelId = {
              keyType: 'PERSON',
              keyId: this._evaluator.value
            }
            // prettier-ignore
            userRendering = html`
              <esup-subject-infos .subject="${userModelId}" .config="${this.config}">
                <span>${this._getLabel('userAttribute.subjetIs')}</span>
              </esup-subject-infos>
            `
          } else if (
            this._evaluator.attribute === 'uid' &&
            this._evaluator.mode === 'EQUALS'
          ) {
            // prettier-ignore
            userRendering = html`
              <esup-subject-search-button .multiSelection="${false}" .searchType="${'PERSON'}" .searchId="${this._generateId()}"
                .config="${this.config}" .onSelection="${(subjects) => this._onPersonSelection(subjects)}" class="input-group">
              </esup-subject-search-button>
            `
          } else {
            // prettier-ignore
            userRendering = html`
              <div class="row g-0 align-items-center">
                <div class="col-auto">
                  <select class="form-select" @change="${(e) => this._onChangeAttribute(e.target.value)}">
                    ${this._userAttributes.map(attr => html`
                      <option value="${attr}" ?selected=${this._evaluator.attribute === attr}>${attr}</option>
                    `)}
                  </select>
                </div>
                <div class="col-auto">
                  <select class="form-select" @change="${(e) => this._onChangeMode(e.target.value)}">
                    ${this.config.stringEvaluators.map(mode => html`
                      <option value="${mode}" ?selected=${this._evaluator.mode === mode}>${mode}</option>
                    `)}
                  </select>
                </div>
                <div class="col-auto">
                  <input type="text" class="form-control" value="${this._evaluator.value || ''}" required @keyup="${(e) => this._onChangeValue(e.target.value)}">
                </div>
              </div>
            `
          }
          // prettier-ignore
          rendering = html`
            <div class="row g-1 align-items-center">
              <div class="col-auto">
                ${userRendering}
              </div>
              <div class="col-auto">
                ${this._renderDeleteEvaluator()}
              </div>
            </div>
          `
          break
        case 'USERGROUP':
          var groupRendering = null
          if (this._evaluator.group && this._evaluator.group !== '') {
            const userModelId = {
              keyType: 'GROUP',
              keyId: this._evaluator.group
            }
            // prettier-ignore
            groupRendering = html`
              <esup-subject-infos .subject="${userModelId}" .config="${this.config}">
                <span>${this._getLabel('userGroup.memberOf')}</span>
              </esup-subject-infos>
            `
          } else {
            // prettier-ignore
            groupRendering = html`
              <esup-subject-search-button .multiSelection="${false}" .searchType="${'GROUP'}" .searchId="${this._generateId()}"
                .config="${this.config}" .onSelection="${(subjects) => this._onGroupSelection(subjects)}" class="input-group">
              </esup-subject-search-button>
            `
          }
          // prettier-ignore
          rendering = html`
            <div class="row g-1 align-items-center">
              <div class="col-auto">
                ${groupRendering}
              </div>
              <div class="col-auto">
                ${this._renderDeleteEvaluator()}
              </div>
            </div>
          `
          break
        default:
          // prettier-ignore
          rendering = html`
            <div class="row g-1 align-items-center">
              <div class="col-auto">
                <span>${this._getLabel('unknown.text')}</span>
              </div>
              <div class="col-auto">
                ${this._renderDeleteEvaluator()}
              </div>
            </div>
          `
          break
      }
    }
    return rendering
  }

  willUpdate(changedProperties) {
    super.willUpdate(changedProperties)

    // Si les propriétés evaluator ou config sont modifiées, on initialise les éléments
    let initDatas = false
    if (changedProperties) {
      changedProperties.forEach((value, key) => {
        if (key === 'evaluator' || key === 'config') {
          initDatas = true
        }
      })
    }
    if (initDatas) {
      this._evaluator = this.evaluator
      this._userAttributes = this.config.userAttributes.filter(
        attr => attr !== 'uid'
      )
      this._labels = editEvaluatorLabel
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

    this._tooltip = this.shadowRoot.querySelector('#tooltip')
    this._tooltipClosing = false
    this._dropdown = this.shadowRoot.querySelector('#dropdown')
  }

  /**
   * Méthode indiquant si l'évaluateur édité est valide.
   *
   * @returns True si valide, False sinon
   */
  isValid() {
    return this._isValidEvaluator(this._evaluator)
  }

  /**
   * Retourne le code HTML des boutons d'ajout/suppression des évaluateurs.
   *
   * @returns Code HTML
   */
  _renderButtons() {
    // prettier-ignore
    return html`
      <div class="btn-group" role="group">
        <div class="btn-group" role="group" id="dropdown" @focusout="${(e) => this._onDropDownFocusOut(e)}" @keydown="${(e) => this._onDropDownKeyDown(e)}">
          <button type="button" id="dropdown-btn" class="btn btn-default btn-outline-dark dropdown-toggle" aria-expanded="false"
            @click="${() => this._toggleDropDown()}" >
            ${this._getLabel('add.button')}
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdown-btn">
            <li><a class="dropdown-item" href="" @click="${(e) => this._addEvaluator(e, 'OPERATOR')}">${this._getLabel('add.operator')}</a></li>
            <li><a class="dropdown-item" href="" @click="${(e) => this._addEvaluator(e, 'USER')}">${this._getLabel('add.user')}</a></li>
            <li><a class="dropdown-item" href="" @click="${(e) => this._addEvaluator(e, 'GROUP')}">${this._getLabel('add.group')}</a></li>
            <li><a class="dropdown-item" href="" @click="${(e) => this._addEvaluator(e, 'AUTH')}">${this._getLabel('add.authenticatedUsers')}</a></li>
            <li><a class="dropdown-item" href="" @click="${(e) => this._addEvaluator(e, 'ATTRIBUTE')}">${this._getLabel('add.userAttribute')}</a></li>
          </ul>
        </div>
        ${this._evaluator.evaluators && this._evaluator.evaluators.length > 0 ? html`
          <button type="button" class="btn btn-default btn-outline-dark" @click="${() => this._deleteEvaluators()}">
            <span>${this._getLabel('operator.removeChilds')}</span>
          </button>
        ` : ''}
      </div>
    `
  }

  /**
   * Retourne le code HTML du bouton de suppression de l'évaluateur.
   *
   * @returns Code HTML
   */
  _renderDeleteEvaluator() {
    // prettier-ignore
    return html`
      <a class="text-danger" href="" @click="${(e) => this._deleteEvaluator(e)}" data-tooltip aria-describedby="tooltip" @mouseenter="${() => this._showToolTip()}" @mouseleave="${() => this._hideToolTip()}">
        <i class="icon icon-remove"></i>
        ${this._renderToolTip(this._getLabel('delete.button'))}
      </a>
    `
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
   * Génère un identifiant (utilisation de la date courante).
   *
   * @returns Identifiant
   */
  _generateId() {
    return Date.now()
  }

  /**
   * Retourne true si l'évaluateur est valide'.
   *
   * @param {Object} evaluator Evaluateur à traiter
   * @returns Booléen
   */
  _isValidEvaluator(evaluator) {
    if (this._isDefined(evaluator) && this._isDefined(evaluator.class)) {
      switch (evaluator.class) {
        case 'OPERATOR':
          if (evaluator.evaluators.length > 0) {
            for (var i = 0; i < evaluator.evaluators.length; i++) {
              if (!this._isValidEvaluator(evaluator.evaluators[i])) {
                return false
              }
            }
            return true
          }
          return false
        case 'AUTHENTICATED':
          return true
        case 'USERATTRIBUTES':
        case 'USERMULTIVALUEDATTRIBUTES':
          return (
            this._isDefined(evaluator.value) &&
            this._isDefined(evaluator.attribute) &&
            this._isDefined(evaluator.mode) &&
            evaluator.value !== '' &&
            evaluator.attribute !== '' &&
            evaluator.mode !== '' &&
            evaluator.value !== null &&
            evaluator.attribute !== null &&
            evaluator.mode !== null
          )
        case 'USERGROUP':
          return (
            this._isDefined(evaluator.group) &&
            evaluator.group !== '' &&
            evaluator.group !== null
          )
        default:
          return false
      }
    }
    return false
  }

  /**
   * Méthode permettant d'ajouter un nouvel évaluateur.
   *
   * @param {Object} event Evènement
   * @param {String} type Type de l'évaluateur à ajouter
   */
  _addEvaluator(event, type) {
    event.preventDefault()
    event.stopPropagation()

    this._toggleDropDown()

    switch (type) {
      case 'OPERATOR':
        this._evaluator.evaluators = this._evaluator.evaluators.concat([
          {
            class: 'OPERATOR',
            id: null,
            type: 'OR',
            evaluators: []
          }
        ])
        break
      case 'USER':
        this._evaluator.evaluators = this._evaluator.evaluators.concat([
          {
            class: 'USERATTRIBUTES',
            id: null,
            mode: 'EQUALS',
            attribute: 'uid',
            value: null
          }
        ])
        break
      case 'GROUP':
        this._evaluator.evaluators = this._evaluator.evaluators.concat([
          {
            class: 'USERGROUP',
            id: null,
            group: null
          }
        ])
        break
      case 'AUTH':
        this._evaluator.evaluators = this._evaluator.evaluators.concat([
          {
            class: 'AUTHENTICATED',
            id: null
          }
        ])
        break
      case 'ATTRIBUTE':
        this._evaluator.evaluators = this._evaluator.evaluators.concat([
          {
            class: 'USERMULTIVALUEDATTRIBUTES',
            id: null,
            mode: this.config.stringEvaluators[0],
            attribute: this._userAttributes[0],
            value: null
          }
        ])
        break
    }
    this.requestUpdate()

    // Envoi d'un évènement au parent
    this._sendEvent('childUpdate')
  }

  /**
   * Méthode supprimant tous les évaluateurs
   */
  _deleteEvaluators() {
    this._evaluator.evaluators = []
    this.requestUpdate()

    // Envoi d'un évènement au parent
    this._sendEvent('childUpdate')
  }

  /**
   * Méthode supprimant un évaluateur
   *
   * @param {Object} event Evènement
   */
  _deleteEvaluator(event) {
    event.preventDefault()
    event.stopPropagation()

    // Envoi d'un évènement au parent
    this._sendEvent('childDeletion')
  }

  /**
   * Méthode appelé à la réception d'un evènement de suppression d'évaluateur.
   *
   * @param {Object} event Evènement
   */
  _onChildDeletionEvent(event) {
    event.stopPropagation()

    const tmp = []
    this._evaluator.evaluators.forEach(evaluator => {
      if (evaluator !== event.detail.evaluator) {
        tmp.push(evaluator)
      }
    })
    this._evaluator.evaluators = tmp

    this.requestUpdate()

    // Envoi d'un évènement au parent
    this._sendEvent('childUpdate')
  }

  /**
   * Méthode appelé à la réception d'un evènement de mise à jour d'évaluateur.
   *
   * @param {Object} event Evènement
   */
  _onChildUpdateEvent(event) {
    event.stopPropagation()
    this._evaluator.evaluators[event.detail.index] = event.detail.evaluator

    // Envoi d'un évènement au parent
    this._sendEvent('childUpdate')
  }

  /**
   * Méthode appelé à la modification du type de l'évaluateur.
   *
   * @param {Object} val Nouvelle valeur
   */
  _onChangeType(val) {
    this._evaluator.type = val

    // Envoi d'un évènement au parent
    this._sendEvent('childUpdate')
  }

  /**
   * Méthode appelé à la modification de la valeur de l'évaluateur.
   *
   * @param {Object} val Nouvelle valeur
   */
  _onChangeValue(val) {
    this._evaluator.value = val

    // Envoi d'un évènement au parent
    this._sendEvent('childUpdate')
  }

  /**
   * Méthode appelé à la modification de l'attribut de l'évaluateur.
   *
   * @param {Object} val Nouvelle valeur
   */
  _onChangeAttribute(val) {
    this._evaluator.attribute = val

    // Envoi d'un évènement au parent
    this._sendEvent('childUpdate')
  }

  /**
   * Méthode appelé à la modification du mode de l'évaluateur.
   *
   * @param {Object} val Nouvelle valeur
   */
  _onChangeMode(val) {
    this._evaluator.mode = val

    // Envoi d'un évènement au parent
    this._sendEvent('childUpdate')
  }

  /**
   * Méthode appelé à la sélection d'une personne.
   *
   * @param {Array} persons Tableau des personnes sélectionnées
   */
  _onPersonSelection(persons) {
    if (persons && persons.length > 0) {
      if (persons[0].modelId) {
        this._evaluator.value = persons[0].modelId.keyId
      } else if (persons[0].extendedSubject) {
        this._evaluator.value =
          persons[0].extendedSubject.keyValue +
          persons[0].extendedSubject.keyAttribute
      }

      this.requestUpdate()

      // Envoi d'un évènement au parent
      this._sendEvent('childUpdate')
    }
  }

  /**
   * Méthode appelé à la sélection d'un groupe.
   *
   * @param {Array} groups Tableau des groupes sélectionnées
   */
  _onGroupSelection(groups) {
    if (groups && groups.length > 0) {
      if (groups[0].modelId) {
        this._evaluator.group = groups[0].modelId.keyId
      } else if (groups[0].extendedSubject) {
        this._evaluator.group =
          groups[0].extendedSubject.keyValue +
          groups[0].extendedSubject.keyAttribute
      }

      this.requestUpdate()

      // Envoi d'un évènement au parent
      this._sendEvent('childUpdate')
    }
  }

  /**
   * Retourne le code HTML du tooltip.
   *
   * @param {String} tooltip Texte du tooltip
   * @returns Code HTML
   */
  _renderToolTip(tooltip) {
    if (tooltip && tooltip.length > 0) {
      // prettier-ignore
      return  html`
        <div class="tooltip fade bs-tooltip-top" id="tooltip" role="tooltip" style="display: none"
          @mouseover="${() => { this._hideToolTip() }}">
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
          this._tooltip.style.left =
            Math.round(this._tooltip.parentNode.offsetWidth / 2) + 'px'
          this._tooltip.style.transform = 'translateX(-50%)'
        }
        this._tooltip.style.top = -(this._tooltip.offsetHeight + 1) + 'px'
        this._tooltip.classList.add('show')

        // Positionnement de la flèche
        const arrow = this._tooltip.querySelector('.tooltip-arrow')
        arrow.style.position = 'absolute'
        arrow.style.transform = 'translateX(-50%)'
        const left = Math.round(
          Math.min(
            this._tooltip.offsetWidth,
            this._tooltip.parentNode.offsetWidth
          ) / 2
        )
        arrow.style.left = left + 'px'
      }
    }
  }

  /**
   * Méthode masquant le tooltip.
   */
  _hideToolTip() {
    if (
      this._tooltip &&
      !this._tooltipClosing &&
      this._tooltip.classList.contains('show')
    ) {
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
   * Méthode affichant ou masquant le dropdown.
   */
  _toggleDropDown() {
    const dropdownBtn = this._dropdown.querySelector('.dropdown-toggle')
    if (!dropdownBtn.classList.contains('show')) {
      // Affichage dropdown
      this._showDropDown()
    } else {
      // Masquage dropdown
      this._hideDropDown()
    }
  }

  /**
   * Méthode affichant le dropdown.
   */
  _showDropDown() {
    const dropdownBtn = this._dropdown.querySelector('.dropdown-toggle')
    if (!dropdownBtn.classList.contains('show')) {
      dropdownBtn.classList.add('show')
      dropdownBtn.setAttribute('aria-expanded', true)
      this._dropdown.querySelector('.dropdown-menu').style.transform =
        'translateY(' + (this._dropdown.offsetHeight + 2) + 'px)'
      this._dropdown.querySelector('.dropdown-menu').classList.add('show')
    }
  }

  /**
   * Méthode masquant le dropdown.
   */
  _hideDropDown() {
    const dropdownBtn = this._dropdown.querySelector('.dropdown-toggle')
    if (dropdownBtn.classList.contains('show')) {
      dropdownBtn.classList.remove('show')
      dropdownBtn.setAttribute('aria-expanded', false)
      this._dropdown.querySelector('.dropdown-menu').classList.remove('show')
    }
  }

  /**
   * Méthode appelée à la navigation au clavier dans le dropdown.
   *
   * @param {Object} event Evènement
   */
  _onDropDownKeyDown(event) {
    if (event.keyCode === 27) {
      // Touche Echappe
      this._hideDropDown()
      this._dropdown.querySelector('.dropdown-toggle').focus()

      event.preventDefault()
      event.stopPropagation()
    } else if (event.keyCode === 38) {
      // Touche Haut
      if (event.target !== this._dropdown.querySelector('.dropdown-toggle')) {
        // On est dans le menu, on focus l'entrée précédente
        const previousSibling = event.target.parentNode.previousElementSibling
        if (previousSibling) {
          previousSibling.childNodes[0].focus()
          event.preventDefault()
          event.stopPropagation()
        }
      }
    } else if (event.keyCode === 40) {
      // Touche Bas
      if (event.target !== this._dropdown.querySelector('.dropdown-toggle')) {
        // On est dans le menu, on focus l'entrée suivante
        const nextSibling = event.target.parentNode.nextElementSibling
        if (nextSibling) {
          nextSibling.childNodes[0].focus()
          event.preventDefault()
          event.stopPropagation()
        }
      } else {
        // On est sûr le bouton, on déplie le menu et on sélectionne la première entrée
        this._showDropDown()
        this._dropdown
          .querySelector('.dropdown-menu li:first-child')
          .childNodes[0].focus()
        event.preventDefault()
        event.stopPropagation()
      }
    }
  }

  /**
   * Méthode appelée à la perte de focus dans le dropdown.
   *
   * @param {Object} event Evènement
   */
  _onDropDownFocusOut(event) {
    const dropdownBtn = this._dropdown.querySelector('.dropdown-toggle')
    const dropDownItems = Array.from(
      this._dropdown.querySelectorAll('.dropdown-item')
    )
    if (
      event.relatedTarget !== dropdownBtn &&
      !dropDownItems.includes(event.relatedTarget)
    ) {
      this._hideDropDown()
    }
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

  /**
   * Envoi un évènement au composant parrent.
   *
   * @param {String} eventName Nom de l'évènement
   */
  _sendEvent(eventName) {
    if (!this.isChild && eventName === 'childUpdate') {
      // Si on est sur l'évaluateur racine et qu'il s'ait d'une mise à jour, appel à la méthode callBack
      if (this.onModification) {
        this.onModification(this._evaluator)
      }
    } else {
      const options = {
        detail: {
          evaluator: this._evaluator
        },
        bubbles: true,
        composed: true
      }
      this.dispatchEvent(new CustomEvent(eventName, options))
    }
  }
}

if (!customElements.get('esup-edit-evaluator')) {
  customElements.define('esup-edit-evaluator', EditEvaluator)
}
