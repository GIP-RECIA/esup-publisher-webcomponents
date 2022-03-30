# esup-publisher-webcomponents
Web-Components pour ESUP-Publisher

## Publication sur npm

Dans la procédure ci-dessous, les variables suivantes sont utilisées :

| Variable          | Description                                   |
| ------------------|---------------------------------------------- |
| ${nom-composant}  | Nom du composant sous la forme @gip-recia/XXX |
| ${numero-version} | Numéro de version sous la forme X.Y.Z         |

Au préalable de cette procédure, il est nécessaire de se connecter à son compte npm en ligne de commande via la commande suivante :

```shell
npm adduser
```

Pour publier sur npm le composant ${nom-composant} dans la version ${numero-version}, il faut :

1. Se positionner dans le répertoire du composant ${nom-composant}.

2. Changer la version du composant via la commande suivante :

```shell
npm version ${numero-version}
```

3. Construire la version minifiée du composant via la commande suivante :

```shell
npm run build
```

4. Déployer sur npm la version du composant via la commande suivante :

```shell
npm publish --access public
```

5. Vérifier la présence de la nouvelle version sur npm à l'adresse suivante : https://www.npmjs.com/package/${nom-composant}. Attention, l'apparition de la nouvelle version sur npm peut prendre plusieurs minutes.

6. Pusher sur GitHub le changement de version du composant (modification des fichiers package.json, package-lock.json et du bundle).
