function getComputerChoice(){
    // return a random num between 3 and 1
    // 1 = rock, 2 = paper and 3 = scissors
    return Math.floor(Math.random() * 3) + 1;
}

function showRoundWinner(choiceComputer, choiceUser){
    let roundResult = "";

    // playerChoice is Rock
    if(choiceUser === 1){

        if(choiceComputer === 1 ){
            // Rock vs Rock
            roundResult = "Draw";
        }else if (choiceComputer === 2){
            // Rock vs Paper
            roundResult = "I chose PAPER. You lost :(";
        }else{
            // Rock vs Scissors
            roundResult = "I chose SCISSORS. You WON!!";
        }

    // playerChoice is Paper
    }else if(choiceUser === 2){

        if(choiceComputer === 1 ){
            // Paper vs Rock
            roundResult = "I chose ROCK. You WON!!";
        }else if (choiceComputer === 2){
            // Paper vs Paper
            roundResult = "Draw";
        }else{
            // Paper vs Scissors
            roundResult = "I chose Scissors. You lost :(";
        }

    // playerChoice is Scissors    
    }else{

        if(choiceComputer === 1 ){
            // Scissors vs Rock
            roundResult = "I chose ROCK. You lost :(";
        }else if (choiceComputer === 2){
            // Scissors vs Paper
            roundResult = "I chose PAPER. You WON!!";
        }else{
            // Scissors vs Scissors
            roundResult = "Draw";
        }
    }

    return roundResult;
    
}