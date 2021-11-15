// Constants.

const body = document.querySelector('body');
const mainMenu = document.querySelector('.main-nav');
const mainMenuItem = mainMenu.querySelectorAll('.main-nav__item');
const mainMenuButton = document.querySelector('.page-header__nav-toggle');
const phoneInput = document.querySelector('#user-phone');

// Utils.

const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

// Menu.

mainMenu.classList.remove('main-nav--nojs');
mainMenuButton.classList.remove('page-header__nav-toggle--nojs');


const closeMenu = () => {
  mainMenu.classList.remove('main-nav--js');
  mainMenuButton.classList.remove('page-header__nav-toggle--close');
  body.classList.remove('page__body--static');
};

const onMenuEscKeyDown = (evt) => {
  if (isEscEvent(evt)) {
    closeMenu();
    document.removeEventListener('keydown', onMenuEscKeyDown);
  }
};

mainMenuButton.addEventListener('click', () => {
  mainMenu.classList.toggle('main-nav--js');
  mainMenuButton.classList.toggle('page-header__nav-toggle--close');
  body.classList.toggle('page__body--static');
  if (mainMenu.classList.contains('main-nav--js')) {
    document.addEventListener('keydown', onMenuEscKeyDown);
  } else {
    document.removeEventListener('keydown', onMenuEscKeyDown);
  }
});


mainMenuItem.forEach((element) => {
  element.addEventListener('click', closeMenu);
});

// Phone mask.

phoneInput.addEventListener('focus', _ => {
  if(!/^\+\d*$/.test(phoneInput.value)) {
    phoneInput.value = '+7';
  }
});

phoneInput.addEventListener('keypress', e => {
  if(!/\d/.test(e.key)) {
    e.preventDefault();
  }
});

// Маску взял здесь:
// https://ru.stackoverflow.com/questions/642311/Поле-для-ввода-номера-телефона-на-чистом-js
