let aboutTab = document.getElementById("aboutTab");
let timeToVisitTab = document.getElementById("timeToVisitTab");
let attractionsTab = document.getElementById("attractionsTab");

let aboutButton = document.getElementById("aboutButton");
aboutButton.onclick = function() {
    aboutTab.classList.remove("d-none");
    timeToVisitTab.classList.add("d-none");
    attractionsTab.classList.add("d-none");
};
let timeToVisitButton = document.getElementById("timeToVisitButton");
timeToVisitButton.onclick = function() {
    aboutTab.classList.add("d-none");
    timeToVisitTab.classList.remove("d-none");
    attractionsTab.classList.add("d-none");
};
let attractionsButton = document.getElementById("attractionsButton");
attractionsButton.onclick = function() {
    aboutTab.classList.add("d-none");
    timeToVisitTab.classList.add("d-none");
    attractionsTab.classList.remove("d-none");
};