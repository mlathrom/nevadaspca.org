import { AddClass, RemoveClass } from './dom';

function offsetTop(el) {
  const rect = el.getBoundingClientRect();
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return rect.top + scrollTop;
}

const Sticky = (cssClass, offsetClass) => {
  const el = document.querySelector(`.${cssClass}`);
  const elOffset = document.querySelector(`.${offsetClass}`);
  const elOffsetBottom = offsetTop(elOffset) + elOffset.offsetHeight;
  const elTop = offsetTop(el) - elOffsetBottom;
  let { scrollY } = window;
  if (scrollY >= elTop) {
    AddClass(el, 'is-scrolled');
    el.style.top = `${elOffsetBottom}px`;
    el.parentNode.style.paddingTop = `${el.offsetHeight}px`;
  } else {
    RemoveClass(el, 'is-scrolled');
    el.style.top = '';
    el.parentNode.style.paddingTop = 0;
  }
  document.addEventListener('scroll', () => {
    scrollY = window.scrollY;
    if (scrollY >= elTop) {
      AddClass(el, 'is-scrolled');
      el.style.top = `${elOffsetBottom}px`;
      el.parentNode.style.paddingTop = `${el.offsetHeight}px`;
    } else {
      RemoveClass(el, 'is-scrolled');
      el.style.top = '';
      el.parentNode.style.paddingTop = 0;
    }
  });
  window.addEventListener('resize', () => {
    scrollY = window.scrollY;
    if (scrollY >= elTop) {
      AddClass(el, 'is-scrolled');
      el.style.marginTop = `-${el.offsetHeight}px`;
      el.parentNode.style.paddingTop = `${el.offsetHeight}px`;
    } else {
      RemoveClass(el, 'is-scrolled');
      el.style.marginTop = '';
      el.parentNode.style.paddingTop = 0;
    }
  });
};

export default Sticky;
