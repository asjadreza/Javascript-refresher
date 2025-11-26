// array
const myarr = [0, 1, 2, 3, 4, 5]

const heroes = ["Captain America", "Wonder Women", "Thor"]

const myarr2 = new Array(1, 2, 3, 4, 5)

// console.log(myarr[1]);
// console.log(myarr2);

// Array methods
// myarr.push(6)
// myarr.push(7)
// myarr.pop()

// to add and remove an element at the start 
// myarr.unshift(9)
// myarr.shift()


// console.log(myarr);

// console.log(myarr.includes(9));
// console.log(myarr.indexOf(4));
// console.log(myarr.indexOf(4));

const newArr = myarr.join() // this will convert the value in string in comma separated format
// console.log(myarr);
// console.log(newArr);
// console.log(typeof newArr);


// slice and splice 

console.log("A ", myarr);

const myn1 = myarr.slice(1, 3)
console.log(myn1);
console.log("B ", myarr);

const myn2 = myarr.splice(1, 3)  // splice will maniplulate the original array 
console.log("C ", myarr);
console.log(myn2);
