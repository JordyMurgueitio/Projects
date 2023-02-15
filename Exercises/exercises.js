// Function finds the largest of 3 given numbers 
function largestNumber(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        console.log(`The largest number is ${num1}`);
    } else if (num2 > num3) {
        console.log(`The largest number is ${num2}`);
    } else {
        console.log(`The largest number is ${num3}`);
    }
}

largestNumber (600, 50, 97);