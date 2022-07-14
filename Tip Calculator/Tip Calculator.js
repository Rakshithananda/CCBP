let billAmount = document.getElementById("billAmount");
let percentageTip = document.getElementById("percentageTip");
let tipAmount = document.getElementById("tipAmount");
let totalAmount = document.getElementById("totalAmount");
let errorMessage = document.getElementById("errorMessage")

function calculatedButton() {
    if (billAmount.value === "") {
        errorMessage.textContent = "Please Enter Valid Input"
    } else if (percentageTip.value === "") {
        errorMessage.textContent = "Please Enter Valid Input"
    } else {
        let billAmountVal = parseInt(billAmount.value);
        let percentageTipVal = parseInt(percentageTip.value);
        let tipAmountVal = billAmountVal * (percentageTipVal / 100)
        console.log(tipAmountVal)
        tipAmount.value = tipAmountVal
        let totalAmountVal = billAmountVal + tipAmountVal
        totalAmount.value = totalAmountVal
        errorMessage.textContent = ""
    }
}