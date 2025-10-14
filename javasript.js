const roles = ["Web Developer", "Web Designer", "Freelancer"];
let roleIndex = 0;
let charIndex = 0;
const typingSpan = document.querySelector(".typing-text span");

function typeEffect() {
  if (charIndex < roles[roleIndex].length) {
    typingSpan.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 120);
  } else {
    setTimeout(eraseEffect, 1500);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typingSpan.textContent = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 80);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeEffect, 400);
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);