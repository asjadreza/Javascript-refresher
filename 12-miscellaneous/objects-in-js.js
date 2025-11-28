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
// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj))


// what is shallow copy?

// A shallow copy creates a new object, but copies only the top-level properties.
// If the original object contains nested objects/arrays, the references to nested values are copied, not the actual values.
// So changes made to nested objects will affect both copies.

// Example: 
const original = {
    name: "Asjad",
    skills: ["Javascript", "React"]
}

// shallow copy using spread operator
const copy = {...original};

// console.log("Original", original)
// console.log("Copy", copy)


// modify nested array 
copy.skills.push("Node.js")

// console.log(original.skills) // [ 'Javascript', 'React', 'Node.js' ]
// console.log(copy.skills) // [ 'Javascript', 'React', 'Node.js' ]

// Why did both change?

// Because skills array reference was copied, not the actual array.


// What is a Deep Copy?

// A deep copy creates a completely independent clone of the object,
// including all nested objects or arrays.

// So modifying nested properties does NOT affect the original.


// Example: Deep Copy
const original1 = {
    name: "Asjad",
    skills: ["JavaScript", "React"]
}

// Deep Copy using JSON Method
const deepCopy = JSON.parse(JSON.stringify(original1));

deepCopy.skills.push("Node.js")

console.log(original1.skills) // ["JavaScript", "React"]
console.log("deep copy", deepCopy.skills) // ["JavaScript", "React", "Node.js"]

// Methods to Create Deep Copy
// const deep1 = JSON.parse(JSON.stringify(obj));
// const deep2 = structuredClone(obj); // modern & recommended



// merging two objects 
const a = {
    name: "Asjad",
    degree: "Btech"
}

const b = {
    city: "Delhi",
    hasOwnHouse: false
}

const c = {...a, ...b}
console.log(c)

// convert array object into a single object 
const arr = [["a", 1], ["b", 2]] // array object

const obj1 = Object.fromEntries(arr)
console.log(obj1)