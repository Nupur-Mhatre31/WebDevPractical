/* Typing Effect */
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

/* DOM PRACTICAL */

/* Change paragraph */
function changeText() {
    document.getElementById("demoText").innerText =
        "I continuously improve my technical and analytical skills through practical application.";
}

/* Dynamic list */
let highlights = [
    "Completed Web Development Practical",
    "Implemented DOM Manipulation Tasks",
    "Developed Academic Mini Projects",
    "Practiced Clean UI Design"
];

let indexHighlight = 0;

function addItem() {
    const ul = document.getElementById("dynamicList");

    if (indexHighlight < highlights.length) {
        const li = document.createElement("li");
        li.innerText = highlights[indexHighlight];
        ul.appendChild(li);
        indexHighlight++;
    }
}

function removeItem() {
    const ul = document.getElementById("dynamicList");
    if (ul.lastChild) {
        ul.removeChild(ul.lastChild);
        indexHighlight--;
    }
}

/* Theme switch */
function setTheme(theme) {
    document.body.className = theme;
}