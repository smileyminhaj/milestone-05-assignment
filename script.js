//!===========Toggle Button Modified for Mobile Responsive
const menuToggle = document.getElementById('menuToggle');
const popupMenu = document.getElementById('popupMenu');

menuToggle.addEventListener('click', () => {
  popupMenu.classList.toggle('hidden');
});

//!===========Credit Logic
let tokens = 100;
const tokenSpan = document.querySelector(".creditcount");
const callButtons = document.querySelectorAll(".call-btn");

callButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    if (tokens >= 20) {
      tokens -= 20;
      tokenSpan.textContent = tokens;
    } else {
      alert("❌ পর্যাপ্ত ব্যালেন্স নেই!");
    }
  });
});
