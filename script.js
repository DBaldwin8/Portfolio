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

window.addEventListener('scroll', fadeAboutHandler);

/******** Handlers ********/

function fadeAboutHandler() {
    fadeAbout(".hero-container", "nav");
    setTimeout(function () { fadeAbout(".hero-container", "#past") },500);
    setTimeout(function () { fadeAbout(".hero-container", "#present") }, 1000);
    setTimeout(function () { fadeAbout(".hero-container", "#future") }, 1500);
}

/******** Transitions ********/

function fadeAbout(passedElement, fadeElement) {
    const scrollActivator = document.querySelector(passedElement);
    const elementToFade = document.querySelector(fadeElement);
    const nav = document.querySelector("nav");
    
    if (scrollActivator.getBoundingClientRect().bottom <= 0) {
        elementToFade.style.opacity = "1";
        elementToFade.style.transform = "translate(0, 0)";
    }
    
    if (nav.style.opacity = 1) {
        window.removeEventListener('scroll', fadeAboutHandler);
    }
}
