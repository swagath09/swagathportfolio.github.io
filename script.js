const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('active');
    const icon = menuToggle.querySelector('i');

    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute(
      'aria-label',
      isOpen ? 'Close navigation menu' : 'Open navigation menu'
    );

    if (icon) {
      icon.classList.toggle('fa-bars', !isOpen);
      icon.classList.toggle('fa-times', isOpen);
    }
  });

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Open navigation menu');

      const icon = menuToggle.querySelector('i');
      if (icon) {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });
  });
}

const roles = ["Full Stack Developer", "Frontend Developer", "Backend Developer", "Web Developer"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typeSpeed = 100;
const deleteSpeed = 50;
const delayBetweenRoles = 2000;
const roleTextElement = document.getElementById('role-text');

function typeEffect() {
  if (!roleTextElement) return;

  const currentRole = roles[roleIndex];

  if (isDeleting) {
    roleTextElement.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
  } else {
    roleTextElement.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
  }

  let typeDelay = isDeleting ? deleteSpeed : typeSpeed;

  if (!isDeleting && charIndex === currentRole.length) {
    typeDelay = delayBetweenRoles;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    typeDelay = 500;
  }

  setTimeout(typeEffect, typeDelay);
}

document.addEventListener('DOMContentLoaded', () => {
  typeEffect();

  const revealElements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.15,
      rootMargin: "0px"
    });

    revealElements.forEach(element => revealObserver.observe(element));
  } else {
    revealElements.forEach(element => element.classList.add('active'));
  }
});
