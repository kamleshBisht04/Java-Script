'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekDays = ['mon', 'tues', 'wed', 'thus', 'fri', 'sat', 'sun'];

// object literal 3 ways to use

const openingHours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [weekDays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// const openingHours = {
//   thu: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 object inhancement

  openingHours,

  order: function (starterIndex, mainIndex) {
    return [this.categories[starterIndex], this.categories[mainIndex]];
  },

  // orderDelivery :function(obj){
  //   console.log(obj);
  // }

  //*******************************

  orderDelivery: function ({
    time = '12:00',
    starterIndex = 1,
    mainIndex = 1,
    location = 'Delhi',
  }) {
    console.log(
      `Order Recevied ! 😊 ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} in the box at my location ${location} sharp ${time}`
    );
  },

  //spread operater example

  // ES6  direct method writing

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your Declicious Pasta with ${ing1},${ing2},${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient, otherIngredient);
    console.log(otherIngredient);
  },
};


///////////////////////////////////////////////////
// CLASS 13  PART===> 2 STRING  METHODS AND MUCH MANY MORE  =====>

const airline= 'TAP Air India';

// to lowercase or upper case ============>

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name

const passenger='kAMlesH';            // Fix it ===>    Kamlesh
const passengerLower = passenger.toLowerCase();
const passengerFinal = passengerLower[0].toLocaleUpperCase()+passengerLower.slice(1);
console.log(passengerFinal);


// to make function for capitilization

const fixCaplitization = function(passenger){
const passengerLower = passenger.toLowerCase();
const passengerFinal =
passengerLower[0].toLocaleUpperCase() + passengerLower.slice(1);
console.log(passengerFinal);
}
fixCaplitization('hiMANshU');

// campairing Emails 

const email = 'kamleshbisht04@gmail.com';
const EmailsLogin='    KamleshBisht04@GmaiL.Com  \n';

// const lowerEmail= EmailsLogin.toLocaleLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);
// console.log(email === trimmedEmail);

const finalEmail= EmailsLogin.toLowerCase().trim();
console.log(finalEmail === email);


// replacing 
































/////////////////////////////////////////////////////////////////

/*

// CLASS 13  PART===> 1 STRING  METHODS AND MUCH MANY MORE  =====>
//   1.

const airline = 'TAP Air portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);

// we can directly apply on string

console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

// String method like array

console.log(airline.indexOf('r'));
console.log(airline.indexOf('P'));
console.log(airline.indexOf('Air'));
console.log(airline.indexOf('Portugal'));
console.log(airline.lastIndexOf('t'));
console.log(airline.charAt(2));
console.log('From India '.concat(airline));

// slice method
console.log(airline.indexOf('r'));
console.log(airline.slice(4));
console.log(airline.slice(4, 7)); // hard code
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(0, airline.lastIndexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// slice with negative counting
console.log(airline);
console.log(airline.slice(-2));
console.log(airline.slice(2, -2));
console.log(airline.slice(1, -1));

// split and return a string

console.log(airline.split(' '));

//  Example ===================>

const checkMiddleSeat = function (seats) {
  // seat end with B and  E  are middal seat in airplan
  const s = seats.slice(-1);
  const seat = s === 'B' || s === 'E' ? ' Middle seat 🪑' : 'Lucky 🤞';
  console.log(`you gotta ${seat}`);
};

checkMiddleSeat('15B');
checkMiddleSeat('2C');
checkMiddleSeat('1E');
checkMiddleSeat('7C');
checkMiddleSeat('5B');

// when ever we call a method on string (primitive) behind the seen it convert to object (boxing).
console.log(new String('kamlesh'));
console.log(typeof new String('kamlesh'));

console.log(typeof new String('kamlesh').slice(1));


*/



// CLASS 12   SETS &   MAPS  FUNDAMANTALS

