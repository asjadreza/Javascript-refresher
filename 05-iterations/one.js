// for

for(let i = 0; i <= 10; i++) {
    const element = i

    if(element == 5) {
        // console.log("5 is best number");
        
    }
    // console.log(element);
}


for (let i = 0; i <= 10; i++) {
    // console.log(`Outer loop values: ${i}`);
    
    for (let j = 0; j <= 10; j++) {
        // console.log(`Inner loop values: ${j} and inner loop value ${i}`);
        // console.log(i + '*' + j + ' = ' + i*j );     
    }
}


let myArray = ["flash", "batman", "superman"]

for(let i = 0; i < myArray.length; i++) {
    const elem = myArray[i]
    // console.log(elem)
}


// break and continue 

// break: break will break the loop and throw the control out of the loop when the given condition match

for(let i = 1; i <= 20; i++) {
    if(i == 5) {
        console.log("5 Detected");
        break
        
    }
    console.log(`Value of i is ${i}`);
}


// continue: continue will not break the loop, it just break one iteration when the
// codition is match and then it will print all the values

for(let i = 1; i <= 20; i++) {
    if(i == 5) {
        console.log("5 Detected");
        continue
    }
    console.log(`Value of i is ${i}`);
}

