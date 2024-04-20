"use strict";

let title = document.querySelector('.title');
let underline = document.querySelector('.underline');
let nameFeild = document.querySelector('.nameFeild');
let text = document.querySelector('.text');
let butnsignUp = document.getElementById('buttonsignUp');
let butnsignIn = document.getElementById('buttonsignIn');


butnsignIn.addEventListener('click', () => {
  title.innerHTML = 'LogIn';
  nameFeild.style.maxHeight = '0';
  underline.style.transform ='translateX(25px)';
  butnsignIn.classList.remove('disable')
  butnsignUp.classList.add('disable');
  text.innerHTML="Lost Password ?"

});

butnsignUp.addEventListener('click', () => {
  title.innerHTML = 'SignUp';
  nameFeild.style.maxHeight = '50px';
  underline.style.transform = 'translateX(10px)';
   butnsignIn.classList.add('disable');
   butnsignUp.classList.remove('disable');
   text.innerHTML = 'Password Suggestions ?';
});