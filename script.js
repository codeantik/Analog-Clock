setInterval(setClock, 1000);

// I made this change again

const secHand = document.querySelector('.clock .second');
const minHand = document.querySelector('.clock .minute');
const houHand = document.querySelector('.clock .hour');

function setClock() {
    const currentTime = new Date();
    const sec = currentTime.getSeconds() / 60;
    const min = (sec + currentTime.getMinutes()) / 60;
    const hou = (min + currentTime.getHours()) / 12;

    setRotation(secHand, sec);
    setRotation(minHand, min);
    setRotation(houHand, hou);
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360);
}

setClock();