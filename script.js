const wordName  = document.querySelector(".word-name");
const wordColor  = document.querySelector('.word-color');
const colorText = document.querySelector(".color-text");
const userScore = document.getElementById("user-score");
const btns = document.querySelectorAll('.btn');
let score = 0;
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
    wordName.textContent = words[random]
    wordColor.textContent = colors[random];
    return  colorText.style.color; 
}
function isCorrect(userColor, wordColor){
    if(userColor ==  wordColor){
        score++;
        userScore.textContent = `Score : ${score}`;
    }
}
btns.forEach((btn) => {
    btn.addEventListener("click",(e) => {
        console.log("btn working");
        console.log(score)
        const textColor = randomWords();
        isCorrect(e.target.textContent,textColor);
    })
})
// function 
setInterval(() => {
    randomWords();
},4000);

