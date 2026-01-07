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

// console.log("A ", myarr);

// const myn1 = myarr.slice(1, 3)
// console.log(myn1);
// console.log("B ", myarr);

// const myn2 = myarr.splice(1, 3)  // splice will maniplulate the original array 
// console.log("C ", myarr);
// console.log(myn2);


// slice and splice 

const arr = [1, 2, 3, 4, 5]
// slice(): it does not modifies the original array
// it return a new array
const res = arr.slice(1, 3)
console.log(res)
console.log("Original array slice: ", arr)


// splice(): it modofies the original array
// return the removed elements of the original array

const new_arr = [1, 2, 3, 4, 5]
const result = new_arr.splice(2, 4)
console.log(result)
console.log("Original array splice: ", new_arr)

// 🔹 One-line interview answer
// slice() returns a portion of an array without modifying it, 
// while splice() changes the original array by adding, removing, 
// or replacing elements.

// How to add elements using splice 
const arr1 = [1, 2, 5]
arr1.splice(2, 0, 3, 4)
console.log(arr1)

// 🧠 Explanation
// 2 → index where elements are added
// 0 → remove nothing
// 3, 4 → elements to insert