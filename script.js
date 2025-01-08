const button = document.getElementById("button-clicker");
const score = document.getElementById("score");
let count = 0;
let canPlay = true;
let gameStarted = false;
let timer = 5000;

function handleGameButton() {
  button.addEventListener("click", () => {
    if (!gameStarted) {
      gameStarted = true;
      startTimer();
    }

    if (canPlay) {
      count++;
    }
    score.innerHTML = count;
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

handleGameButton();
