import { LitElement, html } from 'lit'
import { ifDefined } from 'lit-html/directives/if-defined.js'
import { jsTreeStyle } from './js-tree-style.js'

/**
 * Js-Tree component.
 */
export class JsTree extends LitElement {
  static get styles() {
    return [jsTreeStyle]
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
      onSelection: { attribute: false }
    }
  }

  constructor() {
    super()

    this._datas = []
    this._initKeyboardNavigation = false
    this._activeElement = null
  }

  render() {
    return this._renderTree(this._datas, 0, null)
  }

  willUpdate(changedProperties) {
    super.willUpdate(changedProperties)

    // Si les propriétés datas ou config sont modifiées, on initialise les éléments
    let initDatas = false
    if (changedProperties) {
      initDatas = changedProperties.has('datas') || changedProperties.has('config')
    }

    if (initDatas) {
      // Initialisation des données
      this._datas = this.datas
      this._initKeyboardNavigation = false
      this._initDataList(this._datas, this.config.identifier)

      // Initialisation de la navigation au clavier
      this._activeElement = null
      if (this._datas && this._datas.length > 0) {
        if (this.config.sort) {
          this._activeElement =  this._datas.sort((node1, node2) =>
            node1.text.localeCompare(node2.text)
          )[0]
        } else {
          this._activeElement = this._datas[0]
        }
      }
    }
  }

  updated(changedProperties) {
    super.updated(changedProperties)

    // Cochage des checkbox des éléments sélectionnés
    this.shadowRoot.querySelectorAll('input[type="checkbox"]').forEach(el => {
      const data = this._findDatasByProperty(
        this._datas,
        'idHtml',
        el.id.replace('-checkbox', '')
      )
      if (data && data.length === 1) {
        el.checked = data[0].selected
      }
    })

    // Focus sur l'élément actif
    if (this._initKeyboardNavigation && this._activeElement) {
      this.shadowRoot.querySelectorAll('li').forEach(el => {
        if (el.id === this._activeElement.idHtml) {
          el.focus()
        }
      })
    }
  }

  /**
   * Méthode permettant de sélectionner un noeud à partir de son id.
   *
   * @param {String} id Identifiant du noeud
   */
  selectNode(id) {
    if (id) {
      const data = this._findDatasByProperty(this._datas, 'id', id)
      if (data && data.length > 0 && !data[0].selected) {
        this._onClickItem(null, data[0])
      }
    }
  }

  /**
   * Méthode permettant de désélectionner tous les noeuds.
   */
  deselectAllNodes() {
    const previousSelectedDatas = this._findDatasByProperty(
      this._datas,
      'selected',
      true
    )
    if (previousSelectedDatas && previousSelectedDatas.length > 0) {
      this._unSelectDatas(this._datas)

      this.requestUpdate()

      // Information d'une sélection/désélection
      this._sendSelection()
    }
  }

  /**
   * Méthode permettant d'ajouter un nouveau noeud.
   *
   * @param {String} idParent Identifiant du noeud parent
   * @param {Object} properties Propriétés du nouveau noeud
   */
  addNode(idParent, properties) {
    if (idParent) {
      const parent = this._findDatasByProperty(this._datas, 'id', idParent)
      if (parent && parent.length > 0 && parent[0].areChildrenLoaded) {
        this._initDataList([properties], parent[0].idHtml)
        properties.parent = parent[0]
        parent[0].loadedChildren.push(properties)

        this.requestUpdate()
      }
    } else {
      this._initDataList([properties], this.config.identifier)
      properties.parent = null
      this._datas.push(properties)

      this.requestUpdate()
    }
  }

  /**
   * Méthode permettant de supprimer un noeud à partir de son id.
   *
   * @param {String} id Identifiant du noeud
   */
  deleteNode(id) {
    if (id) {
      const data = this._findDatasByProperty(this._datas, 'id', id)
      if (data && data.length > 0) {
        const previousSelectedDatas = this._findDatasByProperty(
          this._datas,
          'selected',
          true
        )
        if (data[0].parent) {
          data[0].parent.loadedChildren = data[0].parent.loadedChildren.filter(
            child => child.id !== data[0].id
          )
        } else {
          this._datas = this._datas.filter(child => child.id !== data[0].id)
        }

        this.requestUpdate()

        const nextSelectedDatas = this._findDatasByProperty(
          this._datas,
          'selected',
          true
        )
        if (previousSelectedDatas.length !== nextSelectedDatas.length) {
          // Information d'une désélection
          this._sendSelection()
        }
      }
    }
  }

  /**
   * Méthode permettant de recharger un noeud.
   *
   * @param {String} id Identifiant du noeud
   * @param {Object} properties Nouvelles propriétés du noeud
   * @param {Boolean} refreshChildren Indique s'il faut rafraichir les enfants
   */
  refreshNode(id, properties, refreshChildren = false) {
    if (id) {
      const data = this._findDatasByProperty(this._datas, 'id', id)
      if (data && data.length > 0) {
        const previousSelectedDatas = this._findDatasByProperty(
          this._datas,
          'selected',
          true
        )

        this._refreshNodes(data[0], properties, refreshChildren).then(() => {
          this.requestUpdate()

          const nextSelectedDatas = this._findDatasByProperty(
            this._datas,
            'selected',
            true
          )
          if (previousSelectedDatas.length !== nextSelectedDatas.length) {
            // Information d'une désélection
            this._sendSelection()
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
  _renderTree(datas, level, parent) {
    // Tri des noeuds si demandé
    if (this.config.sort) {
      datas.sort((node1, node2) =>
        node1.text.localeCompare(node2.text)
      )
    }
    // prettier-ignore
    return html`
      <ul id="${parent ? parent.idHtml + '-children' : this.config.identifier}" class="${level === 0 ? 'root-tree' : parent.ulClasses.join(' ')}"
          role="${level === 0 ? 'tree' : 'group'}"
          aria-multiselectable="${ifDefined(level === 0 && this.config.isMultipleSelection ? 'true' : undefined)}" tabindex="${level === 0 ? '0' : '-1'}"
          aria-activedescendant="${ifDefined(level === 0 && this._activeElement ? this._activeElement.idHtml : undefined)}"
          aria-labelledby="${ifDefined(parent ? parent.idHtml + '-text' : undefined)}" @keydown="${(e) => this._onKeyDown(e)}">
        ${(datas || []).map((data) => {
          return html`
            <li id ="${data.idHtml}" class="${data.liClasses.join(' ')}" tabindex="-1" aria-expanded="${data.expanded}" 
                role="treeitem" aria-selected="${data.selected}" aria-owns="${ifDefined(data.loadedChildren ? data.idHtml + '-children' : undefined)}">
                <div class="row" @click="${(e) => this._onClickRow(e, data)}">
                  ${this._renderIconIndicator(data)}
                  <div class="row-data d-flex align-items-center ${data.selected ? 'jstree-clicked' : ''}" @click="${(e) => this._onClickItem(e, data)}">
                    ${this._renderCheckbox(data)}
                    <i class="icon ${data.iconIndex !== null ? 'icon-' + data.iconIndex : ''}" aria-hidden="true"></i>
                    <span id="${data.idHtml}-text">${data.text}</span>
                  </div>
                </div>
                ${data.loadedChildren ? this._renderTree(data.loadedChildren, level + 1 , data) : ''}
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
  _renderIconIndicator(data) {
    if (data.children && (!data.areChildrenLoaded || (data.loadedChildren && data.loadedChildren.length > 0))) {
      // prettier-ignore
      return  html`<i class="icon icon-indicator"></i>`
    } else {
      return html``
    }
  }

  /**
   * Retourne le code HTML de la checkbox d'un élement.
   *
   * @param {Object} data Elément
   * @returns Code HTML
   */
  _renderCheckbox(data) {
    if (this.config.showCheckbox) {
      // prettier-ignore
      return  html`<input type="checkbox" id ="${data.idHtml}-checkbox"
        tabindex="-1" ?checked="${data.selected}" aria-labelledby="${data.idHtml}-text"
        ?disabled="${this.config.allowDeselection === false && data.selected}">`
    } else {
      return html``
    }
  }

  /**
   * Méthode appelé au clic sur un élément entrainant sa sélection/désélection.
   *
   * @param {Object} event Evènement
   * @param {Object} data Elément cliqué
   */
  _onClickItem(event, data) {
    if (event) {
      event.stopPropagation()
    }
    this._activeElement = data

    if (this.config.allowDeselection !== false || !data.selected) {
      const oldValue = data.selected
      // Si sélection simple, on désélectionne les éléments préalablement sélectionnés
      if (!this.config.isMultipleSelection) {
        this._unSelectDatas(this._datas)
      }
      data.selected = !oldValue

      this.requestUpdate()

      // Information d'une sélection/désélection
      this._sendSelection()
    }
  }

  /**
   * Méthode appelé au clic sur une ligne de l'arborescence entrainant son dépliage/repliage.
   *
   * @param {Object} event Evènement
   * @param {Object} data Elément cliqué
   */
  _onClickRow(event, data) {
    event.stopPropagation()
    this._activeElement = data
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
            this._loadDataChildren(data, () => this.requestUpdate())
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
  _onKeyDown(event) {
    if (event.keyCode === 13 || event.keyCode === 32) {
      // Touche entrée ou Espace
      this._onClickItem(event, this._activeElement)
    } else if (event.keyCode === 37) {
      // Touche gauche
      // On replie l'élément actif
      if (this._activeElement.expanded) {
        this._activeElement.expanded = false
        if (this._activeElement.ulClasses.includes('subtree-active')) {
          this._activeElement.ulClasses.splice(
            this._activeElement.ulClasses.indexOf('subtree-active'),
            1
          )
        }
        if (this._activeElement.liClasses.includes('item-active')) {
          this._activeElement.liClasses.splice(
            this._activeElement.liClasses.indexOf('item-active'),
            1
          )
        }
      } else if (
        this._activeElement.parent &&
        this._activeElement.parent.expanded
      ) {
        this._activeElement = this._activeElement.parent
      }
      event.preventDefault()
      event.stopPropagation()
      this.requestUpdate()
    } else if (event.keyCode === 38) {
      // Touche haut
      // On se déplace sur l'élement au dessus
      const sibbling = this._getUpVisibleSiblingElement(this._activeElement)
      if (sibbling != null) {
        this._activeElement = sibbling
      }
      event.preventDefault()
      event.stopPropagation()
      this.requestUpdate()
    } else if (event.keyCode === 39) {
      // Touche droite
      // On déplie l'élément actif
      if (this._activeElement.children) {
        if (this._activeElement.expanded) {
          if (
            this._activeElement.loadedChildren &&
            this._activeElement.loadedChildren.length > 0
          ) {
            this._activeElement = this._activeElement.loadedChildren[0]
          }
          event.preventDefault()
          event.stopPropagation()
          this.requestUpdate()
        } else {
          this._activeElement.expanded = true
          this._activeElement.ulClasses.push('subtree-active')
          this._activeElement.liClasses.push('item-active')
          if (!this._activeElement.areChildrenLoaded) {
            this._loadDataChildren(this._activeElement, () => {
              event.preventDefault()
              event.stopPropagation()
              this.requestUpdate()
            })
          } else {
            event.preventDefault()
            event.stopPropagation()
            this.requestUpdate()
          }
        }
      } else {
        event.preventDefault()
        event.stopPropagation()
      }
    } else if (event.keyCode === 40) {
      // Touche bas
      // On se déplace sur l'élement en dessus
      if (this._initKeyboardNavigation) {
        if (
          this._activeElement.expanded &&
          this._activeElement.loadedChildren &&
          this._activeElement.loadedChildren.length > 0
        ) {
          this._activeElement = this._activeElement.loadedChildren[0]
        } else {
          const sibbling = this._getDownVisibleSiblingElement(
            this._activeElement
          )
          if (sibbling != null) {
            this._activeElement = sibbling
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
  _initDataList(datas, parentIdHtml) {
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
  _unSelectDatas(datas) {
    datas.forEach(data => {
      data.selected = false
      if (data.loadedChildren) {
        this._unSelectDatas(data.loadedChildren)
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
  _findDatasByProperty(datas, propertyName, propertyValue) {
    let result = []
    datas.forEach(data => {
      if (data[propertyName] === propertyValue) {
        result.push(data)
      }
      if (data.children && data.loadedChildren) {
        result = result.concat(
          this._findDatasByProperty(
            data.loadedChildren,
            propertyName,
            propertyValue
          )
        )
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
  _loadDataChildren(data, callback) {
    this._getChildren(data, children => {
      this._initDataList(children, data.idHtml)
      data.loadedChildren = children
      data.loadedChildren.forEach(child => (child.parent = data))
      data.areChildrenLoaded = true
      if (callback) {
        callback()
      }
    })
  }

  /**
   * Méthode récupérant les enfants d'un élément.
   *
   * @param {Object} data Elément
   * @param {Function} callback Fonction appelé après la récupération des enfants
   */
  _getChildren(data, callback) {
    if (typeof data.getChildren === 'function') {
      data.getChildren().then(children => {
        callback(children)
      })
    } else if (
      Array.isArray(data.getChildren) ||
      data.getChildren instanceof Array
    ) {
      callback(data.getChildren)
    }
  }

  /**
   * Méthode récursive permettant de trouver l'élément en dessous d'un élément donné.
   *
   * @param {Object} element Elément
   * @returns Elément en dessous
   */
  _getDownVisibleSiblingElement(element) {
    if (element.parent) {
      for (let i = 0; i < element.parent.loadedChildren.length; i++) {
        if (element.parent.loadedChildren[i].id === element.id) {
          if (i < element.parent.loadedChildren.length - 1) {
            return element.parent.loadedChildren[i + 1]
          } else {
            return this._getDownVisibleSiblingElement(element.parent)
          }
        }
      }
    } else {
      for (let i = 0; i < this._datas.length; i++) {
        if (this._datas[i].id === element.id) {
          if (i < this._datas.length - 1) {
            return this._datas[i + 1]
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
  _getUpVisibleSiblingElement(element) {
    if (element.parent) {
      for (let i = 0; i < element.parent.loadedChildren.length; i++) {
        if (element.parent.loadedChildren[i].id === element.id) {
          if (i > 0) {
            return this._getLastVisibleChild(
              element.parent.loadedChildren[i - 1]
            )
          } else {
            return element.parent
          }
        }
      }
    } else {
      for (let i = 0; i < this._datas.length; i++) {
        if (this._datas[i].id === element.id) {
          if (i > 0) {
            return this._getLastVisibleChild(this._datas[i - 1])
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
  _getLastVisibleChild(element) {
    if (
      element.expanded &&
      element.loadedChildren &&
      element.loadedChildren.length > 0
    ) {
      return this._getLastVisibleChild(
        element.loadedChildren[element.loadedChildren.length - 1]
      )
    } else {
      return element
    }
  }

  /**
   * Méthode pour indiquer qu'une sélection/désélection a été faite.
   */
  _sendSelection() {
    // Appel de la méthode pour informer d'une sélection/désélection
    if (this.onSelection) {
      const selectedDatas = this._findDatasByProperty(
        this._datas,
        'selected',
        true
      )
      this.onSelection(selectedDatas)
    }
  }

  /**
   * Méthode permettant de recharger des noeuds.
   *
   * @param {Object} oldNode Anciennes données du noeud
   * @param {Object} newNode Nouvelles données du noeud
   * @param {Boolean} refreshChildren Indique s'il faut rafraichir les enfants du noeud
   */
  _refreshNodes(oldNode, newNode, refreshChildren) {
    return new Promise(resolve => {
      Object.assign(oldNode, newNode)
      if (refreshChildren && oldNode.children && oldNode.areChildrenLoaded) {
        this._getChildren(oldNode, newChildren => {
          // Suppresson des enfants qui ne sont plus là
          const newIds = newChildren.map(c => c.id)
          oldNode.loadedChildren = oldNode.loadedChildren.filter(child =>
            newIds.includes(child.id)
          )
          // Ajout/Mise à jour des enfants
          let index = 0
          const promises = []
          newChildren.forEach(newChild => {
            const oldChild = oldNode.loadedChildren.find(
              c => c.id === newChild.id
            )
            if (!oldChild) {
              this._initDataList([newChild], oldNode.idHtml)
              newChild.parent = oldNode
              oldNode.loadedChildren.splice(index, 0, newChild)
            } else {
              promises.push(
                this._refreshNodes(oldChild, newChild, refreshChildren)
              )
            }
            index++
          })
          Promise.all(promises).then(() => resolve())
        })
      } else {
        resolve()
      }
    })
  }
}

if (!customElements.get('esup-js-tree')) {
  customElements.define('esup-js-tree', JsTree)
}
