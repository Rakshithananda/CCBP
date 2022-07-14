let imageElement = document.getElementById("image");

let originalImageWidth = "200px";

imageElement.style.width = originalImageWidth;

let imageWidth = document.getElementById("imageWidth");

imageWidth.textContent = originalImageWidth
let updatedVal = 200

function decrementButton() {
    updatedVal = updatedVal - 5
    console.log(updatedVal)
    if (updatedVal >= 100 && updatedVal <= 300) {
        imageWidth.textContent = updatedVal + "px"
        imageElement.style.width = imageWidth.textContent
        document.getElementById("warningMessage").textContent = ""
    } else {
        document.getElementById("warningMessage").textContent = "Too small"
        updatedVal = 100
    }
}

function incrementButton() {
    updatedVal = updatedVal + 5
    console.log(updatedVal)
    if (updatedVal <= 300 && updatedVal >= 100) {
        imageWidth.textContent = updatedVal + "px"
        imageElement.style.width = imageWidth.textContent
        document.getElementById("warningMessage").textContent = ""
    } else {
        document.getElementById("warningMessage").textContent = "Too big"
        updatedVal = 300
    }
}