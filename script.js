// menu-toggle.js
document.addEventListener("DOMContentLoaded", ()=>{
    const menuToggle = document.querySelector(".menu-toggle");
    const navItems = document.querySelector(".nav-items");
    const closeBtn = document.querySelector(".close-btn");

    // Add click event to toggle the menu
    if (menuToggle && navItems) {
      menuToggle.addEventListener("click", () => {
        navItems.classList.toggle("active");
      });
    } 

    // Add click event to the close button (close the menu)
    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        navItems.classList.remove("active"); // Remove active class to hide the menu
      });
    } 
});

