'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Kamlesh singh bisht',

  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  // movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  type: 'premium',

  movementsDates: [
    '2025-02-20T10:51:36.790Z',
    '2025-04-15T14:36:17.929Z',
    '2025-04-17T17:01:17.194Z',
    '2025-04-20T14:11:59.604Z',
    '2025-04-23T10:17:24.185Z',
    '2025-04-24T09:15:04.904Z',
    '2025-04-25T07:42:02.383Z',
    '2025-04-25T21:31:17.178Z',
  ],
  currency: 'INR',
  locale: 'en-IN',
};

const account2 = {
  owner: 'shivangi bansal',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  type: 'standard',

  movementsDates: [
    '2025-02-22T10:51:36.790Z',
    '2025-04-15T14:36:17.929Z',
    '2025-04-17T17:01:17.194Z',
    '2025-04-20T14:11:59.604Z',
    '2025-04-21T21:31:17.178Z',
    '2025-04-23T10:17:24.185Z',
    '2025-04-24T09:15:04.904Z',
    '2025-04-25T07:42:02.383Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account3 = {
  owner: 'Swati patel',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  type: 'premium',
  movementsDates: [
    '2025-02-22T10:51:36.790Z',
    '2025-04-15T14:36:17.929Z',
    '2025-04-17T17:01:17.194Z',
    '2025-04-20T14:11:59.604Z',
    '2025-04-21T21:31:17.178Z',
    '2025-04-23T10:17:24.185Z',
    '2025-04-24T09:15:04.904Z',
    '2025-04-25T07:42:02.383Z',
  ],
  currency: 'INR',
  locale: 'en-IN',
};

const account4 = {
  owner: 'Bhuwan panaru',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  type: 'basic',
  movementsDates: [
    '2025-02-22T10:51:36.790Z',
    '2025-04-15T14:36:17.929Z',
    '2025-04-17T17:01:17.194Z',
    '2025-04-20T14:11:59.604Z',
    '2025-04-21T21:31:17.178Z',
    '2025-04-23T10:17:24.185Z',
    '2025-04-24T09:15:04.904Z',
    '2025-04-25T07:42:02.383Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

////////////////////////////////////////////////
const formatMovementDate = function (date, locale) {
  const calDaysPassed = (date1, date2) =>
    Math.round(Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)));

  const daysPassed = calDaysPassed(new Date(), date);
  // console.log(daysPassed);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  else {
    // const day = `${date.getDate()}`.padStart(2, 0);
    // const month = `${date.getMonth() + 1}`.padStart(2, 0);
    // const year = date.getFullYear();
    // return `${day}/${month}/${year}`;
    return new Intl.DateTimeFormat(locale).format(date);
  }
};
//////////////////////////////////////////////
// made common function to format the number or currency
const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

