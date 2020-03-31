// Projects Links
const firstLink = () => {
  window.open('https://www.dcmax1k.tk');
};

const secLink = () => {
  window.open('https://www.dylancaldwell.tk');
};

// Menu toggle
const navTogOpen = document.querySelector('.navTogOpen');
const navMenu = document.querySelector('.navMenu');

navTogOpen.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Menu toggle after selecting a link

const navMenuHome = document.querySelector('.navMenu-home');
const navMenuProjects = document.querySelector('.navMenu-projects');
const navMenuContact = document.querySelector('.navMenu-contact');

navMenuHome.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});
navMenuProjects.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});
navMenuContact.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});
