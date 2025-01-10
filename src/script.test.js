const {
  handleGameButton,
  handleResetButton,
  canPlay,
  gameStarted,
  scoreCount,
} = require("../script");

test("initial values are correct", () => {
  expect(canPlay).toBe(true);
  expect(gameStarted).toBe(false);
  expect(scoreCount).toBe(0);
});

test("Les fonctions sont correctement définies", () => {
  expect(typeof handleGameButton).toBe("function");
  expect(typeof handleResetButton).toBe("function");
});

describe("(nommez ce groupe de test)", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="score">0</div>
      <div id="timer">5</div>
      <button id="button-clicker">Click me!</button>
      <button id="button-reset">Reset</button>
    `;

    document.addEventListener("DOMContentLoaded", () => {
      handleGameButton();
      handleResetButton();
    });
  });

  test("Vérifiez que le score s'incrémente correctement", () => {
    document.addEventListener("DOMContentLoaded", () => {
      const button = document.getElementById("button-clicker");
      button.click();
      button.click();
      expect(scoreCount).toBe(2);
    });
  });

  /*

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

  */
});
