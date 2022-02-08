# **Esup Color Palette Picker**

Color Palette Picker est un webcomponent s'appuyant sur la librairie Lit pour afficher une modale de sélection de couleur.

## **Installation**

1. Installation via npm :

```shell
npm install @gip-recia/color-palette-picker
```

2. Importation du composant :

Dans un module JavaScript :

```
import '@gip-recia/color-palette-picker';
```

Dans une page HTML :

```html
<script type="module">
import './path/to/color-palette-picker.js';
</script>
```

3. Ajout du composant dans l'application/composant :

```html
<esup-color-palette-picker .color="..." .config="..." .onColorChanged="..."></esup-color-palette-picker>
```

## **Paramètres**

Le webcomponent Color Palette Picker accepte les paramètres suvants :
- `color` - Couleur (au format hexadecimal) actuellement sélectionnée.

- `config` - Objet contenant la configuration du picker.

Propriétés disponibles :
|Nom|Type|Obligatoire|Description|
|--------|--------|--------|--------|
|colors|Array|Oui|Tableau des couleurs sélectionnables (au format hexadecimal).|
|lang|String|Non|Langue du composant. Valeur initialement disponible : 'fr', 'en'. Possibilité de rajouter des langues via la propriété labels|
|labels|Object|Non|Permet de surcharger les labels affichés ou de définir de nouvelles langues.|

- `onColorChanged` - Fonction appelée lors de la sélection d'une couleur.

## **Variables CSS**

Par défaut le webcomponent Color Palette Picker s'appuie sur les fonts Font-Awesome pour afficher des icônes (via des pseudo-elements). Il est cependant possible de personnaliser les icônes affichées via les propriétés suivantes :

|Nom|Description|
|--------|--------|
|--icon-cancel-font-family|Permet de configurer la famille de police de caractères de l'icône d'annulation|
|--icon-cancel-font-weight|Permet de configurer poids de la police de caractères de l'icône d'annulation|
|--icon-cancel-content|Caractère unicode dans la famille de police de caractères utilisée pour l'icône d'annulation|
|--icon-validate-font-family|Permet de configurer la famille de police de caractères de l'icône de validation|
|--icon-validate-font-weight|Permet de configurer poids de la police de caractères de l'icône de validation|
|--icon-validate-content|Caractère unicode dans la famille de police de caractères utilisée pour l'icône de validation|

## **Test du webcomponent**

Pour tester le webcomponent, exécuter la commande suivante :
```shell
npm run dev
```

Une page avec le webcomponent est alors disponible à l'adresse http://localhost:8080.
