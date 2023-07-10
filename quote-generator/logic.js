/* Variables */

const quote = document.getElementById("quote");
const author = document.getElementById("author");
const button = document.getElementById("btn");


const quotes =[
    {
        quote: '"You only live once, but if you do it right, once is enough."',
        author: "Mae West"
    },
    {
        quote: '"If you want to live a happy life, tie it to a goal, not to people or things."',
        author: "Albert Einstein",
    },
    {
        quote: '"Not how long, but how well you have lived is the main thing.”',
        author: "Seneca",
    },
    {
        quote: '“If life were predictable it would cease to be life, and be without flavor.”',
        author: "Eleanor Roosevelt",
    },
    {
        quote: '“In order to write about life first you must live it.”',
        author: "Ernest Hemingway",
    },
    {
        quote: ' “Life is not a problem to be solved, but a reality to be experienced.”',
        author: "Soren Kierkegaard",
    },
    {
        quote: '“The unexamined life is not worth living.”',
        author: "Socrates",
    },
    {
        quote: '"I do the very best I know how- the very best I can; and I mean to keep on doung so until the end"',
        author: "Socrates",
    },
]

button.onclick = changeColor;

function changeColor () {
    let randomNumber = Math.floor(Math.random() * 9);
    quote.innerHTML = quotes[randomNumber].quote;
    author.innerHTML = quotes[randomNumber].author;
}