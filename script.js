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

function fadeSkillsHandler() {
    const elements = {
        ids: ["#frontend", "#backend", "#methodologies", "#fullstack", "#tools"],
        positions: [],
        grouping: {}
    };

    const lastElement = document.querySelector(elements.ids[elements.ids.length - 1]);

    // for (const element in elements.ids){
    //     elements.positions.push(document.querySelector(element).offsetTop);
    // }

    function returnPosition(element) {
        return document.querySelector(element).offsetTop
    }

    elements.positions = elements.ids.map(returnPosition)

    // for (const position in elements.positions){
    // }

    // if the positions matches another entry push both ids to an array in elements.matches
    // PUSH THE IDS TO MATCHES USING HEIGHT AS A KEY!!!

    elements.positions.forEach((position, i) => {
        if (position in elements.grouping) {
            elements.grouping[position].push(elements.ids[i])
        }  else {
            elements.grouping[position] = elements.ids[i];
        }
        // check position exist {add the id to the position} else create the position and add the id.
    });

    elements.forEach((element, i) => {
        if (Math.floor(document.querySelector(element).getBoundingClientRect().bottom) <= window.innerHeight) {
            setTimeout(() => fadeInAndTranslate(element), (i * 200));
        }
    });

    if (lastElement.style.opacity === "1") {
        window.removeEventListener('scroll', fadeSkillsHandler);
    }
}

/******** Transitions ********/

function fadeInAndTranslate(fadeElement) {
    const elementToFade = document.querySelector(fadeElement);

    elementToFade.style.opacity = "1";
    elementToFade.style.transform = "translate(0, 0)";
}
