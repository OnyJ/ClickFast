import { JSDOM } from "jsdom";

const { window } = new JSDOM(
  (
    <div>
      <button id="button-clicker">Click !!!</button>
      <div id="counter">0</div>
    </div>
  )
);

global.document = window.document;

// Ajouter un écouteur d'événements pour le bouton

// Décrire le groupe de tests pour le bouton clicker
// ...
//    Réinitialiser le compteur avant chaque test
//    ...
//    Réinitialiser le compteur à 0
//    Mettre à jour l'affichage du compteur

// Test 1 : Vérifier que le compteur s'incrémente lors d'un clic sur le bouton
//     Récupérer le bouton par son ID
//     Simuler un clic sur le bouton
//     Effectuer le premier clic
//     Vérifier que le compteur affiche "1"
//     Simuler un autre clic sur le bouton
//     Effectuer le deuxième clic
//     Vérifier que le compteur affiche "2"

// Test 2 : Vérifier que le compteur commence à 0
//     Vérifier que le compteur affiche "0" au départ
