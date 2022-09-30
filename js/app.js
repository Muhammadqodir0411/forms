const elForm = document.querySelector('#form');
console.log(elForm);
const elName = document.querySelector('#name');
const elEmail = document.querySelector('#email');
const elNumber = document.querySelector('#number');
const elResultName = document.querySelector('#result-name');
const elResultEmail = document.querySelector('#result-email');
const elResultNumber = document.querySelector('#result-number');

const elBtn = document.querySelector('.btn');

elForm.addEventListener('submit',function(e){
    e.preventDefault();
    console.log(elName.value)
 
    elResultName.textContent = 'Ismingiz: ';
    elResultName.textContent += elName.value;
    elResultEmail.textContent = 'Emailingiz: ';
    elResultEmail.textContent += elEmail.value;
    elResultNumber.textContent = 'Telfon raqamingiz: ';
    elResultNumber.textContent += elNumber.value;
    elName.value = '';
    elEmail.value = '';
    elNumber.value = '';

    
})