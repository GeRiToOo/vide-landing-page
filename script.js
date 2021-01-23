const header = document.querySelector('.header');
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const showcase = document.querySelector('.showcase');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  showcase.classList.toggle('active');
  header.classList.toggle('active');
  menu.classList.toggle('open');
});
