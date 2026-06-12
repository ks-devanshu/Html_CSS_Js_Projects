const buttonEl = document.getElementById("calculate");
const finalAmountEl = document.getElementById("final");

buttonEl.addEventListener("click",() => {
    let principal = document.getElementById("principal").value;
    let tipPercent = document.getElementById("percent").value;
    let amount = (principal*tipPercent)/100;

    console.log(12);

    finalAmountEl.innerHTML = "$"+((parseFloat(amount)+parseFloat(principal)).toFixed(2));
});