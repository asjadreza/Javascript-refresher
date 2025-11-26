const tinderUser = new Object() // this is singleton object
// const anotherUser = {} // this is literal objects

tinderUser.id = "123bff"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUser = {
    email: "asjad@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Asjad",
            lastname: "Reza"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "as", 4: "bs"}
const obj4 = {5: "dd", 6: "gg"}

// const obj3 = Object.assign({}, obj1, obj2, obj4)  // empty parenthesis is a target parameter and rest of them are source params
const obj3 = {...obj1, ...obj2, ...obj4} // mostly we are going to use this 
console.log(obj3);


const users = [
    {
        id: 1,
        email: "asjad@gmail.com"
    },
    {
        id: 2,
        email: "admad@gmail.com"
    },
    {
        id: 3,
        email: "asxxcad@gmail.com"
    }
]


users[1].email

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));

console.log(users);


