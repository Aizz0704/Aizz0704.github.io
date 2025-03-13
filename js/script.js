function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}

function scrollToAboutMe() {
    const aboutMe = document.getElementById('about');
    aboutMe.scrollIntoView({ behavior: 'smooth' });
}

const texts = ["Dev C++", "Logo Design", "GTA Modding", "Dev bot whatsapp"];
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

    function digitalMarketing() {
        alert('Saya memiliki skill Digital Marketing untuk mempromosikan produk secara efektif.');
    }
    function frontendDev() {
        alert('Saya memiliki skill Frontend Developer dengan kemampuan mengembangkan antarmuka web yang responsif dan user-friendly.');
    }
    function problemSolving() {
        alert('Saya memiliki skill Problem Solving yang membantu saya menemukan solusi efektif dalam menghadapi berbagai tantangan.');
    }
    function designer() {
        alert('Saya memiliki skill Designer untuk membuat logo dan poster yang menarik.');
    }
    function dataScience() {
        alert('Saya memiliki skill Data Science untuk menganalisis data dan menghasilkan wawasan yang bermanfaat.');
    }
    function ads() {
        alert('Saya memiliki skill Ads untuk mengelola iklan yang tepat sasaran.');
    }
    function cpp() {
        alert('Saya memiliki skill C++ untuk pengembangan aplikasi berperforma tinggi.');
    }
    function lua() {
        alert('Saya memiliki skill Lua untuk kebutuhan scripting yang fleksibel dan efisien.');
    }
    function kreatif() {
        alert('Saya memiliki kemampuan berpikir kreatif untuk menciptakan ide-ide baru dan inovatif.');
    }
    function manajemenWaktu() {
        alert('Saya memiliki kemampuan manajemen waktu yang baik untuk menyelesaikan tugas secara efisien.');
    }
    function komunikasi() {
        alert('Saya memiliki kemampuan komunikasi yang baik untuk menyampaikan ide dengan jelas.');
}

const icons = document.querySelectorAll('.icon-hover');

icons.forEach(icon => {
    icon.addEventListener('touchstart', () => {
        icon.style.transform = 'translateY(-5px)';
    });

    icon.addEventListener('touchend', () => {
        icon.style.transform = 'translateY(0)';
    });
});

function openWebSchool() {
    window.open("https://www.smkn7makassar.sch.id", "_blank");
}

document.addEventListener('DOMContentLoaded', function() {
    particlesJS('particles-js', {
        "particles": {
            "number": { "value": 100 },
            "size": { "value": 3 },
            "move": { "speed": 1 }
        }
    });
});
