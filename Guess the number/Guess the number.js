let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random() * 100)
console.log(randomNumber)

function checkGuess() {
    let userValue = parseInt(userInput.value);
    console.log(userValue)
    if (randomNumber === userValue) {
        gameResult.textContent = "Hurray!!! it's the correct Guess!!";
        gameResult.style.backgroundColor = "green";
    } else if (randomNumber > userValue) {
        gameResult.textContent = "Ohoo! it's too less, Try again!";
        gameResult.style.backgroundColor = "#1e217c";
    } else if (randomNumber < userValue) {
        gameResult.textContent = "Ohoo! it's too High, Try again!";
        gameResult.style.backgroundColor = "#1e217c";
    } else {
        gameResult.textContent = "Invalid Input, Try Entering Number";
        gameResult.style.backgroundColor = "red";
    }
}