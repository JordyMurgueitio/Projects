    
    /* This is some test to make it work on the browser */
/*     let button = document.getElementById("trigger");

    function answer(){
        document.getElementById("answer-para").innerHTML = "Hola"
        document.getElementsByTagName("input").innerHTML = "";
    }
    button.addEventListener(click, answer()); */
    


    /* From here starts the logic */
/*     let userName = "erik";  // create variable for username

    userName ? console.log(`Hello, ${userName} !`)  // Greeting for username 
    : console.log("Hello!");

    // save user question in a variable and log it 
    let userQuestion = "will i be rich";
    console.log(userQuestion);

    
    let randomNumber = Math.floor(Math.random() * 8);  // generate a random number between 1 and 7  
    let eightBall = "";  //create a variable for the eightball answer 
    
    // conditional that gives variable eightBall a value depending on the value of the randomNumber variable
    switch (randomNumber) {
    case 0: 
    eightBall ='It is certain'; 
    break; 
    case 1: 
    eightBall= 'It is decidedly so'; 
    break; 
    case 2: 
    eightBall = 'Reply hazy try again'; 
    break; 
    case 3: 
    eightBall = 'Cannot predict now'; 
    break; 
        case 4: 
    eightBall = 'Do not count on it'; 
    break; 
        case 5: 
    eightBall = 'My sources say no'; 
    break; 
        case 6: 
    eightBall = 'Outlook not so good'; 
    break; 
        case 7: 
    eightBall = 'Signs point to yes'; 
    break;
    }

    console.log(eightBall); */   // logs the value of eightBall. It will be a new answer everytime. 





// improved version


function playGame (question) {
    if (typeof question != "string") {
        return "Invalid question";
    } else if (question) {
        console.log(question);
    }
    let randomNumber = Math.floor(Math.random() * 6);
    let answer = ""; 
    switch (randomNumber) {
        case 1: 
        answer = "Definetily"; 
        break; 
        case 2: 
        answer = "Not sure";
        break; 
        case 3: 
        answer = "Yes man";
        break; 
        case 4: 
        answer = "Not today";
        break; 
        case 5: 
        answer = "why not";
        break; 
    }
    return answer;
}

console.log(playGame("will be rich"));


