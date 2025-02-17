'use strict'

/******** Typing function ********/


async function typing(string, selectorId) {
    return new Promise((resolve) => {
        let i = 0;
        function typeCharacter() {
            if (i < string.length) {
                document.getElementById(selectorId).textContent += string.charAt(i);
                i++;
                setTimeout(typeCharacter, 150);
            } else {
                resolve();
            }
        }
        typeCharacter();
    });
};

/******** Onload instructions ********/

const deviceHeight = window.innerHeight;

window.onload = async function () {
    await typing("Hello World,", "hello");
    await typing("My name is Darren Baldwin", "name");
    await typing("and I am a FULL STACK DEVELOPER.", "fst");
    await window.scroll(0, deviceHeight);
}
