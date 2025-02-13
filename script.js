'use strict'

// setTimeout(() => {
//     location.reload();
//   }, 1500);


let i = 0;

function cursorBlink(cursorId) {
    let cursor = false;
    let speed = 250;
    setInterval(() => {
        if (!cursor) {
            document.getElementById(cursorId).style.opacity = 1;
            cursor = true;
        } else {
            document.getElementById(cursorId).style.opacity = 0;
            cursor = false;
        }
    }, speed);
}

function typing(string, selectorId) {
    if (i < string.length) {
        document.getElementById(selectorId).insertAdjacentText('beforebegin', string.charAt(i));
        i++;
        setTimeout(function () { typing(string, selectorId) }, 150);
    } else {
        i = 0;
    }
}


window.onload = function () {
    cursorBlink('hello-cursor');
    setTimeout(function () { typing("Hello World,", "hello-cursor") }, 1000);

    setTimeout(function () { typing("My name is Darren Baldwin", "name-cursor") }, 3500);
    setTimeout(function () { typing("and I am a FULL STACK DEVELOPER.", "fst-cursor") }, 7500);
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
