// menu-toggle.js
const menuToggle = document.querySelector(".menu-toggle");
const navItems = document.querySelector(".nav-items");
const closeBtn = document.querySelector(".close-btn");

// Add click event to toggle the menu
if (menuToggle && navItems) {
  menuToggle.addEventListener("click", () => {
    console.log("Menu toggle clicked"); // Debug log
    navItems.classList.toggle("active");
  });
} else {
  console.log("manu toggle or nav items not found");
}

// Add click event to the close button (close the menu)
if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    console.log("Close button clicked"); // Debug log
    navItems.classList.remove("active"); // Remove active class to hide the menu
  });
} else {
  console.log("Close button not found");
}

// emailjs-form-handler.js
document.addEventListener("DOMContentLoaded", function () {
  // Initialize EmailJS
  emailjs.init("e606u-XBasz2RogXb"); // Replace with my EmailJS public key

  // Select the form
  const form = document.getElementById("contact-form");

  if (form) {
    // Add submit event listener
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent default form submission

      // Send form data via EmailJS
      emailjs.sendForm("service_en524uo", "template_z64gwh7", form).then(
        function (response) {
          alert("Message sent successfully!"); // Success feedback
          console.log("SUCCESS:", response.status, response.text);
        },

        function (error) {
          alert("Failed to send the message. Please try again."); // Error feedback
          console.error("FAILED:", error);
        }
      );
    });
  } else {
    console.log("Contact form not found");
  }
});
