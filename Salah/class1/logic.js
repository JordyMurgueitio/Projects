let number = 5; 
let number2 = 5;


// Condition evaluates the bigger of 2 numbers
if(number > number2){
    console.log("number 1 is greater");
} 
else if(number == number2){
    console.log("number 2 is eaqual to number 1");
}
else {
    console.log("number 2 is greater");
}

// loop that repeats 20 times
for(let i=0; i<20; i++){
    console.log('me gusta el espagnol '+i);
}


// Function add 2 numbers
function my_addition(a, b){
    let result = a+b;
    alert('the result of the addition is : '+result);
}
// my_addition(6, 2);


// Function multiply 3 numbers
function multiply(a, b, c){
    let result = a * b * c;
    alert("The result of multiplying is: " + result);
}
// multiply(2, 4, 5);


// Function evaluates if a number is positive or negative
function pos_neg (number){
    if (number > 0){
        alert(`the number ${number} is positive`);
    }
    else if (number < 0) {
        alert(`the number ${number} is negative`);
    }
    else {
        alert(`the number ${number} is null`);
    }
}
//pos_neg(10); 



// Function evaluates if a number is odd or even
function odd_eve (number){
    if(number % 2 == 1) {
        return `the number ${number} is odd`;
    }
    else{
        return `the number ${number} is even`;
    }
}

// console.log(odd_even(3))

let str ="";
str += "hey Jordy";
str +="\nhey Salah\n";
str += odd_eve(10)+"\n";
str += odd_eve(7)+"\n";
str += odd_eve(540)+"\n";
str += odd_eve(875)+"\n";
// alert(str);



// function adds the 1st and last elements of an array
function first_last(my_array){
    let fist_element = my_array[0];
    let last_element = my_array[my_array.length-1];
    return fist_element + last_element;
}
//alert(first_last([54, 32, 21, 675, 3]));



// Function adds all the elements of an array
// [54, 32, 21, 675, 3]
function sumUp_array(array){
    let total = 0;
    for (let i=0; i < array.length; i++) {
        total += array[i];
    }
    return total
}
//alert(sumUp_array([54, 32, 21, 675, 3]));



// Function adds only negative values of an array
function sumUp_array_neg(array) {
    let total = 0;
    for (let i=0; i<array.length; i++){
        if (array[i] < 0) {
            total += array[i];
        }
    }
    return `The total of negative numbers of the array is ${total}`;
}
// alert(sumUp_array_neg([54, 32, -21, 675, -3]));



// Function adds only the half of elements of the array
function sumUp_first_half_array(array){
    let total = 0
   

    for (let i=0; i < array.length/2; i++) {
        total += array[i];
    }
    return total
}
// alert(sumUp_first_half_array([54, 32, 21, 675, 3]));

function sumUp_second_half_array(array){
    let total = 0
    for (let i=Math.floor(array.length/2); i < array.length; i++) {
        total += array[i];
    }
    return total
}
// alert(sumUp_second_half_array([54, 32, 21, 675, 3]));



//  vas a crear una function que va contar cuantos 5 hay en un "array"                                  
// [54, 32, 21, 675, 3] ---> 0                          
// [54, 32, 5, 5, 21, 675, 3] ---> 2  

function myFunction_count_5 (array) {
    let countOfFives = 0;
    for (let i= 0; i < array.length; i++) {
        if (array[i] === 5) {
            // countOfFives += 1;
            countOfFives ++;
        }
    }
    return countOfFives;
}

// alert(myFunction([5, 34, 3, 5, 3]))




// ["Jordy", "Salah","tarek","Mhedi"]
// Jordy;Salah;Tarek;Mehdi
function array_to_csv (array) {
    let string = "";
    for (let i = 0; i < array.length; i++) {
        string += array[i] + ";";
    }
    return string;
}

// alert(array_to_csv(["Jordy", "Salah", "Messi"]));




const add_array_numbers = (array1, array2) => {
    return array1[0] + array1[array1.length - 1] + array2[0] + array2[array2.length - 1];
}

// alert (add_array_numbers([10, 4, 4], [1, 60, 3]));



const compareArrays = (array1, array2) => {
    let array1_sum = sumUp_array(array1);
    let array2_sum = sumUp_array(array2);
    
    if (array1_sum > array2_sum) {
        return array_to_csv(array1);
    } else {
        return array_to_csv(array2)
    }
}

// alert(compareArrays([2,5,5], [10, 5]));
// [2,5,9, 43, 8] -->[8,5,5, 43, 2] 
// 2 ---> 0
// 3 ---> 0

// [2,5, 2, 3 , 9, 43, 8, 2, 3 , 5,9, 43, 8]
// [2,5,9, 43, 8] --> [5,9,43, 8, 8] 

function shiftLeft (array) {
    let firstElement = array[0];
    for (let i = 0; i < array.length-1; i++){
        array[i] = array[i +1];
    }
    array[array.length-1] = firstElement
}

function pattern (array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 2 && array[i + 1] === 3 ) {
            count ++;
        }
    }
    return count
}


function switchArray (array) {
    let firstElement = array[0];
    array[0] = array[array.length - 1]
    array[array.length -1 ] = firstElement;
    return array
}
alert(switchArray([10, 10, 2, 6]));


// [43, 3, 65, 21 , 2 , 65, 2, 8] ---> 43;3;65;21;2;65;2;8
// [43, 0, 65, 21 , 0 , 65, 0, 8]

function transformArray (array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 2 || array[i] === 3 ) {
            array[i] = 0
        }
    }
    return array
}
//a = 21
// alert(transformArray([43, 3, 65, 21 , 2 , 65, 2, 8]))
//[8, 3, 65, 21 , 2 , 65, 2, 43]
function swapArray (array) {
    let first = array[0]; 
    let last = array[array.length - 1];
    array[0] = last;
    array[array.length -1] = first;
    return array;
}

alert(swapArray([8, 3, 65, 21 , 2 , 65, 2, 43]));
















