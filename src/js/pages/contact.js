const formSubject = document.querySelector('.js-contact-form-subject');
const formFields = document.querySelector('.js-contact-form-fields');

formSubject.onchange = (e) => {
  const {
    value
  } = e.target;
  if (value) {
    formFields.classList.remove('hidden');
  }
};
