import { LitElement, html } from 'lit'
import { subjectSearchButtonStyle } from './subject-search-button-style.js'
import { subjectSearchButtonLabel } from './subject-search-button-label.js'
import { bootstrapStyle } from './bootstrap-style.js'
import '@gip-recia/js-tree'
import { Localization, ToolTip, Utils, bootstrapToolTipStyle } from '@gip-recia/esup-publisher-webcomponents-utils'

/**
 * Subject Search Button component.
 */
export class SubjectSearchButton extends LitElement {
  static get styles() {
    return [subjectSearchButtonStyle, bootstrapStyle, bootstrapToolTipStyle]
  }

  static get properties() {
    return {
      /**
       * Type de recherche.
       * @type {String}
       */
      searchType: { attribute: false },

      /**
       * Recherche étendue ou non.
       * @type {Boolean}
       */
      withExtended: { attribute: false },

      /**
       * Identifiant unique du composant.
       * @type {String}
       */
      searchId: { attribute: false },

      /**
       * Indique si on est en multisélection.
       * @type {Boolean}
       */
      multiSelection: { attribute: false },

      /**
       * Configuration du subject-search-button.
       * @type {Object}
       */
      config: { attribute: false },

      /**
       * Fonction appelée à la sélection de données.
       * @type {Function}
       */
      onSelection: { attribute: false }
    }
  }

  constructor() {
    super()
    this._localization = new Localization(subjectSearchButtonLabel, 'fr')
    this._container = { subjects: [] }
    this._tooltips = []
    this._search = { queryUserTerm: '', filter: '' }
    this._resultsArr = []
    this._userResult = []
    this._nbTotalItems = 0
    this._currentPage = 1
    this._numPerPage = 10
    this._listNumPerPage = [5, 10, 25, 50, 100]
  }

  render() {
    var rendering = html``
    var modals = html``
    if (this.searchType !== 'PERSON') {
      // prettier-ignore
      rendering = html`
        ${rendering}
        <button type="button" class="btn btn-default btn-outline-dark" @click="${() => this._showGroupListModal()}">
          <i class="icon icon-plus"></i><span>&nbsp;${this._localization.getLabel('type.group')}</span>
        </button>
      `
      modals = html` ${modals} ${this._renderGroupListModal()} `
    }
    if (this.searchType !== 'GROUP') {
      // prettier-ignore
      rendering = html`
        ${rendering}
        <button type="button" class="btn btn-default btn-outline-dark" @click="${() => this._showUserListModal()}">
          <i class="icon icon-plus"></i><span>&nbsp;${this._localization.getLabel('type.user')}</span>
        </button>
        <button type="button" class="btn btn-default btn-outline-dark"  @click="${() => this._showUserFromGroupListModal()}">
          <i class="icon icon-plus"></i><span>&nbsp;${this._localization.getLabel('type.userfromgroup')}</span>
        </button>
      `
      modals = html`
        ${modals} ${this._renderUserListModal()}
        ${this._renderUserFromGroupListModal()}
      `
    }
    // prettier-ignore
    rendering = html`
      <div class="btn-group" role="group" aria-label="SearchOnUserType">
        ${rendering}
      </div>
    `
    if (this.withExtended) {
      // prettier-ignore
      rendering = html`
        ${rendering}
        <div class="btn-group" role="group" aria-label="SearchOnUserType">
          <button type="button" class="btn btn-default btn-outline-dark" @click="${() => this._showUserAttributeModal()}">
            <i class="icon icon-plus"></i><span>&nbsp;${this._localization.getLabel('type.userfromattr')}</span>
          </button>
          <button type="button" class="btn btn-default btn-outline-dark" @click="${() => this._showUserAttributeRegexModal()}">
            <i class="icon icon-plus"></i><span>&nbsp;${this._localization.getLabel('type.userfromregexattr')}</span>
          </button>
        </div>
      `
      modals = html`
        ${modals} ${this._renderUserAttributeModal()}
        ${this._renderUserAttributeRegexModal()}
      `
    }
    // prettier-ignore
    return html`
      <div class="subject-search-button">
        ${rendering}
        ${modals}
      </div>
    `
  }

  willUpdate(changedProperties) {
    super.willUpdate(changedProperties)

    // Si la propriété config est modifiée, on initialise les éléments
    let initDatas = false
    if (changedProperties) {
      initDatas = changedProperties.has('config')
    }
    if (initDatas) {
      this._localization.labels = subjectSearchButtonLabel
      this._localization.lang = this.config && this.config.lang ? this.config.lang : this._localization.lang
      // Surcharge des labels
      if (this.config && this.config.labels) {
        this._localization.mergeLabels(this.config.labels)
      }
    }

    this._tooltips.length = 0
  }

  updated(changedProperties) {
    super.updated(changedProperties)

    // Sélection des radiobuton/checkbox des utilisateur sélectionnés dans la modal des utilisateurs
    this.shadowRoot
      .querySelectorAll(
        '#userListModal' + this.searchId + ' input[type="radio"]'
      )
      .forEach(el => {
        el.checked =
          this._resultsArr[el.dataset.index] === this._container.subject
      })
    this.shadowRoot
      .querySelectorAll(
        '#userListModal' + this.searchId + ' input[type="checkbox"]'
      )
      .forEach(el => {
        el.checked = this._container.subjects.includes(
          this._resultsArr[el.dataset.index]
        )
      })

    // Sélection des radiobuton/checkbox des utilisateurs sélectionnés dans la modal des utilisateurs de groupe
    this.shadowRoot
      .querySelectorAll(
        '#userFromGroupListModal' + this.searchId + ' input[type="radio"]'
      )
      .forEach(el => {
        el.checked =
          this._resultsArr[el.dataset.index] === this._container.subject
      })
    this.shadowRoot
      .querySelectorAll(
        '#userFromGroupListModal' + this.searchId + ' input[type="checkbox"]'
      )
      .forEach(el => {
        el.checked = this._container.subjects.includes(
          this._resultsArr[el.dataset.index]
        )
      })

    this._tooltips.forEach(tt => tt.updateToolTip(this.shadowRoot))
  }

