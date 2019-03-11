import { app } from 'hyperapp'
// import logger from '@hyperapp/logger'
import exampleActions from './actions'
import exampleState from './state'
import exampleView from './components/views/Counter'

import ex1State from './ex1/state'
import ex1Action from './ex1/actions'
import ex1View from './ex1/components/views/ExerciseOneView'

import ex2State from './ex2/state'
import ex2Action from './ex2/actions'
import ex2View from './ex2/components/views/ExerciseTwoView'

import ex3State from './ex3/state'
import ex3Action from './ex3/actions'
import ex3View from './ex3/components/views/ExerciseThreeView'

import ex4State from './ex4/state'
import ex4Action from './ex4/actions'
import ex4View from './ex4/components/views/ExerciseFourView'

/*
La fonction app est la fonction qui sert à dessiner l'application javascript sur le navigateur
et à la rendre interactive.

Une application hyperapp prend 4 paramètres:
1. L'état global de l'application. Il correspond à une mémoire immédiate de tout ce qui se passe sur la page,
   stockée sous forme d'object **immutable**. Vous le définirez selon ce que vous essaierez d'accomplir. Il représente le domaine
   que vous essayez de représenter, alors employez des bons noms pour les clés.
2. Les actions. Comme l'état est immutable, on représente un changement de l'état par la création d'un nouvel état.
   C'est précisément ce pour quoi les actions existent. Ce sont des fonctions qui prennent en paramètres l'événement qui
   les déclenche et l'état global de l'application, et qui renvoient le nouvel état de l'application.
3. La vue. Elle représente votre page HTML comme vous l'aurez définie. C'est une fonction qui prend en paramètres
   l'état global de l'application et qui renvoie un modèle de données interprétable par la fonction app, qui dessinera
   l'application. C'est exactement ce qu'on a fait au TD d'avant.
4. Le noeud DOM dans lequel l'application devra dessiner. Ici on prend `document.body` mais on pourrait dessiner
   une application Hyperapp dans une sous-partie d'une page web.
 */

/**
 * Vous modifierez cette fonction pour afficher les résultats de vos applications.
 * Il faudra linker le bon state, les bonnes actions et la bonne view. Je vous conseille vivement de nommer
 * vos imports en conséquence pour savoir ce que vous utilisez pour render l'app.
 */
const currentExercise = 4
if (currentExercise === 0) {
  app(
    exampleState,
    exampleActions,
    exampleView,
    document.body
  )
} else
if (currentExercise === 1) {
  app(
    ex1State,
    ex1Action,
    ex1View,
    document.body
  )
} else
if (currentExercise === 2) {
  app(
    ex2State,
    ex2Action,
    ex2View,
    document.body
  )
} else
if (currentExercise === 3) {
  app(
    ex3State,
    ex3Action,
    ex3View,
    document.body
  )
} else
if (currentExercise === 4) {
  app(
    ex4State,
    ex4Action,
    ex4View,
    document.body
  )
}
