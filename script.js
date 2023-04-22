function getComputerChoice(){
    // return a random num between 3 and 1
    // 1 = rock, 2 = paper and 3 = scissors
    return Math.floor(Math.random() * 3) + 1;
}

function getPlayerChoiceNumber(choicePlayer){
    let choicePlayerNumber = 0;

    //converts the choice from string to number for calculations
    if (choicePlayer = "ROCK"){
        choicePlayerNumber = 1;
    }else if(choicePlayer = "PAPER"){
        choicePlayerNumber = 2;
    }else{
        choicePlayerNumber = 3;
    }
    return choicePlayerNumber;
}

function showRoundWinner(choiceComputer, choicePlayer){
    let roundResult = "";

    // playerChoice is Rock
    if(choicePlayer === 1){

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
    }else if(choicePlayer === 2){

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