/*

///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

/*

// Solution  2  QUESTION

// 1.

const events = [...new Set(gameEvents.values())];
console.log(events);

// 2.

gameEvents.delete(64);
console.log(...gameEvents);

// 3.

console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes`);

const time = [...gameEvents.keys()].pop();
console.log(`An event happened, on average, every ${time / gameEvents.size} minutes`);

// 4.   [FIRST HALF] 17: ⚽️ GOAL


for( const [min ,events] of gameEvents){
    const half =(min<= 45 ? '[First]' : '[Second]');
  console.log(`${half} ${min}:  ${events}`);
}

*/

/*


// CLASS 11     MAPS Data structure

// maps that we can use to map value with  to keys   data store in key value pair
// keys can hap any type in map but object hava strint type  set or get is used..

const rest = new Map();
rest.set('name', 'Taj Hotel');
rest.set(1, 'Noida, New Delhi');
console.log(rest.set(2, 'Tarikhet ,Almore')); // it also return the value
rest.set('categories', [
  'Italian',
  'Indian',
  'chineas',
  'vegetraian',
  'organic',
  'SouthIndian',
]);

rest
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open 👐')
  .set(false, 'We are close :🔐');

console.log(rest);

// to get the value form map

console.log(rest.get('name'));
console.log(rest.get(1));
console.log(rest.get(2));
console.log(rest.get(true));
console.log(rest.get(false));
console.log(rest.get('categories'));

//exmple  // To check it is open or not from set

const time = 12;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// to check the key has present in the map
console.log(rest.has('categories'));
console.log(rest.has(10));
console.log(rest);
// to delete the key from map
rest.delete(2);
console.log(rest);
// to check the size of map
console.log(rest.size);

// undifined

// rest.set([1,2],'Text');
// console.log(rest);
// console.log(rest.get([1,2]));

const arr = [1, 2];
rest.set(arr, 'Text');
console.log(rest);
console.log(rest.get(arr));
console.log(rest.size);

// MAP iteration
console.log('another way to create map ========>>');
const question = new Map([
  ['question', 'What is the best programming language in the world ?'],
  [1, 'java'],
  [2, 'c'],
  [3, 'javaScript'],
  [4, 'python'],
  ['correct',3],
  [true, 'Correct 🍰'],
  [false, 'Try agian']
]);
console.log(question);

// convert object to map
// use Object.enteries()

console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours))
console.log(hoursMap);

// Iteration
console.log(question.get('question'));
for(const [key,value] of question){
  if(typeof key === 'number'){
    console.log(` Answer : ${key}:${value}`);
  }
}

const answer = 3;
// const answer = Number(prompt('your answer ?'));
console.log(question.get(question.get('correct')===answer));

// covert map to array

console.log(...question);

// some method of map
// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);



*/

/*

// CLASS 11     SETS

// sets is collections of unique values can never have douplicate values
// sets can hold differen data type (mix data type.) just like array 
// sets have no index    // 

const orderSet = new Set(['pasta','pizza','pizza','pasta','Momo','Risotto']);
console.log(orderSet);
console.log( new Set('kamlesh'));
console.log(orderSet.size);

console.log(orderSet.has('pasta'));
console.log(orderSet.has('kamlesh'));
console.log(orderSet.has('Bread'));

orderSet.add('Bread');
orderSet.add('Bread');
orderSet.add('Roti');
console.log(orderSet);
orderSet.delete('pasta');
// orderSet.clear();  // to  all clear the set 
console.log(orderSet);
console.log(orderSet.size);

// sets is also iterable like array 

for( const order of orderSet) console.log(order);

// Example

const staff = ['waiter','chef','Manager','waiter','chef','Manager','waiter','chef','Manager'];

const staffUnique= [...new Set(staff)];
console.log(staffUnique);
console.log(orderSet.size);

console.log( new Set('kamlesh singh bisht').size);


*/

// CLASS 10

// looping over object : object keys values and entries
// object are not iterabale

