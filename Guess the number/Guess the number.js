let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random() * 100)
console.log(randomNumber)

function checkGuess() {
    let userValue = parseInt(userInput.value);
    console.log(userValue)
    if (randomNumber === userValue) {
        gameResult.textContent = "Hurray!!! it's the correct Guess!!"
        gameResult.style.backgroundColor = "green"
    } else if (randomNumber > userValue) {
        gameResult.textContent = "Ohoo! it's less then the correct Guess!!"
        gameResult.style.backgroundColor = "red"
    } else if (randomNumber < userValue) {
        gameResult.textContent = "Ohoo! it's Greater then the correct Guess!!"
        gameResult.style.backgroundColor = "red"
    }
}