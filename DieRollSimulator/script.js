const buttonEl = document.getElementById("roll_button");
const historyEl = document.getElementById("roll_history");
const die = document.getElementById("die");

const history = [];

buttonEl.addEventListener("click",()=>{
    die.classList.add("roll_animation");
    setTimeout(() => {
        die.classList.remove("roll_animation");
    }, 300);

    rollDie();
});

function rollDie() {
    let output = Math.ceil((Math.random()*6));
    let dieFace = getDieFromOut(output);
    die.innerHTML = dieFace;

    history.push(output);
    updateHistory();
}

function updateHistory() {
    const listItem = document.createElement("li");
    const i = history.length;
    listItem.innerHTML = `<i>Roll ${i} :</i> ${getNameFromOut(history[i-1])} <span>${getDieFromOut(history[i-1])}</span>`;

    historyEl.appendChild(listItem);
}

function getDieFromOut(output) {
    switch(output) {
        case 1:
            return "&#9856";
        case 2:
            return "&#9857;";
        case 3:
            return "&#9858";
        case 4:
            return "&#9859";
        case 5:
            return "&#9860";
        case 6:
            return "&#9861";
        default:
            return "";
    }
}

function getNameFromOut(output) {
    switch(output) {
        case 1:
            return "ONE";
        case 2:
            return "TWO";
        case 3:
            return "THREE";
        case 4:
            return "FOUR";
        case 5:
            return "FIVE";
        case 6:
            return "SIX";
        default:
            return "";
    }
}