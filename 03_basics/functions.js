function sayMyName() {
    console.log("A");
    console.log("s");
    console.log("j");
    console.log("a");
    console.log("d");    
}

// sayMyName()


// function addTwoNumbers(number1, number2) { // parameters
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) { // parameters
    let result = number1 + number2
    return result
}

const result = addTwoNumbers(3, 5) // arguements
// console.log("Result: ", result);



function loginUserMessage(username = "sam") {
    if(!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Asjad"))



function calculateCartPrice(val1, val2, ...num1) { // rest operator to handle multiple parameters 
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "Asjad",
    price: 199
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})



const myNewArray = [200, 300, 100, 900]
function returnSecondValue(getArray) {
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100, 200, 300, 500]));

