let randomNumber1 = Math.ceil(Math.random() * 100);
let randomNumber2 = Math.ceil(Math.random() * 100);
let firstNumber = document.getElementById("firstNumber");
firstNumber.textContent = randomNumber1;
let secondNumber = document.getElementById("secondNumber");
secondNumber.textContent = randomNumber2;

let userInput = document.getElementById("userInput");
let checkButton = document.getElementById("checkButton");

let gameResult = document.getElementById("gameResult");

let userValue = userInput.value;
let sum = randomNumber1 + randomNumber2;

let restartButton = document.getElementById("restartButton");
restartButton.onclick = function() {
    let randomNumber1 = Math.ceil(Math.random() * 100);
    let randomNumber2 = Math.ceil(Math.random() * 100);
    let firstNumber = document.getElementById("firstNumber");
    firstNumber.textContent = randomNumber1;
    let secondNumber = document.getElementById("secondNumber");
    secondNumber.textContent = randomNumber2;
    userInput.value = "";
    gameResult.textContent = "";
};

checkButton.onclick = function() {
    let userInput = document.getElementById("userInput");
    let userValue = parseInt(userInput.value);
    console.log(userValue, sum);
    if (userValue === sum) {
        gameResult.textContent = "Correct Ans";
        gameResult.style.backgroundColor = "#028a0f";
    } else {
        gameResult.textContent = "Try Again";
        gameResult.style.backgroundColor = "#1e217c";
    }
};