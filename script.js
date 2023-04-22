function getComputerChoice(){
    // return a random num between 3 and 1
    // 1 = rock, 2 = paper and 3 = scissors
    return Math.floor(Math.random() * 3) + 1;
}

function getPlayerChoiceNumber(choicePlayer){
    let choicePlayerNumber = 0;

    //converts the choice from string to number for calculations on showRoundWinner()
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
        }else if(playerChoice = "SCISSORS"){
            // Scissors vs Scissors
            roundResult = "Draw";
        }else{
            console.log("Invalid String. Be sure to not leave any space or make any typos")
        }
    }

    return roundResult;
    
}

function game(){
    let scorePlayer = 0, scoreComputer = 0, choicePlayer = "", originalStringPlayerChoice = "", roundResult = "";

    for(i = 1; i < 6 ; i++){
        choicePlayer = prompt("Enter your move Rock, Paper or Scissors. NO TYPOS or it won't work!!! ")

        //to store original string to later console.log player's choice without any change made to it
        originalStringPlayerChoice = choicePlayer;

        choicePlayer = choicePlayer.toUpperCase();
        roundResult = showRoundWinner(getComputerChoice(), getPlayerChoiceNumber(choicePlayer));
        
        if (roundResult.search("You WON") === -1 && roundResult.search("Draw") === -1){
            ++scoreComputer;
        }else if(roundResult.search("Draw") === -1){
            ++scorePlayer;
        }
        
        console.log("\n------------------ROUND " + i + "------------------");
        console.log("\nYOUR MOVE IS " + originalStringPlayerChoice);
        console.log("\n" + roundResult);
        
        if (i === 5){
            console.log("*********************END**********************");
            console.log("\nComputer Score is " + scoreComputer + "\n Player Score is " + scorePlayer);            
        }

    }
}
