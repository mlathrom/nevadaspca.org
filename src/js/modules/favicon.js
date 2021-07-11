function removeAll(selector) {
  const removeNodes = document.querySelectorAll(selector);
  removeNodes.forEach((node) => {
    node.parentNode.removeChild(node);
  });
}

if (
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: dark)').matches
) {
  removeAll('.favicon-dark');
} else {
  removeAll('.favicon-light');
}

window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', (e) => {
    if (e.matches) {
      removeAll('.favicon-dark');
    } else {
      removeAll('.favicon-light');
    }
  });
