'using strict';

/*
console.log( document.querySelector('.message').textContent);

console.log(document.querySelector('.message').textContent = 'Correct Number');

document.querySelector('.score').textContent=13;

document.querySelector('.highscore').textContent = 10;

document.querySelector('.number').textContent=23;

document.querySelector('.guess').value=25;
console.log(document.querySelector('.guess').value);
*/
//  game logic 

let highscore = 0;
let score = 20;
let secretNumber = Math.round(Math.random() * 20);

// function for pass the message 

const dispalyMessage =function(message){
  document.querySelector('.message').textContent = message;
}

// click Event and game logic

document.querySelector('.check').addEventListener('click',function(){
  const guess=Number(document.querySelector('.guess').value);

  // when there is no input

  if(!guess){
    dispalyMessage('⛔ No number !');
  }

  // when match is found
  else if( guess === secretNumber){
    dispalyMessage(' 🎉 Correct Number');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#15F5BA';
    document.querySelector('h1').style.color='Black';
    document.querySelector('h1').textContent = 'You Guess is Correct Cool ';
   
    // setting the highscore logic 
    if(score > highscore){
        highscore = score;
        document.querySelector('.highscore').textContent = highscore; 
    }
      // setting if match not Found
  }else if(guess !== secretNumber){
    if(score >1){
      dispalyMessage(guess >secretNumber ? " 📈 To High ! " : " 📉 To Low ! ");
      score--;
      document.querySelector('.score').textContent= score;
      
    }
  }else{
    dispalyMessage('💥 You lost game !! Game over ');
    document.querySelector('.score').textContent =0;
  }

});

// Again button game logic

document.querySelector('.Again').addEventListener('click',function(){
  score =20;
document.querySelector('body').style.backgroundColor ='black';
document.querySelector('.score').textContent=score;

document.querySelector('h1').style.color='#07f8e8';
document.querySelector('h1').textContent='Guess My Number !';
document.querySelector('.number').textContent = '?';
document.querySelector('.guess').value = ' ';

});
