  _renderGroupListModal() {
    // prettier-ignore
    return html`
      <div class="modal fade" id="${'groupListModal' + this.searchId}" tabindex="-1" role="dialog" aria-labelledby="myGroupListLabel" aria-hidden="true"
        @click="${() => this._hideGroupListModal()}">
        <div class="modal-dialog modal-lg">
          <div class="modal-content" @click="${(e) => e.stopPropagation()}">
            <div class="modal-header">
              <h4 id="myGroupListLabel" class="modal-title">${this._localization.getLabel('search.targets.group')}</h4>
              <button type="button" class="btn-close" @click="${() => this._hideGroupListModal()}" aria-hidden="true"></button>
            </div>
            <div class="modal-body tree">
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default btn-outline-dark" @click="${() => this._hideGroupListModal()}">
                <span class="icon icon-cancel"></span>&nbsp;<span>${this._localization.getLabel('cancel')}</span>
              </button>
              <button type="button" class="btn btn-primary validate" @click="${() => this._submitGroupListModal()}" .disabled="${!this._canSubmit()}">
                <span class="icon icon-validate"></span>&nbsp;<span>${this._localization.getLabel('validate')}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    `
  }

  _renderUserListModal() {
    // prettier-ignore
    return html`
      <div class="modal fade" id="${'userListModal' + this.searchId}" tabindex="-1" role="dialog" aria-labelledby="myUserListLabel" aria-hidden="true"
        @click="${() => this._hideUserListModal()}">
        <div class="modal-dialog modal-lg">
          <div class="modal-content" @click="${(e) => e.stopPropagation()}">
            <div class="modal-header">
              <h4 id="myUserListLabel" class="modal-title">${this._localization.getLabel('search.targets.user')}</h4>
              <button type="button" class="btn-close" @click="${() => this._hideUserListModal()}" aria-hidden="true"></button>
            </div>
            <div class="modal-body">
              <form name="searchUserForm" role="form" novalidate @keydown="${(e) => { if (e.keyCode === 13) { e.preventDefault();this._searchUser() } }}">
                <div class="row g-3 align-items-center">
                  <div class="col-auto">
                    <label for="search" class="col-form-label fw-bold">
                      <span>${this._localization.getLabel('user.search.label')}</span>
                      <span class="icon icon-question" data-tooltip aria-describedby="tooltipuserListModal" @mouseenter="${() => this._showToolTip('userListModal')}" @mouseleave="${() => this._hideToolTip('userListModal')}">
                        ${this._renderToolTip('userListModal', this._localization.getLabel('user.search.desc'))}
                      </span>
                    </label>
                  </div>
                  <div class="col-auto">
                    <div class="input-group">
                      <input class="form-control" type="text" id="search" name="search" placeholder="${this._localization.getLabel('user.search.placeholder')}"
                        value="${this._search.queryUserTerm}" required minlength="3" @keyup="${(e) => this._onInputUserTerm(e.target.value)}">
                      <button type="button" class="btn btn-outline-secondary search" .disabled="${this._search.queryUserTerm.length < 3}" @click="${() => this._searchUser()}">
                        <i class="icon icon-search"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </form>

              ${this._userResult.length > 0 ? html`
                <div class="card mt-3">
                  <div class="card-header">
                    <div class="row g-3 align-items-center">
                      <div class="col-auto">
                        <div class="row g-3 align-items-center">
                          <div class="col-auto">
                            <label for="filter">${this._localization.getLabel('filter.label')}</label>
                          </div>
                          <div class="col-auto">
                            <input id="filter" type="text" @keyup="${(e) => this._onInputFilter(e.target.value)}"
                              class="form-control" placeholder="${this._localization.getLabel('filter.placeholder')}">
                          </div>
                        </div>
                      </div>
                      <div class="col-auto">
                        <div class="row g-3 align-items-center">
                          <div class="col-auto">
                            <label for="nbItems">${this._localization.getLabel('pager.nbItems')}</label>
                          </div>
                          <div class="col-auto">
                            <select id="nbItems" class="form-select" @change="${(e) => this._onChangeNumPerPage(e.target.value)}">
                              ${this._listNumPerPage.map(num => html`
                                <option value="${num}" ?selected=${this._numPerPage === num}>${num}</option>
                              `)}
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="card-body">
                    <ul class="list-unstyled">
                      ${this._resultsArr.map((user, idx) => html`
                        <li>
                          <input type="${this.multiSelection ? 'checkbox' : 'radio'}" name="user" id="${'user' + idx}" data-index="${idx}" @click="${() => this._onUserListSelection(user)}">
                          <label for="${'user' + idx}" data-tooltip aria-describedby="${'tooltipuser' + idx}" @mouseenter="${() => this._showToolTip('user' + idx)}" @mouseleave="${() => this._hideToolTip('user' + idx)}">
                            ${user.displayName}
                            ${this._renderToolTip('user' + idx, this._tooltipUser(user))}
                          </label>
                        </li>
                      `)}
                    </ul>
                  </div>
                  <div class="card-footer">
                    <nav>
                      <ul class="pagination" aria-label="Navigation par page">
                        <li @click="${(e) => this._goToPage(e, 1)}" class="page-item ${this._currentPage <= 1 ? 'disabled' : ''}">
                          <a class="page-link" href="" tabindex="${this._currentPage <= 1 ? -1 : 0}" aria-disabled="${this._currentPage <= 1}">&lt;&lt;</a>
                        </li>
                        <li @click="${(e) => this._goToPage(e, this._currentPage - 1)}" class="page-item ${this._currentPage <= 1 ? 'disabled' : ''}">
                          <a class="page-link" href="" tabindex="${this._currentPage <= 1 ? -1 : 0}" aria-disabled="${this._currentPage <= 1}">&lt;</a>
                        </li>
                        ${this._getVisiblePages().map(page =>  html`
                          <li class="page-item ${this._currentPage === page ? 'active' : ''}" @click="${(e) => this._goToPage(e, page)}"><a class="page-link" href="">${page}</a></li>
                        `)}
                        <li @click="${(e) => this._goToPage(e, this._currentPage + 1)}" class="page-item ${this._currentPage >= this._getTotalPage() ? 'disabled' : ''}">
                          <a class="page-link" href="" tabindex="${this._currentPage >= this._getTotalPage() ? -1 : 0}" aria-disabled="${this._currentPage >= this._getTotalPage()}">&gt;</a>
                        </li>
                        <li @click="${(e) => this._goToPage(e, this._getTotalPage())}" class="page-item ${this._currentPage >= this._getTotalPage() ? 'disabled' : ''}">
                          <a class="page-link" href="" tabindex="${this._currentPage >= this._getTotalPage() ? -1 : 0}" aria-disabled="${this._currentPage >= this._getTotalPage()}">&gt;&gt;</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              ` : html``}
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default btn-outline-dark" @click="${() => this._hideUserListModal()}">
                <span class="icon icon-cancel"></span>&nbsp;<span>${this._localization.getLabel('cancel')}</span>
              </button>
              <button type="button" class="btn btn-primary validate" @click="${() => this._submitUserListModal()}" .disabled="${!this._canSubmit()}">
                <span class="icon icon-validate"></span>&nbsp;<span>${this._localization.getLabel('validate')}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    `
  }

