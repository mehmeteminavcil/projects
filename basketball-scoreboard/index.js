const homeDisplay = document.querySelector(".home");
const guestDisplay = document.querySelector(".guest");
const container = document.querySelector(".container");

let homeScoreSum = 0;
let guestScoreSum = 0;

container.addEventListener("click", (e) => {
  let target = e.target;
  const homeScore = target.dataset.homeScore;
  const guestScore = target.dataset.guestScore;

  if (homeScore) {
    homeScoreSum += +homeScore; //  Number(homeScore)
    homeDisplay.textContent = homeScoreSum;
  }

  if (guestScore) {
    guestScoreSum += +guestScore;
    guestDisplay.textContent = guestScoreSum;
  }

  highlightWinner();
});



// highlight winner
function highlightWinner() {
  homeDisplay.classList.toggle("winner", homeScoreSum > guestScoreSum);
  guestDisplay.classList.toggle("winner", homeScoreSum < guestScoreSum);
}


// New Game Btn
document.querySelector(".new-game-btn").addEventListener("click", () => {
  homeScoreSum = 0;
  homeDisplay.textContent = homeScoreSum;
  guestScoreSum = 0;
  guestDisplay.textContent = guestScoreSum;
  highlightWinner();
});
