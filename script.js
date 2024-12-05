
// menu-toggle.js
const menuToggle = document.querySelector(".menu-toggle");
const navItems = document.querySelector(".nav-items");

// Add click event to toggle the menu
menuToggle.addEventListener("click", () => {
  navItems.classList.toggle("active"); // Toggle active class
});