  _renderUserFromGroupListModal() {
    // prettier-ignore
    return html`
      <div class="modal fade" id="${'userFromGroupListModal' + this.searchId}" tabindex="-1" role="dialog" aria-labelledby="myUserFromGroupListLabel" aria-hidden="true"
        @click="${() => this._hideUserFromGroupListModal()}">
        <div class="modal-dialog modal-lg">
          <div class="modal-content" @click="${(e) => e.stopPropagation()}">
            <div class="modal-header">
              <h4 id="myUserFromGroupListLabel" class="modal-title">${this._localization.getLabel('search.targets.userFromGroup')}</h4>
              <button type="button" class="btn-close" @click="${() => this._hideUserFromGroupListModal()}" aria-hidden="true"></button>
            </div>
            <div class="modal-body">
              <div class="card">
                <div class="card-header">
                  <span>${this._localization.getLabel('userFromGroup.label')}</span>
                </div>
                <div class="card-body tree">
                </div>
              </div>

              ${this._userResult.length > 0 ? html`
                <div class="card mt-2">
                  <div class="card-header">
                    <div class="row g-3 align-items-center">
                      <div class="col-auto">
                        <div class="row g-3 align-items-center">
                          <div class="col-auto">
                            <label for="grpFilter">${this._localization.getLabel('filter.label')}</label>
                          </div>
                          <div class="col-auto">
                            <input id="grpFilter" type="text" @keyup="${(e) => this._onInputFilter(e.target.value)}"
                              class="form-control" placeholder="${this._localization.getLabel('filter.placeholder')}">
                          </div>
                        </div>
                      </div>
                      <div class="col-auto">
                        <div class="row g-3 align-items-center">
                          <div class="col-auto">
                            <label for="grpNbItems">${this._localization.getLabel('pager.nbItems')}</label>
                          </div>
                          <div class="col-auto">
                            <select id="grpNbItems" class="form-select" @change="${(e) => this._onChangeNumPerPage(e.target.value)}">
                              ${this._listNumPerPage.map(num => html`
                                <option value="${num}" ?selected=${this._numPerPage === num}>${num}</option>
                              `)}
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="card-body">
                    <ul class="list-unstyled">
                      ${this._resultsArr.map((user, idx) => html`
                        <li>
                          <input type="${this.multiSelection ? 'checkbox' : 'radio'}" name="grpUser" id="${'grpUser' + idx}" data-index="${idx}" @click="${() => this._onUserFromGroupListSelection(user)}">
                          <label for="${'grpUser' + idx}" data-tooltip aria-describedby="${'tooltipgrpUser' + idx}" @mouseenter="${() => this._showToolTip('grpUser' + idx)}" @mouseleave="${() => this._hideToolTip('grpUser' + idx)}">
                            ${user.displayName}
                            ${this._renderToolTip('grpUser' + idx, this._tooltipUser(user))}
                          </label>
                        </li>
                      `)}
                    </ul>
                  </div>
                  <div class="card-footer">
                    <nav>
                      <ul class="pagination" aria-label="Navigation par page">
                        <li @click="${(e) => this._goToPage(e, 1)}" class="page-item ${this._currentPage <= 1 ? 'disabled' : ''}">
                          <a class="page-link" href="" tabindex="${this._currentPage <= 1 ? -1 : 0}" aria-disabled="${this._currentPage <= 1}">&lt;&lt;</a>
                        </li>
                        <li @click="${(e) => this._goToPage(e, this._currentPage - 1)}" class="page-item ${this._currentPage <= 1 ? 'disabled' : ''}">
                          <a class="page-link" href="" tabindex="${this._currentPage <= 1 ? -1 : 0}" aria-disabled="${this._currentPage <= 1}">&lt;</a>
                        </li>
                        ${this._getVisiblePages().map(page =>  html`
                          <li class="page-item ${this._currentPage === page ? 'active' : ''}" @click="${(e) => this._goToPage(e, page)}"><a class="page-link" href="">${page}</a></li>
                        `)}
                        <li @click="${(e) => this._goToPage(e, this._currentPage + 1)}" class="page-item ${this._currentPage >= this._getTotalPage() ? 'disabled' : ''}">
                          <a class="page-link" href="" tabindex="${this._currentPage >= this._getTotalPage() ? -1 : 0}" aria-disabled="${this._currentPage >= this._getTotalPage()}">&gt;</a>
                        </li>
                        <li @click="${(e) => this._goToPage(e, this._getTotalPage())}" class="page-item ${this._currentPage >= this._getTotalPage() ? 'disabled' : ''}">
                          <a class="page-link" href="" tabindex="${this._currentPage >= this._getTotalPage() ? -1 : 0}" aria-disabled="${this._currentPage >= this._getTotalPage()}">&gt;&gt;</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              ` : html``}
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default btn-outline-dark" @click="${() => this._hideUserFromGroupListModal()}">
                <span class="icon icon-cancel"></span>&nbsp;<span>${this._localization.getLabel('cancel')}</span>
              </button>
              <button type="button" class="btn btn-primary validate" @click="${() => this._submitUserFromGroupListModal()}" .disabled="${!this._canSubmit()}">
                <span class="icon icon-validate"></span>&nbsp;<span>${this._localization.getLabel('validate')}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    `
  }

