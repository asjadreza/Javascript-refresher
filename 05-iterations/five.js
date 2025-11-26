// foreach callback fn  loop

const coding = ["JavaScript", "Python", "Ruby", "Java", "C++"];

// one way to iterate over an array is using forEach method
// coding.forEach( function (item) {  // this is callback function, iska koi naam nahi hota 
//     console.log(item);
// } )

// another way to iterate over an array is using arrow function
coding.forEach( (val)  => {
    //  console.log(val);
})

// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe)


coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr); // item is the value, index is the index of that value in array and arr is the whole array
} )

const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: "js"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
]

// ye database mei bahut kaam aayega ---vvi
myCoding.forEach( (item, index) => {
    console.log(item.languageFileName);
    
})


