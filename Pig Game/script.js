'use strict';

// selecting Elements

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');

const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNewEl = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//////////////////////////////////////////////////////////////////////

  let scores,currentScore,activePlayer,isPlaying;

const init= function(){
   scores = [0, 0];
   currentScore = 0;
   activePlayer = 0;
   isPlaying = true;
  
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner'); 
  player1El.classList.remove('player--winner'); 
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
}
init();



const playerSwitch = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (isPlaying) {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. Check for rolled 1
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch to next player
      playerSwitch();
    }
  }
});

// Hold button Functionality

btnHold.addEventListener('click', function () {
  if (isPlaying) {
    // adding the score to array
    scores[activePlayer] += currentScore;
    // display the score while hold
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

      // logic for 100 point to made winning 
    if (scores[activePlayer] >= 100) {
      isPlaying = false;
      diceEl.classList.toggle('hidden');

      document.querySelector(`.player--${activePlayer}`).classList.toggle('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    }else{
      playerSwitch();
    }
  }
});


// new button setup
btnNewEl.addEventListener('click', init);