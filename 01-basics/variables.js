// Investigation 

const accountId = 144553;
let accountEmail = "hitesh@google.com";
var accountPassword = "12345"
accountCity = "Jaipur" // we can also decalre variable in js like this but not reccommended at all
let accountState; // this will print undefined as the value is not provided

// accountId = 2 // not allowed (as this variable is const)
accountEmail = "asjad@gmail.com"
accountPassword = "232323"
accountCity = "Bangluru"

/*
Note: Prefer not to use var because of issue in block scope and functional scope
*/

// console.log("accountEmail", accountEmail);
// console.log("accountPASS", accountPassword);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])



