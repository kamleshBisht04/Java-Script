'use strict';

const dice1 = document.querySelector('.dice1')
const dice2 = document.querySelector('.dice2')
const title=document.querySelector('.title');

const playBtn = document.getElementById('play');

let str;


const playGame = function(){
   str= '';
  let dice1Random =Math.round(Math.random()*5+1);
  let dice2Random =Math.round(Math.random()*5+1);
   
  // setting the image over dice 

   dice1.src =`images/dice${dice1Random}.png`;
   dice2.src =`images/dice${dice2Random}.png`;

   


}

playBtn.addEventListener('click',playGame);
