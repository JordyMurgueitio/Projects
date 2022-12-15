
// ROCK-PAPER-SCISSORS GAME



    /* Getting user choice  */
    const getUserChoice = userInput => {
        userInput.toLowerCase(); //making sure just lowercase values
        if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {  //user input can only be one of these 3 values if not error message will be returned
            return userInput; 
        } else {
        console.log("Error");
        }
    };
    
    // getting computer choice
    const getComputerChoice = () => {
        let randomNumber= Math.floor(Math.random()*3);  // generates a random number between 0 and 2 
        if (randomNumber === 0) {  //outputs a solution based on the random number
        return "rock"; 
        } else if (randomNumber === 1) {
        return "paper"; 
        } else if (randomNumber === 2) {
        return "scissors"; 
        }
    };
    
    //logic to Determine the winner 
    
    function determineWinner(userChoice, computerChoice) {
        if (userChoice === computerChoice) {  //tie
        return "it was a tie";
        }

        if (userChoice === "rock") {  //first scenario: user choice rock
            if (computerChoice === "paper") {
            return "computer won";
            } else {
            return "you won"; 
            }
        }

        if (userChoice === "paper") {   //2nd scenario user choice paper
            if (computerChoice === "scissors"){
            return "computer won"; 
            } else {
            return "you won"; 
            }
        }

        if (userChoice === "scissors") {  //3rd scenario user choice scissors
            if (computerChoice === "rock"){
            return "computer won"; 
            } else {
            return "you won"; 
            }
        }
    } // end of determineWinner function
    

    //function to play the game
    const playGame = () => {
        let userChoice = getUserChoice("paper");  //creates a variable to save the user choice
        let computerChoice = getComputerChoice(); //creates a variable to save the computer choice
        console.log(`Your choice is: ${userChoice}`);  
        console.log(`computer choice is: ${computerChoice}`);
        console.log(determineWinner(userChoice, computerChoice)); // call the function determineWinner and logs the message to the console
    }
    
    playGame(); //Calling the function to execute the game 
    
    
    
    