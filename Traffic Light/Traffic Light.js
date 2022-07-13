let stopLightElement = document.getElementById("stopLight")
let stopButtonElement = document.getElementById("stopButton")
let readyLightElement = document.getElementById("readyLight")
let readyButtonElement = document.getElementById("readyButton")
let goLightElement = document.getElementById("goLight")
let goButtonElement = document.getElementById("goButton")

function stopButton() {

    stopLightElement.style.backgroundColor = "#cf1124"

    stopButtonElement.style.backgroundColor = "#cf1124"

    readyLightElement.style.backgroundColor = "#4b5069"

    readyButtonElement.style.backgroundColor = "#4b5069"

    goLightElement.style.backgroundColor = "#4b5069"

    goButtonElement.style.backgroundColor = "#4b5069"
}

function readyButton() {

    stopLightElement.style.backgroundColor = "#4b5069"

    stopButtonElement.style.backgroundColor = "#4b5069"

    readyLightElement.style.backgroundColor = "#f7c948"

    readyButtonElement.style.backgroundColor = "#f7c948"

    goLightElement.style.backgroundColor = "#4b5069"

    goButtonElement.style.backgroundColor = "#4b5069"
}

function goButton() {

    stopLightElement.style.backgroundColor = "#4b5069"

    stopButtonElement.style.backgroundColor = "#4b5069"

    readyLightElement.style.backgroundColor = "#4b5069"

    readyButtonElement.style.backgroundColor = "#4b5069"

    goLightElement.style.backgroundColor = "#199473"

    goButtonElement.style.backgroundColor = "#199473"
}