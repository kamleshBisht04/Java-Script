'use strict';


let display = document.querySelector('.timerDisplay');
let startBtn= document.getElementById('start')
let stopBtn= document.getElementById('stop')
let resetBtn= document.getElementById('reset')

let msec=0;
let sec=0;
let min=0;
let hour=0;

let timerId =null;

// start button 

startBtn.addEventListener('click',function(){
 if(timerId!=null){
  clearInterval(timerId);
 }
 timerId = setInterval(startTime,10);
});

// stop button

stopBtn.addEventListener('click',function(){
   clearInterval(timerId);
});

// reset button

resetBtn.addEventListener('click', function () {
  clearInterval(timerId);
  display.innerHTML = `00 : 00 : 00 : 00`;
  msec=sec=min=hour =0;
});


//  function for start button

const startTime = function(){
    msec++;
    if(msec===100){
      msec=0;
      sec++;
      if(sec===60){
        sec=0;
        min++;
        if(min===60){
          min=0;
          hour++;
        }
      }
    }
   
  let miliString = msec<10 ? `0${msec}`:msec;
  let secString = sec<10 ? `0${sec}`:sec;
  let minString = min<10 ? `0${min}`:min;
  let hourString = hour<10 ? `0${hour}`:hour;
  
 display.innerHTML = `${hourString} : ${minString} : ${secString} : ${miliString}`

};





















































