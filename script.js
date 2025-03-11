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

/******** events ********/

window.onload = async function () {
    await delay(1000);
    await typing("Hello World,", "#hello");
    await typing("My name is Darren Baldwin", "#name");
    await typing("and I am a FULL STACK DEVELOPER.", "#fst");
    await document.querySelector("#about").scrollIntoView(true);
}

window.addEventListener('scroll', fadeEventHandler);

/******** Handlers ********/

function fadeEventHandler() {
    fadeIn(".hero-container", "nav", 500);
    setTimeout(function () { fadeIn(".hero-container", "#past") },500);
    setTimeout(function () { fadeIn(".hero-container", "#present") }, 1000);
    setTimeout(function () { fadeIn(".hero-container", "#future") }, 1500);
    window.removeEventListener('scroll', fadeEventHandler)
}

/******** Transitions ********/

function fadeIn(passedElement, fadeElement) {
    const scrollActivator = document.querySelector(passedElement);
    const elementToFade = document.querySelector(fadeElement);

    if (scrollActivator.getBoundingClientRect().bottom <= 0) {
        elementToFade.style.opacity = 1;
        elementToFade.style.transform = "translate(0, 0)";
    }
}
