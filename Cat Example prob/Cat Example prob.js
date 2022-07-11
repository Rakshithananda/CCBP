let bulbImage = document.getElementById("bulbImage")
let catImage = document.getElementById("catImage")
let switchOff = document.getElementById("offSwitch")
let switchOn = document.getElementById("onSwitch")

function offSwitch() {
    bulbImage.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png"
    catImage.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png"
    switchOff.style.backgroundColor = "grey"
    switchOn.style.backgroundColor = "green"
    document.getElementById("displayText").textContent = "Switched Off"

}

function onSwitch() {
    bulbImage.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png"
    catImage.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png"
    switchOff.style.backgroundColor = "red"
    switchOn.style.backgroundColor = "grey"
    document.getElementById("displayText").textContent = "Switched On"
}