
    //Race Registration project. 
    //Creates variables
    let raceNumber = Math.floor(Math.random() * 1000); 
    let earlyRegister = true; 
    let runnerAge = 80; 

    // 1st conditional for assigning race number. Runners under 18 will have a number between 0 and 999. 
    // Runners over 18 will have a number between 1000 and 1999. 
    if (runnerAge > 18 && earlyRegister === true) {
    raceNumber += 1000;
    }

    // Conditions
    if (runnerAge > 18 && earlyRegister === true) {
    console.log(`You race at 9.30am, your race number is: ${raceNumber}.`);  // message for runners over 18 AND early registered
    } else if (runnerAge >18 && earlyRegister === false) {
    console.log(`You race at 11.00am, your race number is: ${raceNumber}.`); // message for runners over 18 AND late registered
    } else if (runnerAge < 18) {
    console.log(`You race at 12.30pm, your race number is: ${raceNumber}.`);  // message for runners under 18. regarding time of registration
    } else {
    console.log("See registration desk");   // message for runners who are just 18. 
    }




