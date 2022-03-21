# **Esup Subject-Infos**

Subject-Infos est un webcomponent s'appuyant sur la librairie Lit pour afficher le détail d'une personne/d'un groupe.

## **Installation**

1. Installation via npm :

```shell
npm install @gip-recia/subject-infos
```

2. Importation du composant :

Dans un module JavaScript :

```
import '@gip-recia/subject-infos';
```

Dans une page HTML :

```html
<script type="module">
  import './path/to/subject-infos.js'
</script>
```

3. Ajout du composant dans l'application/composant :

```html
<esup-subject-infos .subject="..."> </esup-subject-infos>
```

## **Paramètres**

Le webcomponent Subject-Infos accepte les paramètres suivants :

- `subject` - Objet contenant les éléments permettant l'affichage de la personne/du groupe.

Les propriétés de l'objet varient selon le context :

Contexte DTO :

| Nom                   | Type    | Obligatoire | Description                                                            |
| --------------------- | ------- | ----------- | ---------------------------------------------------------------------- |
| modelId.keyId         | String  | Oui         | Identifiant de la personne/du groupe                                   |
| modelId.keyType       | String  | Oui         | Type associé à la personne/au groupe                                   |
| displayName           | String  | Oui         | Nom de de la personne/du groupe a afficher                             |
| foundOnExternalSource | Boolean | Oui         | Indique si la personne/le group a été trouvé dans les sources externes |

Contexte Key :

| Nom     | Type   | Obligatoire | Description                          |
| ------- | ------ | ----------- | ------------------------------------ |
| keyId   | String | Oui         | Identifiant de la personne/du groupe |
| keyType | String | Oui         | Type associé à la personne/au groupe |

Contexte ExtendedKey :

| Nom          | Type   | Obligatoire | Description                                  |
| ------------ | ------ | ----------- | -------------------------------------------- |
| keyType      | String | Oui         | Type associé à la personne/au groupe         |
| keyValue     | String | Oui         | Valeur associé à la personne/au groupe       |
| keyAttribute | String | Oui         | Attribut de la personne/du groupe à afficher |

- `config` - Objet contenant la configuration du composant.

Propriétés disponibles :

| Nom                | Type     | Obligatoire | Description                                                                                                                                                                                      |
| ------------------ | -------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| lang               | String   | Non         | Langue du composant. Valeur initialement disponible : 'fr', 'en'. Possibilité de rajouter des langues via la propriété labels                                                                    |
| labels             | Object   | Non         | Permet de surcharger les labels affichés ou de définir de nouvelles langues.                                                                                                                     |
| resolveKey         | Boolean  | Non         | Indique s'il faut recharger les données de la personne/du groupe si nécessaire. Par défaut: true.                                                                                                |
| getSubjectInfos    | Function | Oui         | Fonction permettant de récupérer les données d'une personne/d'un groupe. Paramètres : keyType et keyId de la personne/du groupe. Retourne : une promise avec les infos de la personne/du groupe. |
| userDisplayedAttrs | Array    | Oui         | Tableau des propriétés de la personne/du groupe à afficher.                                                                                                                                      |

- `onSubjectClicked` - Fonction appelée lors du clic sur la personne/le groupe.

## **Slot**

Il est possoble d'afficher un élément devant la personne/le groupe en passant un enfant au composant. L'élément enfant est alors affiché via un élément slot.

Exemple :

```html
<esup-color-palette-picker .color="..." .config="..." .onColorChanged="...">
  <span>Test</span>
</esup-color-palette-picker>
```

## **Variables CSS**

### **Modification de style**

Plusieurs variables CSS peuvent être définis pour personnaliser le composant :

| Nom                                    | Description                                                                      |
| -------------------------------------- | -------------------------------------------------------------------------------- |
| --subject-infos-text-color             | Permet de modifier la couleur du lien de l'élément                               |
| --subject-infos-focus-background-color | Permet de modifier la couleur de fond du lien de l'élément à l'état focus/hover  |
| --subject-infos-focus-text-color       | Permet de modifier la couleur du texte du lien de l'élément à l'état focus/hover |

Par défaut le webcomponent Subject-Infos s'appuie sur les fonts Font-Awesome pour afficher des icônes (via des pseudo-elements). Il est cependant possible de personnaliser les icônes affichées via les propriétés suivantes :

| Nom                         | Description                                                                                                                 |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| --icon-question-font-family | Permet de configurer la famille de police de caractères de l'icône de type de sujet inconnu                                 |
| --icon-question-font-weight | Permet de configurer poids de la police de caractères de l'icône de type de sujet inconnu                                   |
| --icon-question-content     | Caractère unicode dans la famille de police de caractères utilisée pour l'icône de type inconnu                             |
| --icon-users-font-family    | Permet de configurer la famille de police de caractères de l'icône de type du sujet dans le cas d'un groupe                 |
| --icon-users-font-weight    | Permet de configurer poids de la police de caractères de l'icône de type du sujet dans le cas d'un groupe                   |
| --icon-users-content        | Caractère unicode dans la famille de police de caractères utilisée pour l'icône de type du sujet dans le cas d'un groupe    |
| --icon-user-font-family     | Permet de configurer la famille de police de caractères de l'icône de type du sujet dans le cas d'une personne              |
| --icon-user-font-weight     | Permet de configurer poids de la police de caractères de l'icône de type du sujet dans le cas d'une personne                |
| --icon-user-content         | Caractère unicode dans la famille de police de caractères utilisée pour l'icône de type du sujet dans le cas d'une personne |

### **Utilisation**

Exemple de configuration des variables css dans un fichier de style :

```css
esup-subject-infos {
  --subject-infos-text-color: #fc0;
  --subject-infos-background-color: #303030;
  --icon-question-font-family: 'Font Awesome 5 Free';
  --icon-question-font-weight: 900;
  --icon-question-font-content: '\\f128';
}
```

## **Test du webcomponent**

Pour tester le webcomponent, exécuter la commande suivante :

```shell
npm start
```

Une page avec le webcomponent est alors disponible à l'adresse http://localhost:8000.