//Adding the movements
const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';
  // creating combined data structure for date and movements
  const combinedMovementDate = acc.movements.map((mov, i) => ({
    movements: mov,
    movementsDates: acc.movementsDates.at(i),
  }));
  
  if (sort) combinedMovementDate.sort((a, b) => a.movements - b.movements);
  // const movs = sort
  //   ? acc.movements.slice().sort((a, b) => a - b)
  //   : acc.movements;
  combinedMovementDate.forEach(function (obj, i) {
    const { movements, movementsDates } = obj;
    const type = movements > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(movementsDates);
    const displayDate = formatMovementDate(date, acc.locale);

    const formatedMov = formatCur(movements, acc.locale, acc.currency);

    const html = `<div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
         <div class="movements__date">${displayDate}</div>
          <div class="movements__value">${formatedMov}</div>
        </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

////////////////////////////////////////////////
//creating user name property

// console.log(accounts);

const createUsernames = function (accs) {
  accs.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(user => user.at(0))
      .join('');
  });
};
createUsernames(accounts);

//****************************************
// updateing the UI Made a function

const updateUI = function (acc) {
  // display movement with dyanimically
  displayMovements(acc);
  // display balance
  calDisplayBalance(acc);
  // display summary
  calcDispalySummary(acc);
};
////////////////////////////////////////////////
// sort button implement
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

////////////////////////////////////////////////
//CALCULATE DISPLAY SUMMERY

const eurToUsd = 1.1;

const calcDispalySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .map(mov => mov * eurToUsd)
    .reduce((acc, mov) => acc + mov);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter(mov => mov < 0)
    .map(mov => mov * eurToUsd)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currency);

  const intrest = acc.movements
    .filter(mov => mov > 0)
    .map(diposit => (diposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(intrest, acc.locale, acc.currency);
};

////////////////////////////////////////////////

// DISPLAY THE TOTAL BALANCE IN BANK ACCOUNT
const calDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

////////////////////////////////////////////////
// logout timmer
const startLogOutTimmer = function () {
  const tick = function () {
    // In each call ,print the remaining time to UI
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);

    labelTimer.textContent = `${min}:${sec}`;

    // when 0 seconds ,stop timmer and logout User
    if (time == 0) {
      clearInterval(tick);
      containerApp.style.opacity = 0;
      labelWelcome.textContent = 'Log in to get started';
    }
    // Decrease 1sec
    time--;
  };
  // setting time to 5 minutes
  let time = 120;

  tick();
  // call the timmer every second
  const timer = setInterval(tick, 1000);
  return timer;
};

//EVENT HANDLER
let currentAccount, timer;
btnLogin.addEventListener('click', function (e) {
  // preventing the default behaviour
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // display UI and message
    labelWelcome.textContent = `Welcome back ${currentAccount.owner
      .split(' ')
      .at(0)}`;
    // display date
    const now = new Date();

    // const day = `${now.getDate()}`.padStart(2, 0);
    // const month = `${now.getMonth() + 1}`.padStart(2, 0);
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, 0);
    // const min = `${now.getMinutes()}`.padStart(2, 0);
    // const sec = now.getSeconds();

    const options = {
      hour: 'numeric',
      minute: 'numeric',
      year: 'numeric',
      month: '2-digit', // long
      day: '2-digit',
      weekday: 'short',
    };

    // const locale = navigator.language;
    // console.log(locale);

    labelDate.textContent = Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    // labelDate.textContent = `${day}/${month}/${year} ${hour}:${min}`;
    containerApp.style.opacity = 100;

    // clearing the input feilds
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Reset timmer
    if (timer) clearInterval(timer);
    timer = startLogOutTimmer();

    updateUI(currentAccount);
  }
});

////////////////////////////////////////////////
//IMPLEMENTING THE TRANSFER

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const reciverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  if (
    amount > 0 &&
    currentAccount.balance >= amount &&
    reciverAcc &&
    reciverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    reciverAcc.movements.push(amount);

    //display transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    reciverAcc.movementsDates.push(new Date().toISOString());
    // update UI

    updateUI(currentAccount);

    // Reset timmer
    if (timer) clearInterval(timer);
    timer = startLogOutTimmer();
  }
  // clearing the input feilds
  inputTransferTo.value = inputTransferAmount.value = '';
});

//**********************************
// Lone function implemented
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // add movement
    setTimeout(function () {
      currentAccount.movements.push(amount);

      // display Date
      currentAccount.movementsDates.push(new Date().toISOString());

      // update the UI
      updateUI(currentAccount);
      // Reset timmer
      if (timer) clearInterval(timer);
      timer = startLogOutTimmer();
    }, 2500);
  }
  inputLoanAmount.value = '';
});

//*************************************
// close the Account
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    // getting the index value of the accouts
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    // Deleting the UI
    accounts.splice(index, 1);

    // Hiding the UI
    containerApp.style.opacity = 0;
  }
  // clearing the closeing field.
  inputCloseUsername.value = inputClosePin.value = '';
});

//*************************************
// Implemeting lone function

// TO TAKE LONE FUNCTIONALATY
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);
  // console.log(amount);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    currentAccount.movements.push(amount);
    // UPDATEING UI
    updateUI(currentAccount);
  }
  // CLEAR THE TRANSFER FEILD
  inputLoanAmount.value = '';
});

//*************************************
// set time out and set interval
// timmer

// const ingredients = ['olives','spinach'];
// const pizzaTimmer = setTimeout((ing1,ing2)=>console.log(`Here is your pizza 🍕 with ${ing1} and ${ing2}`),3000,...ingredients);
// console.log('waiting......');

// if(ingredients.includes('spinach'))clearTimeout(pizzaTimmer);

// setInterval function

// const pizza =setInterval(function(){
//   const now = new Date();
//   console.log(now);
// },3000);

// const future = new Date(2037, 10, 19, 15, 23);
// console.log(+future);

// const calDaysPassed = (date1, date2) =>
//   Math.abs((date2 - date1) / (1000 * 60 * 60 * 24));

// const days1 = calDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 4));
// console.log(days1);

// fake ing the account

// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

// experiment with date API

// const now = new Date();

// const options = {
//   hour: 'numeric',
//   minute: 'numeric',
//   year: 'numeric',
//   month: '2-digit', // long
//   day: '2-digit',
//   weekday: 'short',
// };

// const locale = navigator.language;
// console.log(locale);

// labelDate.textContent = Intl.DateTimeFormat(locale, options).format(now);

// INTILIZATION NUMBER (INTL)

// const num = 3885457596.23;

// const options = {
//   style: 'unit', // percent // currency
//   unit: 'mile-per-hour', // celsius
// };

// console.log('USA  :', new Intl.NumberFormat('en-us', options).format(num));
// console.log('Germany :', new Intl.NumberFormat('de-DE', options).format(num));
// console.log('Syria :', new Intl.NumberFormat('ar-SY', options).format(num));
// console.log(
//   'navigator language :',
//   new Intl.NumberFormat(navigator.language, options).format(num)
// );

//dd/mm/yyyy

//*************************************
// date and time section start

// Random integer genrator
// const randomInt = function (min, max) {
//   return Math.trunc(Math.random() * (max - min + 1)) + min;
// };

// console.log(randomInt(0,10));
// console.log(randomInt(10,20));

// creating dates

// date and time section end

//*************************************
// Array grouping

//It allow us to group the array by given condations.
// it takes array or callback of condations .

// const transation = [1200, -200, 100, 500, -150, 1500, -500, 700, -70];

// const grouTransation = Object.groupBy(transation, transation =>
//   transation > 0 ? 'Deposited' : 'Withdrawals'
// );
// console.log(grouTransation);

// // for accounts

// const groupByActivity = Object.groupBy(accounts, accounts => {
//   const movementCount = accounts.movements.length;

//   if (movementCount >= 8) return 'very Active';
//   if (movementCount >= 4) return ' Active';
//   if (movementCount >= 8) return 'moderate';
//   if (movementCount >= 2) return 'Less Active';
//   return 'inactive';
// });

// console.log(groupByActivity);

// // group by standard or basic and premium

// const groupAccounts= Object.groupBy(accounts,acc=>acc.type);
// console.log(groupAccounts);

//*************************************

// // 1 String (muted the orignal string)         ************
// const owners = ['kamlesh','priyanka','Deepak','Ajay','arun','Sanjay','chetan'];
// console.log(owners.sort());
// console.log(owners);
// // 2 Numbers  => treated as string in sence
// const transation = [1200,-200,100,500,-150,1500,-500,700,-70];
// console.log(transation.sort());
// console.log(transation);
// console.log('---=> SHORT METHOD CALL BACK FUNCTION--------');
// // NUMBER  => SHORT METHOD CALL BACK FUNCTION

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // return < 0, A, B (keep order)
// // return > 0, B, A (switch order)

// // Ascending
// // movements.sort((a, b) => {
// //   if (a > b) return 1;
// //   if (a < b) return -1;
// // });
// movements.sort((a, b) => a - b);
// console.log(movements);

// // Descending
// // movements.sort((a, b) => {
// //   if (a > b) return -1;
// //   if (a < b) return 1;
// // });
// movements.sort((a, b) => b - a);
// console.log(movements);

// //Flat and FlatMap

// const arr = [1, 2, 3, [4, 5, 6], [7, 8, 9]];
// console.log(arr.flat());

// // For deep we passing argument
// const arr1 = [1, 2, 3, [4, [5], 6], [7, [9], 10]];
// console.log(arr1.flat(2));
// console.log(arr1.flat(Infinity));

// // calculating the total balance in the movement

// const allMovement = accounts
//   .map(acc => acc.movements)
//   .flat(Infinity)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(allMovement);

// // we can do in one go

// const totalMoney = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0);

//   console.log(totalMoney);

//**********************************

//**********************************
// some method

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movements);

// // Equality array method only true and false

// console.log(movements.includes(-130));
// console.log(movements.includes(1300));

// // Condation return true and false and do this

// const anyDeposits = movements.some((mov)=>mov >1000);
// console.log(anyDeposits);

// Every method

// console.log(movements.every(mov=>mov>0));
// console.log(account4.movements.every(mov=>mov>0));

// // use as seprate callback
// const deposit= mov=>mov >0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));

//**********************************
//FINDLAST AND FINDLASTINDEX METHOD

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movements);

// const lastWithdrawal = movements.findLast(mov=>mov<0);
// console.log(lastWithdrawal);  // -130

// // findLastIndex method to find
// const largestLastIndex = movements.findLastIndex(mov=> mov >1000);
// console.log(largestLastIndex);
// console.log(`your latest large movement was ${movements.length-largestLastIndex } movement ago`);

//********************
// // PIPELINE
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movements);

// const totalDepositsUsd = movements
//   .filter(mov => mov > 0)
//   .map(mov => mov * eurToUsd)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(totalDepositsUsd);

//********************
// // chaining the method
// const calcAverageHumanAge = ages =>
//   ages
//     .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
//     .filter(age => age >= 18)
//     .reduce((acc, age, i, arr) => acc + age/arr.length,0);

// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

// console.log(avg1, avg2);

//********************

// find method
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const firstWithdrawal =movements.find((mov)=> mov>0);
// console.log(firstWithdrawal);

// const account = accounts.find(acc=>acc.owner ===
//   'Jessica Davis');
//   console.log(account);

//********************

////////////////////////////////////////////////

//  Array projects bankist  ////////////////////

/* 
// ADDING MOVEMENTS IN THE SCROLL BAR
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = ' ';
  //.textContent = 0
  // SORT IN ASSIENDING  SICE SHELLO COPY BUT SORT CHANGE UNDERLAYING DATA
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
   <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1}
        ${type}</div>
        
        <div class="movements__value">${mov} ₹</div>
      </div>
  `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

//*******************************************************
// MOVEMENT TO SORT USING CALL BACK FUNCTION
// state variable create and preserve the state

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted; // flip the state every time
});

