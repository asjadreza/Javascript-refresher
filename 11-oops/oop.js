// object literal: its literally an object
const user = {
    username: "Asjad",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function() {
        // console.log("Got user details from database")
        // console.log(`Username: ${this.username}`)  // // this keyword is basically use to get the current context of any object

        // console.log(this)
    }

}

// constructor function - old way to make constructor before es6 classes
// definition: A constructor function is just a regular function that is used to create multiple objects of the same type.
// By convention, its name starts with a capital letter to distinguish it from normal functions.
// const promiseOne = new Promise()  // this new keyword here is a constructor function
function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount  // yahaan pe job bhi hamne this kesaath likha hai wo variable hai aur jo equal to ke baad likha wo actual parameter jon hamne pass kiya hai
    this.isLoggedIn = isLoggedIn

    this.greeting = function() {
        console.log(`Welcome ${this.username}`)
    }
    return this // this is not mandatory to write 
} 

const userOne = new User("Asjad", 12, true) 
// when you write new keyword this will create a empty object or new instances
// A constructor function haS been called because of the new keyword
// jo bhi hamne likha hai constructor function wo uske andar pass on ho jaayega
// then sabkuch return ho jaayega aur hame values mil jaayegi
const userTwo = new User("ChaiAurCode", 11, false) 
// console.log(userOne.constructor);
// console.log(userTwo);

// console.log(user.username)
// console.log(user.getUserDetails())

// constructor inside class - Modern es6 syntax
// Definition: A constructor is a special method inside a class that automatically runs when you create a new instance of that class.

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    greet() {
        console.log(`Hello, my name is ${this.name}.`)
    }
}

const person1 = new Person("Asjad", 23)
console.log(person1.age)
person1.greet()

// Key Points:
// The constructor() method is automatically called when you use new.
// You can only have one constructor per class.
// It’s used to initialize properties of the object.


// Abstraction
// it means hiding complex implementation details and showing only the essentials fetaures of an object or sysytem

// 💡 Why Abstraction is Useful
// Keeps your code clean and simple.
// Reduces complexity by hiding unnecessary details.
// Makes it easier to maintain and modify code.
// Improves reusability and security (hides sensitive logic).

class Car {
    constructor(model) {
        this.model = model
    }

    // public method (what user interacts with)
    start() {
        this.#igniteEngine(); // internal detail
        console.log(`${this.model} is starting...`)
    }

    // private method  (hidden implementtion) we cannot acces this method
    #igniteEngine() { 
        console.log("Igniting engine...")
    }
}

const car = new Car("Tesla")
car.start()


 