  _renderUserAttributeModal() {
    // prettier-ignore
    return html`
      <div class="modal fade" id="${'userAttributeModal' + this.searchId}" tabindex="-1" role="dialog" aria-labelledby="myUserAttributeLabel" aria-hidden="true"
        @click="${() => this._hideUserAttributeModal()}">
        <div class="modal-dialog modal-lg">
          <div class="modal-content" @click="${(e) => e.stopPropagation()}">
            <div class="modal-header">
              <h4 class="modal-title" id="myUserAttributeLabel">${this._localization.getLabel('search.targets.userAttrs')}</h4>
              <button type="button" class="btn-close" @click="${() => this._hideUserAttributeModal()}" aria-hidden="true"></button>
            </div>
            <div class="modal-body">
              <label class="form-label fw-bold" for="userAttribute">${this._localization.getLabel('userAttr.attribute.label')}</label>
              <select id="userAttribute" name="userAttribute" class="form-select" @change="${(e) => this._onChangeUserAttribute(e.target.value)}" required>
                <option value="" selected></option>
                ${(this.config.extendedAttrs || []).sort((a, b) => a.localeCompare(b)).map(attr => html`
                  <option value="${attr}">${attr}</option>
                `)}
              </select>
              <label class="form-label fw-bold mt-3" for="userValue">${this._localization.getLabel('userAttr.value.label')}</label>
              <input type="text" class="form-control" id="userValue" name="userValue" required minlength="3" maxlength="512"
                @keyup="${(e) => this._onInputUserAttrValue(e.target.value)}">
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default btn-outline-dark" @click="${() => this._hideUserAttributeModal()}">
                <span class="icon icon-cancel"></span>&nbsp;<span>${this._localization.getLabel('cancel')}</span>
              </button>
              <button type="button" class="btn btn-primary validate" @click="${() => this._submitUserAttributeModal()}" .disabled="${!this._canSubmit()}">
                <span class="icon icon-validate"></span>&nbsp;<span>${this._localization.getLabel('validate')}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    `
  }

  _renderUserAttributeRegexModal() {
    // prettier-ignore
    return html`
      <div class="modal fade" id="${'userAttributeRegexModal' + this.searchId}" tabindex="-1" role="dialog" aria-labelledby="myUserAttributeRegexLabel" aria-hidden="true"
        @click="${() => this._hideUserAttributeRegexModal()}">
        <div class="modal-dialog modal-lg">
          <div class="modal-content" @click="${(e) => e.stopPropagation()}">
            <div class="modal-header">
              <h4 id="myUserAttributeRegexLabel" class="modal-title">${this._localization.getLabel('search.targets.userRegexAttr')}</h4>
              <button type="button" class="btn-close" @click="${() => this._hideUserAttributeRegexModal()}" aria-hidden="true"></button>
            </div>
            <div class="modal-body">
              <label class="form-label fw-bold" for="userRegexAttribute">${this._localization.getLabel('userRegexAttr.attribute.label')}</label>
              <select id="userRegexAttribute" name="userRegexAttribute" class="form-select" @change="${(e) => this._onChangeUserRegexAttribute(e.target.value)}" required>
                <option value="" selected></option>
                ${(this.config.extendedAttrs || []).sort((a, b) => a.localeCompare(b)).map(attr => html`
                  <option value="${attr}">${attr}</option>
                `)}
              </select>
              <label class="form-label fw-bold mt-3" for="userRegexValue">${this._localization.getLabel('userRegexAttr.value.label')}</label>
              <input type="text" class="form-control" id="userRegexValue" name="userRegexValue" required minlength="3" maxlength="512"
                @keyup="${(e) => this._onInputUserRegexAttrValue(e.target.value)}">
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default btn-outline-dark" @click="${() => this._hideUserAttributeRegexModal()}">
                <span class="icon icon-cancel"></span>&nbsp;<span>${this._localization.getLabel('cancel')}</span>
              </button>
              <button type="button" class="btn btn-primary validate" @click="${() => this._submitUserAttributeRegexModal()}" .disabled="${!this._canSubmit()}">
                <span class="icon icon-validate"></span>&nbsp;<span>${this._localization.getLabel('validate')}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    `
  }

