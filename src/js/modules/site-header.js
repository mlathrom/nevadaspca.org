import { AddClass, RemoveClass, ToggleClass } from './dom';

const siteHeader = document.querySelector('.site-header-height');
const navMobileToggle = document.querySelector('.nav-mobile-toggle');
const navMobileMenu = document.querySelector('.nav-mobile');

function toggleHeaderScroll(headerEl, scrollPosValue, scrollThreshold) {
  if (scrollPosValue >= scrollThreshold) {
    AddClass(headerEl, 'is-scrolled');
  } else {
    RemoveClass(headerEl, 'is-scrolled');
  }
}

if (!siteHeader) {
  throw new ReferenceError('Site header element not found.');
} else {
  const scrollThreshold = siteHeader.offsetHeight / 2;
  let scrollPos = window.scrollY;

  if (scrollPos >= scrollThreshold) {
    toggleHeaderScroll(siteHeader, scrollPos, scrollThreshold);
  }
  window.addEventListener('scroll', () => {
    scrollPos = window.scrollY;
    toggleHeaderScroll(siteHeader, scrollPos, scrollThreshold);
  });
}

function toggleNav() {
  ToggleClass(navMobileToggle, 'is-active');
  ToggleClass(navMobileMenu, 'h-0');
  ToggleClass(navMobileMenu, 'opacity-0');
  ToggleClass(navMobileMenu, 'scale-95');
}

navMobileToggle.addEventListener('click', toggleNav);
