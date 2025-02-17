'use strict'

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