/*

// CLASS 9

//  optional chaining  ( ?.)

// console.log(restaurant.openingHours.mon.open);  //     =>error undefine .open 
   
// restaurant .openingHours.mon is error becoz that property not exists

// if(restaurant.openingHours.mon)   
// console.log(restaurant.openingHours.mon.open);

if(restaurant.openingHours.fri)
console.log(restaurant.openingHours.fri.open);

// if openinghours is not present(optional1) than check for both 

if(restaurant.openingHours && restaurant.openingHours.fri){
console.log(restaurant.openingHours.fri.open);
}

//======>    Provided a solution optional chaining (?.)
// WITH  optional chaining

console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours.fri?.open);
console.log(restaurant.openingHours?.mon?.open);


// Example

const Days = ['mon', 'tues', 'wed', 'thus', 'fri', 'sat', 'sun'];

for(const  day of Days){
  const open =restaurant.openingHours[day]?. open ?? 'closed';
  console.log(`on ${day} we are open at ${open}`);
}

// ON METHODS also work

console.log(restaurant.order?.(0,0) ?? 'method dons\'t exit');
console.log(restaurant.orderChikken?.(0,0) ?? 'method dons\'t exit');


// WORK ON ARRAY 
//  const users =[];  // return user array is empty 
const users =[{name:'kamlesh',email:'kamlesl04@gmil.com'}]

console.log(users[0]?.name ?? 'user array is empty');


//if withour option chaining 

if(users.length >0){
  console.log(users[0].name);
}else{
  console.log('user array is empty');
}


*/

// CLASS  8

// enhanced object

// put out side the onother objects
// direct write method name directly ignoor function expression
//  actually compute property name manually and literally ..

/*

 // CLASS  7

 // FOR OF LOOP 

const HotalMenu = [...restaurant.mainMenu,...restaurant.starterMenu];
console.log(HotalMenu);

for( let items of HotalMenu){
  console.log(items);
}

for(const [i , el] of HotalMenu.entries()){
  console.log(`${i+1}  ${el}`);
}
console.log(...HotalMenu.entries());   // array Iterator  


//**************************************************** 

const studentName  = {
  Boys :
      ['Deepak','Ajay','jay','sanjay','DeepDas'],
  Girls: ['priyanka','Himani','Deepa','sushma'],
  
};

const student =[...studentName.Boys,...studentName.Girls];
console.log(student);

for(const el of student) console.log(el);

// to print in a nice way 

for(const [i , el] of student.entries()){
  console.log(`${i+1} ${el}`);

}



const foods =['meet','daal','Rice','Roti','pickal','chikken','green vegetable'];

foods.forEach(function(element){
  console.log(element);
});



*/

///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

/*  

//solution of 1 ===>

//   1..


const [players1,players2]=game.players;
console.log(players1);
console.log(players2);


// 2.
const [gk1,...FeildPlayer1]=players1;
console.log(gk1);
console.log(FeildPlayer1);


const [gk2,...FeildPlayer2]=players1;
console.log(gk1);
console.log(FeildPlayer1);


// 3.

const allPlayers = [...players1,...players2];
console.log(allPlayers);
console.log(...allPlayers);

// 4.

const players1Final=[...players1,'Thiago', 'Coutinho' ,'Perisic'];
console.log(players1Final);


// 5.

// const {odds :{team1 ,x:draw ,team2}}=game;

const {team1,x :draw,team2}=game.odds;
console.log(team1,draw,team2);

// 6.

const printGoals = function (...playerName) {
  console.log(`${playerName.length} goals were scored in FootBall game !`);

}

printGoals('Davies', 'Muller', 'Lewandowski' , 'Kimmich');
printGoals('Davies', 'Muller', 'Lewandowski');
printGoals('Davies', 'Muller');
printGoals(...game.scored);


// 7.

team1 < team2  && console.log('Team 1 is more likely to win');
team1 > team2  && console.log('Team 2 is more likely to win');

*/

