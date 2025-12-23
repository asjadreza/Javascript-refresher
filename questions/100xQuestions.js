// question-1 : reverse a string

// solution:1 Using for loop
const str = "hello";
let reversed = "";

for (let i = str.length - 1; i >= 0; i--) {
  // console.log("Reversed string: ",reversed)
  reversed += str[i];
}

// console.log(reversed);

// split()
const text = "Hello world this is JS";
const words = text.split(" "); // this will split a string into an array of substring, based on separator
// console.log(words);

// join(): join() is used to combine array elements into a string, using a specified separator.
const words_1 = ["Hello", "world", "this", "is", "JS"];
// console.log(words_1);

const sentence = words_1.join(" ");
// console.log(sentence);

// join with hyphen
const date_arr = ["2025", "11", "04"];
const date = date_arr.join("-");
// console.log(date);

// solution:2 using split(), reverse(), and join()
const str1 = "hello";
const reversed1 = str
  .split("") // split the str1 into an array of characters
  .reverse() // this will reverse the array
  .join(""); // combine the reversed array and convert it into the string
// console.log(reversed1)

// check palindrome
function checkPalindrome(pd_str) {
  let palindrome = false;
  const reversed_str = pd_str.split("").reverse().join("");
  console.log(reversed_str);
  if (pd_str === reversed_str) {
    palindrome = true;
  } else {
    palindrome = false;
  }
  return palindrome;
}

function checkPalindrome1(pd_str) {
    let palindrome = false
    let reversed = ""
    for(let i = pd_str.length - 1; i >= 0; i--) {
        reversed += pd_str[i]
    }
    if(pd_str === reversed) {
        palindrome = true
    } else {
        palindrome = false
    }
    return palindrome

}

// console.log(checkPalindrome1("madam"));


// Find factorial
// solution-1
function factorial_recursive(n) {
    if(n < 0) return "Factorial not defined for negative numbers"
    if(n == 0 || n == 1) return 1 // base case
    return n * factorial_recursive(n-1)
}

// console.log(factorial_recursive(5))

function factorial_iterative(n) {
    if(n < 0) return "Factorial is not defined for negative numbers"
    let res = 1
    for(let i = 1; i <= n; i++) {
        res *= i  // multiply result by i
    }
    return res
} 

// console.log(factorial_iterative(5));

// Question-4: Count vowels

// Solution: using for of loop
function countVowels(str) {
    const vowels = "aeiouAEIOU"
    let count = 0

    for(let char of str) {
        // console.log(char)
        console.log(vowels.includes(char))
        if(vowels.includes(char)) {
            count ++
        }
    }

    // using for loop
    // for(let i = 0; i < str.length; i++) {
    //     if(vowels.includes(str[i])) count++
    // }

    return count
}

// console.log(countVowels("Zohran Mamdani"))

const countVowelsRe = (str) => {
    const matches = str.match(/[aeiou]/gi)
    return matches ? matches.length : 0
}

// console.log(countVowelsRe("Zohran Mamdani"))

// includes() and match()
// includes(): Ye case sensitive hota hai 
const text_two = "Javascript is awesome"
// console.log(text_two.includes("Javascript"))
// console.log(text_two.includes("Python"))

// match()
// What is match()?

// The match() method is used on strings to find text that matches a regular expression (regex).

// It returns an array of matches — or null if no match is found.

const text_three = "I love javascript"
const result = text_three.match(/javascript/)
// console.log(result);

// It returns an array with:

// The matched text

// The index where it was found

// The original string

// Question-5: Find largest of three numbers 

function findLargest(a, b, c) {
    return Math.max(a, b, c)
}

// console.log(findLargest(2, 3, 4));

// Question-6: swap two variables without temp
//  solution-1: using arithmatic operator 
function swapOne() {
    let a = 5
    let b = 10

    a = a + b  // a = 15
    b = a - b  // b = 5
    a = a - b  // a = 10

    return `a is ${a} and b is ${b}`
}

// using array destructuring 
function swapTwo() {
    let a = 5;
    let b = 10;
    [a, b] = [b, a];
    console.log(a, b);
}

// swapTwo()


// question-7: Generate a random number in range 
function randomNumberInRange(min, max) {
    console.log(Math.floor(Math.random() * (max - min + 1)) + min)
}

