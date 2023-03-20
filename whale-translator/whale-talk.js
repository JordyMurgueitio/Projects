// Take a phrase like ‘turpentine and turtles’ and translate it into its “whale talk” equivalent: ‘UUEEIEEAUUEE’.

/*  There are a few simple rules for translating text to whale language:
    There are no consonants. Only vowels
    The u‘s and e‘s are extra long, so we must double them in our program. */




// creates variable to save the phrase to be translated
let input = 'turpentine and turtles';  

const vowels = ['a', 'e', 'i', 'o', 'u'];  // create array with vowels to compare with input

let resultArray = [];  // the resultArray will store the elements that match between input and vowels


for (i = 0; i < input.length; i++) {  // loops through each element in input
    // if input[i] is e it will push it to the resultArray
    if (input[i] === 'e') {     
        resultArray.push(input[i]);
    }
    // same condition for u, e and u are doubled
    if (input[i]=== 'u') {
        resultArray.push(input[i]);
    }
    // for each element in input, we loop through all elements in vowels
    for (j = 0; j < vowels.length; j++) {   
        // if the elements match, we push that elemet to the resultArray
        if (input[i] === vowels[j]) {   
        resultArray.push(input[i]);
        }
    }
}

// we join all the elements resultArray elements into a string and then change that string to uppercase and save to a var
let resultString = resultArray.join("").toUpperCase();

console.log(resultString);  // logs the translated input into whale language