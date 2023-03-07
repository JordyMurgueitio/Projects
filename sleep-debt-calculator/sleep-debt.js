// SLEEP-DEBT-CALCULATOR 

//get the sleep hours per day
function getSleepHours (day) {
    switch (day) {
        case "monday":
            return 8;
        break;

        case "tuesday":
            return 7;
        break;

        case "wednesday":
            return 2;
        break;

        case "thursday":
            return 5;
        break;

        case "friday":
            return 8;
        break;
    } 
}


// Calculating actual sleep hours for the week. 
const getActualSleepHours = () => getSleepHours("monday") + getSleepHours("tuesday") + getSleepHours("wednesday") +  getSleepHours("thursday") + getSleepHours("friday");


//Getting ideal sleep hours per night and multiplying for 5 (days of the week)
const getIdealSleepHours = (idealHours) => idealHours * 5;


//Calculating sleep debt. 
function calculateSleepDebt () {
    let totalHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours(9); 

    if (totalHours > idealSleepHours) {
        return  `You have slept ${totalHours} hours this week, the ideal is ${idealSleepHours} hours. You are over the ideal for ${totalHours - idealSleepHours} hours`;
    } else if (totalHours < idealSleepHours) {
        return `You have slept ${totalHours} hours this week, the ideal is ${idealSleepHours} hours. You are under the ideal for ${idealSleepHours - totalHours} hours`;
    } else {
        return `You have slept ${totalHours} hours this week, the ideal is ${idealSleepHours} hours. You are fine`;
    }
}

console.log(calculateSleepDebt());  



