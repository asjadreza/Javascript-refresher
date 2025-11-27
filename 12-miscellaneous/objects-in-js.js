// 🧠 What is an Object in JavaScript?
// An object is a collection of key-value pairs (also called properties).
// It is used to store structured and related data.


// Example

const person = {
    name: "Asjad",
    age: 26,
    hasJob: false,
    sibling: true,
    isDeveloper: true
}

// console.log(person.name)

// 🎯 Why Use Objects?
// Objects store data in a structured format, unlike arrays which store only sequential values.

// ✨ Ways to Access Object Properties

// using dot notation
// console.log(person.age)

// using bracket notation
// console.log(person["name"])

// When to use bracket notation?
    // Keys come from variables
    // Keys have spaces or special characters

const key = "hasJob"
// console.log(person[key])

// ✏️ Add / Update / Delete Properties

// add 
person.city = "Delhi"; // add
person.age = 24; // update
delete person.sibling  // delete

// console.log(person)

// Nested Objects 
const student = {
    name: "Aman",
    marks: {
        math: 95,
        science: 90
    }
}
student["age"] = 14 // we can add properties in the object using bracket notation also
// console.log(student)
// console.log(student.age)

// 🧑‍💻 Objects Can Contain Functions (Methods)

const car = {
    model: "Tesla",
    price: "$4000",
    start() {
        console.log("Tesla Started")
    }
}

// car.start()

// 🔁 Loop Through Object
const details = {a: 1, b: 2, c: 3}
for(let key in details) {
    // console.log(key, details[key])
}

// object destructuring
const user = {
    name: "Ajmal",
    age: 22
}

const {name, age} = user;  // object destucturing
// console.log(name, age)

// 📌 Convert Object → Array
const obj = { a: 1, b: 2 };
console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))