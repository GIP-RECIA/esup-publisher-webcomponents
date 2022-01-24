import {LitElement, html } from 'lit-element'
import { jsTreeStyle } from './js-tree-style.js'

/**
 * Js-Tree component.
 */
export class JsTree extends LitElement {

  static get styles() {
    return [
      jsTreeStyle
    ]
  }

  static get properties() {
    return {

      /**
       * Tableau des valeurs racine de l'arbre.
       * @type {Array}
       */
      datas: { attribute: false },

      /**
       * Configuration de l'arbre.
       * @type {Object}
       */
      config: { attribute: false },

      /**
       * Fonction appelée à la sélection d'un élement de l'arbre.
       * @type {Function}
       */
      onSelection: { attribute: false },

      /**
       * Propriété interne pour l'affichage et la mainpulation des éléments.
       * @type {Array}
       */
      _datas: { state: true },

      /**
       * Propriété interne pour savoir si une première intéraction au clavier a été faite.
       * @type {Boolean}
       */
      _initKeyboardNavigation: { state: true }
    }
  }

  constructor() {
    super()

    this._datas = []
    this._initKeyboardNavigation = false
  }

  render() {
    return this.renderTree(this._datas, 0, null)
  }

  updated(changedProperties){
    super.updated(changedProperties)

    // Si les propriétés datas ou config sont modifiés, on initialise les éléments
    let initDatas = false
    if (changedProperties) {
      changedProperties.forEach((value, key) => {
        if (key === 'datas' || key === 'config') {
          initDatas = true
        }
      })
    }

    if (initDatas) {
      // Initialisation des données
      this._datas = this.datas
      this._initKeyboardNavigation = false
      this.initDataList(this._datas, this.config.identifier)

      // Initialisation de la navigation au clavier
      this.activeElement = this._datas && this._datas.length > 0 ? this._datas[0] : null

      this.requestUpdate()
    } else {
      // Cochage des checkbox des éléments sélectionnés
      this.shadowRoot.querySelectorAll('input[type="checkbox"]').forEach(el=> {
        const data = this.findDatasByProperty(this._datas, 'idHtml', el.id.replace('-checkbox',''))
        if(data && data.length === 1) {
          el.checked = data[0].selected
        }
      })

      // Focus sur l'élément actif
      if (this._initKeyboardNavigation && this.activeElement) {
        this.shadowRoot.querySelectorAll('li').forEach(el=> {
          if (el.id === this.activeElement.idHtml) {
            el.focus()
          }
        })
      }
    }
  }

  /**
   * Fonction récursive pour construire un niveau de l'arborescence.
   *
   * @param {Array} datas Tableau des éléments du niveau actuel
   * @param {Number} level Profondeur du niveau actuel
   * @param {Object} parent Elément parent du niveau actuel
   * @returns Code HTML
   */
  renderTree(datas, level, parent) {
    return html`
      <ul id="${this.config.identifier}" class="${level === 0 ? 'root-tree' : parent.ulClasses.join(' ')}"
          role="${level === 0 ? (this.config.isMultipleSelection ? 'listbox' : 'tree') : 'group'}"
          aria-multiselectable="${level === 0 && this.config.isMultipleSelection ? 'true' : 'false'}" tabindex="${level === 0 ? '0' : '-1'}"
          aria-activedescendant="${level === 0 && this.activeElement ? this.activeElement.idHtml : ''}"
          aria-labelledby="${parent ? parent.idHtml + '-text' : ''}" @keydown="${(e) => this.onKeyDown(e)}">
        ${(datas || []).map((data) => {
          return html`
            <li id ="${data.idHtml}" class="${data.liClasses.join(' ')}" tabindex="-1" aria-expanded="${data.expanded}" 
                role="${this.config.showCheckbox ? 'option' : 'treeitem'}" aria-selected="${data.selected}">
                <div class="row" @click="${(e) => this.onClickRow(e, data)}">
                  ${this.renderIconIndocator(data)}
                  <div class="row-data ${data.selected ? 'jstree-clicked' : ''}" @click="${(e) => this.onClickItem(e, data)}">
                    ${this.renderCheckbox(data)}
                    <i class="icon ${data.iconIndex !== null ? 'icon-' + data.iconIndex : ''}" aria-hidden="true"></i>
                    <span id="${data.idHtml}-text">${data.text}</span>
                  </div>
                </div>
                ${data.loadedChildren ? this.renderTree(data.loadedChildren, level + 1 , data) : ''}
            </li>`
        })}
      </ul>
    `
  }

  /**
   * Retourne le code HTML de l'icône plié/déplié d'un élement.
   *
   * @param {Object} data Elément
   * @returns Code HTML
   */
  renderIconIndocator(data) {
    if (data.children) {
      return  html`<i class="icon icon-indicator"></i>`
    } else {
      return  html``
    }
  }

