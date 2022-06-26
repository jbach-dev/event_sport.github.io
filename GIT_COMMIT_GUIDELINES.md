# Git

Les messages de commit sont clairs :
Cf. [Git commit guidelines](https://git-scm.com/book/en/v2/Distributed-Git-Contributing-to-a-Project)

- 1 titre succint
- une description étendue

On utilise le workflow de branches Gitflow allégé : on évite la branche de release car nous n'avons pas de longue phase de stabilisation.

- la branche `master/main` contient les releases
- la branche `develop` contient la version en cours de développement
- les branches préfixées par `feature/` contiennent les branches en cours de développement
- les branches de correctifs urgents sont préfixés par `hotfix/`

Develop n'est jamais mergé dans les Feature branch.
Les features branch sont _rebasées_ avant merge et les commits de "test" supprimés à l'aide d'un _rebase interactif_.

Les branches sont supprimées lorsqu'elles sont mergées.

## Directives de soumission

### Soumettre un problème (issue)

Avant de soumettre un problème, veuillez effectuer une recherche dans l'outil de suivi des problèmes. Un problème pour votre problème existe peut-être déjà et la discussion peut vous informer des solutions de contournement facilement disponibles.

Nous voulons résoudre tous les problèmes dès que possible, mais avant de corriger un bugs, nous devons le reproduire et le confirmer.
Afin de reproduire des bugs, nous vous demandons de fournir une reproduction minimale.
Avoir un scénario reproductible minimal nous donne une mine d'informations importantes sans aller-retour avec vous avec des questions supplémentaires.

Une reproduction minimale nous permet de confirmer rapidement un bug (ou signaler un problème de codage) ainsi que de confirmer que nous résolvons le bon problème.

Nous avons besoin d'une reproduction minimale pour faire gagner du temps aux mainteneurs et pouvoir finalement corriger plus de bugs.

Malheureusement, nous ne sommes pas en mesure d'enquêter/réparer les bugs sans une reproduction minimale, donc si nous n'avons pas de réponse de votre part, nous allons fermer un problème qui n'a pas assez d'informations pour être reproduit.

### Soumettre une Pull Request (PR)

Avant de soumettre votre Pull Request (PR), tenez compte des directives suivantes :

Recherchez sur GitHub une PR ouvert ou fermé qui se rapporte à votre soumission.
Vous ne voulez pas dupliquer les efforts existants.

Assurez-vous qu'un problème décrit le problème que vous résolvez ou documente la conception de la fonctionnalité que vous souhaitez ajouter.
Discuter de la conception dès le départ permet de s'assurer que nous sommes prêts à accepter votre travail.

Assurez-vous de créer tous les commits Git contribués avec une adresse e-mail associée à votre signature CLA

#### Après votre PR une fois merge

Une fois votre pull request fusionnée, vous pouvez supprimer votre branche en toute sécurité et extraire les modifications du référentiel principal (en amont) :

- Supprimez la branche distante sur GitHub via l'interface utilisateur Web GitHub ou votre shell local comme suit :

  ```shell
  git push origin --delete my-fix-branch
  ```

- Check out the master branch:

  ```shell
  git checkout master -f
  ```

- Delete the local branch:

  ```shell
  git branch -D my-fix-branch
  ```

- Update your master with the latest upstream version:

  ```shell
  git pull --ff upstream master
  ```

## Règles de codage

Pour assurer la cohérence dans l'ensemble du code source, gardez ces règles à l'esprit pendant que vous travaillez :

- Toutes les fonctionnalités ou corrections de bug doivent être testées par une ou plusieurs spécifications (tests unitaires).
- Toutes les méthodes d'API publiques doivent être **documentées**.

## Commit Message Format

Nous avons des règles très précises sur la façon dont nos messages de commit Git doivent être formatés.
Ce format permet de **lire plus facilement l'historique des commits**.

#### Commit Message Header

```
<type>(<scope>): <short summary>
  │       │             │
  │       │             └─⫸ Résumé au présent. Pas en majuscule. Pas de période à la fin.
  │       │
  │       └─⫸ Commit Scope: animations|bazel|benchpress|common|compiler|compiler-cli|core|
  │                          elements|forms|http|language-service|localize|platform-browser|
  │                          platform-browser-dynamic|platform-server|router|service-worker|
  │                          upgrade|zone.js|packaging|changelog|docs-infra|migrations|ngcc|ve
  │
  └─⫸ Commit Type: build|ci|docs|feat|fix|perf|refactor|test|add|edit|delete
```

**Exemple** : git commit -m "[DOCS]: Modification de la doc api"

Les champs **`<type>`** et **`<summary>`** sont obligatoires, le champ `(<scope>)` est facultatif.

##### Type

Doit être l'un des suivants :

- **build** : modifications qui affectent le système de build ou les dépendances externes (exemples de portée : gulp, broccoli, npm, yarn)
- **ci** : modifications apportées à nos fichiers de configuration et scripts CI (exemples : CircleCi, gitlab-ci.yml, SauceLabs)
- **docs** : seule la documentation change
- **feat** : une nouvelle fonctionnalité
- **correction** : une correction de bug(s)
- **perf** : un changement de code qui améliore les performances
- **refactor** : un changement de code qui ne corrige pas de bugs ni n'ajoute de fonctionnalité
- **test** : Ajout de tests manquants ou correction de tests existants
- **add** : ajout de code qui n'ajoute pas de fonctionnalité
- **edit** : modifications de code
- **delete** : suppressions d'éléments

##### Scope

La portée doit être le nom du package npm/yarn affecté (tel que perçu par la personne qui lit le journal des modifications généré à partir des messages de validation).
Voici la liste des étendues prises en charge :

- `animations`
- `bazel`
- `benchpress`
- `common`
- `compiler`
- `compiler-cli`
- `core`
- `elements`
- `forms`
- `http`
- `language-service`
- `localize`
- `platform-browser`
- `platform-browser-dynamic`
- `platform-server`
- `router`
- `service-worker`
- `upgrade`
- `zone.js`

Il existe actuellement quelques exceptions à la règle `utiliser le nom du package` :

- `packaging` : utilisé pour les modifications qui modifient la disposition des packages npm dans tous nos packages, par ex. modifications du chemin public, modifications package.json apportées à tous les packages, modifications du fichier/format d.ts, modifications apportées aux bundles, etc.

- `changelog` : utilisé pour mettre à jour les notes de version dans CHANGELOG.md

- `dev-infra` : utilisé pour les changements liés à dev-infra dans les répertoires /scripts et /tools

- `docs-infra` : utilisé pour les modifications liées à docs-app (angular.io) dans le répertoire /aio du référentiel

- `migrations` : utilisé pour les modifications apportées aux migrations `ng update`.

- `ngcc` : utilisé pour les modifications

- `ve` : utilisé pour les modifications spécifiques à ViewEngine (ancien compilateur/rendeur).

- aucune/chaîne vide : utile pour les modifications `test` et `refactorisation` qui sont effectuées dans tous les packages (par exemple, `test : ajouter des tests unitaires manquants`) et pour les modifications de la documentation qui ne sont pas liées à un package spécifique (par exemple, ` docs : corriger une faute de frappe dans le tutoriel`).
