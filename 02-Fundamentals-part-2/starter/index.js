"using strict";

// let hasDriversLicense = false;
// const passTest =true;

// if(passTest)hasDriverLicense=true;

// if(hasDriversLicense){
//   console.log("I can Drive ");
// }

/* function */

// function logger(){
//   console.log("Welcome to java Script !!");
// }

// logger();
// logger();
// logger();
// logger();

/* function  2*/

// function fruitProcessor(apple, orange) {
//   const juice = `Juice with ${apple}  glass of apple and ${orange}  glass is ready to serve ...`;
//   return juice;
// }

// const FinalJuice = fruitProcessor(5, 0);
// console.log(FinalJuice);
// const FinalJuice1 = fruitProcessor(5, 6);
// console.log(FinalJuice1);

/* function   Decleration 3*/

// function calAge1(birthYear){
//   const currentAge = 2037;
//   const age = currentAge-birthYear;
//   return age;
// }

// const age = calAge1(1991);
// console.log(`The age of persion is : ${age}`);

/* function Expression 4*/

// const calAge2 = function(birthYear){
//   const currentAge = 2037;
//   const age = currentAge -birthYear;
//   return age;
// }
// const age2 = calAge2(1991);
// console.log(age2);

/*Arrow function  */
// const calAge3 = birthYear =>2037-birthYear;
// const age5 = calAge3(1991);
// console.log(age5);

// const yearUntilRetirement = birthYear  =>{
//   const age = 2037 -birthYear;
//   const retirement =65-age;
//   return retirement;
// }
// console.log(yearUntilRetirement(1991));
// const RetirementLeftInYear = yearUntilRetirement(1991);
// console.log(`The retrirement age left in year is : ${RetirementLeftInYear}`);

/*Arrow function  2 */

// const yearUntilRetirement = (birthYear,firstName)  =>{
//   const age = 2037 -birthYear;
//   const retirement =65-age;
//   const str =`Your name is ${firstName} and your are reterement after ${retirement} years.`
//   return str;
// }

// console.log(yearUntilRetirement(1991 ,'kamlesh'))
// console.log(yearUntilRetirement(1985 ,'Deepak'))

/* Function calling from one onother  */

// function fruitCutter(pices) {
//   return 8 * pices;
// }

// function fruitProcessor(apple, orange) {
//   const appleJuice = fruitCutter(apple);
//   const orangeJuice = fruitCutter(orange);
//   const juice = `Juice with ${appleJuice}  pices of apple and ${orangeJuice}  pices is ready to serve ...`;
//   return juice;
// }

// const FinalJuice = fruitProcessor(5, 0);
// console.log(FinalJuice);
// const FinalJuice1 = fruitProcessor(5, 6);
// console.log(FinalJuice1);

/* Function calling from one onother  and Data flow */

// const AgeCalculator = function(birthYear){
//   currentAge = 2037;
//   return currentAge -birthYear;
// }

// const leftAgeForRetirement = function (birthYear){
//   const age = AgeCalculator(birthYear);
//   leftAge = 65-age;
//   if(leftAge > 0){
//     return leftAge;
//   }else{
//     return -1;
//   }
// }

// const retirementAge = leftAgeForRetirement(1896);
// if(retirementAge > 0){
//   console.log(`The age of retirement is ${retirementAge}`);
// }else{
//   console.log(`The person is already retire !!`);
// }

/* Function Exersice */

// const calAverage = (a,b,c)=>(a+b+c)/3;

// const scoreDolphins = calAverage(99,99,99);
// const scoreKoalas = calAverage(20,54,49);

// const checkWinner = function(avgDolphin ,avgKoals ){
//   if(avgDolphin >= 2*avgKoals){
//     console.log(`Dolphin wins 🏆 (${avgDolphin} vs ${avgKoals})`);
//   }else if(avgKoals >= 2*avgDolphin){
//     console.log(`Koalas win 🏆 (${avgKoals} vs ${avgDolphin})`);
//   }else{
//     console.log(`No team wins....`);
//   }
// }
//   checkWinner(scoreDolphins ,scoreKoalas);
//   checkWinner(400,100);
//   checkWinner(20,400)

/* Array */

/*
const friends =['kamlesh','Ajay','jay','sanjay','deepak','himani'];
console.log(friends);


// 2 way way array function

const year = new Array (2000,2019,2016,2015,2003,2009,2017);
// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);
// console.log(friends[3]);
for(let i = 0; i<friends.length;i++){
  console.log(friends[i] );
}
console.log(friends.length);
console.log(friends[friends.length-1]);

// muted the array

friends[2]='Priyanka';
console.log(friends);


const kamlesh =['kamleh','Bisht',2037-1991,'teacher',friends]
console.log(kamlesh);
*/

//Exercise

// const calAge2 = birthYear => 2037-birthYear;

