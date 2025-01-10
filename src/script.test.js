// const { canPlay, gameStarted, scoreCount } = require("../script");

const {
  handleGameButton,
  handleResetButton,
  canPlay,
  gameStarted,
  scoreCount,
} = require("../script");

// test("initial values are correct", () => {
//   expect(canPlay).toBe(true);
//   expect(gameStarted).toBe(false);
//   expect(scoreCount).toBe(0);
// });

test("Les fonctions sont correctement définies", () => {
  expect(typeof handleGameButton).toBe("function");
  expect(typeof handleResetButton).toBe("function");
});

test("Vérifiez que le score s'incrémente correctement", () => {
  // beforeEach
  document.body.innerHTML = `
      <div id="score">0</div>
      <div id="timer">5</div>
      <button id="button-clicker">Click me!</button>
      <button id="button-reset">Reset</button>
    `;

  const {
    handleGameButton,
    handleResetButton,
    scoreCount,
  } = require("../script");

  document.addEventListener("DOMContentLoaded", () => {
    handleGameButton();
    handleResetButton();

    // Testing click increments
    const button = document.getElementById("button-clicker");
    button.click();
    button.click();

    console.log(scoreCount);

    expect(scoreCount).toBe(2);
  });
});

/*
describe("(nommez ce groupe de test)", () => {
  // Avant chaque test, configurer l'environnement de test
  beforeEach(() => {
    // Réinitialiser le DOM ou créer des éléments nécessaires pour les tests
    document.body.innerHTML = `
      <div id="score">0</div>
      <div id="timer">5</div>
      <button id="button-clicker">Click me!</button>
      <button id="button-reset">Reset</button>
    `;

    const {
      handleGameButton,
      handleResetButton,
    } = require("../script");

    // Appeler les fonctions pour attacher les événements
    handleGameButton();
    handleResetButton();
  });

  // Test pour vérifier que le score s'incrémente lorsque le bouton est cliqué
  test("Vérifiez que le score s'incrémente correctement", () => {
    // Simuler un clic sur le bouton

    console.log(document.body.innerHTML);

    // const button = document.getElementById("button-clicker");
    // console.log("bouton marche ?");
    // console.log(button);
    //
    // // Utilisez une méthode pour cliquer sur le bouton et vérifiez le score
    // button.click();
    // button.click();
    //
    // expect(scoreCount).toBe(2);
  });

  // Test pour vérifier que le timer fonctionne correctement
  test("Vérifiez que le timer décompte correctement", (done) => {
    // Simuler un clic pour démarrer le jeu
    // Attendez un certain temps et vérifiez que le timer affiche 0
  });

  // Test pour vérifier que le jeu ne permet pas de cliquer après la fin du timer
  test("Vérifiez que le score ne s'incrémente pas après la fin du timer", (done) => {
    // Simuler un clic pour démarrer le jeu
    // Attendez que le timer expire, puis essayez de cliquer à nouveau
    // Vérifiez que le score n'a pas changé
  });

  // Test pour vérifier que le bouton de réinitialisation fonctionne correctement
  test("Vérifiez que le bouton de réinitialisation remet le score à zéro", () => {
    // Simuler quelques clics pour augmenter le score
    // Vérifiez que le score est supérieur à zéro
    // Simuler un clic sur le bouton de réinitialisation
    // Vérifiez que le score a été remis à zéro
  });
});

*/
