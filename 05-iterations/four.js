// for in loop is used to iterate over the properties of an object or the indices of an array.

const myObject = {
    js: 'Javascript',
    cpp: 'c++',
    rb: 'Ruby',
    swift: 'Swift by apple'
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

// lets check if this for in working in array or not
const arr = ["Java", "Javascript", "Ruby", "Swift"]

for(const key in arr) {
    console.log(arr[key]);
    
}