// const years = [1991,1990,1967,2002,2010,2000,2018,2014,1985,1999,2009,2012]
// const ages =[];
// for(let i =0;i<years.length;i++){
//   ages[i] =calAge2(years[i]);
// }
// console.log(ages);

// Basic array operation list

/*

const friends =['Priyanka','Himani','Ajay','Deepak','Shyam','Sunder','vijay','Sanjay'];

console.log(friends.length);
console.log(friends);

// push operation

friends.push('sam','kamlesh','Sana')
console.log(friends);

// pop operation

friends.pop();
friends.pop();
friends.pop();
console.log(friends);

// add element at the begining of array 

friends.unshift('Devendra','jaya','Heena');
console.log(friends);

// to remove a  element from  begining the array

friends.shift();
friends.shift();
friends.shift();
console.log(friends);

// indexOf return the position of elelment in the array 

console.log(friends.indexOf('Himani'));
console.log(friends.indexOf('Ajay'));
console.log(friends.indexOf('Shyam'));
console.log(friends.indexOf('Sanjay'));


// include method 
// return true and false if the value present in the array dont not type coversion 
// like '23 ' is not as 23 using include method

console.log(friends.includes('Himani'));
console.log(friends.includes('Himani Singh'));

if(friends.includes('Himani')){
  console.log("Himani is Your frined ..");
}

*/

/*
// Exercise 

const calTips = function(bill){
  return bill >=50 && bill <=300 ? bill * 0.15 :bill* 0.20;
}


// const calTipss =(bill)=>bill>=50 && bill<= 300 ? .15*bill : 0.20*bill; 

const bill= [125,555,44];
const tips =[];
const total =[];
for(let i =0 ;i < bill.length ;i++){
  tips [i] =calTips(bill[i]);
  total[i] =bill[i]+tips[i];
}
console.log(bill);
console.log(tips);
console.log(total);

*/

/*

// 2 data structure  Objects

const kamlesh = {
  firstName: "kamlesh",
  lastName: "Bisht",
  birthYear: 1991,
  age: 2037 - 1991,
  job: "Teacher",
  friends: ["Ajay", "vijay", "jay", "Sanjay"],
};

// Acess via dot noatation (operator)
//property value pair object leteral syntex .order don't matter

console.log(kamlesh);
console.log(kamlesh.birthYear);
console.log(kamlesh.firstName);
console.log(kamlesh.job);
console.log(kamlesh.friends);
console.log(kamlesh.age);

//[Dot noatation and Braket Notation ]
console.log("Braket Notation");
console.log(kamlesh["age"]);
console.log(kamlesh["firstName"]);
console.log(kamlesh["lastName"]);
console.log(kamlesh["age"]);
console.log(kamlesh["job"]);

// breaket notation work as a expression // compute first and use

const nameKey = "Name";
console.log(kamlesh["first" + nameKey]);
console.log(kamlesh["last" + nameKey]);




//  Add new property 
kamlesh.location='Delhi';
kamlesh['facebook'] ='kamleshbisht04@gmail.com';
kamlesh['Height']=165;

console.log(kamlesh['location']);
console.log(kamlesh['facebook']);


console.log(`${kamlesh.firstName} ${kamlesh.lastName} has 3 Friends, and his best friend is called ${kamlesh.friends[1]}`);

*/

/*

// object method 

const studentInfo={
  firstName :'Deepak',
  lastName :'Rawat',
  birthYear: 1991,
  job:'teacher',
  height:171,
  DrivingLicence:false,

  calAge1 : function(birthYear){
    return 2037-birthYear;
  }
};


// I way to acess it 

console.log(studentInfo.calAge1(1991));
console.log(studentInfo['calAge1'](1992));


*/

/*

//  II way to acess it 

const studentInfo = {
  firstName: "Deepak",
  lastName: "Rawat",
  birthYear: 1991,
  job: "teacher",
  height: 171,
  DrivingLicence: false,

  calAge1: function () {
    return 2037 - this.birthYear;
  },
};

console.log(studentInfo.calAge1());
*/

// III way to acess it  creating new property

/*

const studentInfo = {
  firstName: "Deepak",
  lastName: "Rawat",
  birthYear: 1991,
  job: "Teacher",
  height: 171,
  DrivingLicence: true,
  calAge1: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummery: function(){
    return `${this.firstName} ${this.lastName} is born in ${this.birthYear} and he is a ${this.job} and height is ${this.height} and righnow age is ${this.calAge1() } and he has ${studentInfo.DrivingLicence ? 'a' : 'no'} Driving Licence`
  }
};

console.log(studentInfo.calAge1());
//Acess and use it agian and again and save ones.
console.log(studentInfo.age);
console.log(studentInfo.age);
console.log(studentInfo.age);
console.log(studentInfo.age);
console.log(studentInfo.age);

console.log(`${studentInfo.firstName} ${studentInfo.lastName} is born in ${studentInfo.birthYear} and he is a ${studentInfo.job} and height is ${studentInfo.height} and righnow age is ${studentInfo.age}`);

console.log(studentInfo.getSummery());


*/

