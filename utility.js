function getTextElementValueById(elementId) {
  const value = parseInt(document.getElementById(elementId).innerText);
  return value;
}
function setTextElementValueById(elementId, value) {
  document.getElementById(elementId).innerText = value;
}

function hiddenElementById(elementId) {
  document.getElementById(elementId).classList.add("hidden");
}

function showElementById(elementId) {
  document.getElementById(elementId).classList.remove("hidden");
}

function getARandomAlphabet() {
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = alphabetString.split("");
  const randomNumber = Math.floor(Math.random() * alphabets.length);
  const alphabet = alphabets[randomNumber];
  return alphabet;
}

function addBgById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-orange-400");
}
function removeBgById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("bg-orange-400");
}

function getElementTextById(elementId) {
  const alphabet = document.getElementById(elementId).innerText;
  return alphabet;
}
