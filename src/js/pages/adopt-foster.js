import '../../css/adopt-foster.css';

const toggles = document.querySelectorAll('.js-toggle');
const items = document.querySelectorAll('.js-toggle-item');

for (let i = 0; i < toggles.length; i++) {
  toggles[i].addEventListener('click', function (e) {
    const target = e.target;
    if (target.classList.contains('is-active')) {
      return;
    }

    for (let j = 0; j < toggles.length; j++) {
      if (toggles[j] != target) {
        toggles[j].classList.remove('is-active');
      }
    }

    const filter = target.getAttribute('data-toggle');

    target.classList.toggle('is-active');

    toggleItems(items, filter);
  });
}

function toggleItems(items, filter) {
  for (let i = 0; i < items.length; i++) {
    const data = items[i].getAttribute('data-toggle-item');
    if (filter === 'all') {
      items[i].classList.remove('is-hidden');
    } else {
      if (filter === data) {
        items[i].classList.remove('is-hidden');
      } else {
        items[i].classList.add('is-hidden');
      }
    }
  }
}
