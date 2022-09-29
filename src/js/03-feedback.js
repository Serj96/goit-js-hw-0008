import throttle from 'lodash.throttle';
import localStorageApi from './lacalStorage';

const STORAGE_KEY = 'feedback-form-state';
const formEl = document.querySelector('.feedback-form');

const userData = {};



const fillForm = () => { 
    const userDataFromLS = localStorageApi.load(STORAGE_KEY); 

    if (userDataFromLS === undefined) { 
        return;
    }

    const formElements = formEl.elements; 

    for (const key in userDataFromLS) { 
    if (userDataFromLS.hasOwnProperty(key)) {  
        formElements[key].value = userDataFromLS[key]; 
    }
    }
};

const onFormElChange = event => { 
    const target = event.target; 

    const formElValue = target.value; 
    const formElName = target.name; 

    userData[formElName] = formElValue; 

    localStorageApi.save(STORAGE_KEY, userData); 
};

const onformSubmit = event => { 
    event.preventDefault(); 

    console.dir(localStorageApi.load(STORAGE_KEY)); 

    localStorageApi.remove(STORAGE_KEY); 
    event.currentTarget.reset(); 
};

formEl.addEventListener('input', throttle(onFormElChange, 500));
formEl.addEventListener('submit', onformSubmit);



fillForm();