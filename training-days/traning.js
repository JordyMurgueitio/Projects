// TRAINING DAYS. 

/* program prints to the console the name of the user 
with the event that the user signed up for and the days left to train  */



// 1. Function generates a random event with 3 options
const getRandEvent = () => {
    const random = Math.floor(Math.random() * 3);
    if (random === 0) {
        return 'Marathon';
    } else if (random === 1) {
        return 'Triathlon';
    } else if (random === 2) {
        return 'Pentathlon';
    }
};
const event = getRandEvent();   // saves the event in a variable
const event2 = getRandEvent();


// 2. function return the number of days based on the event 
const getTrainingDays = event => {
    let days = 0;
    if (event === 'Marathon') {
        days = 50;
    } else if (event === 'Triathlon') {
        days = 100;
    } else if (event === 'Pentathlon') {
        days = 200;
    }
    return days;
};
const days = getTrainingDays(event); 
const days2 = getTrainingDays(event2);

// 3. Save the user name in a variable
const name = "Nala";
const name2 = 'Warren';

// 4. function prints the name of the user and the event the signed up for
const logEvent = (name, event) => {
    console.log(`${name}'s event is: ${event}`);
};

// 5. function prints the name of the user and the days left
const logTime = (name, days) => {
    console.log(`${name}'s time to train is: ${days} days`);
};

logEvent(name, event);
logTime(name, days);

logEvent(name2, event2);
logTime(name2, days2);
