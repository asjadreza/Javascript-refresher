//   dates 

const myDate = new Date()
// console.log(myDate)

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());

// console.log(typeof myDate);




// const myCreatedDate = new Date(2023, 0, 23)  // Month is starting from 0 in Javascript
// const myCreatedDate = new Date(2023, 0, 23, 5, 2)  // Month is starting from 0 in Javascript
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());



// in yyyy-mm-dd format 
// const date = new Date("2023-12-18")
// console.log(date.toLocaleDateString());

// in mm-dd-yyyy
const date = new Date("02-23-2023")

// console.log(date.toLocaleDateString());

// time stamps in js 
let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(date.getTime());

// // converting milliseconds to seconds 
// console.log(Math.floor(Date.now() / 1000));


const newDate = new Date()
console.log(newDate.getMonth() + 1); // stariting from 0  
console.log(newDate.getDay()); // starting from monday

// special toLocalString method 
newDate.toLocaleString('deafult', {
    weekday: "long",
})







