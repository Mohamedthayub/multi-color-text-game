const wordName  = document.querySelector(".word-name");
const wordColor  = document.querySelector('.word-color');
const colorText = document.querySelector(".color-text");

const words = [
  "red",
  "blue",
  "green",
  "yellow",
  "orange",
  "purple",
  "pink",
  "brown",
  "gray",
  "cyan"
];

const colors = [
    "violet",
    "yellowGreen",
    "aqua",
    "blue",
    "brown",
    "pink",
    "purple",
    "yellow",
    "red",
    "white"
];

function randomWords(){
    let random = Math.floor(Math.random() * words.length)
    colorText.textContent = words[random];
    colorText.style.color = colors[random];
    wordName.textContent = words[random];
    wordColor.textContent = colors[random];
};

setInterval(() => {
    randomWords();
},3000);
