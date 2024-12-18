'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  // movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2022-12-23T07:42:02.383Z',
    '2024-09-14T09:15:04.904Z',
    '2024-09-15T10:17:24.185Z',
    '2024-09-19T14:11:59.604Z',
    '2024-09-20T17:01:17.194Z',
    '2024-09-21T14:36:17.929Z',
    '2024-09-22T10:51:36.790Z',
  ],
  currency: 'INR',
  locale: 'en-IN',
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  movementsDates: [
    '2013-11-18T21:31:17.178Z',
    '2013-12-23T07:42:02.383Z',
    '2023-01-28T09:15:04.904Z',
    '2023-04-01T10:17:24.185Z',
    '2023-05-08T14:11:59.604Z',
    '2023-07-26T17:01:17.194Z',
    '2023-07-28T23:36:17.929Z',
    '2023-08-01T10:51:36.790Z',
  ],
  currency: 'INR',
  locale: 'en-IN',
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  movementsDates: [
    '2014-11-01T13:15:33.035Z',
    '2014-11-30T09:48:16.867Z',
    '2014-12-25T06:04:23.907Z',
    '2024-01-25T14:18:46.235Z',
    '2024-02-05T16:33:06.386Z',
    '2024-04-10T14:43:26.374Z',
    '2024-06-25T18:49:59.371Z',
    '2024-07-26T12:01:20.894Z',
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

//  Array projects bankist  ////////////////////
//FORMAT DATE 
const formatMovementDate = function (date ,locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (60 * 60 * 24 *1000));
   // for today tommrow yesterday
  const daysPassed = calcDaysPassed(new Date(), date);
  // console.log(daysPassed);
   
  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;
   
  // creating Date object
  // const year = date.getFullYear();
  // const month = `${date.getMonth() + 1}`.padStart(2, 0);
  // const day = `${date.getDate()}`.padStart(2, 0);
  // return `${day}/${month}/${year}`;

  return new Intl.DateTimeFormat(locale).format(date);
};
//////////////////////////////////////////////////
// FUNCTION FOR RETURNING CURRENCY ,LOCALE ,REUSABLE FUN
   const formatCur = function(value,locale,currency){
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency,
    }).format(value);
   }

// ADDING MOVEMENTS IN THE SCROLL BAR
const displayMovements = function(acc ,sort=false){
  containerMovements.innerHTML = ' ';
  //.textContent = 0
  // SORT IN ASSIENDING  SICE SHELLO COPY BUT SORT CHANGE UNDERLAYING DATA
  const movs= sort ? acc.movements.slice().sort((a,b)=> a-b) : acc.movements;

 movs.forEach(function(mov,i){
   const type = mov > 0 ? 'deposit' : 'withdrawal';
   const date = new Date(acc.movementsDates[i]);
      const displayDate = formatMovementDate(date ,acc.locale);
      const formattedMov=formatCur(mov,acc.locale,acc.currency)
    
   const html = `
   <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1}
        ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>`;
   containerMovements.insertAdjacentHTML('afterbegin', html);
 });
};

//******************************************************* 
// MOVEMENT TO SORT USING CALL BACK FUNCTION
// state variable create and preserve the state

let sorted = false;
btnSort.addEventListener('click',function(e){
  e.preventDefault();
  displayMovements(currentAccount ,!sorted);
   sorted = !sorted;     // flip the state every time
})


//******************************************************* 
// DISPLAY THE TOTAL BALANCE IN BANK ACCOUNT 
const CalDisplayBalance =function(acc){
  acc.balance = acc.movements.reduce((acc, mov) =>
   acc + mov, 0);
  labelBalance.textContent =formatCur(acc.balance,acc.locale,acc.currency);
};
 

//******************************************************* 
// CREATING FUNCTION FOR TOTAL DEPOSITE SUMMARY

const calcDispalySummary= function(acc){
  const incomes =acc.movements.filter(mov=>mov >0).reduce((acc,deposit)=> acc + deposit, 0);

  labelSumIn.textContent = formatCur(incomes,acc.locale,acc.currency);

// CREATING variable FOR TOTAL withrawal(out) as SUMMARY

  const out = acc.movements.filter(mov=>mov < 0).reduce((acc,withdrawal)=> acc + withdrawal,0);
  labelSumOut.textContent = formatCur(Math.abs(out),acc.locale,acc.currency);

  // UPDATEING THE INTREST VARIABLE 
   
  const intrest =acc.movements.filter(mov=>mov > 0).map(diposite=>(diposite*acc.interestRate)/100)
  .filter(int=>int >1)    //we can console the int & arr 
  .reduce((acc,int)=>acc +int,0);
  labelSumInterest.textContent =  formatCur(intrest,acc.locale,acc.currency)};

 // tofixed method is use for fix the decial to 2 places
//******************************************************* 
const startLogOutTimmer= function(){
  const tick =function(){
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    // In each call, print the remainig time to UI
    labelTimer.textContent = `${min}:${sec}`;

    // when  0 seconds, stop timmer and logout the user
    if (time === 0) {
      clearInterval(timmer);
      labelWelcome.textContent = 'Log in to get started';
      containerApp.style.opacity = 0;
    }
    // Decrease 1sec
    time--;
  }
  //setting the time to 5 minutes
   let time=300;
  // call the timmer every second
  tick();
  const timmer =setInterval(tick,1000);
  return timmer;
}


//******************************************************* 

// EVENT HENDLER

let currentAccount ,timer;

