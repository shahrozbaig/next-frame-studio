// Mobile Menu
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Popup trigger (after 4 seconds)
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

setTimeout(() => {
  popup.style.display = "flex";
}, 4000);

closePopup.addEventListener("click", () => {
  popup.style.display = "none";
});
