'use strict';

function adjustMenuWidth() {
  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
  const menu = document.querySelector('.page__menu'); // Заміни на клас твого меню

  if (menu) {
    menu.style.width = `calc(100vw - ${scrollbarWidth}px)`;
  }
}


window.addEventListener('load', adjustMenuWidth);

window.addEventListener('resize', adjustMenuWidth);