  /**
   * Retourne le code HTML d'un tooltip.
   *
   * @param {String} id Identifiant du tooltip
   * @param {String} tooltip Texte du tooltip
   * @returns Code HTML
   */
  _renderToolTip(id, tooltip) {
    const newToolTip = new ToolTip('tooltip' + id)
    this._tooltips.push(newToolTip)
    return newToolTip.renderToolTip(tooltip)
  }

  /**
   * Méthode affichant un tooltip.
   *
   * @param {String} id Identifiant du tooltip
   */
  _showToolTip(id) {
    const tooltip = this._tooltips.find(tt => tt.id === 'tooltip' + id)
    if (tooltip) {
      tooltip.showToolTip()
    }
  }

  /**
   * Méthode masquant un tooltip.
   *
   * @param {String} id Identifiant du tooltip
   */
  _hideToolTip(id) {
    const tooltip = this._tooltips.find(tt => tt.id === 'tooltip' + id)
    if (tooltip) {
      tooltip.hideToolTip()
    }
  }

  /**
   * Affichage de la modal de liste des groupes.
   */
  _showGroupListModal() {
    this._clearSubject()
    var tree = this.shadowRoot.querySelector('#jsTreeGroup' + this.searchId)
    if (!tree) {
      tree = document.createElement('esup-js-tree')
      tree.setAttribute('id', 'jsTreeGroup' + this.searchId)
      tree.datas = this.config.treeGroupDatas
      tree.config = Object.assign(
        {
          showCheckbox: true,
          isMultipleSelection: this.multiSelection,
          sort: true
        },
        this.config
      )
      tree.onSelection = datas => this._onTreeGroupSelection(datas)
      this.shadowRoot
        .querySelector('#groupListModal' + this.searchId + ' .tree')
        .appendChild(tree)
    }
    this.shadowRoot.querySelector(
      '#groupListModal' + this.searchId + ' button.validate'
    ).disabled = !this._canSubmit()
    this._showModal('groupListModal' + this.searchId)
  }

  /**
   * Masquage de la modal de liste des groupes.
   */
  _hideGroupListModal() {
    this._clearSubject()
    const tree = this.shadowRoot.querySelector('#jsTreeGroup' + this.searchId)
    if (tree) {
      tree.deselectAllNodes()
    }
    this._hideModal('groupListModal' + this.searchId)
  }

  /**
   * Validation de la modal de liste des groupes.
   */
  _submitGroupListModal() {
    this._submitSubject()
    this._hideGroupListModal()
  }

  /**
   * Affichage de la modal de liste des utilisateurs.
   */
  _showUserListModal() {
    this._clearSubject()
    this.shadowRoot.querySelector(
      '#userListModal' + this.searchId + ' #search'
    ).value = this._search.queryUserTerm
    this.shadowRoot.querySelector(
      '#userListModal' + this.searchId + ' button.search'
    ).disabled = this._search.queryUserTerm.length < 3
    this.shadowRoot.querySelector(
      '#userListModal' + this.searchId + ' button.validate'
    ).disabled = !this._canSubmit()
    this._showModal('userListModal' + this.searchId)
  }

  /**
   * Masquage de la modal de liste des utilisateurs.
   */
  _hideUserListModal() {
    this._clearSubject()
    this._hideModal('userListModal' + this.searchId)
  }

  /**
   * Validation de la modal de liste des utilisateurs.
   */
  _submitUserListModal() {
    this._submitSubject()
    this._hideUserListModal()
  }

  /**
   * Affichage de la modal de liste des utilisateurs par groupe.
   */
  _showUserFromGroupListModal() {
    this._clearSubject()
    var tree = this.shadowRoot.querySelector(
      '#jsTreeUserFromGroup' + this.searchId
    )
    if (!tree) {
      tree = document.createElement('esup-js-tree')
      tree.setAttribute('id', 'jsTreeUserFromGroup' + this.searchId)
      tree.datas = this.config.treeGroupDatas
      tree.config = Object.assign(
        {
          showCheckbox: false,
          isMultipleSelection: false,
          allowDeselection: false,
          sort: true
        },
        this.config
      )
      tree.onSelection = datas => this._onTreeUserFromGroupSelection(datas)
      this.shadowRoot
        .querySelector('#userFromGroupListModal' + this.searchId + ' .tree')
        .appendChild(tree)
    }
    this.shadowRoot.querySelector(
      '#userFromGroupListModal' + this.searchId + ' button.validate'
    ).disabled = !this._canSubmit()
    this._showModal('userFromGroupListModal' + this.searchId)
  }

  /**
   * Masquage de la modal de liste des utilisateurs par groupe.
   */
  _hideUserFromGroupListModal() {
    this._clearSubject()
    const tree = this.shadowRoot.querySelector(
      '#jsTreeUserFromGroup' + this.searchId
    )
    if (tree) {
      tree.deselectAllNodes()
    }
    this._hideModal('userFromGroupListModal' + this.searchId)
  }

  /**
   * Validation de la modal de liste des utilisateurs par groupe.
   */
  _submitUserFromGroupListModal() {
    this._submitSubject()
    this._hideUserFromGroupListModal()
  }

