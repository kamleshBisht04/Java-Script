// let js ='amizing';
// if (js==='amizing')alert('java script is Fun !');

// console.log(40 + 8 + 23 - 10);
// console.log(54);
// console.log(54);
// console.log(54);

/** ------> values and variable   */

// console.log('kamleh');
// console.log(23);
// console.log(40+8+23-10);

// let firstName ='kamlesh';
// console.log(firstName);
// let lastName='Bisht';
// console.log(lastName);
// const PI=3.1425;
// let student_Name ='Deepak';
// let year_of_Passing= 2019;
// let myFirstJob='Programmer coder';
// let myCurrentJob='Teacher';
// console.log(myCurrentJob + " "+ myFirstJob);

/*Rules for declearing the variable
camale case notation
snake case
not start with number
use only $ _ as a special character 
use only meaningful name for variable.
variable can containes alpha number or $ _
reserved keyword are not allowed Tokken
variable can not start with upper case letter .
upper case letter are reserved for constant .
*/

/***  Data Type  seven type 
  number,String,Boolean,undefine ,null,symbol ,bigInt
  dynamic typeing
  bigInt for larger values in Es2020 
  Typeof operator thats tals the type of variable
  type of null ===> object
*/

// let money =500;
// let radius =5.3;
// let firstName = 'Deepak sing Bisht';
// let isMarried = 'true';
// let isAdult = 'false';
// let className;   // undefine
// let jobs=null; // empty value

// console.log(money);
// console.log(radius);
// console.log(firstName);
// console.log(isMarried);
// console.log(isAdult);
// console.log(typeof money);
// console.log(typeof radius);
// console.log(typeof isAdult);
// console.log(typeof className);
// console.log(typeof jobs);

// //Dynamic typeing
// className =9;
// money =10000;
// radius=10.5;
// console.log(money);
// console.log(radius);
// console.log(className);
// console.log(typeof null);

/*   let const and var keywoard
      (muted at any point )
     let is change at any point
     const is constant (cant change)
     const need value at decleration.
     var is old way or open for all 
     use always const.

     let is block scope or var is function scope
*/

//  const birthYear =1996;
//  let age =18;
//   age =28;

/*  operaters in java script
        methmetical ,logical,Assignment,compression,Abbrivative ,bitwize,Typeof operator 
        concatation operater
    */
// const currentYear= 2037;
// const age =36;
// const age_kamlesh= currentYear-1996;
// const age_sara=currentYear-2018;
// console.log(age);
// console.log(age_kamlesh ,age_sara);
// console.log(age_kamlesh*2,age_sara/10);
// console.log(age+12);
// const firstName ="Ajay";
// const lastName ="Bisht";
// console.log(firstName + " "+ lastName);
// let x = 15+25+36+(63*2 *10);
// console.log(x);
// x=x/2;
// console.log(x);
// x++;
// console.log(x);
// x--;
// console.log(x);
// x+=5;
// console.log(x);

//  /**comprsion operator*/
// console.log(age_kamlesh > age_sara);

/* 
let avarage = age_Deepak+age_jay/2;
operate presedence important 
*/
// let age_Deepak = 56;
// let age_jay = 36;
// let avarage = (age_Deepak + age_jay) / 2;
// console.log(avarage);

//  BMI calculator   Question ===>>1

// let massMark = 79;
// let massJohn = 95;
// let heightMark = 1.69;
// let heightJohn = 1.88;

// const BmiMark = Math.round(massMark / (heightMark * heightMark));
// const BmiJohn = Math.round(massJohn / (heightJohn * heightJohn));
// console.log(`The Bmi of mark is :  ${BmiMark}`);
// console.log(`The Bmi of john is :  ${BmiJohn}`);

// let markBmiHigher = BmiMark > BmiJohn;
// console.log("Mark Bmi is higher than john  :  "+markBmiHigher);

/** String templete example with backticks  */

// const firstName ='jonas';
// const job = 'teacher';
// const birthYear =1996;
// const jonasDetails = "I'm  "+firstName+ ', a ' +job+ " and I am "+ (2024-birthYear) +" old teacher ";
// console.log(jonasDetails);

/* String templete  also help to multiline string  */

// const jonas=`I am  ${firstName}, a ${job} and ${(2024-birthYear)} year old `;
// console.log(jonas);

// console.log(`kamleh is a good progrmamer
// but he still learn java Script `);

