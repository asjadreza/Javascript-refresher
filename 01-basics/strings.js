const name = "Asjad"
const repoCount = 50

// console.log(name + repoCount + "have");
console.log(`Hello my name is ${name} and the number of repo I have created is ${repoCount}`);

const gameName = new String('asjadfc')

console.log(gameName[0]);

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2))
console.log(gameName.indexOf('j'));

const newStr = gameName.substring(0, 4)
console.log(newStr);


const anotherStr = gameName.slice(-4, -2)
console.log(anotherStr);


const newStringOne = "   gabfgghs   "

console.log(newStringOne);
console.log(newStringOne.trim());



const url = "https://www.asjad%20reza.com"
console.log(url);

const newURL = url.replace('%20', '-')
console.log(newURL);

console.log(newURL.includes('asjad'));


const str1 = "sdjsj-ksdkja-kjskna-askd."
console.log(str1);

const splitStr1 = str1.split("-")
console.log(splitStr1);
