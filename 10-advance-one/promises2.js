// const myPromise = new Promise(function(resolve, reject) {
//     // asynchronous operation here
//     const success = false;

//     if(success)  {
//         resolve("Operation completed successfully!")
//     } else {
//         reject("Operation failed!")
//     }
// })

// // consuming promises 
// myPromise
//     .then(function(result) {
//         console.log(result) // Operation completed successfully
//     })
//     .catch(function(error) {
//         console.log(error) // Operation failed!
//     })
//     .finally(function() {
//         console.log("Promise resolved or rejected") // this runs regardless of anything 
//     })  


// Promise methods
// const promise1 = Promise.resolve(3)
// const promise2 = 42
// const promise3 = new Promise((resolve) => {
//     setTimeout(resolve, 100, 'foo');
// })

// Promise.all([promise1, promise2, promise3])
//     .then(values => {
//         console.log(values) // [3, 42, 'foo']
//     })


// what is the output of the below code

console.log("start");

const promise = new Promise((resolved) => {
    console.log('promise constructor')
    resolved('Resolved')
})

promise.then(function(values) {
    console.log(values)
})

console.log('end')