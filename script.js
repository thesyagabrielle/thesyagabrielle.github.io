// Toggle the hamburger menu
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");

  // Disable scrolling when the menu is open
  document.body.classList.toggle("no-scroll", menu.classList.contains("open"));
}

// Close the menu when clicking outside
document.addEventListener('click', (e) => {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  if (menu.classList.contains("open") && !icon.contains(e.target) && !menu.contains(e.target)) {
    toggleMenu();  // Close the menu if the user clicks outside of it
  }
});

// Smoothly scroll to sections when clicking menu links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetSection = document.querySelector(this.getAttribute('href'));
    targetSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

// Intersection Observer for scroll animations
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, {
    threshold: 0.1,
  });

  sections.forEach(section => {
    observer.observe(section);
  });
});

// Floating and fading effect on scroll for social icons
window.addEventListener('scroll', () => {
  const socialsContainer = document.getElementById('socials-container');
  const scrollPosition = window.scrollY;

  if (scrollPosition > 150) {
    socialsContainer.style.opacity = '1';
    socialsContainer.style.transform = 'translateY(0)';
  } else {
    socialsContainer.style.opacity = '0';
    socialsContainer.style.transform = 'translateY(50px)';
  }
});

// Sticky navigation effect on scroll
window.addEventListener('scroll', () => {
  const desktopNav = document.getElementById('desktop-nav');
  if (window.scrollY > 100) {
    desktopNav.classList.add('sticky');
  } else {
    desktopNav.classList.remove('sticky');
  }
});

