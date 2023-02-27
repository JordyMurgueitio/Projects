// generating color options
const colors = ["rgb(226, 12, 12)", "rgb(21, 36, 172)", "rgb(35, 131, 26)", "rgb(214, 211, 7)"];
// getting button and saving it in a variable
const btn = document.getElementById("btn");
// getting the color text
const color = document.querySelector(".color");


// adding event to button
btn.addEventListener("click", function(){ 
    // saves the random number 
    const randomNumber = getRandomNumber(); 
    // colors[randomNumber] picks one of the color options randomly when the btn is clicked
    document.body.style.backgroundColor = colors[randomNumber];
    color.innerHTML = colors[randomNumber];
})

// generates a random number between 0 and colors.length
function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}