import { LitElement, html } from 'lit'
import { evaluatorStyle } from './evaluator-style.js'

/**
 * Evaluators component.
 */
export class Evaluators extends LitElement {

  static get styles() {
    return [
      evaluatorStyle
    ]
  }

  static get properties() {
    return {

      /**
       * Tableau des évaluateurs à afficher.
       * @type {Array}
       */
      collection: { attribute: false },

      /**
       * Configuration des évaluateurs.
       * @type {Object}
       */
      config: { attribute: false }
    }
  }

  render() {
    return html`
      <ul class="evaluator">
        ${(this.collection || []).map((member) => {
          return html`
            <li>
              <esup-evaluator .evaluator="${member}" .config="${this.config}" .isChild="${true}" .simple="${false}"></esup-evaluator>
            </li>
          `
        })}
      </ul>
    `
  }
}

if (!customElements.get('esup-evaluators')) {
  customElements.define('esup-evaluators', Evaluators)
}
