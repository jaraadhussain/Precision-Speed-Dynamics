const text = "Precision Speed Dynamics "; // Text to type
const typingSpeed = 150; // Milliseconds between each character
let index = 0; // Starting index of the text

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typed-text").textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, typingSpeed);
    }
}

window.onload = typeEffect; // Start the effect when the window loads