// randomNumberInRange(1, 10)

// question - 8: Check Prime

function check_prime(n) {
    if(n <= 1) return false
    for(let i = 2; i < n; i++) {
        if(n % i === 0) {
            return false
        }
    }

    return true
}
// console.log(check_prime(17))

// Question-9: Fibonacci Series

function print_fibonacci(n) {
    let n1 = 0
    let n2 = 1
    let next_term

    console.log("Fibonacci Series...")

    for(let i = 1; i <= n; i++) {
        console.log("fibnacci series: ", n1)
        next_term = n1 + n2
        n1 = n2
        n2 = next_term
        console.log("n1: ", n1)
        console.log("n2: ", n2)
        console.log("next: ", next_term)
    }
}

// print_fibonacci(5)

// solution-2: using recursion
// 0, 1, 1, 2, 3
function fibonacci(num) {
    if(num < 2) return num
    return fibonacci(num-1) + fibonacci(num-2) // next number is the sum previous two numbers
}

const num = 5
for(let i = 0; i < num; i++) {
    // console.log(fibonacci(i))

}

// Question-10: Find sum of digits

// solution using while loop 
function sumOfDigits(n) {
    let sum = 0
    n = Math.abs(n)
    // console.log(n)
    while(n > 0) {
        sum += n % 10
        n = Math.floor(n / 10)      
    }

    return sum
}

// console.log(sumOfDigits(123))

// solution using recursion 
function sumOfDigitsRec(num) {
    num = Math.abs(num)

    if(num < 10) return num;
    return (num % 10) + sumOfDigits(Math.floor(num / 10))
}

// console.log(sumOfDigitsRec(3782))

// Array from method
// Array.from() is a static method that creates a new array from:
// Array-like objects (like strings, NodeLists, or arguments)
// or iterable objects (like Sets, Maps, etc.)


// Question 11: Remove duplicates

// Solution-1: Brute froce approach
// const arr = [1, 2, 3, 4, 4]
// const newArr = []
// for(let i = 0; i < arr.length; i++) {
//     let isDuplicate = false
//     for(let j = i+1; j < arr.length; j++) {
//         if(arr[i] === arr[j]){
//             isDuplicate = true
//             break
//         }
//     }
//     if(!isDuplicate) {
//         newArr.push(arr[i])
//     }
// }
// console.log(newArr)

function removeDuplicate(arr) {
    const newArr = [];
    for(let i = 0; i < arr.length; i++) {
        let isDuplicate = false
        for(let j = 0; j < i; j++) {
            if(arr[i] === arr[j]){
                isDuplicate = true
                break
            }
        }
        if(!isDuplicate){
            newArr.push(arr[i])
        }
    }
    return newArr
}
let arr = [1, 1, 2, 3, 3, 4, 2,]
// console.log(removeDuplicate(arr))

// solution 2 : using set
function remove_duplicate_two(arr) {
    const newArr = [...new Set(arr)] // this spread operator converts back this set into array
    return newArr
}

// console.log(remove_duplicate_two([1, 2, 2, 3, 3]))



// Question-12: Find Max and Min in an array
// const my_arr = [2, 9, 1, 5]
// console.log(...my_arr) // this will spread the array into individual numbers

function find_max_and_min(arr) {
    const min = Math.min(...arr)
    const max = Math.max(...arr)

    return { min, max } 
}

// const my_arr = [2, 9, 1, 5]
// console.log(find_max_and_min(my_arr))



// Question 12: Reverse an array without a reverse() 

// Solution-1 Brute force
function reverse_arr(arr) {
    const res = []
    for(let i = arr.length - 1; i >=0; i--){
        res.push(arr[i])
    }
    return res
}

const my_arr = [1, 2, 3, 4, 5]
// console.log(reverse_arr(my_arr))


// Question 14: Flatten a nested array 

const nested_arr = [1, [2, [3, [4]]]];

// console.log(nested_arr)

// console.log(nested_arr.flat(Infinity))



// Question 15: Find missing number in an array 
// we have to find the missing number between 1...n
// arr = [1, 2, 3, 4, 6]
// here n = 6 // this last number in an array 

