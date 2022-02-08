# **Esup Subject-Infos**

Evaluator et Edit-Evaluator sont des webcomponents s'appuyant sur la librairie Lit pour afficher/modifier un évaluateur.

Ces webcomponents utilisent les webcomponents suivants :

* @gip-recia/subject-infos
* @gip-recia/subject-search-button

## **Installation**

1. Installation via npm :

```shell
npm install @gip-recia/evaluator
```

2. Importation du composant :

Dans un module JavaScript :

```
import '@gip-recia/evaluator';
```

Dans une page HTML :

```html
<script type="module">
import './path/to/index.js';
</script>
```

3. Ajout du composant dans l'application/composant :

```html
<esup-evaluator .evaluator='...'>
</esup-evaluator>
<esup-edit-evaluator .evaluator='...'>
</esup-edit-evaluator>
```

## **Webcomponent Evaluator**

### **Paramètres**

Le webcomponent Evaluator accepte les paramètres suivants :
- `evaluator` - Objet contenant les données de l'évaluator à afficher.

Les propriétés de l'objet varient selon le context :

|Nom|Type|Obligatoire|Description|
|--------|--------|--------|--------|
|class|String|Oui|Type d'évaluateur (valeurs possibles : OPERATOR/AUTHENTICATED/USERATTRIBUTES/USERMULTIVALUEDATTRIBUTES/USERGROUP)|
|evaluators|Array|Non|Tableau des évaluateurs enfants si l'évaluateur est une opération|
|type|String|Non|Type d'opération si l'évaluateur est une opération (valeurs possibles : OR/AND/NOT)|
|group|String|Non|Identifiant du groupe si l'évaluateur est un groupe|
|attribute|String|Non|Attribut de l'évaluateur si l'évaluateur est une personne|
|mode|String|Non|Mode de l'évaluateur si l'évaluateur est une personne|
|value|String|Non|Valeur de l'évaluateur si l'évaluateur est une personne|

- `simple` - Booléen indiquant si l'évaluateur est affiché en mode simple ou étendu.

- `config` - Objet contenant la configuration du composant.

Propriétés disponibles :
|Nom|Type|Obligatoire|Description|
|--------|--------|--------|--------|
|lang|String|Non|Langue du composant. Valeur initialement disponible : 'fr', 'en'. Possibilité de rajouter des langues via la propriété labels|
|labels|Object|Non|Permet de surcharger les labels affichés ou de définir de nouvelles langues.|
|resolveKey|Boolean|Non|Indique s'il faut recharger les données de la personne/du groupe si nécessaire. Par défaut: true.|
|getSubjectInfos|Function|Oui|Fonction permettant de récupérer les données d'une personne/d'un groupe. Paramètres : keyType et keyId de la personne/du groupe. Retourne : une promise avec les infos de la personne/du groupe.|
|userDisplayedAttrs|Array|Oui|Tableau des propriétés de la personne/du groupe à afficher.|

### **Variables CSS**

#### **Modification de style**

Les variables CSS définies dans le webcomponent @gip-recia/subject-infos peuvent être utilisées pour personnaliser le webcomponent.

## **Webcomponent Edit-Evaluator**

### **Paramètres**

Le webcomponent Edit-Evaluator accepte les paramètres suivants :
- `evaluator` - Objet contenant les données de l'évaluator à modifier.

Les propriétés de l'objet varient selon le context :

|Nom|Type|Obligatoire|Description|
|--------|--------|--------|--------|
|class|String|Oui|Type d'évaluateur (valeurs possibles : OPERATOR/AUTHENTICATED/USERATTRIBUTES/USERMULTIVALUEDATTRIBUTES/USERGROUP)|
|evaluators|Array|Non|Tableau des évaluateurs enfants si l'évaluateur est une opération|
|type|String|Non|Type d'opération si l'évaluateur est une opération|
|group|String|Non|Identifiant du groupe si l'évaluateur est un groupe|
|attribute|String|Non|Attribut de l'évaluateur si l'évaluateur est une personne|
|mode|String|Non|Mode de l'évaluateur si l'évaluateur est une personne|
|value|String|Non|Valeur de l'évaluateur si l'évaluateur est une personne|

- `config` - Objet contenant la configuration du composant.

Propriétés disponibles :
|Nom|Type|Obligatoire|Description|
|--------|--------|--------|--------|
|lang|String|Non|Langue du composant. Valeur initialement disponible : 'fr', 'en'. Possibilité de rajouter des langues via la propriété labels|
|labels|Object|Non|Permet de surcharger les labels affichés ou de définir de nouvelles langues.|
|resolveKey|Boolean|Non|Indique s'il faut recharger les données de la personne/du groupe si nécessaire. Par défaut: true.|
|getSubjectInfos|Function|Oui|Fonction permettant de récupérer les données d'une personne/d'un groupe. Paramètres : keyType et keyId de la personne/du groupe. Retourne : une promise avec les infos de la personne/du groupe.|
|userDisplayedAttrs|Array|Oui|Tableau des propriétés de la personne/du groupe à afficher.|
|operators|Array|Oui|Liste des opérateurs disponibles.|
|stringEvaluators|Array|Oui|Liste des modes disponibles.|
|userAttributes|Array|Oui|Liste des attributs utilisateur disponibles.|
|treeGroupDatas|Array|Oui|Tableau des donnés affichées dans l'arborescence des groupes (cf. propriété datas du composant @gip-recia/js-tree, les noeuds de l'arbre doivent contenir en plus les propriétés `a_attr.model.modelId.keyId` et `a_attr.model.modelId.KeyType` représentant l'identifiant et le type du noeud).|
|userDisplayedAttrs|Array|Oui|Tableau des propriétés de la personne/du groupe à afficher.|
|searchUsers|Function|Oui|Fonction retournant une promise permettant de rechercher des personnes à partir d'un texte.|
|getGroupMembers|Function|Oui|Fonction retournant une promise permettant de rechercher les personnes appartenant à un groupe.|

- `onModification` - Fonction appelée lors de la modification de l'évaluateur.

### **Fonctions**

Plusieurs fonctions sont disponibles pour intéragir avec le webcomponent :

- `isValid` - Permet de s'avoir si l'évaluateur modifié est valide.

### **Variables CSS**

#### **Modification de style**

Par défaut le webcomponent Edit-Evaluator s'appuie sur les fonts Font-Awesome pour afficher des icônes (via des pseudo-elements). Il est cependant possible de personnaliser les icônes affichées via les propriétés suivantes :

|Nom|Description|
|--------|--------|
|--icon-remove-font-family|Permet de configurer la famille de police de caractères de l'icône du bouton de suppression|
|--icon-remove-font-weight|Permet de configurer poids de la police de caractères de l'icône du bouton de suppression|
|--icon-remove-content|Caractère unicode dans la famille de police de caractères utilisée pour l'icône du bouton de suppression|

Les variables CSS définies dans les webcomponents @gip-recia/subject-infos et @gip-recia/subject-search-button peuvent être utilisées pour personnaliser le webcomponent.

#### **Utilisation**

Exemple de configuration des variables css dans un fichier de style :

```css
esup-edit-evaluator {
    --icon-remove-font-family: 'Font Awesome 5 Free';
    --icon-remove-font-weight: 900;
    --icon-remove-font-content: '\\f128';
}
``` 

## **Test des webcomponents**

Pour tester les webcomponents, exécuter la commande suivante :
```shell
npm run dev
```

Une page avec les webcomponents est alors disponible à l'adresse http://localhost:8080.