// Exercise prectices 

// const mark={
//   fullName: "mark",
//   mass: 78,
//   height: 1.69,
//   calBmi : function(){
//     this.markBmi = this.mass/(this.height*this.height);
//     return Math.ceil(this.markBmi);
//   }
// };

// const john = {
//   fullName: "mark",
//   mass: 92,
//   height: 1.95,
//   calBmi: function () {
//     this.johnBmi = this.mass / (this.height * this.height);
//     return Math.round(this.johnBmi);
//   },
// };

// console.log(`The bmi of mark is ${mark.calBmi()}`);
// console.log(`The bmi of john is ${john.calBmi()}`);


// if(mark.markBmi > john.johnBmi){
//   console.log(`mark Bmi is greater than the john `);
// }else{
//   console.log(`john Bmi is greater than the Mark`);
// }





// loopes

// for(let i =1 ;i<=10;i++){
//   console.log(i);
// }



// const kamleshArray = ['Ajay','vinay','sanjay','Deepak','suman','sangam','sunder',25,2005,2024];

// console.log(typeof kamleshArray);
// for(let i =0; i<kamleshArray.length; i++){
//   console.log(kamleshArray[i]);
// }



/*  loop through array */

// const studentInfo= ['kamleh','Bisht',2037-1991,'Teacher','Delhi',
// ['Deepak','Ajay','Sameer','Sanjay']]

// for(let i =0 ;i<studentInfo.length;i++){
//   console.log(studentInfo[i] ,typeof (studentInfo[i]));
// }

// store type of object in different array  // array is type of object

// TypeOf=[];

// for(let i = 0;i<studentInfo.length;i++){
//   TypeOf[i]=typeof(studentInfo[i]);
// }
// console.log(TypeOf);



// Exersise

// const year = [1991,1994,1998,2005,2016,2019,2021 ,2036]

// const age=[];
// for(let i =0; i<year.length;i++){
//   age.push(2037-year[i]);
// }
// console.log(age);

// continue and break statements
// const studentInfo= ['kamleh','Bisht',2037-1991, 2025,'Teacher','Delhi',
// ['Deepak','Ajay','Sameer','Sanjay']]

// TypeOf=[];
// for(let i =0 ;i<studentInfo.length;i++){
//   if(typeof studentInfo[i] !== 'string') {
//     continue;
//   }
// console.log(studentInfo[i] ,typeof(studentInfo[i]));  
// }

// break statement

// console.log('Break Statements');
// const studentInfo = [
//   "kamleh",
//   "Bisht",
//   2037 - 1991,
//   2025,
//   "Teacher",
//   "Delhi",
//   ["Deepak", "Ajay", "Sameer", "Sanjay"],
// ];

// TypeOf = [];
// for (let i = 0; i < studentInfo.length; i++) {
//   if (typeof studentInfo[i] === "number") {
//     break;
//   }
//   console.log(studentInfo[i], typeof studentInfo[i]);
// }

// Backward looping
// console.log('Backward looping');
// for(let i = studentInfo.length-1;i>=0;i--){
//   console.log(studentInfo[i]);
// }


// looping concept loop inside the another loop


// for(let i = 1 ;i<=5;i++){
//   console.log(`Exercise ${i}`);
//   for(let j=1;j<=10;j++){
//     console.log(`count ${j}`);
//   }
// }




// Dice Rolling concept 

// for(let i =0;i<=15;i++){
// let Dice = Math.round(Math.random() * 6);
// console.log(Dice);
// }


//  let dice = Math.round(Math.random() * 6);

//  while(dice !==6){
//    if(dice===6){
//      break;
//     }
//    console.log(`you rolled  ${dice}`);
//   dice = Math.round(Math.random() * 6);
//   if(dice===6){
//     console.log('loop is end becoze dice rolled to 6');
//   }
//  }


// cal bill tip problem using array and loop cclculate tips and total 



// const bills = [22,295,176,440,37,105,10,1100,86,52];

// const Tipcalculator= function(bill){
//   return bill >=50 && bill<=300 ? 0.15*bill : 0.20*bill;
// }

// Tips = [];
// Total=[];

// for(let i =0 ; i< bills.length;i++){
//   Tips[i]= Tipcalculator(bills[i]);
//   Total[i]= (Tips[i]+bills[i]);
// }
// console.log(bills);
// console.log(Tips);
// console.log(Total);
// // calculate avarage

// const  calAverage = (bills)=>{
//   let sum =0
//   for(let i =0 ;i< bills.length;i++){
//     sum += bills[i];
//   }
//   return sum /bills.length;
// }

// console.log(`The avarage of total bill is  ${calAverage(Tips)}`);
// console.log(`The avarage of total tips is  ${calAverage(Total)}`);
// console.log(`The avarage of total bills is ${calAverage(bills)}`);






















































































































































































