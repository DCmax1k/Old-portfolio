const firstLink = () => {
  window.open('https://www.dcmax1k.tk');
};

const secLink = () => {
  window.open('https://www.dylancaldwell.tk');
};

const navTogOpen = document.querySelector('.navTogOpen');
const navMenu = document.querySelector('.navMenu');

navTogOpen.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});
