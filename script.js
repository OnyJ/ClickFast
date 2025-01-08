const button = document.getElementById("button-clicker");
const score = document.getElementById("score");
let count = 0;

button.addEventListener("click", () => {
  count++;
  score.innerHTML = count;
});
