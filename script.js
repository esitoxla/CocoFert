// menu-toggle.js
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navItems = document.querySelector('.nav-items');
  const closeBtn = document.querySelector('.close-btn');
  
  // Toggle menu when hamburger is clicked
  menuToggle.addEventListener('click', function() {
    navItems.classList.toggle('active');
    menuToggle.classList.toggle('active');
    closeBtn.classList.toggle('active');
  });
  
  // Close menu when X is clicked
  closeBtn.addEventListener('click', function() {
    navItems.classList.remove('active');
    menuToggle.classList.remove('active');
    closeBtn.classList.remove('active');
  });
  
  // Close menu when a nav link is clicked
  const navLinks = document.querySelectorAll('.nav-items a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navItems.classList.remove('active');
      menuToggle.classList.remove('active');
      closeBtn.classList.remove('active');
    });
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    const isNavbar = event.target.closest('.nav-bar');
    const isMenuOpen = navItems.classList.contains('active');
    
    if (!isNavbar && isMenuOpen) {
      navItems.classList.remove('active');
      menuToggle.classList.remove('active');
      closeBtn.classList.remove('active');
    }
  });
});



// TESTIMONIAL SECTION
const testimonialCards = document.querySelectorAll(".testimonial-card");
const prevArrow = document.querySelector(".prev");
const nextArrow = document.querySelector(".next");
let currentIndex = 0;

// Function to show the current card
function showCard(index) {
  testimonialCards.forEach((card, i) => {
    card.classList.toggle("active", i === index);
  });
}

// Event listener for the previous arrow
prevArrow.addEventListener("click", () => {
  currentIndex =
    currentIndex > 0 ? currentIndex - 1 : testimonialCards.length - 1;
  showCard(currentIndex);
});

// Event listener for the next arrow
nextArrow.addEventListener("click", () => {
  currentIndex =
    currentIndex < testimonialCards.length - 1 ? currentIndex + 1 : 0;
  showCard(currentIndex);
});

// Show the first card initially
showCard(currentIndex);