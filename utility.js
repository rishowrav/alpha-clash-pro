function hiddenElementById(elementId) {
  document.getElementById(elementId).classList.add("hidden");
}

function showElementById(elementId) {
  document.getElementById(elementId).classList.remove("hidden");
}

function getARandomAlphabet() {
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = alphabetString.split("");
  const randomNumber = Math.round(Math.random() * alphabets.length);
  const alphabet = alphabets[randomNumber];
  return alphabet;
}

function addBgById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-orange-400");
}
