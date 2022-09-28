import throttle from "lodash.throttle";

const STORAGE_KEY = "feedback-form-state";

const formEl = document.querySelector('feedback-form');
const email = document.querySelector('[name="email"]');
const message = document.querySelector('[name="message"]');

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onFormData, 500));

function onFormSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    console.log(localStorage.getItem(STORAGE_KEY));
    localStorage.removeItem(STORAGE_KEY);
} 

function onFormData() {
    const formData = {
      email: email.value,
      message: message.value,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }
  
  localStorageSaveData();
  
  function localStorageSaveData() {
    let savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (savedData) {
      email.value = savedData.email;
      message.value = savedData.message;
    }
  }