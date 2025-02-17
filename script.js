'use strict'

// setTimeout(() => {
//     location.reload();
//   }, 1500);

/******** Typing function ********/


function typing(string, selectorId) {
    let i = 0;
    function typeCharacter() {
        if (i < string.length) {
            document.getElementById(selectorId).textContent += string.charAt(i);
            i++;
            setTimeout(typeCharacter, 150);
        }
    }
    typeCharacter();
}

/******** Onload instructions ********/

const deviceHeight = window.innerHeight;

window.onload = async function () {
    setTimeout(function () { typing("Hello World,", "hello") }, 1000);
    setTimeout(function () { typing("My name is Darren Baldwin", "name") }, 3500);
    setTimeout(function () { typing("and I am a FULL STACK DEVELOPER.", "fst") }, 7500);
    setTimeout(function () { window.scroll(0, deviceHeight) }, 13000);
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
