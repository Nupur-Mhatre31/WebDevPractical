/* ===== Typing Effect ===== */
const roles = [
    "Computer Science Student",
    "Aspiring Software Developer",
    "Tech Enthusiast"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;
const typingText = document.getElementById("typing");

function typeLoop() {
    const current = roles[roleIndex];

    if (!deleting) {
        typingText.textContent = current.slice(0, ++charIndex);
    } else {
        typingText.textContent = current.slice(0, --charIndex);
    }

    let speed = deleting ? 60 : 110;

    if (!deleting && charIndex === current.length) {
        speed = 1200;
        deleting = true;
    }

    if (deleting && charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        speed = 400;
    }

    setTimeout(typeLoop, speed);
}
typeLoop();

/* ===== Theme Toggle ===== */
function toggleTheme() {
    document.body.classList.toggle("dark");

    const icon = document.querySelector("header button i");
    icon.classList.toggle("fa-circle-half-stroke");
    icon.classList.toggle("fa-sun");
}