  /**
   * Retourne le code HTML de la checkbox d'un élement.
   *
   * @param {Object} data Elément
   * @returns Code HTML
   */
  renderCheckbox(data) {
    if (this.config.showCheckbox) {
      return  html`<input type="checkbox" id ="${data.idHtml}-checkbox"
        tabindex="-1" ?checked="${data.selected}" aria-checked="${data.selected}" aria-labelledby="${data.idHtml}-text">`
    } else {
      return  html``
    }
  }

  /**
   * Méthode appelé au clic sur un élément entrainant sa sélection/désélection.
   * 
   * @param {Object} event Evènement 
   * @param {Object} data Elément cliqué
   */
  onClickItem(event, data) {
    event.stopPropagation()
    this.activeElement = data
    const oldValue = data.selected
    // Si sélection simple, on désélectionne les éléments préalablement sélectionnés
    if (!this.config.isMultipleSelection) {
      this.unSelectDatas(this._datas)
    }
    data.selected = !oldValue
    
    this.requestUpdate()

    // Appel de la méthode callback passé en paramètre
    if (this.onSelection) {
      const selectedDatas = this.findDatasByProperty(this._datas, 'selected', true)
      this.onSelection(selectedDatas)
    }
  }

  /**
   * Méthode appelé au clic sur une ligne de l'arborescence entrainant son dépliage/repliage.
   * 
   * @param {Object} event Evènement 
   * @param {Object} data Elément cliqué
   */
  onClickRow(event, data) {
    event.stopPropagation()
    this.activeElement = data
    if (data.children) {
      if (data.expanded) {
        // On replie l'élément
        data.expanded = false
        if (data.ulClasses.includes('subtree-active')) {
          data.ulClasses.splice(data.ulClasses.indexOf('subtree-active'), 1)
        }
        if (data.liClasses.includes('item-active')) {
          data.liClasses.splice(data.liClasses.indexOf('item-active'), 1)
        }
        this.requestUpdate()
      } else {
        // On déplie l'élément
        if (data.children) {
          data.expanded = true
          data.ulClasses.push('subtree-active')
          data.liClasses.push('item-active')
          if (!data.areChildrenLoaded) {
            this.loadDataChildren(data, () => this.requestUpdate())
          } else {
            this.requestUpdate()
          }
        }
      }
    }
  }

  /**
   * Méthode appelé à la navigation au clavier dans l'arborescence.
   *
   * @param {Object} event Evènement
   */
  onKeyDown(event) {
    if( event.keyCode === 13 || event.keyCode === 32 ) {
      // Touche entrée ou Espace
      this.onClickItem(event, this.activeElement)
    } else if( event.keyCode === 37 ) {
      // Touche gauche
      // On replie l'élément actif
      if(this.activeElement.expanded) {
        this.activeElement.expanded = false
        if (this.activeElement.ulClasses.includes('subtree-active')) {
          this.activeElement.ulClasses.splice(this.activeElement.ulClasses.indexOf('subtree-active'), 1)
        }
        if (this.activeElement.liClasses.includes('item-active')) {
          this.activeElement.liClasses.splice(this.activeElement.liClasses.indexOf('item-active'), 1)
        }
      } else if(this.activeElement.parent && this.activeElement.parent.expanded){
        this.activeElement = this.activeElement.parent
      }
      event.preventDefault()
      event.stopPropagation()
      this.requestUpdate()
    } else if( event.keyCode === 38 ) {
      // Touche haut
      // On se déplace sur l'élement au dessus
      const sibbling = this.getUpVisibleSiblingElement(this.activeElement)
      if (sibbling != null) {
        this.activeElement = sibbling
      }
      event.preventDefault()
      event.stopPropagation()
      this.requestUpdate()
    } else if( event.keyCode === 39 ) {
      // Touche droite
      // On déplie l'élément actif
      if(this.activeElement.children) {
        if (this.activeElement.expanded) {
          if (this.activeElement.loadedChildren && this.activeElement.loadedChildren.length > 0) {
            this.activeElement = this.activeElement.loadedChildren[0]
          }
          event.preventDefault()
          event.stopPropagation()
          this.requestUpdate()
        } else {
          this.activeElement.expanded = true
          this.activeElement.ulClasses.push('subtree-active')
          this.activeElement.liClasses.push('item-active')
          this.loadDataChildren(this.activeElement, () => {
            event.preventDefault()
            event.stopPropagation()
            this.requestUpdate()
          })
        }
      } else {
        event.preventDefault()
        event.stopPropagation()
      }
    } else if( event.keyCode === 40 ) {
      // Touche bas
      // On se déplace sur l'élement en dessus
      if (this._initKeyboardNavigation) {
        if (this.activeElement.expanded && this.activeElement.loadedChildren && this.activeElement.loadedChildren.length > 0) {
          this.activeElement = this.activeElement.loadedChildren[0]
        } else {
          const sibbling = this.getDownVisibleSiblingElement(this.activeElement)
          if (sibbling != null) {
            this.activeElement = sibbling
          }
        }
      }
      event.preventDefault()
      event.stopPropagation()
      this.requestUpdate()
    }
    this._initKeyboardNavigation = true
  }

