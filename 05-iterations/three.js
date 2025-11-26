// for of loop 

// ["", "", ""]
// [{}, {}, {}]


// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     console.log(num);
// }

// const greetings = "Hello World"

// for(const greet of greetings) {
//     console.log(`Each char is ${greet}`);
// }

// Maps
const map = new Map()

map.set("IN", "India")
map.set("US", "United States")
map.set("UK", "United Kingdom")
map.set("FR", "France")

// for of loop with maps
// for(const [key, values] of map) {
//     console.log(key, ":--", values);  
// }
// console.log(map);


const myObject = {
    'game': 'NFS',
    'game2': 'Spiderman'
}

for(const [key, values] of myObject) { // this wont work in case of map
    console.log(key, ":--", values);  
}




