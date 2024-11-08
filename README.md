# ClickFast ⏩

Sois le plus rapide des clickers du game ⚡

## Comment utiliser le projet ?

Lancez `index.html` et voilà !

## Tips

### Terminal

#### 1. Raccourcis

- `tab` : appuyer sur tab pour compléter le mot qu'on est en train d'écrire

#### 2. Commandes

- `cd` : se déplacer vers un dossier : `cd MonDossier` ou `cd Mondossier/sous-dossier/sous-sous-dossier`
  `cd .. = remonter dans dossier parent`
- `ls` : lister les éléments dans le dossier où on se trouve
- `git init` : créer un repository (ou dépot) git dans le dossier où on se trouve

#### 3. Commandes Git

- `git status` : Montre les fichiers qui ont été modifiés mais pas encore sauvegardés.
- `git diff` ou `git diff mon_fichier` : Affiche les changements faits par rapport à la dernière sauvegarde, pour tous les fichiers ou un fichier spécifique.
- `git log` : voir les commits réalisés
- `git add mon_fichier` : ajouter des fichiers à sauvegarder
- `git commit -m "J'ai fait telle chose` : nommer une nouvelle sauvegarde
- `git push` : envoyer les sauvegardes vers GitHub
- `git remote -v` : voir les connexions entre notre dossier local (dans l'ordi) et les éléments en ligne (connexion au repository GitHub, ou autres)

### Comment le projet a été créé ?

#### 1. Initialisation du projet

Aller ou on veut pour créer un projet dans un endroit rangé
ex:

```bash
  cd Desktop

  mkdir ClickFast

  ls # on voit qu'on a un dossier ClickFast qui a été créé
```

Aller dans le dossier pour faire un `git init`.  
Lier le repository créé en ligne à ce projet.

### 2. Création des fichiers

Créer un fichier `index.html`, `style.css`, `script.js`. Ils vont chacun avoir leur propre rôle :

- `index.html` : le contenu du site : titre, bouton, score
- `style.css` : le styling
- `script.js` : la détection de clic sur un bouton, et l'affichage du nombre de clics dans l'élément de score

### 3. Docker

Conteneuriser le projet dans un Docker :

- créer un Dockerfile
- trouver comment faire pour envelopper le projet dans un Dockerfile, et le lancer depuis docker.
  - Faire une simple recherche internet, ex: `html css docker`.  
    On se rend compte que la plupart des personnes recommandent nginx qui est super simple et adapté au lancement de sites statiques.
  - Solution : il y a toujours plein de solutions possibles.
    Moi j'ai appliqué [cette réponse](https://thriveread.com/run-html-with-docker-and-nginx/).  
    D'autres ressources d'internet sur comment faire ça facilement disent à peu près la même chose : [omkara18 de dev.to](https://dev.to/omkara18/deploying-a-static-website-with-docker-a-comprehensive-guide-3gk), [Zulfikar sur medium](https://medium.com/@zul.m/deploying-a-static-html-site-with-docker-and-nginx-6f5bcdcbc650)
- maintenant, faire une commande comme `docker run -d -p 8080:80 clickfast` devrait lancer le projet conteneurisé !

### 4. Mettre son site en ligne

[Github Pages](https://pages.github.com/) permet de le faire gratuitement !

Voilà comment [avoir plusieurs repo de rendus dans notre page](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

### 5. CI/CD

Voilà un tuto https://medium.com/@pathirage/step-in-to-ci-cd-a-hands-on-guide-to-building-ci-cd-pipeline-with-github-actions-7490d6f7d8ff

Mais on ne va pas le suivre.  
On va simplement aller dans l'onglet Actions de notre projet, cliquer sur New Workflow. Là on voit plein de propositions de la part de github. On choisit Docker Image, pour qu'il nous édite un fichier `docker-image.yml`. Cela permettra aux Github Actions d'exécuter un Job concernant docker.  
Ne pas oublier de cliquer su' "Commit Changes" pour sauvegarder.

#### Tests

Bel exemple ! Mais on va faire quelque chose qu'on a créé nous mêmes, c'est plus intéressant.  
On veut tester notre JS automatiquement, pour ne pas avoir à vérifier sans arrêt s'il se comporte comme on le souhaite.

Créer un environnement node / npm :

```bash
npm init
```

Installer jest et jsdom pour nos tests :

```bash
npm install jsdom
npm install --save-dev jest
```

Modifier le script de test du `package.json`

```json
"scripts": {
  "test": "npx jest"
},
```

Lancer les tests

```bash
npx jest
# ou pour exécuter les tests de la section script, dans package.json :
npm run test
```