//*******************************************************
// DISPLAY THE TOTAL BALANCE IN BANK ACCOUNT
const CalDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} ₹`;
};

//*******************************************************
// CREATING FUNCTION FOR TOTAL DEPOSITE SUMMARY

const calcDispalySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, deposit) => acc + deposit, 0);

  labelSumIn.textContent = `${incomes}₹`;

  // CREATING variable FOR TOTAL withrawal(out) as SUMMARY

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, withdrawal) => acc + withdrawal, 0);
  labelSumOut.textContent = `${Math.abs(out)}₹`;

  // UPDATEING THE INTREST VARIABLE

  const intrest = acc.movements
    .filter(mov => mov > 0)
    .map(diposite => (diposite * acc.interestRate) / 100)
    .filter(int => int > 1) //we can console the int & arr
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${intrest}₹`;
};

//*******************************************************

// EVENT HENDLER

let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  // FIND THE CURRENT ACCOUNT
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // CLEAR THE INPUT LOGIN FEILD AND BLUER
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // DISPLAY THE WELCOME MESSAGE
    labelWelcome.textContent = `Welcome Back ✔ ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // FUNCTION CALL FOR UPDATEING UI
    updateUI(currentAccount);
  }
});

//*******************************************************

// TRANSFRER EVENT
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const reciverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  //  console.log(amount ,reciverAcc);

  if (
    amount > 0 &&
    currentAccount.balance >= amount &&
    reciverAcc?.username !== currentAccount.username &&
    reciverAcc
  ) {
    //  console.log('Tranfer valid');
    // DOING THE TRANSFER MAIN THING
    currentAccount.movements.push(-amount);
    reciverAcc.movements.push(amount);

    // UPDATEING UI
    updateUI(currentAccount);
  }
  // CLEAR THE TRANSFER FEILD
  inputTransferAmount.value = inputTransferTo.value = '';
});

//*******************************************************
// TO TAKE LONE FUNCTIONALATY

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);
  // console.log(amount);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    currentAccount.movements.push(amount);
    // UPDATEING UI
    updateUI(currentAccount);
  }
  // CLEAR THE TRANSFER FEILD
  inputLoanAmount.value = '';
});

//*******************************************************

//*******************************************************
//CLOSE ACCOUNT FEATURE THEOUGH INDEXOF MEHTOD

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    // console.log('Delete');
    // find index method also take the callback
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    // console.log(index);
    //Delete an account
    accounts.splice(index, 1);
    // Hide UI
    containerApp.style.opacity = 0;
  }
  // clear the input text
  inputCloseUsername.value = inputClosePin.value = '';
});

//*******************************************************
//MAKING SEPERATE FUNCTION FOR UPDATEING UI

const updateUI = function (acc) {
  // DISPALAY THE MOVEMENTS
  displayMovements(acc.movements);

  // DISPALAY THE BALACE
  CalDisplayBalance(acc);

  // DISPLAY THE SUMMARY BALANCE
  calcDispalySummary(acc);
};

//*******************************************************

// COMPUTE =>  CREATE USER  NAME PROPERTIES VIA MAP METHOD

const createUsernames = function (accs) {
  accs.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(user => user[0])
      .join('');
  });
};
createUsernames(accounts); 

*/

//////////////////////////////////////////////////////////////
// console.log(accounts);   // TO CHECK USERNAME  IN USER ACCOUNT

// SAME BUT USE REGULAR FUNCTION CALL

// const userName = 'Steven Thomas Williams';

// const user =userName.toLowerCase().split(" ").map((user)=>user.at(0)).join('');
// console.log(user);

// const createUsernames = function(accs){
//   accs.forEach(function (acc){
//     acc.username = acc.owner
//       .toLowerCase()
//       .split(' ')
//       .map(name => name[0])
//       .join('');
//   });
// };
// createUsernames(accounts);
// console.log(accounts);

//*******************************************************

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//*********************************************************
//********     ARRAY METHOD SLICE()    ********************
//*********************************************************
/*
const arr = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(arr);

console.log(arr.slice(2));
console.log(arr.slice(1,4));  // 1 2 3 element 
console.log(arr.slice(-2));   // last 2 element
console.log(arr);             // nothing change in orignal array 
console.log(arr.slice());     // shellow copy
console.log(...arr);          // unpacking the array 


//********     ARRAY METHOD SPLICE()    *******************
// SPLICE METHOD MODIFY THE ORIGNAL ARRAY
console.log(arr.splice(-1));
console.log(arr.splice(3));
console.log(arr);      
console.log(arr.splice(2));          
console.log(arr);      


// IT CUT THE ARRAY FROM 1 TO 2 FROM ORIGNAL STRING
const arr1 = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(arr1.splice(1,2));
console.log(arr1);

// ARRAY .at()method

const marks =[23,56,96,85,0,12,52];
console.log(marks[0]);
console.log(marks.at(0));
console.log(marks.at(1));
console.log(marks.at(3));
console.log(marks.at(marks.length-1));
console.log(marks.slice(-1));
console.log(marks.slice(-1).at(0));   // out the number slice method
console.log('kamlesh'.at(-1));        // also work at string



// REVERSE 

const arr2=['a','b','c','d','e','f'];
const arr3=['g','h','i','j','k','l'];
console.log(arr3.reverse());
console.log(arr3);                     // muted the orignal array

// CONCAT METHOD

console.log(arr2.concat(arr3));
console.log([...arr2,...arr3]);

//JOIN METHOD

const letters = arr2.concat(arr3);
console.log(letters.join('-'));


//--------------------
const num1 = [7,8,9,5,7,0,9,1,8,8];
const num2 = [9,5,3,6,1,1,4,5,8,2];

const n = num1.concat(num2)
console.log(n);
console.log(typeof n);

const s = num1.concat(num2).join('-')
console.log(s);
console.log(typeof s);
*/

//*********************************************************
//******** LOOPING  THE ARRAY  fOR EACH  ******************
//*********************************************************

/*

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//FOR OF LOOP.
for(const [i,balance]  of movements.entries()){
  if(balance > 0){
    console.log(`Transation ${i+1} You deposited ${balance} `);
  } else{
    console.log(`Transation ${i+1} You withdrew ${Math.abs(balance)}`);
  }
}

// FOR EACH LOOP 
// array.entry() method it return the array of array [i,balance] index,value
//In for each the balance passing in parimeter list ( (current ele)=> value ,index,entire array )
// order is important ..    // cant break for each loop 

console.log(`-------Now For Each--------`);
movements.forEach(function(balance,i,arr){
    if (balance > 0) {
      console.log(`Transation ${i + 1} You deposited ${balance} `);
    } else {
      console.log(`Transation ${i + 1} You withdrew ${Math.abs(balance)}`);
    }
})

// FOR EACH USING ARROW FUNCTION
console.log(`--Now using Arrow function in the for each---`);
movements.forEach((balance,i)=>{
    if (balance > 0) {
      console.log(`Transation ${i + 1} You deposited ${balance} `);
    } else {
      console.log(`Transation ${i + 1} You withdrew ${Math.abs(balance)}`);
    }
})

*/

//*********************************************************
//********fOR EACH ALSO AVALIABLE ON MAPES AND SETS *******
//*********************************************************
/*

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function(value,key,map){
  console.log(`${key} : ${value}`);
  // console.log(map); 
})

console.log('---------------------------------');

// SETS   ***
// SETS DONT HAVE KEY AND INDEX EITHER OMITED THE 2ND PERIMETR

const cityUnique = new Set([
  'Delhi',
  'Almora',
  'Dehradun',
  'Delhi',
  'Almora',
  'Dehradun',
]);
console.log(cityUnique);   // set 
cityUnique.forEach(function(value,_,map){
  // console.log(`${value} : ${value}`);
  console.log(`${value}`);
})

*/

///////////////////////////////////////                  CHALLENGE
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

/*

const checkDogs  = function(dogsJulia ,dogsKate){
// const dogsJulias =dogsJulia.slice(1,-2);
// const dogsAge = dogsJulias.concat(dogsKate)
// console.log(dogsAge);
// we can do it using splice method also 

const dogsJulias = dogsJulia.slice();
dogsJulias.splice(-2);
dogsJulias.splice(0,1);
 const dogsAge = dogsJulias.concat(dogsKate);

dogsAge.forEach(function(age,i){
  const type = age >= 3 ? 'Adult' : 'Puppy 🐶';
  console.log(`Dog number ${i+1} is an ${type}, and is ${age} years old`);

})
}

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

*/

/*

//********************************************************* 
//******** DATA TRANDFORMATION MAP FILTER REDUCE    *******
//********************************************************* 
// THE MAP METHOD 

 // MAP FUNCTION RETURN THE BRAND NEW ARRAY THE NEW ARRAY CONTAIN IN EACH POSITION THE RESULT OF APPLYING CALL BACK FUNCTION TO ORIGNAL ARRAY
// MAP ALSO CONTAIN 3 PARIMETER (CURRENT VALUE ,INDEX,ARRAY) 

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd =1.1;

// const movementsUSD = movements.map(function(mov){
//   return Math.trunc(mov * eurToUsd);
// })

// USE ARROW FUNCTION
const movementsUSD =movements.map(mov=>Math.trunc(mov *eurToUsd));
console.log(movementsUSD);

// NOT PREFER NOT A FUNCTIONAL PROGRAMMING
// const movementsUSD=[];
//   for(const mov of movements){
//     movementsUSD.push(Math.trunc(mov * eurToUsd));
// }
// console.log(movementsUSD);

// EXAMPLE
const movementsDiscription = movements.map(
  (mov, i) =>
    `Movement ${i + 1} : You ${mov > 0 ? 'diposited' : 'withdrewal'}  ${Math.abs(mov)}`
);
console.log(movementsDiscription);


// for each create side effect loop over the array and print each time over console but map method return brand new array whole oneces not one by one 
*/

//*********************************************************
//********     FILTER  METHOD                       *******
//*********************************************************

/*

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// USING REGULAR FUNCTION
const deposit = movements.filter(function (mov) {
  return mov > 0;
});


// const deposit = movements.filter(mov=>mov > 0);

console.log(deposit);

const withdrawal = movements.filter(mov => mov < 0);
console.log(withdrawal);

// WE CAN DO VIA FOR OF BUT THAT IS NOT FUNCTIONAL OR NOT SUPPORT CHAINING METHODS

// const depositFor =[];
// for(const mov of movements){
//   if(mov > 0)depositFor.push(mov);
// }
// console.log(depositFor);

*/

/*

//********************************************************* 
//********     THE REDUCED  METHOD                 *******
//********************************************************* 
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

// Arrow function is better do that 
// accumulator  => SNOWBALL

const balance = movements.reduce((acc, mov) => {
  return acc + mov;
}, 0);

console.log(balance);
// const balance = movements.reduce(function(acc,cur,i,arr){
//   console.log(`Iteration ${i} : ${acc}`);
//   return acc +cur;
// },0);
// console.log(balance);

// // WE CAN DO VIA FOR LOOP

// let balance2=0;
// for(const mov of movements)balance2+=mov;
// console.log(balance2);

// WE CAN DO OTHER STUFF USING REDUCE METHOD 

const maximum = movements.reduce((acc,mov)=>(acc >mov)?acc :mov,movements[0]
 
);

console.log(maximum);

//********************************************************* 
//********************************************************* 
//********************************************************* 

*/

// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

/*

const dogsJulia= [5, 2, 4, 1, 15, 8, 3];
const dogsKate = [16, 6, 10, 5, 6, 1, 4];
// MAP METHOD TO CALCULATE HUMAN AGE
const calcAverageHumanAge = function(age){
 const humanAge = age.map((age)=>(age<=2)? 2*age : 16 +(4 *age));
 console.log(humanAge);
 // FILTER METHOD TO FILTER THE AGE ABOVE 18
 const adult =humanAge.filter((humanAge,i)=> humanAge >=18);
 console.log(adult);
 // PRINT 18+ DOGS
 adult.forEach((age,i)=>{
  console.log(`Dog no ${i + 1} : Dogs age is : ${adult[i]}`);
 })

 // AVERAGES
 
 const avgDogs= adult.reduce((acc,age)=>acc +age,0)/adult.length;
 console.log(`The avarge Human age of all adult dogs is ${avgDogs} `);

}
calcAverageHumanAge(dogsJulia);
calcAverageHumanAge(dogsKate);

*/

//*********************************************************
//**         THE MAGIC OF CHAINING METHOD    **************
//*********************************************************

/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

const eurToUsd =1.1;
//PIPELINE 

const totalDepositsUsd =Math.trunc(movements.filter(mov => mov >0).map(mov=>mov * eurToUsd).reduce((acc,mov)=>acc + mov,0));
console.log(totalDepositsUsd);

// IF WE MADE ERROR WE CAN CHECK THROUGH ARR PARIMETER 

// const totalDepositsUsd = Math.trunc(
//   movements
//     .filter(mov => mov < 0)
//     .map((mov,i,arr) => {
//       console.log(arr);   // fix through checking arr array element
//       return mov *eurToUsd ;
//     })
//     .reduce((acc, mov) => acc + mov, 0)
// );
// console.log(totalDepositsUsd);

*/

// Coding Challenge #3

// Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

// TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
// TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

// GOOD LUCK 😀

/*
const dogsJulia = [5, 2, 4, 1, 15, 8, 3];
const dogsKate = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = function(age){
  const avarge=age.map(age => (age < 2 ? 2 * age : 16 + 4 * age))
    .filter((age) => age >= 18)
    .reduce((acc,age,i,arr)=>acc + age/arr.length,0);
    //only acc + arr.length only one way
  return avarge;
}

console.log(calcAverageHumanAge(dogsJulia));
console.log(calcAverageHumanAge(dogsKate)); 

*/

//*********************************************************
//**         THE FIND METHOD                 **************
//*********************************************************

/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


const firstWithdrawal = movements.find(mov => mov > 0);
console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);

const account =accounts.find(acc=>acc.owner ==='Jessica Davis');
console.log(account);

//Function through  for of loop  but not so good dont do that 
let accountfor;
for(const account of accounts){
  if(account.owner === 'Jessica Davis'){
     accountfor = account;
     break;
  }
}
console.log(accountfor);

*/

//*********************************************************
//**         THE FINDIndex METHOD            **************
//*********************************************************

// The findIndex() method of Array instances returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.

/*
const array1 = [5, 12, 8, 130, 44];

const largeNumber = num =>num >13;
console.log(array1.findIndex(largeNumber));

//********************************************************* 
//**            SOME AND ARRAY MEHTOD      ************** 
//********************************************************* 

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements);

// EQUALITY  for certain value
console.log(movements.includes(-130));

// CONDITION
const anyDeposits = movements.some(mov=> mov >0);
console.log(anyDeposits);

console.log(movements.some(mov=>mov === -130));

// EVERY check all element are true or false condition
const isAnyDeposits = movements.every(mov => mov > 0);
console.log(isAnyDeposits);


const deposit= [50,1000,1500,1400,800,900];
console.log(deposit.every(mov => mov >0));
console.log(deposit);
console.log(deposit.filter(mov => mov >1000));
console.log(deposit.map(mov => mov >1000));

*/

/*

//********************************************************* 
//**************** FLAT AND FLATMAP          ************** 
//********************************************************* 

console.log(accounts); // object

const accountMovements =accounts.map(acc => acc.movements);
console.log(accountMovements);

const allMovement= accountMovements.flat();
console.log(allMovement);

const overAllBalancce = allMovement.reduce((acc,mov) => acc + mov,0);
console.log(overAllBalancce);

// DO ALL THING WITH CHAINING 

const AllBalance = accounts.map(mov=>mov.movements).flat().reduce((acc,mov)=>acc + mov,0);
console.log(AllBalance);

// FLATMAP
// DO Flat and map together but it is one level deep

const AllBalance1 = accounts.flatMap(mov => mov.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(AllBalance1);

*/

/*
//********************************************************* 
//**************** SORTING ARRAY             ************** 
// 1 String (muted the orignal string)         ************ 
const owners = ['kamlesh','priyanka','Deepak','Ajay','arun','Sanjay','chetan'];
console.log(owners.sort());
console.log(owners);
// 2 Numbers  => treated as string in sence
const transation = [1200,-200,100,500,-150,1500,-500,700,-70];
console.log(transation.sort());
console.log(transation);
console.log('---=> SHORT METHOD CALL BACK FUNCTION--------');
// NUMBER  => SHORT METHOD CALL BACK FUNCTION

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// return < 0, A, B (keep order)
// return > 0, B, A (switch order)

// Ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
movements.sort((a, b) => a - b);
console.log(movements);

// Descending
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });
movements.sort((a, b) => b - a);
console.log(movements);
*/

/*

//********************************************************* 
//** MORE WAYS OF CREATING AND FILLING ARRAYS *************
// creating an array using function     *******************


const arr =[1,2,3,4,5,6,7,8,9];
console.log(new Array(1,2,3,4,5,6,7,8,9));

// // Empty arrays + fill method

const x = new Array(7);
console.log(x);

// console.log(x.map(()=>5));

x.fill(1,3,5);    // no,start index,end index not include
console.log(x);
x.fill(1);
console.log(x);    // muted the array
arr.fill(23,2,6);
console.log(arr);

// ARRAY FROM 

const y = Array.from({length :5},()=>5);// object and maping fun
console.log(y);    

const z = Array.from({length : 10},(_,i)=>i+1); 
console.log(z);         //_ undercoure for unused variable

// creating 100 dice roll with array from method

const diceRoll = Array.from({length :100},()=>Math.trunc(Math.random()*6)+1);
console.log(diceRoll);



// const movementsUI = Array.from(document.querySelectorAll('.movements__value'))
// console.log(movementsUI);


labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );
  console.log(movementsUI);

  const movementsUI2 = [...document.querySelectorAll('.movements__value')];
});

*/

/*
//*********************************************************
//*********************************************************
//**         Array method practices           *************
// Array Methods Practice

// 1. calculate  how much ammount in the back as deposite
console.log(accounts);
const bankDepositeSum = accounts
  .flatMap((acc) => acc.movements)
  .filter((mov) => mov > 0)
  .reduce((acc, mov) => acc + mov, 0);
console.log(bankDepositeSum);

// 2.calculate how much times the deposte is === 1000 or greeter

const numDeposits1000 = accounts
  .flatMap((acc) => acc.movements)
  .filter((mov) => mov > 1000).length;
console.log(numDeposits1000);

// 2 way to calculate using reduce method

const numDeposit1000 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((count, mov) => (mov > 1000 ? ++count : count), 0);
console.log(numDeposit1000);

// Prefixed ++ oeprator
let a = 10;
console.log(++a);
console.log(a);

// 3.
const { deposits, withdrawals } = accounts
  .flatMap((acc) => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      sums[cur > 0 ? "deposits" : "withdrawals"] += cur;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );

console.log(deposits, withdrawals);

// 4.
// this is a nice title -> This Is a Nice Title
const convertTitleCase = function (title) {
  const capitzalize = (str) => str[0].toUpperCase() + str.slice(1);

  const exceptions = ["a", "an", "and", "the", "but", "or", "on", "in", "with"];

  const titleCase = title
    .toLowerCase()
    .split(" ")
    .map((word) => (exceptions.includes(word) ? word : capitzalize(word)))
    .join(" ");

  return capitzalize(titleCase);
};

console.log(convertTitleCase("this is a nice title"));
console.log(convertTitleCase("this is a LONG title but not too long"));
console.log(convertTitleCase("and here is another title with an EXAMPLE"));

*/

///////////////////////////////////////
// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀
*/

/*
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1.
dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));

// 2.
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogSarah);
console.log(
  `Sarah's dog is eating too ${
    dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'
  } `
);

// 3.
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .flatMap(dog => dog.owners);
// .flat();
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);

// 4.
// "Matilda and Alice and Bob's dogs eat too much!"
//  "Sarah and John and Michael's dogs eat too little!"
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// 5.
console.log(dogs.some(dog => dog.curFood === dog.recFood));

// 6.
// current > (recommended * 0.90) && current < (recommended * 1.10)
const checkEatingOkay = dog =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;

console.log(dogs.some(checkEatingOkay));

// 7.
console.log(dogs.filter(checkEatingOkay));

// 8.
// sort it by recommended food portion in an ascending order [1,2,3]
const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsSorted);
*/

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// console.log('-----Normal print using for of ----');
// for (const mov of movements) {
//   if (mov < 0) {
//     console.log(`Transation  : You deposited ${Math.abs(mov)} Rupess`);
//   } else {
//     console.log(`Transation  : You withdrew ${Math.abs(mov)} Rupess`);
//   }
// }

// console.log('------For of distructuring  ------');

// for (const [i, balance] of movements.entries()) {
//   if (balance > 0) {
//     console.log(
//       `Transation ${i + 1} : You deposited ${Math.abs(balance)} Rupess`
//     );
//   } else {
//     console.log(
//       `Transation ${i + 1} : You withdrew ${Math.abs(balance)} Rupess`
//     );
//   }
// }

// //---------------------------------------------
// console.log('-----ForEach using callBack function-------');

// movements.forEach(function (balance, i, arr) {
//   if (balance > 0) {
//     console.log(
//       `Transation ${i + 1} : You deposited ${Math.abs(balance)} Rupess`
//     );
//   } else {
//     console.log(
//       `Transation ${i + 1} : You withdrew ${Math.abs(balance)} Rupess`
//     );
//   }
// });

// console.log('------For Each Arrow function-----');

// movements.forEach((balance, i, arr) => {
//   if (balance > 0) {
//     console.log(
//       `Transation ${i + 1} : You deposited ${Math.abs(balance)} Rupess`
//     );
//   } else {
//     console.log(
//       `Transation ${i + 1} : You withdrew ${Math.abs(balance)} Rupess`
//     );
//   }
// });
// console.log('-----------------------------------');

// console.log("maps and set has also for each ");

/*

// Time section
/////////////////////////////////////////////////
//***********************************************************
//*******      CONVERTING AND CHECKING NUMBERS **************
// NUMBER IS A NAMESPACE OR OBJECT THAT HAS A NUMBER METHOD 

// LECTURES
console.log(23===23.0);
// Base 10 => 0 to 9 but 1/10 = 0.1 or 3/10 = 0.3333333 
// Binary base 2 => 0 ,1

console.log(0.1+0.2);               //wired behaveiour
console.log(0.1 + 0.2 === 0.3);    // false 
// + sign added in project in placec of Number () function

//CONVERSION
console.log(Number('23'));
console.log(Number(+'23'));

// PARSING
console.log(Number.parseInt('30px',10));       //30 , 10 is base
console.log(Number.parseInt('ex23',10));       //NaN

console.log(Number.parseInt(' 2.5rem'));       // 2
// // parseFloat

console.log(Number.parseFloat(' 2.5rem'));     // 2.5

//CHECKING IF VALUE IS NaN

console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20X'));

// // Checking if value is + (number) important 

console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(+'20X'));
console.log(Number.isFinite(23 / 0));

console.log(Number.isInteger(23));
console.log(Number.isInteger(23.0));
console.log(Number.isInteger(23 / 0));





//***********************************************************
//*******  Math AND ROUNDING    Math namespace **************
//***********************************************************.

//Math.sqrt()
console.log(Math.sqrt(25));
console.log(25**(1/2));
console.log(8**(1/3));            // cube root

//Math.max()
console.log(Math.max(5,8,1,85,62,99,25,42));
console.log(Math.max(5,25,'40',12,35));
console.log(Math.max(5,25,'40px',12,35));         //NaN

// Math.min()
console.log(Math.min(5, 25, '40', 1, 35));

// Math.PI
console.log(Math.PI* Number.parseFloat('10px')**2);  

//Math.random()
console.log(Math.trunc(Math.random()*6)+1);

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
// 0...1 -> 0...(max - min) -> min...max
// console.log(randomInt(10, 20));


// Rounding integers
console.log(Math.round(23.3));           //23
console.log(Math.round(23.9));           //24

// ceil() => round of to next
console.log(Math.ceil(23.3));           //24  
console.log(Math.ceil(23.9));           //24

//floor() 
console.log(Math.floor(23.3));          //23
console.log(Math.floor('23.9'));        //23   type coversion

//trunc()
console.log(Math.trunc(23.3));         //23  cutting the number

console.log(Math.trunc(-23.3));        // -23
console.log(Math.floor(-23.3));        // -24

//Rounding decimals

console.log((2.7).toFixed(0));    // 3 but return to string 
console.log((2.7).toFixed(3));        //2.700
console.log((2.345).toFixed(2));      //2.35
console.log(+(2.345).toFixed(2));     // 2.35


*/

/*
//***********************************************************
//*******  THE REMINDERR OPERATOR              **************
//***********************************************************

console.log(5%2);
console.log(5/2);    //5= 2 * 2 + 1

console.log(8%3);   
console.log(8/3);    //8 = 2 * 3 + 2

console.log(6%2);
console.log(6/2);

console.log(7%2);
console.log(7/2);


const isEven = n => n % 2===0;
console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(514));


labelBalance.addEventListener('click',function(){
  [...document.querySelectorAll('.movements__row')].forEach(function(row,i){
    // 0,2,4,6,8
    if(i%2===0)row.style.backgroundColor = 'orangered';
    // 0,3,6,9
    if (i % 3 === 0) row.style.backgroundColor = 'blue';
  });
});

*/

/*

//***********************************************************
//*********************  NUMERIC SEPARATORS    **************
//***********************************************************

// 287,460,000,000    Diameter of the solar system
//_ is representation of numbers 

const diameter =287_460_000_000;
console.log(diameter);

const price = 345_99;
console.log(price);

const transferFee1=15_00;
console.log(transferFee1);

const PI = 3.14_15;
console.log(PI);

console.log(Number('230_000'));        // NaN
console.log(parseInt('230_000'));     // 230 

const NoOfPeople =1_58_59_68_25_369;
console.log(NoOfPeople);

*/

/*

//***********************************************************
//*********************  WORKING WITH BIGINT   **************      
//******************How much we store integer ********************

console.log(2**53-1);
console.log(Number.MAX_SAFE_INTEGER);

console.log(2 ** 53 +1);
console.log(2 ** 53 +2);
console.log(2 ** 53 +3);
console.log(2 ** 53 +4);

console.log( 4563221584549945644254122541114n);
console.log(typeof 4563221584549945644254122541114n);

// CREATING THE BIGINT USING FUNCTION
console.log(BigInt(48384302));

//OPERATION
console.log(10000n+20000n);
console.log(36286372637263726376237263726372632n * 10000000n);

// // console.log(Math.sqrt(16n));     cant not perform math operation 

const huge = 20289830237283728378237n;
const num = 23;
console.log(huge * BigInt(num));

// Exceptions
console.log(20n > 15);      // true
console.log(20n=== 20);    // false
console.log(typeof 20n);
console.log(20n == '20');     // type conversing 

console.log(huge + ' is REALLY big!!!');

// Divisions
console.log(11n / 3n);
console.log(10 / 3);

*/

/*
//***********************************************************
//********************* CREATING DATES         **************    

const now = new Date();
console.log(now);

// Creating a date

console.log(new Date('Aug 02 2020 18:05:41'));
console.log(new Date('December 24,2015'));
// Acessing the Date from objects

console.log(account1.movementsDates);
console.log(new Date(account1.movementsDates[0]));

console.log(new Date(2037,10,19,15,23,5));
console.log(new Date(2037,10,31));

console.log(new Date(0));
console.log(new Date(3 * 24 *60 *60*60*1000));

// Working with dates

const future = new Date(2037, 10, 19, 15, 23,59);
console.log(future);

console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());

console.log(future.getTime());    // time stamp

console.log(new Date(2142256980000));
console.log(Date.now());

future.setFullYear(2040);
console.log(future);

*/

/*
//***********************************************************
//********************* DATES OPERATION        ************** 
//***********************************************************

// how many dates  = date1  - date 2 (timestamp) milisecond


const future = new Date(2037, 10, 19, 15, 23, 59);
console.log(Number(future));
console.log(+future);

const CalcdaysPassed = (date1 ,date2)=> Math.abs((date2 -date1)/(60*60*24*1000));

const day1 =CalcdaysPassed(new Date(2037,3,14),new Date(2037,3,24));
console.log(day1);
const day2 = CalcdaysPassed(new Date(2037, 3, 24), new Date(2037, 3, 14));
console.log(day2);

const now = new Date().toISOString();
console.log(now);

*/

/*

//***********************************************************
//******* INTERNATIONALIZING DATES (INTL) Numbers    ******** 
//***********************************************************

const num = 3884764.23;

const option ={
  // style :'unit',
  style : 'currency',
  // style 3 option unit persent ,currency
  // unit:'mile-per-hour'
  unit:'celsius',
  currency : 'EUR',
  // userGrouping: false,
}


console.log('US      :',new Intl.NumberFormat('en-US',option).format(num));
console.log('India   : ',new Intl.NumberFormat('en-IN',option).format(num));
console.log('Germany : ',new Intl.NumberFormat('de-DE',option).format(num));
console.log('Syria   : ',new Intl.NumberFormat('ar-Sy',option).format(num));
console.log(navigator.language, new Intl.NumberFormat(navigator.language).format(num));

*/

//***********************************************************
//******* TIMMER SET TIME OUT AND SET INTERVEL   ********
//***********************************************************

//  SetTimeout

// const ingredients = ['olives', 'spinach'];
// const pizzaOrder = setTimeout(
//   (ing1, ing2) =>
//     console.log(`Here is your pizza🍕🍕 with ${ing1} and ${ing2}`),
//   2000,
//   ...ingredients
// );
// console.log(`waiting.........`);

// we can clear the settime out function
// if(ingredients.includes('olives')) clearTimeout(pizzaOrder);

// Set Timeinterval over and over again

// setInterval(()=>console.log(new Date()),1000);

// format dates project section

////////////////////////////////////////////////
// const formatMovementDate = function (date) {
//   const calDaysPassed = (date1, date2) =>
//     Math.round(Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)));

//   const daysPassed = calDaysPassed(new Date(), date);
//   console.log(daysPassed);

//   if (daysPassed === 0) return 'Today';
//   if (daysPassed === 1) return 'Yesterday';
//   if (daysPassed <= 7) return `${daysPassed} days ago`;
//   else {
//     const day = `${date.getDate()}`.padStart(2, 0);
//     const month = `${date.getMonth() + 1}`.padStart(2, 0);
//     const year = date.getFullYear();
//     return `${day}/${month}/${year}`;
//   }
// };

// //Adding the movements
// const displayMovements = function (acc, sort = false) {
//   containerMovements.innerHTML = '';
//   // creating combined data structure for date and movements
//   const combinedMovementDate = acc.movements.map((mov, i) => ({
//     movements: mov,
//     movementsDates: acc.movementsDates.at(i),
//   }));
//   if (sort) combinedMovementDate.sort((a, b) => a.movements - b.movements);
//   // const movs = sort
//   //   ? acc.movements.slice().sort((a, b) => a - b)
//   //   : acc.movements;
//   combinedMovementDate.forEach(function (obj, i) {
//     const { movements, movementsDates } = obj;
//     const type = movements > 0 ? 'deposit' : 'withdrawal';

//     const date = new Date(movementsDates);
//     const displayDate = formatMovementDate(date);

//     const html = `<div class="movements__row">
//           <div class="movements__type movements__type--${type}">${
//       i + 1
//     } ${type}</div>
//          <div class="movements__date">${displayDate}</div>
//           <div class="movements__value">${movements.toFixed(2)}₹</div>
//         </div>`;

//     containerMovements.insertAdjacentHTML('afterbegin', html);
//   });
// };