/*  if else control statements */

// let firstName= 'Ajay';
// const age = 50;
// const drivingAge =18;
// const hasDrivingLicence= age>=drivingAge;
// if(age>drivingAge){
//   console.log(`${firstName} is able to drive a car 🚗 because age is ${age}`);
// }else{

//   console.log(`${firstName} is not able to drive the car 🚗 because age is ${age} and after ${(drivingAge-age)} year able to drive a car.`);
// }

/* Bmi if else   */

// let massMark = 79;
// let massJohn = 95;
// let heightMark = 1.69;
// let heightJohn = 1.88;

// const BmiMark = Math.round(massMark / (heightMark * heightMark));
// const BmiJohn = Math.round(massJohn / (heightJohn * heightJohn));

// console.log(BmiMark ,BmiJohn);

// if(BmiMark >BmiJohn){
//   console.log(`Bmi of mark is greater than john : ${BmiMark}`);
// }else{
//   console.log(`Bmi of john is greater than Mark : ${BmiJohn}`);
// }

/* Type coversion and coercion (Boxing and Auto boxing ) */

// const inputYear='1996';
/*     console.log(inputYear+18); 
          number function explicit    */
// console.log(Number('1996')+18);
// console.log(Number('kamlesh'));    //Not a number
// let number =23;
// console.log(typeof(String(number)));

/*Type coercion */

// console.log('23'+'2'+'6');   //String
// console.log('23'-'22'-'1');
// console.log('26'*'2');
// console.log('26'/'2');

// console.log('13'+'3'+3); //taking as a string

// let n ='1'+1;
// n=n-1;
// console.log(n);

/* Truthy and false value 

5 false ===>
0 ,'' , undifine ,null,nun;
*/
// console.log(Boolean(0));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(''));
// console.log(Boolean(NaN));

// const money =0;
// if(money){
//   console.log("Dont spend it all");
// }else{
//   console.log("you should ge a job!");
// }

/** Equal to and Triple equal to operater compresion  */

/*

const age = 18;

// type coericion
if(age =='18'){
  console.log('You are just become and adult ');
}

// Strict compair

if (age == "18") {
  console.log("You are just become and adult ");
}

// 18===18     true
// 18===19     false
// '18' == 18  true
// '18' ===18  false

*/

// number function that convert string to number

// const favorite = Number(prompt("Enter your favorite number "));
// console.log(typeof(favorite));

// if(favorite!==23){
//   console.log(`number is not 23`);
// }

// ifelse example

// const ScoreDolphin = Math.round((96 +108 +99)/3);
// const ScoreKoalas =Math.round((88 +91+110)/3);

// console.log(ScoreDolphin ,ScoreKoalas);

// if(ScoreDolphin >ScoreKoalas){
//   console.log(`Score of Dolphin is greater than Score of Koalas `);
// }else{
//   console.log(`Score of Koalas is greater than scor of Dolphin`);
// }

/*  switch case */

// const day = "Friday";

// switch (day) {
//   case "Monday":
//     console.log(`plan to couse Structure`);
//     console.log(`Go to Coding Meet up`);
//     break;

//   case "Tuesday":
//     console.log(`prepare for theory lecture`);
//     break;

//   case "Wednesday":
//     console.log(`write code example`);
//     console.log(`keep strugle and prectices`);

//   case "Thursday":
//   case "Friday":
//     console.log("Enjoy weekEnds !!!!");
//     break;
//   case "Saturday":
//   case "Sunday":
//     console.log(`Record video `);
//     break;
//   default:
//     console.log(`Not a valid Day`);
// }

//  Stat4ments and Expressions

// console.log(3+4);
// console.log(1996);
// console.log(true && false && ! false);

// const age =23;
// if(age > 10){
//   console.log('age is greater than 10 ');
// }

// const me  ='jonas';
// console.log(`I am ${2037-1996} year old and my name is  ${me}`);

/*Ternary operator */

// const  age =25;

// const drink = age > 18 ? 'bear' : 'coldDrink';

// console.log(drink);

/* Tip calculator  */

// const bill =  40; //450 //275

// const tips =  bill<=300 && bill >=50 ? 0.15 *bill : bill *0.20;

// const total  = bill +tips;

// console.log(` The bill value is : ${bill} and the Tip is  : ${tips} The total value payed  : ${total})
// `);