btnLogin.addEventListener('click',function(e){
  e.preventDefault();
  // FIND THE CURRENT ACCOUNT
  currentAccount = accounts.find(acc=>acc.username === inputLoginUsername.value);
  
  if (currentAccount?.pin === +(inputLoginPin.value)) {
    // CLEAR THE INPUT LOGIN FEILD AND BLUER
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
     // Timmer
     if(timer)clearInterval(timer);
    // startLogOut timmer 5 minutes
     timer = startLogOutTimmer();

    // DISPLAY THE WELCOME MESSAGE
    labelWelcome.textContent = `Welcome Back ✔ ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // CREATING CURRENT DATE
    const now = new Date();
    const option = {
      hour: 'numeric',
      minute: 'numeric',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      weekday: 'short',
    };
    // const locale = navigator.language;
    // console.log(locale);

    labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locale, option).format(now);

    // const now = new Date();
    // const year=now.getFullYear();
    // const month= `${now.getMonth()+1}`.padStart(2,0);
    // const day =`${now.getDate()}`.padStart(2,0);
    // const hour = `${now.getHours()}`.padStart(2,0);
    // const min = `${now.getMinutes()}`.padStart(2,0);

    // labelDate.textContent = `${day}/${month}/${year} , ${hour}:${min}  ⌚`;

    // FUNCTION CALL FOR UPDATEING UI
    updateUI(currentAccount);
  }
});

//******************************************************* 

// TRANSFRER EVENT 
btnTransfer.addEventListener('click',function(e){
  e.preventDefault();

 const amount = +(inputTransferAmount.value);
 const reciverAcc = accounts.find(acc => acc.username === inputTransferTo.value);
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
    //ADD TRANSFER DATE 
    currentAccount.movementsDates.push(new Date().toISOString());
    reciverAcc.movementsDates.push(new Date().toISOString());
   // UPDATEING UI 
   updateUI(currentAccount);

   // Resetting timmer
   clearInterval(timer);
   timer = startLogOutTimmer();
 }
 // CLEAR THE TRANSFER FEILD
 inputTransferAmount.value = inputTransferTo .value = '';
});


//******************************************************* 
// TO TAKE LONE FUNCTIONALATY  
btnLoan.addEventListener('click',function(e){
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);
  // console.log(amount);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(function(){
      currentAccount.movements.push(amount);
      //ADD LONE DATE
      currentAccount.movementsDates.push(new Date().toISOString());
      // UPDATEING UI
      updateUI(currentAccount);

      // Resetting timmer
      clearInterval(timer);
      timer = startLogOutTimmer();
      },2500)
  }
  // CLEAR THE TRANSFER FEILD
     inputLoanAmount.value = '';
});
//******************************************************* 
 


//******************************************************* 
//CLOSE ACCOUNT FEATURE THEOUGH INDEXOF MEHTOD

btnClose.addEventListener('click',function(e){
  e.preventDefault();

  if(inputCloseUsername.value === currentAccount.username && +(inputClosePin.value) === currentAccount.pin){
    // console.log('Delete'); 
    // find index method also take the callback
    const index = accounts.findIndex(acc => acc.username === currentAccount.username);
    // console.log(index);
    //Delete an account 
    accounts.splice(index,1);
    // Hide UI
    containerApp.style.opacity =0;
  };
    // clear the input text
  inputCloseUsername.value= inputClosePin.value ='';
});

//******************************************************* 
//MAKING SEPERATE FUNCTION FOR UPDATEING UI

const updateUI= function(acc){
  // DISPALAY THE MOVEMENTS
  displayMovements(acc);

  // DISPALAY THE BALACE
  CalDisplayBalance(acc);

  // DISPLAY THE SUMMARY BALANCE
  calcDispalySummary(acc);
}

//******************************************************* 



// COMPUTE =>  CREATE USER  NAME PROPERTIES VIA MAP METHOD 

const createUsernames = function(accs){
  accs.forEach(acc=>{
    acc.username =acc.owner.toLowerCase().split(' ').map(user=>user[0]).join('');
  });
};
createUsernames(accounts);
// console.log(accounts);   // TO CHECK USERNAME  IN USER ACCOUNT

// SAME BUT USE REGULAR FUNCTION CALL


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
//******************************************************* 
//******************************************************* 
//      FAKE DATE INTLIZATION OF DATES AND FORMAT 
 
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

// // experimenting with API
// const now = new Date();
// const option = {
//   hour: 'numeric',
//   minute: 'numeric',
//   year: 'numeric',
//   month: '2-digit',
//   day: '2-digit',
//   weekday:'short'
// };
// const locale = navigator.language;
// console.log(locale);

// labelDate.textContent = new Intl.DateTimeFormat(locale,option).format(now);



//******************************************************* 
//************* DATE SECTION **************** 

// FAKE ALWAYS LOGGED IN
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

//  // dd/mm/yyyy format
// const now = new Date();
// const year=now.getFullYear();
// const month= `${now.getMonth()+1}`.padStart(2,0);
// const day =`${now.getDate()}`.padStart(2,0);
// const hour = now.getHours();
// const min = now.getMinutes();
// const weekday =now.getDay();
// console.log(weekday);

// labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}  ⌚`;

/*















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


*/

/*

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

console.log((2.7).toFixed(0));        // 3 but return to string 
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
   
const ingredients =['olives','spinach'];
const pizzaOrder = setTimeout((ing1 ,ing2)=>console.log(`Here is your pizza🍕🍕 with ${ing1 } and ${ing2}`),2000,...ingredients);
console.log(`waiting.........`);

// we can clear the settime out function 
// if(ingredients.includes('olives')) clearTimeout(pizzaOrder);


// Set Timeinterval over and over again 

// setInterval(()=>console.log(new Date()),1000);