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
    document.querySelector("#about").scrollIntoView(true);
    }
}

window.addEventListener('scroll', fadeAboutHandler);
window.addEventListener('scroll', fadeSkillsHandler);

/******** Handlers ********/

function fadeAboutHandler() {
    const scrollActivator = document.querySelector(".hero-container");
    const nav = document.querySelector("nav");

    if (scrollActivator.getBoundingClientRect().bottom <= 0) {
        fadeInAndTranslate("nav");
        setTimeout(function () { fadeInAndTranslate("#past") }, 500);
        setTimeout(function () { fadeInAndTranslate("#present") }, 1000);
        setTimeout(function () { fadeInAndTranslate("#future") }, 1500);
    }
    
    if (nav.style.opacity === "1") {
        window.removeEventListener('scroll', fadeAboutHandler);
    }
}

async function fadeSkillsHandler() {
    const elements = ["#frontend", "#backend", "#methodologies", "#fullstack", "#tools"];
    const lastElement = document.querySelector(elements[elements.length-1]);

    elements.forEach(element => {
        if (Math.floor(document.querySelector(element).getBoundingClientRect().bottom) <= window.innerHeight) {
            fadeInAndTranslate(element);
        }
    });

    if (lastElement.opacity === 1) {
        window.removeEventListener(fadeSkillsHandler);
    }
}

/******** Transitions ********/

function fadeInAndTranslate(fadeElement) {
    const elementToFade = document.querySelector(fadeElement);

    elementToFade.style.opacity = "1";
    elementToFade.style.transform = "translate(0, 0)";
}
