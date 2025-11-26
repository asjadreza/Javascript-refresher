// Hoisting in JavaScript is a behavior where variable and function declarations are moved (or “hoisted”)
// to the top of their scope (either the global scope or the current function scope) before the code is executed.

// Example-1
// variable hoisting with var
// console.log(a) // output: undefined
var a = 10;

var b; // decalaration is hoisted here
// console.log(b) // output: undefined because its decalared but not assigned
b = 10; // initialization

// Example-2
// let and const are not hoisted the same way

// console.log(c)  // ❌ ReferenceError: Cannot access 'c' before initialization
let c = 20;

// Although let and const are technically hoisted, they are not initialized until the code reaches that line.
// This period (before initialization) is called the Temporal Dead Zone (TDZ).

// Example-3 function hoisting

// greet(); // works fine
function greet() {
  console.log("Hello Azbu!");
}

//Behind the scenes:
// The entire function greet() is hoisted to the top, so you can call it before its declaration.

// Example-4: but the function exapresion is not hoisted like function decalaration

// sayHi();
// var sayHi = function () {
//   console.log("Hello Azbu from Asjad");
// };


// ------------------------------------------------------Another Hoisting Revision-------------------------------------------------------------


// VAR Example

console.log(varGreeting)
var varGreeting = "Hello with var"

console.log(varGreeting)


// LET Example  (let and const dcalarations are not hoisted as var)

// console.log(letGreeting) // would throw a reference error
let letGreeting = "Hello with let"
console.log(letGreeting)

// CONST Example


// console.log(constExample) // would throw a referenceError
const constExample = "Hello with const"
console.log(constExample)


