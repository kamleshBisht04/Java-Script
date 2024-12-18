'use strict';

///////////////////////////////////////////////////////////
//**********************************************************
//***************1 . DEFAULT PARIMETER *********************
//**********************************************************

/*
const flightBooking =[];

const createBooking = function(flightNum,numPassengers=100,price=599){
  //  before ES6 (ES5) ==> shortcurting
  // numPassengers =numPassengers|| 1;
  // price =price ||500
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  flightBooking.push(booking);
}

createBooking('LAH123');
createBooking('LAH123', 2, 800);
createBooking('LAH123', 50);
//  we can't skip the argument when we call the function
// => setting the undefined which we skip
createBooking('LAH123',undefined, 50);

// EXAMPLE 2 .

const multiply = function(num1 =5  ,num2 =10){
  console.log(num1*num2);
}
 
multiply(5,6);
multiply();

*/

/*
//*************************************************************
//*************************************************************
//*HOW PASSING ARGUMENTS WORKS : VALUE TYPE VS REFERENCE TYPE**
//*************************************************************

const flight ='LH234';
const kamleh={
  name: 'kamlesh singh bisht',
  passport:5636256362
}
const checkIn = function(flightNum,passanger){
  flightNum ='AS339';
  passanger.name = 'Mr.'+passanger.name;

  if(passanger.passport===5636256362){
      alert('Passport verify😊 plese check In ')
  }else{
    alert('Invalid Passport 😊 Sorry!!');
  }
}
checkIn( flight,kamleh);
console.log(flight);
console.log(kamleh);

// const flightNum =flight;
// const passanger =kamlesh;       // change in refrence in heap
// flight is (primitive)value type and kamlesh is object that is pass to      reference both point to same object in heap 
//let lost or new his passport
const newPassport = function(person){
  person.passport = Math.trunc(Math.random()*10000000);
}
newPassport(kamleh);
checkIn(flight,kamleh);

*/

//*************************************************************
//*************************************************************
//*  2. function manipulating same object that creating problem 
//*************************************************************
/*
First class function =>  treat as a First citizens 
function is simple a value or onther kind of objects(function Expression or  object method)
that enables us to write higher order function.
Pass function as a argument to other function or return the function from other function. 

Example==>
// const add = (a, b) => a + b;

// const counter = {
//   value: 23,
//   inc: function () {
//     this.value++;
//   },
// };

// const greet = () => {
//   console.log('Welcome to java script!!');
// };
// btnClose.addEventListener('click', greet);

// |||||||||||||||||||||||||||||||||||||||||||||||||||||||
// CALL BACK FUNCTION PROVIDES A LABEL OF ABSTRACTION 

Higer order functon =>A function that recives onther function as an argument that return a new function or both ..that is only possible due to first class function.

const greet =()=>{ console.log("Welcome to java script!!");}
btnClose.addEventListener('click',greet);
function return onother function(example) =>

function count(){
  let counter =0;
  return function(){
    counter++;
  };
}

*/

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
// call back function // higher order function // first class function

/*
const oneWord = function(str){
  return str.replace(/ /g,'').toLowerCase();
}

const upperFirstWord =function(str){
  const [first,...other]=str.split( ' ');
  return [first.toUpperCase(),...other].join(' ');
}

const tranformer = function(str,fun){
  console.log(`Orignal string  : ${str}`);
  console.log(`Transforming  string  : ${fun(str)}`);
  //to know which function transfrom ( function have method or property name )
  console.log(`Transform by : ${fun.name}`);
}

// HIGHER ORDER FUNCTION AND CALL BACK FUNCTION  PROVIDE HIGER LEVEL OF        
// ABSTRACTION
tranformer('JAVASCRIPT IS BEST LANGUAGE', oneWord);
tranformer('javaScript is best language!', upperFirstWord);

// EXAMPLE 2
const high5 = () => {
  console.log('👋👋👋👋👋');
};

document.body.addEventListener('click', high5);

// example
['manku', 'ajay', 'Deepak', 'sanjay'].forEach(high5);

*/

//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//*************************************************************
//*  3. function returning function: 
//*************************************************************

/*
const greet = function(greeting){
  return function(name){
   console.log(`${greeting} ${name}`);
}
  }

const greets = greet('How are You ?');
greets('kamlesh');
greets('Deepek');

// 2 way
greet('how are you ?')('kamlesh');


// convert to  Arrow function 

const greetArr =(message)=>(name)=>{
   console.log(`${message} ${name}`);
}
greetArr('Welcome')('Himanshu');

*/

