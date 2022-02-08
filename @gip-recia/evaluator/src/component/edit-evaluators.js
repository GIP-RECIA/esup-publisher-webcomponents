import { LitElement, html } from 'lit'

/**
 * EditEvaluators component.
 */
export class EditEvaluators extends LitElement {

  static get properties() {
    return {

      /**
       * Tableau des évaluateurs à traiter.
       * @type {Array}
       */
      collection: { attribute: false },

      /**
       * Configuration des edit-evaluator.
       * @type {Object}
       */
      config: { attribute: false }
    }
  }

  render() {
    return html`
      <ul class='edit-evaluator'>
        ${(this.collection || []).map((member) => {
          return html`
            <li>
              <esup-edit-evaluator .evaluator="${member}" .isChild="${true}" .config="${this.config}"
                @childUpdate="${(e) => this._onChildUpdateEvent(e, member)}">
              </edit-evaluator>
            </li>
          `
        })}
      </ul>
    `
  }

  /**
   * Méthode appelé à la réception d'un evènement de mise à jour d'un évaluateur.
   *
   * @param {Object} event Evènement
   * @param {Object} evaluator Evaluateur modifié
   */
  _onChildUpdateEvent(event, evaluator) {
    // Ajout de l'index de l'évaluateur modifié dans l'évènement qu'on laisse se propager au parent
    event.detail.index = this.collection.indexOf(evaluator)
  }
}

if (!customElements.get('esup-edit-evaluators')) {
  customElements.define('esup-edit-evaluators', EditEvaluators)
}
