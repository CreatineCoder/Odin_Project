let ComputerScore = 0;
let HumanScore = 0;

function getcomputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
console.log(getcomputerChoice());

function getHumanChoice() {
    let choice=prompt("Enter rock, paper, or scissors: ").toLowerCase();
    while (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors') {
        choice = prompt("Invalid choice. Please enter rock, paper, or scissors: ").toLowerCase();
    }
    return choice;
}
console.log(getHumanChoice());

function PlayRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if ((humanChoice === 'rock' && computerChoice === 'scissors') ||
               (humanChoice === 'paper' && computerChoice === 'rock') ||
               (humanChoice === 'scissors' && computerChoice === 'paper')) {
        HumanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
        ComputerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}.`;
    }
}

function PlayGame() {
    for (let round = 1; round <= 5; round++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getcomputerChoice();
        console.log(`Round ${round}:`);
        console.log(PlayRound(humanChoice, computerChoice));
        console.log(`Score - You: ${HumanScore}, Computer: ${ComputerScore}`);
    }
}
function DeclareWinner() {
    if (HumanScore > ComputerScore) {
        console.log("Congratulations! You are the overall winner!");
    } else if (ComputerScore > HumanScore) {
        console.log("The computer wins overall! Better luck next time.");
    } else {
        console.log("It's an overall tie!");
    }
}

PlayGame();
DeclareWinner();