// 🔒 What is a Closure in JavaScript?
// Closure means that a function remembers and can access variables from its outer (parent) scope, even after the outer function has finished executing.
// 👉 In simple words:
// A closure is a function + the variables it remembers.

// ✅ Interview-Friendly One-Liner
// A closure allows a function to access variables from its outer scope even after the outer function has executed.

function outer() {
    let count = 0;

    function inner() {
        count++
        console.log(count)
    }

    return inner;
}

const counter = outer()

counter()
counter()

// Another example of real life closure

function createUser() {
    let password = "secret123"

    return {  // This is called object method shorthand (ES6).
        getPassword() {
            return password
        },
        setPassword(newPass) {
            password = newPass
        }
    }
}

const user = createUser();

console.log(user.getPassword());

user.setPassword("newsecret")
console.log(user.getPassword())