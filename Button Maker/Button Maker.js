let applyButton = document.getElementById("applyButton");
applyButton.onclick = function() {
    let bgColorInput = document.getElementById("bgColorInput").value;
    let fontColorInput = document.getElementById("fontColorInput").value;
    let fontSizeInput = document.getElementById("fontSizeInput").value;
    let fontWeightInput = document.getElementById("fontWeightInput").value;
    let paddingInput = document.getElementById("paddingInput").value;
    let borderRadiusInput = document.getElementById("borderRadiusInput").value;
    let customButton = document.getElementById("customButton");
    customButton.style.backgroundColor = bgColorInput;
    customButton.style.color = fontColorInput;
    customButton.style.fontSize = fontSizeInput;
    customButton.style.fontWeight = fontWeightInput;
    customButton.style.padding = paddingInput;
    customButton.style.borderRadius = borderRadiusInput;
};