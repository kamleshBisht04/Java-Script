'use strict';

let Display = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = '';
let buttonArray = Array.from(buttons);

buttonArray.forEach(btn =>{
 btn.addEventListener('click',(e)=>{
  if(e.target.innerHTML === 'AC'){
    string = " ";
    Display.value = string;
  }else if(e.target.innerHTML ==='DEL'){
    string = string.substring(0,string.length-1);
    Display.value = string;
  }else if(e.target.innerHTML === '='){
    string = eval(string);
    Display.value = string;
  }else{
    string += e.target.innerHTML;
    Display.value = string;    
  }
 });
});


