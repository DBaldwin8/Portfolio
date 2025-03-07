'use strict'

/******** Typing function ********/

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function typing(string, selector) {
    for (let i = 0; i < string.length; i++) {
        document.querySelector(selector).textContent += string.charAt(i);
        await delay(150); // delay for each character
    }
    await delay(500); // delay to the next call.
}

/******** Onload instructions ********/

window.onload = async function () {
    await delay(1000);
    await typing("Hello World,", "#hello");
    await typing("My name is Darren Baldwin", "#name");
    await typing("and I am a FULL STACK DEVELOPER.", "#fst");
    await document.querySelector("#about").scrollIntoView(true);
}

window.addEventListener('scroll', fadeIn);

/******** Transitions ********/

/*** Fade ***/

const heroContainer = document.querySelector(".hero-container");
const aboutContainer = document.querySelector(".about-section ");

function fadeIn() {
    if (document.body.scrollHeight > heroContainer.scrollHeight) {
        aboutContainer.style.opacity = 1;
    }
}
