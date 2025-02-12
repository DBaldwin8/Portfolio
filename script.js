'use strict'

// setTimeout(() => {
//     location.reload();
//   }, 1500);

let speed = 130;
let i = 0;

// function typing(string, selectorId) {
//     if (i < string.length) {
//         document.getElementById(selectorId).innerHTML += string.charAt(i);
//         i++;
//         setTimeout(function () { typing(string, selectorId) }, speed);
//     } 
// }



// window.onload = async function () {
//     setTimeout(function () { typing("Hello World,", "hello") }, 2000)
//     await function() {typing("My name is ", "name")};
// }

function typing(string) {
    if (i < 12) {
        document.getElementById("hello").innerHTML += string.charAt(i);
        i++;
        setTimeout(function () { typing(string) }, speed);
    } else if (i < string.length) {
        document.getElementById("name").innerHTML += string.charAt(i);
        i++;
        setTimeout(function () { typing(string) }, speed);
    }
}



window.onload = async function () {
    setTimeout(function () { typing("Hello World,My name is Darren Baldwin") }, 2000);
}
