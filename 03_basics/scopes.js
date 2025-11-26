var c = 3000 // this is global scope

let a = 300

if (true) {
  let a = 10; // these have block scope
  const b = 20;
  var c = 30;
//   console.log("INNER: ", a);
  
}

// console.log(a);
// console.log(b);
// console.log(c);


function one() {
    const username = "asjad"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);  // not in scope
    two()
}

one()


if(true) {
    const username = "asjad"
    if(username === "asjad") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
    
}

// console.log(username);

// +++++++++++++++++++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(addone(5))
function addone(num) {
    return num + 1
}



console.log(addTwo(4)) // this is not allowed in this type of function decalaration
const addTwo = function(num) {
    return num + 2
}

// we have access it here after the function initialization