  /**
   * Affichage de la modal d'attribut utilisateur.
   */
  _showUserAttributeModal() {
    this._clearSubject()
    this._container.extendedSubject = {
      keyAttribute: null,
      keyValue: null,
      keyType: 'PERSON_ATTR'
    }
    this.shadowRoot.querySelector(
      '#userAttributeModal' + this.searchId + ' option[value=""]'
    ).selected = true
    this.shadowRoot.querySelector(
      '#userAttributeModal' + this.searchId + ' #userValue'
    ).value = ''
    this.shadowRoot.querySelector(
      '#userAttributeModal' + this.searchId + ' button.validate'
    ).disabled = !this._canSubmit()
    this._showModal('userAttributeModal' + this.searchId)
  }

  /**
   * Masquage de la modal d'attribut utilisateur.
   */
  _hideUserAttributeModal() {
    this._clearSubject()
    this._hideModal('userAttributeModal' + this.searchId)
  }

  /**
   * Validation de la modal d'attribut utilisateur.
   */
  _submitUserAttributeModal() {
    this._submitSubject()
    this._hideUserAttributeModal()
  }

  /**
   * Affichage de la modal d'attribut utilisateur avec expression régulière.
   */
  _showUserAttributeRegexModal() {
    this._clearSubject()
    this._container.extendedSubject = {
      keyAttribute: null,
      keyValue: null,
      keyType: 'PERSON_ATTR_REGEX'
    }
    this.shadowRoot.querySelector(
      '#userAttributeRegexModal' + this.searchId + ' option[value=""]'
    ).selected = true
    this.shadowRoot.querySelector(
      '#userAttributeRegexModal' + this.searchId + ' #userRegexValue'
    ).value = ''
    this.shadowRoot.querySelector(
      '#userAttributeRegexModal' + this.searchId + ' button.validate'
    ).disabled = !this._canSubmit()
    this._showModal('userAttributeRegexModal' + this.searchId)
  }

  /**
   * Masquage de la modal d'attribut utilisateur avec expression régulière.
   */
  _hideUserAttributeRegexModal() {
    this._clearSubject()
    this._hideModal('userAttributeRegexModal' + this.searchId)
  }

  /**
   * Validation de la modal d'attribut utilisateur avec expression régulière.
   */
  _submitUserAttributeRegexModal() {
    this._submitSubject()
    this._hideUserAttributeRegexModal()
  }

  /**
   * Indique si le formulaire d'une modale peut être validé.
   *
   * @returns True si le formulaire peut être validée, False sinon
   */
  _canSubmit() {
    return (
      (Utils.isDefined(this._container.subject) &&
        Utils.isDefined(this._container.subject.modelId) &&
        this._container.subject.modelId !== {}) ||
      (Utils.isDefined(this._container.extendedSubject) &&
        this._container.extendedSubject !== {} &&
        this._container.extendedSubject.keyAttribute !== null &&
        this._container.extendedSubject.keyAttribute !== '' &&
        this._container.extendedSubject.keyValue !== null &&
        this._container.extendedSubject.keyValue.length >= 3 &&
        this._container.extendedSubject.keyValue.length <= 512) ||
      (Utils.isDefined(this._container.subjects) &&
        this._container.subjects.length > 0 &&
        Utils.isDefined(
          this._container.subjects[this._container.subjects.length - 1].modelId
        ) &&
        this._container.subjects[this._container.subjects.length - 1]
          .modelId !== {})
    )
  }

  /**
   * Soumission des données sélectionnées.
   */
  _submitSubject() {
    let result = []
    if (
      this._container.subjects &&
      Utils.isArray(this._container.subjects) &&
      this._container.subjects.length > 0
    ) {
      if (this.multiSelection) {
        result = this._container.subjects
      } else {
        result.push(
          this._container.subjects[this._container.subjects.length - 1]
        )
      }
    } else if (
      Utils.isDefined(this._container.subject) &&
      Utils.isDefined(this._container.subject.modelId) &&
      this._container.subject.modelId !== {}
    ) {
      result.push(this._container.subject)
    } else if (
      Utils.isDefined(this._container.extendedSubject) &&
      this._container.extendedSubject !== {}
    ) {
      result.push(this._container.extendedSubject)
    }
    if (this.onSelection) {
      this.onSelection(result)
    }
  }

  /**
   * Méthode affichant une modal.
   *
   * @param {String} id Identifiant HTML de la modal
   */
  _showModal(id) {
    let modal = this.shadowRoot.querySelector('#' + id)
    if (modal) {
      // Add backdrop
      let backdrop = this.shadowRoot.querySelector('.modal-backdrop')
      if (!backdrop) {
        const newBackdrop = document.createElement('div')
        newBackdrop.className = 'modal-backdrop fade'
        this.shadowRoot.append(newBackdrop)
        newBackdrop.classList.add('show')
      }

      // Show modal
      modal.style.display = 'block'
      modal.removeAttribute('aria-hidden')
      modal.setAttribute('aria-modal', true)
      modal.setAttribute('role', 'dialog')
      modal.scrollTop = 0
      modal.querySelector('.modal-body').scrollTop = 0
      modal.classList.add('show')
      modal.focus()
    }
  }

  /**
   * Méthode masquant une modal.
   *
   * @param {String} id Identifiant HTML de la modal
   */
  _hideModal(id) {
    let modal = this.shadowRoot.querySelector('#' + id)
    if (modal) {
      // Hide modal
      modal.classList.remove('show')
      modal.setAttribute('aria-hidden', true)
      modal.removeAttribute('aria-modal')
      modal.removeAttribute('role')
      setTimeout(() => {
        modal.style.display = 'none'

        // Remove backdrop
        const backdrop = this.shadowRoot.querySelector('.modal-backdrop')
        backdrop.classList.remove('show')
        setTimeout(() => {
          backdrop.remove()
        }, 200)
      }, 200)
    }
  }

