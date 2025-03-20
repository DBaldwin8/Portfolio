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
    const stopScrollPosition = document.querySelector(".hero-container")

    await delay(1000);
    await typing("Hello World,", "#hello");
    await typing("My name is Darren Baldwin", "#name");
    await typing("and I am a FULL STACK DEVELOPER.", "#fst");
    if (stopScrollPosition.getBoundingClientRect().bottom > 0) {
    await document.querySelector("#about").scrollIntoView(true);
    }
}

window.addEventListener('scroll', fadeAboutHandler);

/******** Handlers ********/

function fadeAboutHandler() {
    const scrollActivator = document.querySelector(".hero-container");
    const nav = document.querySelector("nav");

    if (scrollActivator.getBoundingClientRect().bottom <= 0) {
        fadeAbout("nav");
        setTimeout(function () { fadeAbout("#past") }, 500);
        setTimeout(function () { fadeAbout("#present") }, 1000);
        setTimeout(function () { fadeAbout("#future") }, 1500);
    }
    
    if (nav.style.opacity === "1") {
        window.removeEventListener('scroll', fadeAboutHandler);
    }
}

/******** Transitions ********/

function fadeAbout(fadeElement) {
    const elementToFade = document.querySelector(fadeElement);

    elementToFade.style.opacity = "1";
    elementToFade.style.transform = "translate(0, 0)";

}
