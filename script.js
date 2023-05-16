function getComputerChoice(){
    // return a random num between 3 and 1
    // 1 = rock, 2 = paper and 3 = scissors
    return Math.floor(Math.random() * 3) + 1;
}
function getPlayerChoiceNumber(choicePlayer){   //showRoundWinner() works with numbers 
    if (choicePlayer.toUpperCase() === "ROCK") return 1;    
    else if(choicePlayer.toUpperCase() === "PAPER") return 2;    
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
        if(choiceComputer === 1 ) roundResult = 'You lost. Rock beats scissors';    // Scissors vs Rock   
        else if (choiceComputer === 2)roundResult = 'You WON!!';                    // Scissors vs Paper           
        else roundResult = 'Draw';                                                  // Scissors vs Scissors
    }
    return roundResult; 
}
let text =  document.querySelector('#messages'), textValue = "", scorePlayer = 0, scoreComp = 0;
const choice = document.querySelectorAll('button');
const scoreP = document.querySelector('.playerScore'), scoreC = document.querySelector('.compScore');

choice.forEach(button => button.addEventListener('click', (e) => {
    textValue = text.textContent = showRoundWinner(getComputerChoice(), getPlayerChoiceNumber(e.target.textContent));
    
if (textValue.includes("WON") === true) scoreP.textContent = ++scorePlayer;   
else if(textValue.includes("lost") === true) scoreC.textContent = ++scoreComp;
if (scoreComp === 5 || scorePlayer === 5){
    if (scorePlayer > scoreComp) text.textContent = 'You won the match congrats !!!';
    else text.textContent = 'GAME OVER';
    scoreP.textContent = scorePlayer = 0;
    scoreC.textContent = scoreComp = 0;
}
}))