/*

// class 6
// LOGICAL ASSIGNMENT  OPERATOR  3 new operator


const restro1 ={
  name : 'Evergreen Restrorent ',
  // numGuest : 20,
  numGuest : 0,
}

const restro2 ={
  name : 'Indian Restrorent ',
  owner : 'kamlesh',
}

// restro1.numGuest =restro1.numGuest || 10;
// restro2.numGuest =restro2.numGuest || 10;

// OR assignment operater

// restro2.numGuest ||=10;
// restro1.numGuest ||=10;

// nulish  assignment operater

restro2.numGuest ??=10;
restro1.numGuest ??=10;


// restro1.owner =restro1.owner && '<ANONYMOUS>';
// restro2.owner =restro2.owner && '<ANONYMOUS>';

// &&  assignment operater   // if it truthy

restro1.owner &&= '<ANONYMOUS>';
restro2.owner &&= '<ANONYMOUS>';


console.log(restro1); 
console.log(restro2); 


*/

/* 
 
// CLASS 5
//nullish coalescing operator       

 restaurant.numGuests= 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// solution of this problem Fix error
//  Nullish : null and undedined ( NOT ==>  0 or '' )

const guestss= restaurant.numGuests ?? 10;
console.log(guestss);



*/

/*

// class 4 short circuit  (&& and || )

// OR operater => truthy value is return 
// they can use any data type  // return any data type // do short -circuting

console.log('------------ OR -----------');
console.log(3 || 'jones');
console.log(''|| 3);
console.log(''|| 'kamal');
console.log(true|| 'kamal');
console.log(undefined || null);

console.log(undefined|| 0 || '' || 'hello'|| null);

const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);


// restaurant.numGuests= 30;                // do set the value or operater short -circuit
const guest2 = restaurant.numGuests || 10;
console.log(guest2);

// if the gest value is 0 dont work 


//******************************************* 

// return first fallsy  do short circuit


console.log('------------ AND -----------');

console.log(3 && 'jones');
console.log(3 && ' ');
console.log( 3 && false);
console.log(undefined && 'kamlesh');
console.log('300' && null);

console.log('300'&& true && false  && null && undefined && 0);


if(restaurant.orderPizza){
  restaurant.orderPizza('mushroooms','spinach');
}

restaurant.orderPizza && restaurant.orderPizza ('mushroom','spinach');

*/

/*

// spread operater use ==> to bulid new array and pass multipule values in function

// CLASS 3 ==============================>
// REST PATTERNS AND  PARAMETERS 

// SPREAD operator  because  on right of  =

const array =[1,2,3,...[4,5,6,7]]
console.log(array);

// Distructuring  

// REST Patterns because on left side of =  {left side is pack the element }
//collect the unused in destructuring Assignment 

const [a,b,...other]=[1,2,3,4,5,6,7,8];
console.log(a,b,other);

const [Pizza, , Risotto,...otherFoods] = [...restaurant.mainMenu, ...restaurant.starterMenu];

console.log(Pizza,Risotto,otherFoods);

// also work in objects remaining object is collect 

const  {sat,...weekDays}=restaurant.openingHours;
console.log(weekDays);
console.log(sat);

// (2)Functions 

const add =function(...number){
  let sum =0;
   for(let i =0 ;i<number.length;i++){
    sum +=number[i];
  }
  console.log(sum);
};

add(2,3);
add(2,3,4);
add(2,3,4,5);
add(2,3,4,5,6);
add(2,3,4,5,6,7);

const x =[22,7,5];
add(...x);

//order pizza function 

restaurant.orderPizza('mushroom','onion','olive','spinach');
restaurant.orderPizza('mushroom') // empty array
// end rest parameter 

*/

//********************************************************************888888 */

