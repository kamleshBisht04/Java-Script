"using strict";

// console.log(a);
// var a = 10;

// console.log(b);
// let b = 20;

// var x = 5;
// function test() {
//   console.log(x);
//   var x = 10;
// }
// test();

// let a = 10;
// {
//   let a = 20;
//   console.log(a);
// }
// console.log(a);

// const obj = { name: "JS" };
// obj.name = "React";
// console.log(obj.name);

// const a = 10;
// a=20;

// TypeError: Assignment to constant variable

// asyc + var
// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 0);
// }

// asyc + let
// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 0);
// }

// var a = 10;
// if (true) {
//   var a = 20;
// }
// console.log(a);

// console.log(typeof null);
// Ye JavaScript ka historical bug hai
// null technically object nahi hai, par typeof null "object" return karta hai

// console.log([] + []);
// + operator string concatenation ke liye bhi use hota hai
// Empty arrays [] ko empty string me convert kar deta hai
// Isliye result empty string hota hai

// console.log([] + {});

// [] empty array → string "" me convert hota hai
// {} object → string "[object Object]" me convert hota hai
// + operator dono ko concatenate karta hai

// console.log({} + []);


// console.log(1 + "2" + "3");

// console.log("2" - "1");

//falsy value it make it false to true then false
// console.log(!!"");


// console.log(!![]);

// console.log(0 == false);

// console.log(0 === false);
// console.log(null == undefined);
// console.log(null === undefined);

// console.log(typeof NaN);

// let x = 1;
// function foo() {
//   console.log(x);
//   let x = 2;
// }
// foo();

// ReferenceError: Cannot access 'x' before initialization
//  TDZ

// let x = 1;

// function foo() {
//   console.log(x);
//   let x = 2;
// }

// foo();

// let a =5;
// function test() {
//   console.log(a);
//   const a = 10;
// }
// test();


// console.log("JS".localeCompare("js"));
// console.log(Number.isNaN(NaN))

// console.log([1] + [2]+[2]);


//  function is hoiested first 
// console.log(foo);
// var foo = 10;
// function foo() {

// }
















































