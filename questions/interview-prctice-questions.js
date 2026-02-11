// Closure: 
// Question: What are closures in JavaScript and how do you use them?
// A closure is a function and the variables it remebers

// writing closure

function outer() {
    const username = "asjad"
    console.log("This is outer function")

    function inner() {
        console.log("inner username: ", username)
    }
    return inner
}

// const result = outer()
// result()
// inner()

// example uses
function outer_count() {
    let count = 0;

    function inner_count() {
        count = count + 1
        console.log("Count: ", count)
    }
    return inner_count;
}

// const result = outer_count()
// result()
// result()
// result()


function outer_count_2(){
    let count = 0;

    function inner_count_2() {
        count = count + 1;
        return count
    }
    return inner_count_2
} 

// const result = outer_count_2()
// const result_1 = outer_count_2() // this will count as separate memory
// console.log(result())
// console.log(result())
// console.log(result())
// console.log(result_1()) // separate memeory


// why do we need closure 
// we need conter when we want:
// Remebering state between function calls above example 
// Data privacy (like a private variable)
function bankAccount(initialBalance) {
    let balance = initialBalance;

    return {  // Factory function, it creates and resturns an object
        deposit(amount) {
            balance += amount;
            console.log("Balance: ", balance);
        },
        withdrawn(amount) {
            balance -= amount
            console.log("Balance: ", balance)
        }
    };
}

// const account = bankAccount(1000);
// account.deposit(500)
// account.withdrawn(200)

// const acc1 = bankAccount(1000)
// const acc2 = bankAccount(500)

// acc1.deposit(100)
// acc2.deposit(100)

// Promises and async/await: 
// Question:  How do you handle asynchronous code using async/await and Promises?
const promise1 = new Promise( function(resolve, reject) {
    setTimeout( function() {
        let error = false;
        if(!error){
            resolve({username: "asjad", password: "1233"})
        } else {
            reject("Error: User not found")
        }
    }, 1000)
})

// promise consuming using async/await
async function consumePromise1() {
    try {
        const response = await promise1
        console.log(response)
        
    } catch (error) {
        console.log(error)        
    }
}

consumePromise1()


