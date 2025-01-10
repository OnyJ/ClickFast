let canPlay = true;
let gameStarted = false;
let scoreCount = 0;

function handleGameButton() {
  const scoreDisplay = document.getElementById("score");
  const button = document.getElementById("button-clicker");

  button.addEventListener("click", () => {
    if (!gameStarted) {
      gameStarted = true;
      startTimer();
    }

    if (canPlay) {
      scoreCount++;
    }
    scoreDisplay.innerHTML = scoreCount;
  });
}

function startTimer() {
  const htmlTimer = document.getElementById("timer");
  let timeLeft = 5;

  for (let i = timeLeft; i >= 0; i--) {
    setTimeout(() => {
      htmlTimer.innerHTML = i;

      if (i == 0) {
        canPlay = false;
      }
    }, (timeLeft - i) * 1000);
  }
}

function handleResetButton() {
  const scoreDisplay = document.getElementById("score");
  const resetButton = document.getElementById("button-reset");

  resetButton.addEventListener("click", () => {
    canPlay = true;
    gameStarted = false;
    scoreCount = 0;
    scoreDisplay.innerHTML = scoreCount;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const scoreDisplay = document.getElementById("score");

  handleGameButton();
  handleResetButton();
});

module.exports = {
  handleGameButton,
  handleResetButton,
  canPlay,
  gameStarted,
  scoreCount,
};
