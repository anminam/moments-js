const elInputName = document.getElementById('input-name');
const elName = document.querySelector('.name');
const elForm = document.getElementById('form-name');

const inputName = () => {
    const {value} = elInputName;
    elName.innerText = value;
    elForm.style.display = 'none';
    elName.style.display = 'block';
}

const resetName = () => {
    elForm.style.display = 'block';
    elName.style.display = 'none';
}
const onSubmitForm = (e) => {
    e.preventDefault();
    inputName();
};

export const init = () => {
    elForm.addEventListener('submit', onSubmitForm);
    elName.addEventListener('click', resetName);

}