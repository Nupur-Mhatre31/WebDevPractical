// Variable to track current light
let currentLight = "red";

// Initially Red light ON
document.getElementById("red").classList.add("active");

// Event Handling
document.getElementById("btn").addEventListener("click", changeLight);

function changeLight() {

    // Remove active class from all lights
    document.getElementById("red").classList.remove("active");
    document.getElementById("yellow").classList.remove("active");
    document.getElementById("green").classList.remove("active");

    // Control Statement (if-else)
    if (currentLight === "red") {
        document.getElementById("green").classList.add("active");
        currentLight = "green";

    } else if (currentLight === "green") {
        document.getElementById("yellow").classList.add("active");
        currentLight = "yellow";

    } else {
        document.getElementById("red").classList.add("active");
        currentLight = "red";
    }
}
