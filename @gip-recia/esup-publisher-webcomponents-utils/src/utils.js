/**
 * Classe contenant des méthodes utilitaires.
 */
export class Utils {

  /**
   * Retourne true si la valeur fournit est définie.
   *
   * @param {Object} value Objet à traiter
   * @returns True si l'objet est défini, False sinon
   */
  static isDefined(value) {
    return typeof value !== 'undefined'
  }

  /**
   * Retourne true si la valeur fournit est un tableau.
   *
   * @param {Object} arr Objet à traiter
   * @returns True si l'objet est un tableau, False sinon
   */
  static isArray(arr) {
    return Array.isArray(arr) || arr instanceof Array
  }
}
