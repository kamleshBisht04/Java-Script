"use strict";

let title = document.querySelector('.title');
let nameFeild = document.querySelector('.nameFeild');
let nameFeildIcan = document.querySelector('.nameFeildIcan');
let LogInBtn = document.querySelector('.LogInBtn');
let signUpBtn = document.querySelector('.signUpBtn');
let disable = document.querySelector('.disable');
let btnclr = document.querySelector('.btn-clr');
let text = document.querySelector('text');
let underline = document.querySelector('.underline');


signUpBtn.addEventListener('click', () => {
  title.innerHTML = 'Sign Up';
  underline.style.transform = 'translate(18px)';
  nameFeild.classList.remove('nameFeild')
  nameFeildIcan.classList.remove('nameFeildIcan')
  signUpBtn.classList.remove('disable')
  LogInBtn.classList.add('disable')
  
  

});


LogInBtn.addEventListener('click',()=>{
  title.innerHTML='Login';
 underline.style.transform = 'translate(0)';
nameFeild.classList.add('nameFeild');
nameFeildIcan.classList.add('nameFeildIcan');
signUpBtn.classList.add('disable');
LogInBtn.classList.remove('disable');


});




