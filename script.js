'use strict'

/******** Typing function ********/

// async function typing(string, selectorId) {
//     return new Promise((resolve) => {
//         let i = 0;
//         function typeCharacter() {
//             if (i < string.length) {
//                 document.getElementById(selectorId).textContent += string.charAt(i);
//                 i++;
//                 setTimeout(typeCharacter, 150); // This is the delay between characters
//             } else {
//                 setTimeout(resolve, 1000); // This is the delay to the next call.
//             }
//         }
//         typeCharacter();
//     });
// };

function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function typing(string, selectorId) {
        for (let i = 0; i < string.length; i++) {
            document.getElementById(selectorId).textContent += string.charAt(i);
            await delay(150); //  increasing delay for each character
        }
        await delay(1000); // This is the delay to the next call.
    }

/******** Onload instructions ********/

const deviceHeight = window.innerHeight;

window.onload = async function () {
    await typing("Hello World,", "hello");
    await typing("My name is Darren Baldwin", "name");
    await typing("and I am a FULL STACK DEVELOPER.", "fst");
    await window.scroll(0, deviceHeight);
}
