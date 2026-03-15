const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  const icon = menuToggle.querySelector('i');
  if(navLinks.classList.contains('active')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
  } else {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
  }
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      menuToggle.querySelector('i').classList.remove('fa-times');
      menuToggle.querySelector('i').classList.add('fa-bars');
  });
});


const roles = ["Full Stack Developer", "Frontend Developer", "Backend Developer", "Web Developer"];
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typeSpeed = 100;
  const deleteSpeed = 50;
  const delayBetweenRoles = 2000;
  const roleTextElement = document.getElementById('role-text');

  function typeEffect() {
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

  document.addEventListener('DOMContentLoaded', typeEffect);

  const revealElements = document.querySelectorAll('.reveal');

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

  revealElements.forEach(el => revealObserver.observe(el));
