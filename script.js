document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const spans = document.querySelectorAll('.hamburger span');

  // Toggle mobile navigation
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    spans[0].classList.toggle('rotate-down');
    spans[1].classList.toggle('hide');
    spans[2].classList.toggle('rotate-up');
  });
});