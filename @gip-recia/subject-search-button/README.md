# **Esup Subject-Search-Button**

Subject-Search-Button est un webcomponent s'appuyant sur la librairie Lit pour rechercher et sélectionner une personne/d'un groupe.

Ce webcomponent utilise les webcomponents suivants :

- @gip-recia/js-tree

## **Installation**

1. Installation via npm :

```shell
npm install @gip-recia/subject-search-button
```

2. Importation du composant :

Dans un module JavaScript :

```
import '@gip-recia/subject-search-button';
```

Dans une page HTML :

```html
<script type="module">
  import './path/to/subject-search-button.js'
</script>
```

3. Ajout du composant dans l'application/composant :

```html
<esup-subject-search-button .searchId="..."> </esup-subject-search-button>
```

## **Paramètres**

Le webcomponent Subject-Search-Button accepte les paramètres suivants :

- `searchType` - Type de données recherchées. Valeur possible : 'PERSON', 'GROUP'. Si non reseignée, recherche de tous les types de données.

- `withExtended` - Indique si l'on souhaite affichée la recherche étendue.

- `searchId` - Identifiant unique du composant.

- `multiSelection` - Active ou non la multisélection.

- `config` - Objet contenant la configuration du composant.

Propriétés disponibles :

| Nom                | Type     | Obligatoire | Description                                                                                                                                                                                                                                                                                      |
| ------------------ | -------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| lang               | String   | Non         | Langue du composant. Valeur initialement disponible : 'fr', 'en'. Possibilité de rajouter des langues via la propriété labels.                                                                                                                                                                   |
| labels             | Object   | Non         | Permet de surcharger les labels affichés ou de définir de nouvelles langues.                                                                                                                                                                                                                     |
| treeGroupDatas     | Array    | Oui         | Tableau des donnés affichées dans l'arborescence des groupes (cf. propriété datas du composant @gip-recia/js-tree, les noeuds de l'arbre doivent contenir en plus les propriétés `a_attr.model.modelId.keyId` et `a_attr.model.modelId.KeyType` représentant l'identifiant et le type du noeud). |
| userDisplayedAttrs | Array    | Oui         | Tableau des propriétés de la personne/du groupe à afficher.                                                                                                                                                                                                                                      |
| extendedAttrs      | Array    | Non         | Tableau des attributs disponibles pour la recherhce étendue (obligatoire si withExtended est à true).                                                                                                                                                                                            |
| searchUsers        | Function | Oui         | Fonction retournant une promise permettant de rechercher des personnes à partir d'un texte.                                                                                                                                                                                                      |
| getGroupMembers    | Function | Oui         | Fonction retournant une promise permettant de rechercher les personnes appartenant à un groupe.                                                                                                                                                                                                  |

- `onSelection` - Fonction appelée lors de la sélection de personnes/groupes.

## **Variables CSS**

### **Modification de style**

Plusieurs variables CSS peuvent être définis pour personnaliser la pagination :

| Nom                                    | Description                                                        |
| ---------------------------------------|------------------------------------------------------------------- |
| --text-color-pagination                | Permet de modifier la couleur du texte des éléments de pagination  |
| --selected-text-color-pagination       | Permet de modifier la couleur du texte de la page sélectionnée     |
| --selected-background-color-pagination | Permet de modifier la couleur de fond de la page sélectionnée      |

Par défaut le webcomponent Subject-Search-Button s'appuie sur les fonts Font-Awesome pour afficher des icônes (via des pseudo-elements). Il est cependant possible de personnaliser les icônes affichées via les propriétés suivantes :

| Nom                         | Description                                                                                                               |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| --icon-plus-font-family     | Permet de configurer la famille de police de caractères de l'icône des boutons principaux                                 |
| --icon-plus-font-weight     | Permet de configurer poids de la police de caractères de l'icône des boutons principaux                                   |
| --icon-plus-content         | Caractère unicode dans la famille de police de caractères utilisée pour l'icône des boutons principaux                    |
| --icon-cancel-font-family   | Permet de configurer la famille de police de caractères de l'icône du bouton d'annulation                                 |
| --icon-cancel-font-weight   | Permet de configurer poids de la police de caractères de l'icône du bouton d'annulation                                   |
| --icon-cancel-content       | Caractère unicode dans la famille de police de caractères utilisée pour l'icône du bouton d'annulation                    |
| --icon-validate-font-family | Permet de configurer la famille de police de caractères de l'icône du bouton de validation                                |
| --icon-validate-font-weight | Permet de configurer poids de la police de caractères de l'icône du bouton de validation                                  |
| --icon-validate-content     | Caractère unicode dans la famille de police de caractères utilisée pour l'icône du bouton de validation                   |
| --icon-question-font-family | Permet de configurer la famille de police de caractères de l'icône d'information de la recherche utilisateur              |
| --icon-question-font-weight | Permet de configurer poids de la police de caractères de l'icône d'information de la recherche utilisateur                |
| --icon-question-content     | Caractère unicode dans la famille de police de caractères utilisée pour l'icône d'information de la recherche utilisateur |
| --icon-search-font-family   | Permet de configurer la famille de police de caractères de l'icône du bouton de recherche                                 |
| --icon-search-font-weight   | Permet de configurer poids de la police de caractères de l'icône du bouton de recherche                                   |
| --icon-search-content       | Caractère unicode dans la famille de police de caractères utilisée pour l'icône du bouton de recherche                    |

Les variables CSS définies dans le webcomponent @gip-recia/js-tree peuvent être utilisées pour également personnaliser le webcomponent.

### **Utilisation**

Exemple de configuration des variables css dans un fichier de style :

```css
esup-subject-search-button {
  --icon-plus-font-family: 'Font Awesome 5 Free';
  --icon-plus-font-weight: 900;
  --icon-plus-font-content: '\\f128';
}
```

## **Test du webcomponent**

Pour tester le webcomponent, exécuter la commande suivante :

```shell
npm start
```

Une page avec le webcomponent est alors disponible à l'adresse http://localhost:8000.
