const screenEl = document.getElementById("screen");
const evaluateEl = document.getElementById("evaluate");
const numericEl = document.getElementsByClassName("numeric");
const operationEl = document.getElementsByClassName("operation");
const clearEl = document.getElementById("reset");

let nums = [];
let operations = [];

let result = 0;
let count = 0;
let number = 0;

for (let button of numericEl) {
    button.addEventListener("click", ()=>{
        if (!(screenEl.innerHTML.length == 1 && screenEl.innerHTML.endsWith('0')))
            screenEl.innerHTML += button.innerHTML;
    })
}

for (let button of operationEl) {
    button.addEventListener("click", ()=>{
        if (screenEl.innerHTML && !isAbrupt()) {
            prepare();
            screenEl.innerHTML += button.innerHTML;
            operations.push(button.innerHTML);
        }
    })
}


function prepare() {
    let len = screenEl.innerHTML.length;
    number = screenEl.innerHTML.substring(count, len);
    nums.push(parseFloat(number));
    count = len+1;
}

function calculate() {
    result = nums[0];
    for (let i = 1; i<nums.length; i++) {
        if (operations[i-1] == "+") {
            result = result + nums[i];
        }
        else if (operations[i-1] == "-") {
            result = result - nums[i];
        }
        else if (operations[i-1] == "*") {
            result = result * nums[i];
        }
        else if (operations[i-1] == "/") {
            result = result / nums[i];
        }
    }
}

function isAbrupt() {
    return ((screenEl.innerHTML.endsWith("+") || screenEl.innerHTML.endsWith("-") || screenEl.innerHTML.endsWith("/") || screenEl.innerHTML.endsWith("*")))
}

function reset() {
    count = 0;
    number = 0;
    operations.length = 0;
    nums.length = 0;
}


evaluateEl.addEventListener("click", ()=>{
    if (!isAbrupt()) {
        prepare();
        calculate();
        screenEl.innerHTML = result;
        reset();
    }
})


clearEl.addEventListener("click", ()=>{
    screenEl.innerHTML = '';
    result = 0;
    reset();
})