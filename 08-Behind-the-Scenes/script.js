'use strict';

// Scoping in java script

//  Global scoping             //  Function scoping (variable scop)               // Block Scoping

function calAge(birthYear) {
  const age = 2037 - birthYear;
  console.log(firstName1);
  // console.log(lastName);      // error not define
  return age;
}
const firstName1 = 'kamlesh';
calAge(1991);

//  step 2 scope chain in action

/*
function calAge2(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = ` ${firstName} ,your age is ${age} and your birthYear is  ${birthYear}`;
    console.log(output);
    
    if(birthYear >=1981 && birthYear <= 1991){
      //  creating a same name variable as a outer scope variable and access
      const firstName ='Deepak'
      var millenial = true;
      const str =`oh ,and you'r a millenial, ${firstName}`
      console.log(str);
      output ='New OutPut';

      // function is also block scope
      function add(a,b){
        return a+b;
      }
    }
    // console.log(add(1,2));// fuction is block scoped
    console.log(millenial);
    console.log(output);
  }
  printAge();
  return age;
}
const firstName = 'kamlesh';
const age = calAge2(1991);

console.log(age);
*/

// var is function scope and const and let is block scope

/* Variable Enviroment Hoisting  */

// make some type of variable accessible /usable in the code before they are actually declared 'variabe lifted to the top of their scope'

// let and const is not hoisted  (TDZ Tempral Death Zone)
// var is hoiested to  undefine

// const myName = 'Jonas';

// let job = 'teacher';
// if(myName === 'Jonas'){
//   console.log(`Jonas is a ${ job} `);
//   const age = 2037-1989;
//   console.log(age);
//   /*
//    Uncaught ReferenceError: Cannot access 'job' before initialization
//    let job = 'teacher';
//    */
// // console.log(x);
// }

/************************************** */

// Hoisting and TDZ in Practice

// variable

/*

console.log(me);       //undefined
// console.log(job);  //reference error // TDZ
// console.log(year);

var me = 'jonas';
let job ='Teacher'; 
const year = 1991;


 // Functions 


console.log(addDecl(5,6)); // hoiested
// console.log(addExpr(5,2));
// console.log(addArrow(5,5));
// console.log(addArrow);



function addDecl(a,b){
  return a+b;
}


const addExpr = function(a,b){
  return a+b;
}

var addArrow =(a,b)=> a+b;

// Example 

console.log(numProducts); // because of Hoiesting 

if(!numProducts) deleteShoppingCart();

var numProducts =10;

function deleteShoppingCart(){
  console.log('All products deleted!');
}



var x= 1;
let y =2;
let z =3;

console.log(" check window  window is the global object of java script in the brower ");

console.log(x=== window.x);
console.log(x===window.y);
console.log(x===window.z);


*/
///////////////////////////////////////////

// // The this Keyword in Practice
//point the current objects and owner of the function
//arrow function don't have this keyword

/*

console.log('this is global window object');
console.log(this); // global window object 

// Regular function  this undefine
const calAge = function(birthYear){    
  console.log(2037-birthYear);
  console.log(this);
}
calAge(1991);

// because arrow have not this keyword point to window object

const calAgeArrowF = (birthYear) =>{    
  // Regular function
  console.log(2037 - birthYear);
  console.log(this);
};
calAgeArrowF(1991);

// refer to current onject  
const student={
  firstName : 'kamlesh',
  lastName : 'bisht',
  year : 1991,
  calAge : function(){
    return 2037-this.year;
  }
}
console.log(student.calAge());


// method borrowing from other function 

const kamlesh ={
  year : 1996,

};
kamlesh.calAge = student.calAge;
// console.log(kamlesh.calAge(this.year));

const f = student.calAge;     // function copy
// f();


*/

/////////////  Regular function  vs     Arrow function
// Arrow function don't have his this keyword

///////////////////////////////////////
// Regular Functions vs. Arrow Functions
// var firstName = 'Matilda';

/*

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // Solution 1
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
jonas.greet();
jonas.calcAge();

// arguments keyword

console.log('arguement keyword ');

const addExpr = function(a,b){
  console.log(arguments);
  return a+b;
};

addExpr(2,3);
addExpr(2,5,6,13);

var addArrow = (a,b)=>{
  console.log(arguments);
  return a+b;
};

addArrow(5,6,7);
console.log(addArrow(2, 3));

*/

///////////////////////////////////////
// Objects vs. primitives

// primitive

let age = 30;
const oldAge = age;
age = 31;
console.log(`age  :  ${age}`);
console.log(`old age   :  ${oldAge}`);

let lastName = 'Rawat';
let oldLastName = lastName;
lastName = 'Bisht';
console.log(lastName, oldLastName);


// Reference type

const student1 ={
 firstName :'kamlesh',
 lastName : 'Bisht',
 age : 29,
};

const student2 =student1;
student2.age=32;
student2.lastName='Rawat';
console.log('student 1 : ' ,student1);
console.log('student 2 : ' , student2);


// //  student2 ={};  we cant do it.

/***  Copying the object but only shallow copy made */

const student ={
  firstName : 'kamlesh',
  lastName : 'Bisht',
  age : 28,
  city: 'Ranikhet',
  friends :['Deepak','Ajay',"Raj","Sanjay",'sana'],
}

console.log(student);

// When we copy the object we are not preserve the old object
const newStudent = student;
newStudent.age=22;
newStudent.firstName='Ajay'
console.log(newStudent);
console.log(student);

const newStudent1 = Object.assign({},student);
newStudent1.firstName= 'Ajay';
newStudent1.lastName='kumar';
newStudent1.age =27;
console.log(newStudent1);
console.log(student);


newStudent.friends.push('Dev');
console.log(newStudent1);
console.log(newStudent);

/*

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage:', jessica2);
console.log('After marriage: ', jessicaCopy);
*/


















































































