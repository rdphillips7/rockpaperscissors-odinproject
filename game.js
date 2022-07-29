let computerOptions = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    return computerOptions[Math.floor(Math.random() * computerOptions.length)]
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "rock")) {
        playerScore++;
        console.log(playerScore);
        console.log(computerScore);
    } else if (playerSelection == computerSelection) {
        
    } else {
        computerScore++;
        console.log(playerScore);
        console.log(computerScore);
    }
}

const buttons = document.querySelectorAll('.choice');
buttons.forEach((button) => {
    button.addEventListener('click', clickBtn)
})

function clickBtn(e){
    let playerChoice = e.target.id;
    let computerChoice = computerPlay();
    playRound(playerChoice, computerChoice);
}
