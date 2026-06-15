const dateEl = document.getElementById("dob");
const buttonEl = document.getElementById("calculate");
const resultEl = document.getElementById("result");

dateEl.max = new Date().toISOString().split('T')[0];

buttonEl.addEventListener("click", () => {
    let dob = new Date(dateEl.valueAsDate).getFullYear();
    let result = new Date().getFullYear() - dob;
    resultEl.innerHTML = `Your age is ${result} years old`
});