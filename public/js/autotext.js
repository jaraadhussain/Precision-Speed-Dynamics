const text = "Precision Speed Dynamics "; 
const typingSpeed = 150; // ms between each character
let index = 0; 

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typed-text").textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, typingSpeed);
    }
}

window.onload = typeEffect; 
