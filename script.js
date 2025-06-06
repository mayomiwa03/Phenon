// category & Event slider
const eventSlider = document.getElementById("eventSlider");
const categorySlider = document.getElementById("categorySlider");

// ✅ Duplicate event cards to make seamless scroll
eventSlider.innerHTML += eventSlider.innerHTML;
categorySlider.innerHTML += categorySlider.innerHTML;

setInterval(() => {
  categorySlider.scrollLeft += 1;

  if (categorySlider.scrollLeft >= categorySlider.scrollWidth / 2) {
    categorySlider.scrollLeft = 0;
  }
}, 20);

setInterval(() => {
  eventSlider.scrollLeft += 1;

  // ✅ Reset halfway to create loop (not at the end)
  if (eventSlider.scrollLeft >= eventSlider.scrollWidth / 2) {
    eventSlider.scrollLeft = 0;
  }
}, 30);

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
