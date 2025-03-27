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
    }
    setFadeDelays(["#past", "#present", "#future"], 500, fadeAboutHandler);

}

function fadeSkillsHandler() {
    setFadeDelays(["#frontend", "#backend", "#methodologies", "#fullstack", "#tools"], 200, fadeSkillsHandler);
}

/******** Transitions ********/

function fadeInAndTranslate(fadeElement) {
    const elementToFade = document.querySelector(fadeElement);

    elementToFade.style.opacity = "1";
    elementToFade.style.transform = "translate(0, 0)";
}

/******** Helpers ********/


function returnYPosition(element) {
    return document.querySelector(element).offsetTop
};

function groupElementsByLine(elementsArray) {
    const elements = {
        groups: {},
        lastElementId: undefined
    };
    const positions = elementsArray.map(returnYPosition)

    positions.forEach((position, i) => {
        if (position in elements.groups) {
            elements.groups[position].push(elementsArray[i])
        } else {
            elements.groups[position] = [elementsArray[i]];
        }
    });
    const lastElementPosition = (Math.max(...(Object.keys(elements.groups).map(Number))));
    
    elements.lastElementId = Object.values(elements.groups[lastElementPosition]).at(-1);

    return elements;
}

function setFadeDelays(elementsArray, delayBetweenElements, handler) {
    const elements = groupElementsByLine(elementsArray)
    const lastElement = document.querySelector(elements.lastElementId);

    Object.values(elements.groups).forEach((group) => {
        if (Math.floor(document.querySelector(group[0]).getBoundingClientRect().bottom) <= window.innerHeight) {
            for (let i = 0; i < group.length; i++) {
                setTimeout(() => fadeInAndTranslate(group[i]), (i * delayBetweenElements));
            }
            if (lastElement.style.opacity === "1") {
                window.removeEventListener('scroll', handler);
            }
        }
    });
}
