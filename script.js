// keybord

document.addEventListener("keyup", function (e) {
  const playerPressed = e.key;

  // stop game

  if (playerPressed === "Escape") {
    gameOver();
  }

  // get the expected to press
  const currentAlphabet = document
    .getElementById("display-alphabet")
    .innerText.toLowerCase();

  // condition

  if (playerPressed === currentAlphabet) {
    continueGame();
    removeBgById(currentAlphabet);
    // update score:
    const currentScore = getTextElementValueById("current-score");
    const newScore = currentScore + 1;

    setTextElementValueById("current-score", newScore);
  } else {
    const currentLife = getTextElementValueById("current-life");
    const newLife = currentLife - 1;
    setTextElementValueById("current-life", newLife);

    if (currentLife === 1) {
      gameOver();
    }
  }
});

function continueGame() {
  const alphabet = getARandomAlphabet();
  document.getElementById("display-alphabet").innerText = alphabet;

  //  set bg color
  addBgById(alphabet);
}

function play() {
  hiddenElementById("home-screen");
  hiddenElementById("final-score");
  showElementById("play-ground");

  // reset
  setTextElementValueById("current-life", 5);
  setTextElementValueById("current-score", 0);
  continueGame();
}

function gameOver() {
  hiddenElementById("play-ground");
  showElementById("final-score");
  // update final socre
  const lastScore = getTextElementValueById("current-score");
  setTextElementValueById("game-score", lastScore);
  const currentAlphabet = getElementTextById("display-alphabet");
  removeBgById(currentAlphabet);
}

// aiob ali 2 chele / tanbir er abba
