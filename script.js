// Rivapaint — bascule du menu mobile
document.addEventListener('DOMContentLoaded', function () {
  var bouton = document.querySelector('.nav-bascule');
  var nav = document.querySelector('.nav-principale');
  if (!bouton || !nav) return;

  bouton.addEventListener('click', function () {
    var ouvert = nav.classList.toggle('ouverte');
    bouton.setAttribute('aria-expanded', ouvert ? 'true' : 'false');
  });
});
