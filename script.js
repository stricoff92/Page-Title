
function getComputerChoice() {
    // Do not edit
    return ['rock', 'paper', 'scissor'][Math.floor(Math.random() * 3) + 0];
}

function hideButtons() {
    $("#choices").hide();
}


function outcomeTie(bothPicked) {
    $("#player-choice").text(bothPicked);
    $("#computer-choice").text(bothPicked);
    $("#game-results").show();
}

function outcomeWin(playerPicked, computerPicked) {
    $("#player-choice").text(playerPicked);
    $("#computer-choice").text(computerPicked);
    $("#result-gif").html("<img src='https://media.giphy.com/media/26xBsTS9WJ7THk4mI/giphy.gif'>");
    $("#game-results").show();
}

function outcomeLoss(playerPicked, computerPicked) {
    $("#player-choice").text(playerPicked);
    $("#computer-choice").text(computerPicked);
    $("#result-gif").html("<img src='https://media.giphy.com/media/l0ExpYJiW867TwI9i/giphy.gif'>");
    $("#game-results").show();
}

function playGame(playerChoice) {
    // playerChoice should be a string:
    // either "rock", "paper", or "scissor"
    $("#result-gif").html("");
    
    var computerChoice = getComputerChoice();
    console.log(computerChoice, playerChoice);
    
    // Finish this function, call the appropriate outcome function
    if (playerChoice === computerChoice) {
        outcomeTie(playerChoice);
    }
    else if(playerChoice === "rock" && computerChoice === "scissor") {
        outcomeWin(playerChoice, computerChoice);
    }
    else if(playerChoice === "paper" && computerChoice === "rock") {
        outcomeWin(playerChoice, computerChoice);
    }
    else if(playerChoice === "scissor" && computerChoice === "paper") {
        outcomeWin(playerChoice, computerChoice);
    }
    else {
        outcomeLoss(playerChoice, computerChoice);
    }

}

// Add Click Handlers and call the playGame function below

$("#choice-rock-btn").click(()=>{playGame("rock");});
$("#choice-paper-btn").click(()=>{playGame("paper");});
$("#choice-scissor-btn").click(()=>{playGame("scissor");});


