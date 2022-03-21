/**
 * Classe permettant de récupérer un label selon la langue définie.
 */
export class Localization {

  /**
   * Constructeur avec arguments.
   *
   * @param {Object} labels Labels
   * @param {String} lang Langue
   */
  constructor(labels, lang) {
    this.labels = labels
    this.lang = lang
  }

  /**
   * Merge des labels dans ceux déjà définis.
   *
   * @param {Object} labels Labels à merger
   */
  mergeLabels(labels) {
    Object.keys(labels).forEach(lang => {
      if (!Object.keys(this.labels).includes(lang)) {
        this.labels[lang] = labels[lang]
      } else {
        Object.keys(labels[lang]).forEach(key => {
          this.labels[lang][key] = labels[lang][key]
        })
      }
    })
  }

  /**
   * Retourne un label dans la langue définie.
   *
   * @param {String} key    Clé du label
   * @param {Object} params Paramètres à insérer dans le label
   * @returns Label dans la langue définie
   */
  getLabel(key, params) {
    var label
    if (this.labels[this.lang]) {
      label = this.labels[this.lang][key] || key
    } else {
      label = key
    }
    if (params) {
      label = label.replace(/{([^}]+)}/g, function (match, param) {
        return typeof params[param] != 'undefined' ? params[param] : match
      })
    }
    return label
  }
}
