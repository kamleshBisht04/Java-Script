'use strict';

let title = document.querySelector('.title');
let nameFeild = document.querySelector('.nameFeild');
let nameFeildIcan = document.querySelector('.nameFeildIcan');
let logInBtn = document.getElementById('logInBtn');
let signUpBtn = document.getElementById('signUpBtn');
let signUpLine = document.querySelector('.signUpLine');
let disable = document.querySelector('.disable');



logInBtn.addEventListener('click', () => {
  title.innerHTML = 'LogIn';
  nameFeild.classList.add('nameFeild');
  nameFeildIcan.classList.add('nameFeildIcan');
  signUpBtn.classList.add('disable');
  logInBtn.classList.remove('disable');
  signUpLine.innerHTML = 'Not a Member ?'; 
  
  
});



signUpBtn.addEventListener('click', () => {
  title.innerHTML = 'Sign Up';
  nameFeild.classList.remove('nameFeild');
  nameFeildIcan.classList.remove('nameFeildIcan');
  signUpBtn.classList.remove('disable');
  logInBtn.classList.add('disable');
  signUpLine.innerHTML= "Password Sugesstion"; 
 
  
});
