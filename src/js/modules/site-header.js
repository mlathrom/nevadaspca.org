import {
  AddClass,
  RemoveClass,
  ToggleClass
} from './dom';

const navMobileToggle = document.querySelector('.nav-mobile-toggle');
const navMobileMenu = document.querySelector('.nav-mobile');


function toggleNav() {
  ToggleClass(navMobileMenu, 'is-active');
}

navMobileToggle.addEventListener('click', toggleNav);
