let counter = document.getElementById("counterValue");

function decrease() {
    let presentValue = counter.textContent
    let counterValue = parseInt(presentValue);
    let updatedValue = counterValue - 1;
    counterValue = updatedValue
    counter.textContent = counterValue
    if (counterValue < 0) {
        counter.style.color = "red"
    } else if (counterValue > 0) {
        counter.style.color = "green"
    } else {
        counter.style.color = "black"
    }
}

function reset() {
    let counterValue = parseInt(counter);
    counter.textContent = "0";
    counter.style.color = "black"
}

function increase() {
    let presentValue = counter.textContent
    let counterValue = parseInt(presentValue);
    let updatedValue = counterValue + 1;
    counterValue = updatedValue
    counter.textContent = counterValue
    if (counterValue < 0) {
        counter.style.color = "red"
    } else if (counterValue > 0) {
        counter.style.color = "green"
    } else {
        counter.style.color = "black"
    }
}