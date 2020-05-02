import { save, load } from "./localStorage";

const elInputName = document.getElementById('input-name');
const elName = document.querySelector('.name');
const elForm = document.getElementById('form-name');
const KEY_NAME = 'KEY_NAME';

const inputName = (name) => {
    elName.innerText = name;
    elForm.style.display = 'none';
    elName.style.display = 'block';

    save(KEY_NAME, name);
}

const resetName = () => {
    elForm.style.display = 'block';
    elName.style.display = 'none';
}
const onSubmitForm = (e) => {
    e.preventDefault();
    const {value} = elInputName;
    inputName(value);
};

export const init = () => {
    elForm.addEventListener('submit', onSubmitForm);
    elName.addEventListener('click', resetName);

    resetName();
    
    const initName = load(KEY_NAME);
    if (initName && initName !== 'null') {
        inputName(initName);
    }
}