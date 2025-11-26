// primitive and non primitive data types


// Primitive(7) : call by value; Primitive data types are basic building blocks that store single values and are immutable (cannot be changed directly).

// 7 types: string, number, Boolean, null, undefined, Symbol, BigInt



const score = 100
const scoreval = 200.5

const isLoggedIn = false
const outsideTemp = null // null is null, not 0 or anything
let userEmail;

// How to defined Symbol: Symbol is used create unique object
const id = Symbol('123')
const anotherId = Symbol('123')


console.log(id === anotherId); // false; 

const bigNumber = 4283820830280280800283n


// Reference type/Non-primitive: call by reference

// Arrays, Objects, Functions

// Javascript is dynamically typed language because the type checking is not require while initializing the variable,
// In javascript the type checking occuers at run time

// Arrays: 
const heros = ["Shaktiman", "Captian America", "Ragnar"]


// objects
let myObj = {
    name: "asjad",
    age: "26"
}

// functions

const myfunc = function() {
    console.log("Hello World");
}
myfunc()

console.log(typeof bigNumber);
console.log(typeof myfunc);



// ****************************************Memory in Javascript****************************************

// there are two types of memory

// Stack memory(Primitive dt), Heap memory(Non primitive) 

// stack example
let myYoutubeName = "Atreides"
let anotherName = myYoutubeName
anotherName = "new channel"
console.log(myYoutubeName);
console.log(anotherName);


// heap example

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "usertwo@google.com"
console.log(userOne.email);
console.log(userTwo.email);






