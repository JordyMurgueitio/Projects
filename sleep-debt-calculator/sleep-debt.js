// get the sleep my sleep hours per day

    function getSleepHours(day) {
    if (day === "monday") {
        return 8;
        } else if (day=== "tuesday") {
        return 8;
        } else if (day === "wednesday") {
        return 8;
        } else if (day === "thrusday") {
        return 7; 
        } else if (day === "friday") {
        return 8; 
        }
}

    // Calculating actual sleep hours for the week. 
    function getActualSleepHours() {
    return getSleepHours("monday") + getSleepHours("tuesday") + getSleepHours("wednesday") + getSleepHours("thrusday") + getSleepHours("friday");
    }
    console.log(`Actual sleep hours: ${getActualSleepHours()}`)

    //Getting ideal sleep hours 
    const getIdealSleepHours = () => {
        let idealHours = 8; 
        return idealHours * 5; 
    }
    console.log(`ideal sleep hours: ${getIdealSleepHours()}`)
    
    //Calculating sleep debt. 
    
    const calculateSleepDebt = () => {
        let actualSleepHours = getActualSleepHours(); 
        let idealSleepHours = getIdealSleepHours(); 
        if (actualSleepHours === idealSleepHours) {
        console.log("Perfect amount of sleep"); 
        } else if (actualSleepHours > idealSleepHours) {
        console.log("You are fuckin lazy"); 
        } else {
        console.log("you need more sleep");
        }
    };
    calculateSleepDebt();
