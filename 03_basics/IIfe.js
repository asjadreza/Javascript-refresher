// Immediately Invoked Function Expressions (IIFE) // to immediately execute the function 
// IIFE used to avoid the global scope pollution

// named iife function
(function chai() {
    console.log(`DB CONNECTED`);
})(); // this semi colon is necessary to end this type of function 


// simple iffe function
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('Asjad')