document.getElementById("github").onclick = () => {
  window.open("https://github.com/swagath09", "_blank");
};

document.getElementById("linkedin").onclick = () => {
  window.open("https://www.linkedin.com/in/swagath-yadav", "_blank");
};

document.getElementById("linkedin-connect").addEventListener("click", () => {
  window.open("https://www.linkedin.com/in/swagath-yadav", "_blank");
});

const roles = [
  "Frontend Developer",
  "Backend Developer",
  "Full-Stack Developer"
];

let roleIndex = 0;
let charIndex = 0;
const roleText = document.getElementById("role-text");

function typeRole() {
  if (charIndex < roles[roleIndex].length) {
    roleText.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeRole, 80);
  } else {
    setTimeout(eraseRole, 1500);
  }
}

function eraseRole() {
  if (charIndex > 0) {
    roleText.textContent = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseRole, 50);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeRole, 300);
  }
}

document.addEventListener("DOMContentLoaded", typeRole);


const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});