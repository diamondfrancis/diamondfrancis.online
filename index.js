document.addEventListener('DOMContentLoaded', () => {
  const mobileToggle = document.querySelector('.mobile-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const closeMenu = document.querySelector('.close-menu');

  // Toggle Mobile Menu
  mobileToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
  });

  // Close Mobile Menu
  closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
  });
});