/*
CLASS 2 ======================================>>

// restaurant.orderPasta()

restaurant.orderDelivery({time :'9:40',location: 'Delhi',starterIndex: 1,mainIndex:2});

restaurant.orderDelivery({time:'22:10',location:'Noida',mainIndex:2,starterIndex:0});


//calling or distruct the object with default value
console.log('Default value of object is set');
restaurant.orderDelivery({});
restaurant.orderDelivery({time: '8:10',location:'Almora',});



// class 2
// Destructing the objects

const { name, openingHours, categories } = restaurant;
console.log(name, categories, openingHours);

// new  variable name to be different than property name

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//setting default value in objecct

console.log(restaurant.menu); // undefined
// if value dons't exit than applly
const {menu =[],starterMenu: starters=[]}=openingHours;

console.log(starters);
console.log(menu);

// mutating variable while destructing objects


let a = 111;
let b =999;

const obj ={a:23,b:7,c:14};
({a,b}=obj);          // override the variable   (   )
console.log(a,b);

//nested object distructuring

const {fri:{open,close}}=openingHours;
console.log(open,close);
const {sat:{open :o,close:c}}=openingHours;
console.log(o,c);


// The spread operator
console.log('spreed Operater  class 3 ======>');

const arr =[2,3,4];
const bedArray = [7, 8, 9, arr[0], arr[1], arr[2]];
console.log(bedArray);

// new way to do it ....
const newArray =[17,18,...arr];
console.log(newArray);

// 2 way ==> to express individual { element  out of the array }
console.log(...newArray);
console.log(...bedArray);

//Example of spread operater

const newMenu =[...restaurant.mainMenu,'Indian dal chawal','fishFry']
console.log(newMenu);
console.log(...newMenu);

//shallow copy and marge an array


// copy array
let mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);
mainMenuCopy =[...newMenu];
console.log(mainMenuCopy);


//join together 2 array element we use spread operater //

const menus =[...restaurant.mainMenu,...restaurant.starterMenu];
console.log(`The whole meau of restro is ===>  ${menus}`);

//iteriable work over maps, array ,string ,sets;  But NOT the objects
//Strings are iterable we can use spread operator

const str ='jones is good boy';
const letters =[...str ,' ','S.'];
console.log(letters);
console.log(...letters);
console.log(...str);

// Real world example

const ingredients = [
  // prompt("Let's make Pasta ! Ingredient 1 ?"),
  // prompt("Let's make Pasta ! Ingredient 2 ?"),
  // prompt("Let's make Pasta ! Ingredient 3 ?"),
];

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);


//spread operater are also work over objects // create brand new object

const newRestauaurant ={founded:1998,...restaurant, founder :'Mark'};
console.log(newRestauaurant);

//shallow copy of object and original both are different 

const restaurantCopy = {...restaurant};
restaurantCopy.name='kamlesh Restaurant';
console.log(restaurantCopy);
console.log(restaurant);

*/

// ===========================================>
/************************** Class 1  ****************************** 

//  learning Data structure

// Toping Destructuring the array
// Data needed for first part of the section



// Array distructuring  ==> unPacking value from array to variable

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// console.log(a, b, c);

// direct to distructing  Assignment 3 variable same time => look likes an array really not original array not effecting

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

//******************************************* 
// skip the element use  =>   ,

const [first, , second] = restaurant.categories;
console.log(first, second);

// ***********************************************************
let [main, , secondary] = restaurant.categories;

// switching variable
 
// const temp =main;
// main=secondary;
// secondary=temp;
// console.log(main ,secondary);

[secondary, main] = [main, secondary];
console.log(main, secondary);

// function return an array and imeditalty distruct in variable

console.log(restaurant.order(2, 3));
//distruction assignment in method

const [starter, mainCource] = restaurant.order(3, 1);
console.log(starter, mainCource);

// nested array how to distructed ?

const nested = [2, 3, 4, 5, [6, 7, 8]];
const [m, n, o, p] = nested;
console.log(m, n, o, p);
const [, , , , [q, r, s]] = nested;
console.log(q, r, s);

//set the default value when we extrect them

const [A = 1, B = 1, C = 1] = [7, 8];
console.log(A, B, C);

const [D = 1, E = 1, F = 1] = [7];
console.log(D, E, F);

//used in data fetching from API

*/