  /**
   * Retourne le label à afficher dans le tooltip.
   *
   * @param {Object} user Objet contenant les valeurs nécessaire à l'affichage
   * @returns Label à afficher dans le tooltip
   */
  _tooltipUser(user) {
    const userAttrs = this.config.userDisplayedAttrs || []
    if (
      !Utils.isDefined(userAttrs) ||
      !Utils.isDefined(user) ||
      !Utils.isDefined(user.attributes)
    )
      return
    var index
    var attrs = user.attributes
    var resHtml = ''
    for (index = 0; index < userAttrs.length; ++index) {
      if (index > 0 && Utils.isDefined(attrs[userAttrs[index]])) {
        resHtml += ' - '
      }
      if (
        Utils.isDefined(attrs[userAttrs[index]]) &&
        Utils.isArray(attrs[userAttrs[index]])
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

  /**
   * Méthode appelé à la sélection/désélection d'un groupe dans l'arbre des goupes.
   *
   * @param {Array} selectedGroups Liste des groupes sélectionnés
   */
  _onTreeGroupSelection(selectedGroups) {
    this._container.subjects = selectedGroups.map(group => group.a_attr.model)
    // Activation/désactivation du bouton de validation de la modale
    this.shadowRoot.querySelector(
      '#groupListModal' + this.searchId + ' button.validate'
    ).disabled = !this._canSubmit()
  }

  /**
   * Méthode appelé à la sélection/désélection d'un groupe dans l'arbre des utilisateurs par groupe.
   *
   * @param {Array} selectedGroups Liste des groupes sélectionnés
   */
  _onTreeUserFromGroupSelection(selectedGroups) {
    this._resultsArr = []
    this._userResult = []
    this._search.filter = ''
    this._currentPage = 1
    this._nbTotalItems = 0
    if (this.config.getGroupMembers && selectedGroups.length > 0) {
      this.config
        .getGroupMembers(selectedGroups[0].a_attr.model.modelId.keyId)
        .then(result => {
          if (result.length > 0) {
            this._userResult = result
            this._userResult.sort((user1, user2) =>
              user1.displayName.localeCompare(user2.displayName)
            )
            this._nbTotalItems = this._userResult.length
            this._resultsArr = this._userResult.slice(0, this._numPerPage)
          }
          this.requestUpdate()
        })
    }
    this._container.subject = undefined
    this._container.subjects = []
    // Activation/désactivation du bouton de validation de la modale
    this.shadowRoot.querySelector(
      '#userFromGroupListModal' + this.searchId + ' button.validate'
    ).disabled = !this._canSubmit()
  }

  /**
   * Méthode appelée à la sélection d'un utilisateur d'un groupe.
   *
   * @param {Object} selectedUser utilisateur sélectionné
   */
  _onUserFromGroupListSelection(selectedUser) {
    if (!this.multiSelection) {
      this._container.subject = selectedUser
    } else {
      if (
        Utils.isDefined(this._container.subjects) &&
        this._container.subjects.length > 0
      ) {
        let index = -1
        for (let i = 0; i < this._container.subjects.length; i++) {
          if (this._container.subjects[i] === selectedUser) {
            index = i
            break
          }
        }
        if (index > -1) {
          this._container.subjects.splice(index, 1)
        } else {
          this._container.subjects.push(selectedUser)
        }
      } else {
        this._container.subjects = [selectedUser]
      }
    }
    // Activation/désactivation du bouton de validation de la modale
    this.shadowRoot.querySelector(
      '#userFromGroupListModal' + this.searchId + ' button.validate'
    ).disabled = !this._canSubmit()
  }

  /**
   * Méthode appelé à la saisie dans le champs de recherche utilisateur.
   *
   * @param {String} val Valeur saisie
   */
  _onInputUserTerm(val) {
    this._search.queryUserTerm = val
    // Activation/désactivation du bouton de recherche
    this.shadowRoot.querySelector(
      '#userListModal' + this.searchId + ' button.search'
    ).disabled = this._search.queryUserTerm.length < 3
  }

  /**
   * Méthode appelé à la saisie dans le champs de filtre utilisateur.
   *
   * @param {String} val Valeur saisie
   */
  _onInputFilter(val) {
    if (this._search.filter !== val) {
      this._search.filter = val
      this._currentPage = 1
      var tmpArray = this._filterOnDisplayName(this._userResult, val)
      this._resultsArr = tmpArray.slice(0, this._numPerPage)
      this._nbTotalItems = tmpArray.length
      this.requestUpdate()
    }
  }

  /**
   * Méthode appelée au changement de la taille des pages.
   *
   * @param {Numer} val Taille des pages
   */
  _onChangeNumPerPage(val) {
    const _val = Number(val)
    if (this._numPerPage !== _val) {
      this._numPerPage = _val
      this._currentPage = 1
      this._resultsArr = this._filterOnDisplayName(
        this._userResult,
        this._search.filter
      ).slice(0, this._numPerPage)
      this.requestUpdate()
    }
  }

  /**
   * Retourne le nombre total de pages.
   *
   * @returns Nombre de pages
   */
  _getTotalPage() {
    return Math.max(1, Math.ceil(this._nbTotalItems / this._numPerPage))
  }

  /**
   * Navigation à une page.
   *
   * @param {Object} event Evenement
   * @param {Number} page Page à afficher
   */
  _goToPage(event, page) {
    event.preventDefault()
    event.stopPropagation()
    if (
      page > 0 &&
      page <= this._getTotalPage() &&
      page !== this._currentPage
    ) {
      this._currentPage = page
      this._resultsArr = this._filterOnDisplayName(
        this._userResult,
        this._search.filter
      ).slice(
        this._numPerPage * (this._currentPage - 1),
        this._numPerPage * (this._currentPage - 1) + this._numPerPage
      )
      this.requestUpdate()
    }
  }

  /**
   * Méthode retournant les pages visibles dans la pagination.
   *
   * @returns Tableau des pages visibles
   */
  _getVisiblePages() {
    const startPage = Math.max(1, this._currentPage - 2)
    const endPage = Math.min(this._getTotalPage(), this._currentPage + 2)
    const pages = []
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i)
    }
    if (pages.length < this._getTotalPage()) {
      while (pages.length < Math.min(this._getTotalPage(), 5)) {
        if (pages[0] > 1) {
          pages.splice(0, 0, pages[0] - 1)
        }
        if (pages[pages.length - 1] < this._getTotalPage()) {
          pages.splice(pages.length, 0, pages[pages.length - 1] + 1)
        }
      }
    }
    return pages
  }

  /**
   * Méthode appelée à la sélection d'un utilisateur.
   *
   * @param {Object} selectedUser utilisateur sélectionné
   */
  _onUserListSelection(selectedUser) {
    if (!this.multiSelection) {
      this._container.subject = selectedUser
    } else {
      if (
        Utils.isDefined(this._container.subjects) &&
        this._container.subjects.length > 0
      ) {
        let index = -1
        for (let i = 0; i < this._container.subjects.length; i++) {
          if (this._container.subjects[i] === selectedUser) {
            index = i
            break
          }
        }
        if (index > -1) {
          this._container.subjects.splice(index, 1)
        } else {
          this._container.subjects.push(selectedUser)
        }
      } else {
        this._container.subjects = [selectedUser]
      }
    }
    // Activation/désactivation du bouton de validation de la modale
    this.shadowRoot.querySelector(
      '#userListModal' + this.searchId + ' button.validate'
    ).disabled = !this._canSubmit()
  }

  /**
   * Filtre un tableau utlilisateur selon la propriété displayName.
   *
   * @param {Array} inputArray Tableau d'utlilisateurs
   * @param {String} criteria Critère de filtre
   * @returns Tableau filtré
   */
  _filterOnDisplayName(inputArray, criteria) {
    if (!Utils.isDefined(criteria) || criteria === '') {
      return inputArray
    }
    var data = []
    inputArray.forEach(item => {
      if (
        item.displayName.toLowerCase().indexOf(criteria.toLowerCase()) !== -1
      ) {
        data.push(item)
      }
    })
    return data
  }

  /**
   * Recherche des utilisateurs.
   */
  _searchUser() {
    if (this._search.queryUserTerm && this._search.queryUserTerm.length >= 3) {
      this._resultsArr = []
      this._userResult = []
      this._search.filter = ''
      this._currentPage = 1
      this._nbTotalItems = 0
      if (this.config.searchUsers) {
        this.config.searchUsers(this._search.queryUserTerm).then(result => {
          if (result.length > 0) {
            this._userResult = result
            this._userResult.sort((user1, user2) =>
              user1.displayName.localeCompare(user2.displayName)
            )
            this._nbTotalItems = this._userResult.length
            this._resultsArr = this._userResult.slice(0, this._numPerPage)
          }
          this.requestUpdate()
        })
      }
      this._container.subject = undefined
      this._container.subjects = []
      // Activation/désactivation du bouton de validation de la modale
      this.shadowRoot.querySelector(
        '#userListModal' + this.searchId + ' button.validate'
      ).disabled = !this._canSubmit()
    }
  }

  /**
   * Méthode appelé à la sélection d'un attribut utilisateur.
   *
   * @param {String} val Attribut sélectionné
   */
  _onChangeUserAttribute(val) {
    this._container.extendedSubject.keyAttribute = val
    // Activation/désactivation du bouton de validation
    this.shadowRoot.querySelector(
      '#userAttributeModal' + this.searchId + ' button.validate'
    ).disabled = !this._canSubmit()
  }

  /**
   * Méthode appelé à la saisie d'une valeur attribut utilisateur.
   *
   * @param {String} val Valeur saisie
   */
  _onInputUserAttrValue(val) {
    this._container.extendedSubject.keyValue = val
    // Activation/désactivation du bouton de validation
    this.shadowRoot.querySelector(
      '#userAttributeModal' + this.searchId + ' button.validate'
    ).disabled = !this._canSubmit()
  }

  /**
   * Méthode appelé à la sélection d'un attribut utilisateur avec expression régulière.
   *
   * @param {String} val Attribut sélectionné
   */
  _onChangeUserRegexAttribute(val) {
    this._container.extendedSubject.keyAttribute = val
    // Activation/désactivation du bouton de validation
    this.shadowRoot.querySelector(
      '#userAttributeRegexModal' + this.searchId + ' button.validate'
    ).disabled = !this._canSubmit()
  }

  /**
   * Méthode appelé à la saisie d'une valeur attribut utilisateur avec expression régulière.
   *
   * @param {String} val Valeur saisie
   */
  _onInputUserRegexAttrValue(val) {
    this._container.extendedSubject.keyValue = val
    // Activation/désactivation du bouton de validation
    this.shadowRoot.querySelector(
      '#userAttributeRegexModal' + this.searchId + ' button.validate'
    ).disabled = !this._canSubmit()
  }

  /**
   * Nettoyages des données.
   */
  _clearSubject() {
    this._container.subject = undefined
    this._container.extendedSubject = undefined
    this._container.subjects = []
    this._search = { queryUserTerm: '', filter: '' }
    this._resultsArr = []
    this._userResult = []
    this._currentPage = 1
    this._numPerPage = 10

    this.requestUpdate()
  }
}

if (!customElements.get('esup-subject-search-button')) {
  customElements.define('esup-subject-search-button', SubjectSearchButton)
}
