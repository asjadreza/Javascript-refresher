const marvel_heroes = ["Thor", "Ironmen", "Spidermen"]
const dc_heroes = ["superman", "Batman", "Flash"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);

// console.log(marvel_heroes[3][2]);

// const all_heroes = marvel_heroes.concat(dc_heroes) // concat will return a new array
// console.log(all_heroes);

// spread operator 
const all_new_heroes = [...marvel_heroes, ...dc_heroes]
console.log(all_new_heroes);


const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const usable_array = anotherArray.flat(Infinity)
console.log(usable_array);




console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));

console.log(Array.from({name: "Asjad"})); // interesting


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));






