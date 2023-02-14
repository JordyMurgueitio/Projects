//CONDITIONAL STATEMENTS 



//if statement - executes code based on conditions

let discount = true;

if (discount) {     //evaluates if discount is true
    console.log("Time to buy");
}

// if else statement - run a block of code when the condition evaluates to false

let sale = true; 

if (sale) {
    console.log("time to buy something man");  //will be printed if sale is true
} else {
    console.log("lets wait for a sale man"); //will be printed if sale is false
}


// comparison operators - to compare values 

// less than: <  | Greater than > |  Less than or equal to: <= | Greater than or equal to: >=
// Is equal to: === |  Is not equal to: !==

let hungerLevel = 6; 

if (hungerLevel >= 7) {  //compares the value of hungerLevel with another one
    console.log("time to eat"); 
} else {
    console.log("we can wait");
}


// Logical operators


//and operator (&&) -- Both conditions must evaluate to true in order for code to execute
let day = "sunday";
let weather = "sunny";

if (day === "sunday" && weather === "sunny"){
    console.log("Go to the park");
} else {
    console.log("lets relax at home");
}

// or operator (||) -- Only one of the conditions must evaluate to true for code to execute 
let tired = false;
let late = false;

if (tired === true || late === true) {
    console.log("Go to sleep man");
} else {
    console.log("Go to work man");
}

//not operator (!) -- reverses or negates, the value of a boolean 
let excited = true;
console.log(!excited); // Prints false

let sleepy = false;
console.log(!sleepy); // Prints true


// Truthy and Falsy assignment 

