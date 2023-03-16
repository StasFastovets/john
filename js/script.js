


// робота с классом active
const menuBurger = document.querySelector('.header__burger');
const menuMain = document.querySelector('.header__menu');
const body = document.querySelector('body');

menuBurger.addEventListener("click", menu);

function menu(event) {
   if (event.target.closest('.header__burger')) {
      menuBurger.classList.toggle('active');
      menuMain.classList.toggle('active');
      body.classList.toggle('lock');
   }
}