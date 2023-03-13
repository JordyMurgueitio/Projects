let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1; 

// function generates the target number
function generateTarget () {
    let target = Math.floor(Math.random() * 10);
    return target;
}


function compareGuesses(humnan, computer, target) {
    let humnanGuess = Math.abs(humnan - target);
    let computerGuess = Math.abs(computer - target);
    if (humnanGuess <= computerGuess) {
        return true;
    } else {
        return false;
    }
}
console.log(compareGuesses(3, 3, 3));


function updateScore (winner) {
    if (winner === "humnan") {
        humanScore += 1;
    } else if (winner === "computer"){
        computerScore += 1;
    }
}

function advanceRound () {
    currentRoundNumber += 1;
}

