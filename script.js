// category slider
const slider = document.getElementById("autoScrollSlider");

function autoScroll() {
  // Scroll 1px to the right each time
  slider.scrollLeft += 1;

  // If reached end, go back to start
  if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
    slider.scrollLeft = 0;
  }
}

// Set interval speed (lower = faster)
const scrollInterval = setInterval(autoScroll, 20);

// Hamburger menu toggle
("use strict");
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-list");
const navItems = document.querySelectorAll(".nav-list li"); // Select all list items

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
// Close nav when clicking outside list items
document.addEventListener("click", (event) => {
  const isClickOnHamburger = hamburger.contains(event.target);
  const isClickOnNavItem = Array.from(navItems).some((item) =>
    item.contains(event.target)
  );

  if (!isClickOnHamburger && !isClickOnNavItem) {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }
});
