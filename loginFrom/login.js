
'use strict';


let title = document.querySelector('.title');
let nameFeild = document.querySelector('.nameFeild');
let nameFeildIcan = document.querySelector('.nameFeildIcan');
let logInBtn = document.getElementById('logInBtn');
let signUpBtn = document.getElementById('signUpBtn');
let sign = document.querySelector('.sign');
let signUp = document.querySelector('.signUp');


logInBtn.addEventListener('click',()=>{
 title.innerHTML ='LogIn';
 nameFeild.classList.add('nameFeild');
 nameFeildIcan.classList.add('nameFeildIcan');
 sign.classList.add('sign');
 logInBtn.classList.remove('sign');

});



signUpBtn.addEventListener('click', () => {
  title.innerHTML = 'Sign Up';
  nameFeild.classList.remove('nameFeild');
 nameFeildIcan.classList.remove('nameFeildIcan');
 sign.classList.remove('sign');
 logInBtn.classList.add('sign');
 signUp.innerHTML=" ";

});