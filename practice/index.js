/* PRACTICE GETTING HTML ELEMENTS */

/* document.getElementById("demo").innerHTML = "Hola";

document.getElementById("demo").style.color = "blue";

document.querySelector(".title").style.color = "blue"; */

/* PRACTICE */
console.log("hola " + "Mija");
console.log("Hello".startsWith("m"));

/* 
51744d62-7800-43f2-a396-5b48ec8bbb8d */

function emailSend () {
    Email.send({
        SecureToken : "51744d62-7800-43f2-a396-5b48ec8bbb8d",
        To : 'jordinho.15@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New message",
        Body : document.getElementById("name") + "age" + document.getElementById("age") + document.getElementById("email")
    }).then(
        message => alert(message)
    );
}