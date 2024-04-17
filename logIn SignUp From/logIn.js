'use strict';

let title = document.querySelector('.title');
let nameFeild = document.querySelector('.nameFeild');
let logInBtn = document.getElementById('logInBtn');
let signUpBtn = document.getElementById('signUpBtn');
let verifypassword = document.querySelector('.verify-password');

signUpBtn.addEventListener('click',()=>{
  title.innerHTML ='Sign Up';
  nameFeild.classList.remove('nameFeild');
  verifypassword.classList.remove('verify-password');
});

logInBtn.addEventListener('click', () => {
  title.innerHTML = 'Login';
  nameFeild.classList.add('nameFeild');
  verifypassword.classList.add('verify-password');
});