
let username;

/*
username=window.prompt("Welcome. Please enter your name here..");

console.log(username);
*/

document.getElementById("mySubmit").onclick=function(){
    username=document.getElementById("myText").value;
    email=document.getElementById("eText").value;
    password=document.getElementById("pass").value;

    console.log(username);
    console.log(email);
    console.log(password);
}

