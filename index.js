let inputEl = document.getElementById("input-el")
let butt = document.getElementById("main1but")
let firstpar = document.getElementById("div3p1-el")
let secndpar = document.getElementById("div3p2-el")
let thirdpar = document.getElementById("div3p3-el")


butt.addEventListener("click", function() {
    let x = inputEl.value;

    firstpar.textContent = x + " meter = " + (3.28084 * x).toFixed(3) + " feet" + " | " + x + " feet = " + (x / 3.28084).toFixed(3) + " meter";
    secndpar.textContent = x + " meter = " + (3.28084 * x).toFixed(3) + " feet" + " | " + x + " feet = " + (x / 3.28084).toFixed(3) + " meter";
    thirdpar.textContent = x + " meter = " + (3.28084 * x).toFixed(3) + " feet" + " | " + x + " feet = " + (x / 3.28084).toFixed(3) + " meter";
})