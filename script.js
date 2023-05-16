function getComputerChoice(){
    // return a random num between 3 and 1
    // 1 = rock, 2 = paper and 3 = scissors
    return Math.floor(Math.random() * 3) + 1;
}

function getPlayerChoiceNumber(choicePlayer){   //showRoundWinner() works with numbers 
    if (choicePlayer = "ROCK") return 1;    
    else if(choicePlayer = "PAPER") return 2;    
    else return 3;
}

function showRoundWinner(choiceComputer, choicePlayer){
    let roundResult = "";
  
    if(choicePlayer === 1){                                              // playerChoice is Rock
        if(choiceComputer === 1 ) roundResult = "Draw";                             // Rock vs Rock    
        else if (choiceComputer === 2) roundResult = "You lost. Paper beats rock";  // Rock vs Paper    
        else roundResult = "You WON!!";                                             // Rock vs Scissors
    }else if(choicePlayer === 2){                                        // playerChoice is Paper
            if(choiceComputer === 1 ) roundResult = "You WON!!";                    // Paper vs Rock    
            else if (choiceComputer === 2) roundResult = "Draw";                    // Paper vs Paper      
            else roundResult = "You lost. Scissor beats paper";                     // Paper vs Scissors
    }else{                                                               // playerChoice is Scissors
        if(choiceComputer === 1 ) roundResult = "You lost. Rock beats scissors";    // Scissors vs Rock   
        else if (choiceComputer === 2)roundResult = "You WON!!";                    // Scissors vs Paper           
        else roundResult = "Draw";                                                  // Scissors vs Scissors
    }
    return roundResult;   
}

function game(playerButton){
    let scoreComputer = 0, scorePlayer = 0, choicePlayer = "", roundResult = "";
    choicePlayer = playerButton.toUpperCase();
    roundResult = showRoundWinner(getComputerChoice(), getPlayerChoiceNumber(choicePlayer));
        
    if (roundResult.includes("WON") === true)      ++scorePlayer;
    else if(roundResult.includes("lost") === true) ++scoreComputer;
         
    messages.textContent =  `Computer Score is ${scoreComputer} Player Score is ${scorePlayer}`;
    messages.textContent += `${roundResult}`;
        
    if (scoreComputer < 6 || scorePlayer < 6){
        messages.textContent =  `GAME OVER`;
        scorePlayer = 0;
        scoreComputer = 0;
    }
}

let messages =  document.querySelector('#content');
let buttons = document.querySelectorAll('button');
buttons = Array.from(buttons);
buttons.shift();
buttons.forEach(button => button.addEventListener('click', (e) => {
    game(e.target.textContent);
} ));