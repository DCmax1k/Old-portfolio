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
  navTogClose.classList.toggle('active');
});
navMenuProjects.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  navTogOpen.classList.toggle('active');
  navTogClose.classList.toggle('active');
});
navMenuContact.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  navTogOpen.classList.toggle('active');
  navTogClose.classList.toggle('active');
});

// Form message 'ENTER' to submit
const formMessage = document.getElementById('form-message');
formMessage.addEventListener('keyup', event => {
  if (event.which === 13 || event.keyCode === 13) {
    document.querySelector('.submit-btn').click();
  }
});

// Back to site button, adding event listener 'keyup' event === 13 (enter key)
const backToSiteBtn = document.getElementById('backToSite');
addEventListener('keyup', event => {
  if (event.which === 13 || event.keyCode === 13) {
    backToSiteBtn.click();
  }
});
