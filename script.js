function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}

const texts = ["Muhammad Azis", "Wizzh"];
let index = 0;
let charIndex = 0;
const dynamicText = document.getElementById('dynamicText');

function typeEffect() {
    if (charIndex < texts[index].length) {
        dynamicText.innerHTML += texts[index].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(eraseEffect, 2000);
    }
}

function eraseEffect() {
    if (charIndex > 0) {
        dynamicText.innerHTML = texts[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 50);
    } else {
        index = (index + 1) % texts.length;
        setTimeout(typeEffect, 500);
    }
}

window.onload = typeEffect;