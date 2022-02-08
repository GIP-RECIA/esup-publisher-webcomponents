import { LitElement, html, css } from 'lit'
import { evaluatorStyle } from './evaluator-style.js'

/**
 * Simple Evaluators component.
 */
export class SimpleEvaluators extends LitElement {

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
              <esup-evaluator .evaluator="${member}" .config="${this.config}" .isChild="${true}" .simple="${true}"></esup-evaluator>
            </li>
          `
        })}
      </ul>
    `
  }
}

if (!customElements.get('esup-simple-evaluators')) {
  customElements.define('esup-simple-evaluators', SimpleEvaluators)
}
