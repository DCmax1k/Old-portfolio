// Projects Links
const firstLink = () => {
  window.open('https://www.dcmax1k.tk');
};

const secLink = () => {
  window.open('https://www.dylancaldwell.tk');
};

// Menu toggle/animation
const navTogOpen = document.querySelector('.navTogOpen');
const navTogClose = document.querySelector('.navTogClose');
const navMenu = document.querySelector('.navMenu');

navTogOpen.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  navTogOpen.classList.toggle('active');
  navTogClose.classList.toggle('active');
});

navTogClose.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  navTogOpen.classList.toggle('active');
  navTogClose.classList.toggle('active');
});

// Menu toggle after selecting a link

const navMenuHome = document.querySelector('.navMenu-home');
const navMenuProjects = document.querySelector('.navMenu-projects');
const navMenuContact = document.querySelector('.navMenu-contact');

navMenuHome.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  navTogOpen.classList.toggle('active');
});
navMenuProjects.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  navTogOpen.classList.toggle('active');
});
navMenuContact.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  navTogOpen.classList.toggle('active');
});
