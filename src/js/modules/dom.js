export const ToggleClass = (el, cssClass) => {
  if (el.classList.contains(cssClass)) {
    el.classList.remove(cssClass);
  } else {
    el.classList.add(cssClass);
  }
};
export const AddClass = (el, cssClass) => {
  if (!el.classList.contains(cssClass)) {
    el.classList.add(cssClass);
  }
};
export const RemoveClass = (el, cssClass) => {
  if (el.classList.contains(cssClass)) {
    el.classList.remove(cssClass);
  }
};
