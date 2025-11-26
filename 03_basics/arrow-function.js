const user = {
    username: "Asjad",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to the website`);  // this refers to the current context
        // console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "Ajmal"
// user.welcomeMessage()

// console.log(this);  // browser ke baahar yeh this empty object print krta hai, because of node environment



// function chai() {
//     let username = "asjad"
//     console.log(this.username); // this is wrong
    
// }

// const chai = function() {
//     let username = "asjad"
//     console.log(this.username);    
// }

// chai()

// arrow function
const chai = () => {
    let username = "asjad"
    console.log(this);
    
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2  // Explicit return  , yhan return likhna padega becasue scope open kiya hai
// }

// Implicit return arrow function // jaroorat nhi hai return lagane ki is tarah ke function mei
const addTwo = (num1, num2) =>  (num1 + num2)  // yhan pe return nhi likhna padega kyuki scope open nhi kiya

// returns object implicitly
const addThree = (num1, num2) => ({username: "asjad"})

console.log(addTwo(3, 4));


myArray = [2, 3, 5, 4, 3, 2]
// myArray.array.forEach(element => {
    
// });



