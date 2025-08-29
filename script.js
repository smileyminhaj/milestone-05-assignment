//!===========Toggle Button Modified for Mobile Responsive
const menuToggle = document.getElementById('menuToggle');
const popupMenu = document.getElementById('popupMenu');

menuToggle.addEventListener('click', () => {
  popupMenu.classList.toggle('hidden');
});
