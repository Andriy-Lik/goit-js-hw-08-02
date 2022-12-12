import throttle from 'lodash.throttle';

const locStorKey = 'feedback-form-state';
const fBackForm = document.querySelector('.feedback-form');

fBackForm.addEventListener('input', throttle(onFormData, 500));
fBackForm.addEventListener('submit', onSubmit);

const formData = {};
checkTextArea();

function onFormData(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(locStorKey, JSON.stringify(formData));
}

function onSubmit(e) {
    e.preventDefault();
    console.log(JSON.parse(localStorage.getItem(locStorKey)));
    e.currentTarget.reset();
    localStorage.removeItem(locStorKey);
}

function checkTextArea() {
    const email = document.querySelector('.feedback-form input');
    const message = document.querySelector('.feedback-form textarea');
    const inputCurrent = JSON.parse(localStorage.getItem(locStorKey));
  
    if (inputCurrent) {
      email.value = inputCurrent.email || '';
      message.value = inputCurrent.message || '';
    }
}