let myName = "Asjad     "

// console.log (myName.truelength);
// console.log(myName.trim().length)

// we want something , jaha pe bhi string ho uske saath ek trueLength method  aa jaani chahiye taaki hame baar trim krne ki jarurat na ho


let myHeroes = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function () {
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

// this function will be available for heroPower and myHeroes, cause in javascript everthing is object
Object.prototype.asjad = function () {
    console.log(`Hitesh is present in all objects`)
}

// this will only available for Array object
Array.prototype.heyAsjad = function() {
    console.log(`Asjad says hello`)
} 

// heroPower.asjad()

myHeroes.asjad()
myHeroes.heyAsjad()
// heroPower.heyAsjad()

// inheritence - prototypel inheritence - old way

const User = {
    username: "asjad",
    email: "asjad@gmail.com"
}


const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS Assignment",
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User


// modern syntex
Object.setPrototypeOf(TeachingSupport, Teacher)

// now lets solve our problem
let anotherUsername = "chaiaurcode       "

String.prototype.trueLength = function() {
    console.log(`${this}`)
    console.log(`true length is ${this.trim().length}`);
}

anotherUsername.trueLength() // here this is chaiaurcode

"asjad   ".trueLength() // here this is asjad, this is jisne call kiya