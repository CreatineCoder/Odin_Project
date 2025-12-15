let ComputerScore = 0;
let HumanScore = 0;
let humanChoice = '';
let computerChoice = '';
let rounds = 0;
let currentRound = 0;
let gameStarted = false;
function getcomputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice() {
    let choice = prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();
    return choice;
}

function PlayRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie! Make your next choice.";
    } else if ((humanChoice === 'rock' && computerChoice === 'scissors') ||
               (humanChoice === 'paper' && computerChoice === 'rock') ||
               (humanChoice === 'scissors' && computerChoice === 'paper')) {
        HumanScore++;
        currentRound++;
        return `You win! ${humanChoice} beats ${computerChoice}. Make your next choice.`;
    } else {
        ComputerScore++;
        currentRound++;
        return `You lose! ${computerChoice} beats ${humanChoice}. Make your next choice.`;
    }
}

function PlayGame() {
    for (let round = 1; round <= 5; round++) {
        humanChoice = getHumanChoice();
        computerChoice = getcomputerChoice();
    }
}
function DeclareWinner() {
    if (HumanScore > ComputerScore) {
        return "Congratulations! You are the overall winner!";
        
    } else if (ComputerScore > HumanScore) {
        return "The computer wins overall! Better luck next time.";
    } else {
        return "It's an overall tie!";
    }
}

const choiceButton = document.querySelector('#choice');
const choiceOutput = document.querySelector('.choice-output');
choiceButton.addEventListener('click', (e) => {
    humanChoice = getHumanChoice();
    computerChoice = getcomputerChoice();
})
 console.log(humanChoice);
 console.log(computerChoice);

const divRounds = document.createElement('div');
const NumberOfRoundsButton = document.querySelector('#no-of-rounds');
NumberOfRoundsButton.addEventListener('click', (e) => {
    rounds = parseInt(prompt("Enter number of rounds to play:"));
    divRounds.textContent = `Number of rounds: ${rounds}`;
    
    const RoundsDisplay = document.querySelector('.rounds-output');
    RoundsDisplay.appendChild(divRounds);
    console.log(rounds);
});

const divHumanChoice = document.createElement('div');
const divComputerChoice = document.createElement('div');
const divRoundResult = document.createElement('div');
const divcurrentRound = document.createElement('div');
const resultButton = document.querySelector('#result');
resultButton.addEventListener('click', () => {
    gameStarted = true;
    divHumanChoice.textContent = `Human Choice: ${humanChoice}`;
    divComputerChoice.textContent = `Computer Choice: ${computerChoice}`;
    const HumanChoiceDisplay = document.querySelector('.choice-output');
    const ComputerChoiceDisplay = document.querySelector('.computer-choice-output');
    HumanChoiceDisplay.appendChild(divHumanChoice);
    ComputerChoiceDisplay.appendChild(divComputerChoice);
    
    if (currentRound < rounds) {
        console.log(`Round ${currentRound + 1}`);
        const roundResult = PlayRound(humanChoice, computerChoice);
        divRoundResult.innerHTML = roundResult + "<br>" + `Score - Human: ${HumanScore}, Computer: ${ComputerScore}`;
        const RoundResultDisplay = document.querySelector('.result-output');
        RoundResultDisplay.appendChild(divRoundResult);

        divcurrentRound.textContent = `Current Round: ${currentRound}`;
        const CurrentRoundDisplay = document.querySelector('.rounds-output');
        CurrentRoundDisplay.appendChild(divcurrentRound);
        
        // Check if game is finished after playing this round
        if (currentRound === rounds) {
            const winnerMessage = DeclareWinner();
            divRoundResult.textContent += `\n\n${winnerMessage}\nFinal Score - Human: ${HumanScore}, Computer: ${ComputerScore}`;
        }
    }
    else if (currentRound >= rounds) {
        alert('Game is already finished! Refresh to play again.');
    }
});

