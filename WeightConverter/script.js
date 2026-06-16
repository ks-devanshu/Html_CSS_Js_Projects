const inputEL = document.getElementById("toConvert");
const outputEl = document.getElementById("result");
const errorEl = document.getElementById("error");

let prev;

inputEL.addEventListener("input", () => {
    let output = convert();
    outputEl.innerHTML = output === 'NaN' ? '' : output;
    clearTimeout(prev);
    prev = setTimeout(() => {
        inputEL.value = '';
        outputEl.innerHTML = '';
        errorEl.innerHTML = '';
    }, 7000);
})


function convert() {
    if (inputEL.value < 0) {
        errorEl.innerHTML = "Please enter a valid number!";
        return 'NaN';
    }
    errorEl.innerHTML = '';
    return (parseFloat(inputEL.value)/2.205).toFixed(2);
}