//*************************************************************
//THE CALL AND APPLY METHOD (THIS KEYWORD SET MANUALLY )*******
/*

const AirIndia={
  airline: 'AirIndia',
  iataCode: 'AIR',
  booking:[],
  book(flightNum,name){
    console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`);
  this.booking.push({flight : `${this.iataCode}${flightNum}`,name});
}
};
AirIndia.book('239', 'kamlesh bisht');
AirIndia.book('284', 'Deepak rawat');
console.log(AirIndia);

// ANOTHET AIRLINE CREATE 
const IndGo ={
  airline : 'IndGo',
  iataCode :'IGO',
  booking :[],
};

// CREATE A NEW FUNCTION AND SET  TO AIRINDIA.BOOK BECAUSE FIRST CLASS FUCTION

const book = AirIndia.book;
// book(23,'Ramesh singh'); 
// dont work becoz now book function is regular function this keyword points to UNDEFINE 
// HOW TO BOOK WELL WE NEED TO TELL EXPLICITLY
// CALL // APPLLY // BIND (3 FUNCTION)
// WE CALL THE CALL METHOD CALLL THE BOOK METHOD USING THIS KEYWORDS.

// CALL METHOD

book.call(IndGo,199,'Ajay kumar');
book.call(IndGo,200,'Deepak singh');
console.log(IndGo);
// same for 2 nd airline
book.call(AirIndia,201,'jeeven singh');
book.call(AirIndia,562,'rohit singh')
console.log(AirIndia);

// creating 3 airline
const Vistara = {
  airline: 'Vistara',
  iataCode: 'VST',
  booking: [],
};
book.call(Vistara,999,'Diya sharma');
console.log(Vistara);


// APPLY METHOD 
// apply method is same as call method it recive a array of argument not a list  after the this keyword

const flightData =[565,'jaya bachan']
book.apply(IndGo,flightData)
console.log(IndGo);

//apply method is not used any more in morden java scipt .better way to doing the same things.0
// useing the spread operator 
book.call(IndGo,...flightData);
console.log(IndGo);

// adding the data in airIndia
book.call(AirIndia,...flightData);
console.log(AirIndia);

// Example 2


const greet= function(){
  console.log(`${this.animal} is sleeping between ${this.duration}.`);
}

const obj ={
  animal:"cat",
  duration: '3 - 5',
};

greet.call(obj);



//*************************************************************
//**************      BIND METHOD        *********************
//*************************************************************

// Bind method
// book.call(IndGo,199,'Ajay kumar');

const bookAir=book.bind(AirIndia);
const bookVas=book.bind(Vistara);

const bookIg=book.bind(IndGo);
bookIg(23,'sushma bhandari');
console.log(IndGo);


const bookIg23= book.bind(IndGo,23);
bookIg23('Jhon smith');
bookIg23('Martha Cooper');

// with Event Listener 

AirIndia.planes =300;
AirIndia.buyPlane = function(){
  console.log(this);

  this.planes++;
  console.log(this.planes);
}
// AirIndia.buyPlane();
document.querySelector('.buy').addEventListener('click',AirIndia.buyPlane.bind(AirIndia));

// Bind method for specify predifine parimeter
// partial application 

const addTax = (rate,value)=>value + ((value*rate)/100);
console.log(addTax(10,200));

const addVAT=addTax.bind(null,23);
// addVAT =value =>value + ((value*rate)/100);
console.log(addVAT(100));
console.log(addVAT(23));

// using function return function

const addTaxRate = function(rate){
  return function(value){
    return value + ((value*rate)/100);
  }
}

const addVAT2 =addTaxRate(23);
console.log(addVAT2(100));
console.log(addVAT2(23));
*/


/*
//*************************************************************
//*****             IIFE        *********************
// IMMEDIATELY InVIKED FUNCTION EXPRESSIONS 

const runOnce= function(){
  console.log(`This will run agian and agian `);
}
runOnce();
runOnce();
runOnce();

// CONVERTING TO IIFE

(function(){
  console.log('This is never run again');
  const isPrivate =23;
})();


// console.log(isPrivate);

// USING ARROW FUNCTION
(()=>console.log('this is NEVER RUN AGIAN 2 WAY TO CREATE '))();

{
  const isPrivate =23;
  var isNotPrivate =46;
}
// console.log(isPrivate);
console.log(isNotPrivate);

// VAR IS ACESSIABLE IN SIDE THE BLOCK 

*/

//*************************************************************
//****************         CLOSER       ********************
 // EXUCTION CONTEST ,SCOPE CHAIN ,CALL STACK 
//*************************************************************
// CLOSER IS NOT A FEATUR THAT WE EXPLICITLY USE DONT CREATE MANUALLY  HAPPEND AUTOMATICALLY IN CERTAIN SITUATION WE NEED TO RECONIZE THOSE SITUATION 
//

/*

const secureBooking =function(){
  let passangerCount = 0;

  return function(){
    passangerCount++;
    console.log(`${passangerCount} passanger in Enter in the Bus `);
  }
};

const booker =secureBooking();

booker();
booker();
booker();

*/


//*************************************************************
//  EXAMPLE 1

/*

let f;
const g= function(){
  const a =23;
  f=function(){
    console.log(a*2);
  }
}

const h = function(){
  const b=777;
  f = function(){
    console.log(b*2);
  };
};

g();
f();
console.dir(f);

// Re-assigning f function

h();
f();
console.dir(f);

 
*/

//  EXAMPLE 2
// TIMMER IS EXAMPLE
/*
const boardPassengers = function(n ,wait){
  const preGroup = n/3;
 
  setTimeout(function(){
    console.log(`we are now boarding all ${n} passengers `);
    console.log(`There are 3 group ,each with ${preGroup} passengers`);
  },1000*wait)
  console.log(`will start boarding in ${wait} seconds`);
}

// const preGroup =1000; // look first closer before scope chain
boardPassengers(180,3);

*/

//  EXAMPLE 3

///////////////////////////////////////
// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/


(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
   
  document.querySelector('body').addEventListener('click',function(){
    header.style.color ='blue'
  })

})();


