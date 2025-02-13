'use strict'

// setTimeout(() => {
//     location.reload();
//   }, 1500);

let i = 0;

function typing(string, selectorId) {
    if (i < string.length) {
        document.getElementById(selectorId).innerHTML += string.charAt(i);
        i++;
        setTimeout(function () { typing(string, selectorId) }, 150);
    } else {
        i = 0;
    }
}

window.onload = async function () {
    setTimeout(function () { typing("Hello World,", "hello") }, 2000);
    setTimeout(function () { typing("My name is Darren Baldwin", "name") }, 4500);
    setTimeout(function () { typing("and I am a FULL STACK DEVELOPER.", "fst") }, 8500);
}

// function typing(string) {
//     if (i < 12) {
//         document.getElementById("hello").innerHTML += string.charAt(i);
//         i++;
//         setTimeout(function () { typing(string) }, speed);
//     } else if (i < string.length) {
//         document.getElementById("name").innerHTML += string.charAt(i);
//         i++;
//         setTimeout(function () { typing(string) }, speed);
//     }
// }

// window.onload = function () {
//     setTimeout(function () { 
//         typing("Hello World, My name is Darren Baldwin and I am a FULL STACK DEVELOPER") }
//         , 1000);
// }
