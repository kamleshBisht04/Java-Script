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

// console.log(typeof foo);
// function foo() {}

// function hello() {
//   console.log("1");
//     setTimeout(() => {
//         console.log("2");
//     })
//   console.log("3");
// }
// hello();

// let f = "8";
// let a = 1;
// console.log((+f)+a+1);

// let a = 10;
// if(true){
//    let a = 20;
//    console.log(a, "inside");
// }
// console.log(a, "outside");

// var a = "xyz";
// var a = "pqr";
// console.log(a)

// const arr1 = [1, 2, 3, 4];
// const arr2 = [6, 7, 5];
// const result = [...arr1, ...arr2];
// console.log(result);

// const person1 = { name: 'xyz', age: 21 };
// const person2 = { city: 'abc', ...person1 };
// console.log(person2);

// console.log(5 < 6 < 7);

// console.log(7 > 6 > 5);

// console.log(0 == false);
// console.log(1 == true);

// console.log([11, 2, 31] + [4, 5, 6]);

// console.log({} == {});
// console.log({} === {});
// Reason : When you compare objects using == or ===, it checks if they refer to the exact same object. So even if they are looking same, they are pointing to different memory locations

// let x = 5;
// let y = x++;
// console.log(y);
// console.log(x)

// let x = 5;
// let y = ++x;
// console.log(y);
// console.log(x)

// console.log('apple'.split(''));

// const arr = [2,3,5,2,8,10,5];
// console.log(arr.indexOf(5))

// const array = [8, 18, 28, 38];
// const result = array.map(element => element + 2)
//                .filter((element) => element > 25);
// console.log(result);

// function checkValue(value){
//     var result = Array.isArray(value);
//     console.log(result);
// }
// checkValue([1,2,3]);

// Reason : Array.isArray() method is used to check if the provided value is an array.

// function sum(a=5, b=7){
//     return a+b;
// }
// console.log(sum(undefined, 20));

// console.log(10 + "5");
// console.log("5" + 10);

// console.log(10 - "5");
// console.log("5" - 10);

// console.log(printName());
// function printName(){
//     return "Hi my name is Bob"
// }

// console.log(printName());
// const printName = () => {
//     return "Hi my name is Bob"
// }

// const userDetails = {
//   firstName: "Surbhi",
//   lastName: "Dighe",
//   age: 20,
//   address: {
//     city: "Hyderabad",
//     country: "India",
//   },
// };

// let cloneUserDetails = { ...userDetails };
// //Updating original object
// userDetails.age = 22;
// userDetails.address.city = "Banglore";
// console.log(userDetails);
// console.log(cloneUserDetails)

// console.log(cloneUserDetails.age);
// console.log(cloneUserDetails.address.city);

// function hello(){
// console.log(name);
// console.log(age);
// var name = "Alice";
// let age = 21;
// }
// hello();

// const arr1 = [1,2,3];
// const arr2 = [1,2,3];
// const str = "1,2,3";

// console.log(arr1 == str);
// console.log(arr1 == arr2);

// const a = {x : 1};
// const b = {x : 1};
// console.log(a === b);
// console.log(a.x === b.x)

// const arr = [10, -1, 2];
// arr.sort((a, b) => a - b);
// console.log(arr);

// const arr = [11, 0, '', false, 2, 1];
// const filtered = arr.filter(Boolean);
// console.log(filtered);

// Reason : filter(Boolean) removes all falsy values (0, "" (empty string), false, null, undefined, and NaN) from the array and keeps truthy ones.

// var x = 0;
// var y = 10;
// if(x){
//   console.log(x);
// }
// if(y){
//   console.log(y);
// }

// const obj = {
// var1: 1,
// var2: 2
// };
// const { var1, var2 } = obj;
// console.log(var1, var2);

// const user = {
// name: "Surbhi dighe",
// country: "India"
// };
// const { name: fullname, country } = user;
// console.log(fullname);
// console.log(name);

// const person = {
//   firstName: 'Surbhi',
// };
// const { lastName="dighe" } = person;
// console.log(lastName);

// const person = {
//   firstName: 'Surbhi',
// };
// const { firstName="Henry"} = person;
// console.log(firstName);

// var a = 10;
// let a = 20;
// console.log(a)

// In Javascript, we cannot redeclare a variable with let if it has already been declared in the same scope.

// const arr = ["A","B","C","D","E"]
// console.log(Object.keys(arr));

// In JavaScript, arrays are a special type of object. Object.keys() on an array returns an array of strings representing the indices of the array elements.

// function modify(obj) {
//   obj.name = "Updated";
// }

// let person = { name: "Original" };

// modify(person);
// console.log(person.name);

// function reassign(obj) {
//   obj = { name: "New Object" };
// }
// reassign(person);
// console.log(person.name);


// let a={ x:1, y: {alpha:10,beta:20} };
// let b = {...a};

// b.x=101;
// b.y.alpha=1001;

// console.log(a.x);
// console.log(a.y.alpha);



// console.log('Start');

// setTimeout(() => {
//   console.log('setTimeout');
// }, 0);

// Promise.resolve().then(() => {
//   console.log('Promise');
// });

// console.log('End');


// var array = [1,2,3,4,5];
// delete array[2];
// console.log(array.length);
// console.log(array);


// let x = ["a","b","c"];
// let y = ["a","b","c"];
// let z = y;

// console.log(x == y);
// console.log(z == y);
// console.log(z == x);


// let x; 
// console.log(x);
// x = 20;
// console.log(x);
// x = "John";
// console.log(x);


// let text;
// switch (1) {
//   case 0:
//     text = "This is zero";
//     break;
//   case 1:
//     text = "This is one";
//   case 2:
//     text = "This is two";
//     break;
//   default:
//     text = "No matches found!";
// }
// console.log(text);


// const user = {
//     name: 'Aman Bhoria!',
//     logMessage() {
//         console.log(this.name); // What is logged? 
//     }
// }; 
// setTimeout(()=>user.logMessage() , 1000);


// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 3, c: 4 };

// const finalObj = Object.assign({}, obj1, obj2);
// console.log(finalObj);


// let a = {};
// let b = { key: "abc" };
// let c = { key: "efg" };

// a[b] = 111;
// a[c] = 222;
// console.log(a[b]);
// Reason :In JavaScript, using an object as a key in a normal object turns it into a string. That string is usually "[object Object]". So, two different objects like b and c become the same key -> a[b] = 111 & a[c] = 222 becomes a["[object Object]"] = 111 & a["[object Object]"] = 222. Hence, the second value (222) replaces the first one.



// function printName(firstName, lastName) {
//     console.log(arguments)
//     firstName = "Aman";
//     lastName = "Bhoria";
//     console.log(arguments)
//     return arguments[0] + " " + arguments[1];
// }

// let name = printName("John", "Doe");
// console.log(name)