const burgerBtn = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');
burgerBtn.addEventListener('click', toggleClass);

const links = document.querySelectorAll('.header__link');
links.forEach((link) => link.addEventListener('click', toggleClass));

function toggleClass() {
  burgerBtn.classList.toggle('active');
  menu.classList.toggle('active');
}