  /**
   * Initialisation des données des éléments.
   *
   * @param {Array} datas Tableau des éléments
   * @param {String} parentIdHtml Identifiant HTML du parent des éléments
   */
  initDataList(datas, parentIdHtml) {
    if (datas && datas.length > 0) {
      datas.forEach(data => {
        data.ulClasses = ['subtree']
        data.liClasses = []
        if (data.children) {
          data.liClasses.push('item-subtree')
        }
        data.expanded = false
        data.parent = null
        data.idHtml = (parentIdHtml || '') + '-' + data.id
        data.selected = false
        data.loadedChildren = null
        data.areChildrenLoaded = false
      })
    }
  }

  /**
   * Méthode récursive permettant de désélectionner tous les éléments.
   *
   * @param {Array} datas Tableau des éléments
   */
  unSelectDatas(datas) {
    datas.forEach(data => {
      data.selected = false
      if(data.loadedChildren){
        this.unSelectDatas(data.loadedChildren)
      }
    })
  }

  /**
   * Méthode récursive permettant de recherche des éléments selon une propriété.
   *
   * @param {Array} datas Tableau des éléments
   * @param {String} propertyName Nom de la propriété recherchée
   * @param {String|Number} propertyValue Valeur de la propriété recherchée
   * @returns Tableau des éléments trouvés
   */
  findDatasByProperty(datas, propertyName, propertyValue) {
    let result = []
    datas.forEach( data => {
      if(data[propertyName] === propertyValue) {
        result.push(data)
      }
      if (data.children && data.loadedChildren){
        result = result.concat(this.findDatasByProperty(data.loadedChildren, propertyName, propertyValue))
      }
    })
    return result
  }

  /**
   * Méthode chargeant les enfants d'un élément.
   *
   * @param {Object} data Elément
   * @param {Function} callback Fonction appelé après le chargement des enfants
   */
  loadDataChildren(data, callback) {
    if (typeof data.getChildren === 'function') {
      data.getChildren().then(children => {
        this.initDataList(children, data.idHtml)
        data.loadedChildren = children
        data.loadedChildren.forEach(child => child.parent = data)
        data.areChildrenLoaded = true
        if (callback) {
          callback()
        }
      })
    } else if (Array.isArray(data.getChildren) || data.getChildren instanceof Array) {
      var children = data.getChildren
      this.initDataList(children, data.idHtml)
      data.loadedChildren = children
      data.loadedChildren.forEach(child => child.parent = data)
      data.areChildrenLoaded = true
      if (callback) {
        callback()
      }
    }
  }

  /**
   * Méthode récursive permettant de trouver l'élément en dessous d'un élément donné.
   *
   * @param {Object} element Elément
   * @returns Elément en dessous
   */
  getDownVisibleSiblingElement(element) {
    if (element.parent) {
      for (let i = 0; i < element.parent.loadedChildren.length; i++) {
        if ( element.parent.loadedChildren[i].id === element.id) {
          if (i < element.parent.loadedChildren.length -1) {
            return element.parent.loadedChildren[i+1]
          } else {
            return this.getDownVisibleSiblingElement(element.parent)
          }
        }
      }
    } else {
      for (let i = 0; i < this._datas.length; i++) {
        if (this._datas[i].id === element.id) {
          if (i < this._datas.length - 1) {
            return this._datas[i+1]
          }
        }
      }
    }
    return null
  }

  /**
   * Méthode permettant de trouver l'élément au dessus d'un élément donné.
   *
   * @param {Object} element Elément
   * @returns Elément au dessus
   */
  getUpVisibleSiblingElement(element) {
    if (element.parent) {
      for (let i = 0; i < element.parent.loadedChildren.length; i++) {
        if ( element.parent.loadedChildren[i].id === element.id) {
          if (i > 0) {
            return this.getLastVisibleChild(element.parent.loadedChildren[i-1])
          } else {
            return element.parent
          }
        }
      }
    } else {
      for (let i = 0; i < this._datas.length; i++) {
        if (this._datas[i].id === element.id) {
          if (i > 0) {
            return this.getLastVisibleChild(this._datas[i-1])
          }
        }
      }
    }
    return null
  }

  /**
   * Méthode récursive permettant de trouver l'élément enfant le plus bas d'un élément donné.
   *
   * @param {Object} element Elément
   * @returns Elément le plus bas
   */
  getLastVisibleChild(element) {
    if (element.expanded && element.loadedChildren && element.loadedChildren.length > 0) {
      return this.getLastVisibleChild(element.loadedChildren[element.loadedChildren.length - 1])
    } else {
      return element
    }
  }
}

window.customElements.define('esup-js-tree', JsTree)
