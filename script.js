
// menu-toggle.js
const menuToggle = document.querySelector(".menu-toggle");
const navItems = document.querySelector(".nav-items");

// Add click event to toggle the menu
if (menuToggle && navItems) {
  menuToggle.addEventListener("click", () => {
    console.log("Menu toggle clicked"); // Debug log
    navItems.classList.toggle("active");
    console.log(navItems.classList);
  });
} else {
  console.log("manu toggle or nav items not found");
}
