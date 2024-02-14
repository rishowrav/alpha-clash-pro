function play() {
  hiddenElementById("home-screen");
  showElementById("play-ground");
  continueGame();
}

function continueGame() {
  const alphabet = getARandomAlphabet();
  document.getElementById("display-aphabet").innerText = alphabet;

  //  set bg color
  addBgById(alphabet);
}

const alphabetString = "abcdefghijklmnopqrstuvwxyz";
const alphabets = alphabetString.split("");
console.log(Math.floor(Math.random() * 3));
