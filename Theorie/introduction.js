//PROPERTIES - data types have properties

console.log("hello".length); //length propertie - prints 5

//METHODS - actions we can perform

console.log("hello".toUpperCase()); //prints HELLO
console.log("mija".startsWith("m")); //prints true



// BUILT-IN OBJECTS - objects have methods and properties

console.log("hola"); //console object - log method - prints hola

Math.random(); //Math object with random method 
console.log(Math.random()); //prints random number between 0 and 1

Math.floor(Math.random() * 50); //floor method rounds down the nearest whole number
console.log(Math.floor(Math.random() * 50)); //prints whole random number between 0 and 50

Number.isInteger(2030); //Number object with isInteger method
console.log(Number.isInteger(120)); //prints true


// VARIABLES - store information 

//var - can be reassigned - can be undefinded
var myName = ""; 
myName = "Juan"
console.log(myName);

//let - can be reassigned - can be undefinded
let meal = "pizza"; 
meal = "burger"
console.log(meal);

//const - can't be reassigned - must have a value
const age = 50;
console.log(age);

//Mathematical assignment operators 
let a = 8;
a += 2; // Can be written as a = a + 2
console.log(x); // Output: 10

let x = 20;
x -= 5; // Can be written as x = x - 5
console.log(x); // Output: 15

let y = 50;
y *= 2; // Can be written as y = y * 2
console.log(y); // Output: 100

let z = 8;
z /= 2; // Can be written as z = z / 2
console.log(z); // Output: 4

//Increment and decrement operators 
let tios = 5; 
tios++; 
console.log(tios); //Prints 6 

let abuelos = 4; 
abuelos--; 
console.log(abuelos); //prints 3