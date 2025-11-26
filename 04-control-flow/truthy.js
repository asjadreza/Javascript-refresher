const userEmail = "asjad@gmail.com"
const userEmail2 = []

if(userEmail) { // hamne yhan pe koi check nhi lagaya hai, sirf maan liya hai ki ye true hai
    console.log("Got user email")
} else {
    console.log("Don't have user email");
    
}

// falsy values // which values are supposed to be false
// fasle, 0, -0, BigInt, 0n, "", null, undefined, NaN

// truthy values 
// "0", "false", " ", [], {}, function(){}


if(userEmail2.length === 0) {
    console.log("Array is empty");
}


const emptyObjects = {

}

if(Object.keys(emptyObjects).length === 0) {
    console.log("Object is empty");
    
}


// Nullish Coalescing Operator (??): null undefined

let val1;

// val1 = 5 ?? 10
// val1 = null ?? 10 // this is new, used to check if the values coming from the db is null
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);


// terniary operator 

// condition ? true : false 

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("More than 80");



