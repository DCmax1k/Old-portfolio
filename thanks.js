const backBtn = document.getElementById('backToSite');

window.addEventListener('keyup', e => {
  if (e.keyCode === 13 || e.which === 13) {
    backBtn.click();
  }
});
