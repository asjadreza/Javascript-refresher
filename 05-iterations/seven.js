// map function
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNumbers.map( (num) => {
    return num + 10
} )

// console.log(newNums);


// using for each

let newNums2 = []

myNumbers.forEach( (item) => {
    newNums2.push(item + 10)
})

console.log(newNums2);

// map chaining 
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNums3 = nums
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num) => num >= 40)

console.log(newNums3);

