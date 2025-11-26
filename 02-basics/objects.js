// singleton: jab agar constructor se object bante hain to wo singleton hote hain
// Object.create >> ye singleton hai


const mySym = Symbol("Key1")
// object literals
const JsUser = {
    name: "Asjad",
    "full name": "Asjad Reza", // You cannot access this value with . operator, have to use 2nd array access method
    [mySym]: "mykey1",  // if you actually want the data type to be Symbol
    age: 26,
    location: "Jaipur",
    email: "asjad@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// accessing objects
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym])

// chnaging objects values
JsUser.email = "asjad@google.com"
// console.log(JsUser.email);

// lock the objects 
// Object.freeze(JsUser) // Now the changes will not happen

// console.log(JsUser);


JsUser.greeting = function() {
    console.log("hellow js user");
    
}
JsUser.greetingTwo = function() {
    console.log(`Hello js user, ${this.name}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