function find_missing_brute(arr, n) {
    for(let i  = 1; i < n; i++) {
        let found = false
        // console.log(i)
        for(let j = 0; j < arr.length; j++) {
            console.log("array: ", arr[j])
            console.log("i", i)
            if(arr[j] === i) {
                found = true
                break
            }
        }
        if(!found) return i
    }
}

// const missing = [1, 2, 3, 4, 5, 7]
// const n = missing[missing.length - 1]
// console.log(find_missing_brute(missing, n))


// Optimal solution using formula
// arr = [1, 2, 3, 4, 5, 6, 8]
// numbers = 1, 2, 3....n
// sum of all natural number would be = Total = (n * (n + 1))%2
// actual some would be = actual_sum = the sum of all numbers in an array
// so the missing number is = Total - actual_sum

function find_missing_optimal(arr, n) {
    const total = (n * (n + 1)) / 2;
    // let actual_sum = 0
    // for(let i = 0; i < arr.length; i++){
    //     actual_sum += arr[i]
    // }

    const actual_sum = arr.reduce((a, b) => a + b, 0)
    const missing_num = total - actual_sum
    return missing_num
}

const arr2 = [1, 2, 4, 5, 6, 7]
const n = arr2[arr2.length-1]
// console.log(find_missing_optimal(arr2, n))


// Question 16: count occurences
// ["a", "b", "c", "a"]

// the answer should be = { a: 2, b: 1, c: 1 }


// solution using brute force approach 
function count_occurrences(arr) {
    const counts = {}

    for(let i = 0; i < arr.length; i++) {
        const char = arr[i]
        let count = 0

        for(let j = 0; j < arr.length; j++) {
            if(arr[j] === char) count ++
        }
        counts[char] = count
    }
    return counts
}

const occur_arr = ["a", "b", "b", "a", "a", "c"]
// console.log(count_occurrences(occur_arr));


// Roatate Array 
// Question: Given an array and a number k, rotate the array to the right by k steps.
// 💡 What does rotation mean?
// Rotate right by 1 step: last element becomes first
// [1, 2, 3, 4, 5] = [5, 1, 2, 3, 4]

// Solution using brute force 
function rotateBruteForce(arr, k) {
    for(let i = 0; i < k; i++) {
        const last = arr.pop(); // remove the last element
        arr.unshift(last) // insert it at the front
    }

    return arr
}

const my_arr1 = [1, 2, 3, 4, 5]
// console.log(rotateBruteForce(my_arr1, 2))


// Question 17: Word pattern: leetcode

function word_pattern(pattern, s) {
    const words = s.split(" ")

    if(words.length !== pattern.length) return false

    const char_to_word = new Map()
    const word_to_char = new Map()

    

    for(let i = 0; i < pattern.length; i++) {
        const char = pattern[i]
        const word = words[i]

        // console.log(char_to_word.get(char))
        if(char_to_word.has(char) && char_to_word.get(char) !== word) {
            return false
        }

        if(word_to_char.has(word) && word_to_char.get(word) !== char) {
            return false
        }

        char_to_word.set(char, word)
        word_to_char.set(word, char)

        // console.log(char)
    }
    console.log(char_to_word)
    console.log(word_to_char)
    return true
}

pattern = "abba"
s = "dog cat cat dog"

// console.log(word_pattern(pattern, s))

// Question-18: Add two string (numbered string)

// let num1 = "233"
// let num2 = "57"
// result = "290"

function addStr(num1, num2) {
    let i = num1.length - 1;
    let j = num2.length - 1;
    
    let carry = 0
    let result = ""

    while(i >= 0 || j >= 0 || carry > 0) {
        const digit1 = i >= 0 ? num1.charCodeAt(i) - 48 : 0
        const digit2 = j >= 0 ? num2.charCodeAt(j) - 48 : 0
        // console.log(digit2)

        const sum = digit1 + digit2 + carry;

        console.log("sum", sum)

        result = (sum % 10 ) + result; // remainder becomes new digit
        console.log("res", result)
        carry = Math.floor(sum / 10)
        console.log("carr", carry)

        i--;
        j--
    }
    return result
}

const num1 = "233"
const num2 = "57"

// console.log(addStr(num1, num2))

// console.log(9%10)




