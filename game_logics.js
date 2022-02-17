const starting = document.getElementById("start");
const stone = document.getElementById("stone");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const userScore = document.getElementById("userScore");
const compScore = document.getElementById("compScore");
const yourStep = document.getElementById("yourStep");
const compStep = document.getElementById("compStep");


let compGold = 0;
let userGold = 0;
let userTurn = "";
let compTurn = "";
let compTemp = 0;
let userTemp = 0;





function graphicsAppear() {
    stone.textContent = "КАМЕНЬ";
    scissors.textContent = "НОЖНИЦЫ";
    paper.textContent = "БУМАГА";
    userScore.textContent = `ВЫ: ${userGold} `;
    compScore.textContent = `КОМП: ${compGold} `;
    yourStep.textContent = `ВЫ СХОДИЛИ: ${userTurn} `;
    compStep.textContent = `КОМП СХОДИЛ: ${compTurn} `;

}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


function gameRun() {
    /*
    userScore.innerHTML.replace(userGold, "");
    compScore.innerHTML.replace(compGold, "");
    yourStep.innerHTML.replace(userTurn, "");
    compStep.innerHTML.replace(compTurn, "");*/
    compTemp = getRandomInt(3);
    if (compTemp == userTemp) {
        userTurn = "НИЧЬЯ";
        compTurn = "НИЧЬЯ";

    } else if (compTemp == 0 && userTemp == 1) {
        userTurn = "НОЖНИЦЫ";
        compTurn = "КАМЕНЬ";
        compGold = compGold + 1;
    } else if (compTemp == 1 && userTemp == 0) {
        userTurn = "КАМЕНЬ";
        compTurn = "НОЖНИЦЫ";
        userGold = userGold + 1;
    } else if (compTemp == 2 && userTemp == 1) {
        userTurn = "НОЖНИЦЫ";
        compTurn = "БУМАГА";
        userGold = userGold + 1;
    } else if (compTemp == 1 && userTemp == 2) {
        compTurn = "НОЖНИЦЫ";
        userTurn = "БУМАГА";
        compGold = compGold + 1;
    } else if (compTemp == 2 && userTemp == 0) {
        compTurn = "БУМАГА";
        userTurn = "КАМЕНЬ";
        compGold = compGold + 1;
    } else if (compTemp == 0 && userTemp == 2) {
        userTurn = "БУМАГА";
        compTurn = "КАМЕНЬ";
        userGold = userGold + 1;

    }
    userScore.textContent = `ВЫ: ${userGold} `;
    compScore.textContent = `КОМП: ${compGold} `;
    yourStep.textContent = `ВЫ СХОДИЛИ: ${userTurn} `;
    compStep.textContent = `КОМП СХОДИЛ: ${compTurn} `;
    //userScore.append(userGold);
    //compScore.append(compGold);
    //yourStep.append(userTurn);
    //compStep.append(compTurn);


}

starting.onclick = () => {
    starting.remove();
    graphicsAppear();

}

stone.onclick = () => {
    userTemp = 0;
    gameRun();
}

scissors.onclick = () => {
    userTemp = 1;
    gameRun();

}

paper.onclick = () => {
    userTemp = 2;
    gameRun();

}