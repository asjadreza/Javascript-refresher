
// const twoSum = (nums, target) => {
//     const numMap = new Map();

//     for(let i = 0; i < nums.length; i++) {
//         const complement = target - nums[i];
//         console.log(`Current number: ${nums[i]}, Complement: ${complement}`);

//         if(numMap.has(complement)) {
//             return [numMap.get(complement), i];
//         }
//         numMap.set(nums[i], i);
//     }
//     console.log("numMap contents:", [...numMap.entries()]);
//     return [];
// }

// const numbers = [2, 7, 11, 15];
// const target = 9;

// console.log(twoSum(numbers, target));


// const twoSum1 = (nums, target) => {
//     const numMap = {};

//     for(let i = 0; i < nums.length; i++) {
//         const complement = target - nums[i];
//         console.log(`Current number: ${nums[i]}, Complement: ${complement}`);

//         if(complement in numMap) {
//             // return [numMap[complement], i];
//         }
//         console.log(nums[i]);
        
//         numMap[nums[i]] = i;

//     }
//     // console.log("numMap contents:", Object.keys(numMap));
//     // console.log("numMap contents:", Object.values(numMap));
//     console.log("numMap contents:", numMap);
    
//     return [];
// }

// const numbers = [2, 7, 11, 15];
// const target = 9;

// console.log(twoSum1(numbers, target));




// remove element from array
// const removeElement = (nums, val) => {
//     if(!nums || nums.length < 1) {
//         return 0
//     } 

//     let count = 0;
//     for(let i = 0; i < nums.length; i++) {
//         if(nums[i] !== val) {
//             nums[count] = nums[i];
//             count++;
//         }
//     }
//     return count;
// }

// const nums = [3, 2, 2, 3];

// const val = 3;

// console.log(removeElement(nums, val));
// console.log(nums);



// nums = [3, 2, 3, 4]

// nums[0] = 5; // changing the first element of the array
// nums[1] = 6; // changing the second element of the array
// console.log(nums);


// console.log(nums[0]);

const thirdMax = function(nums) {
    // let max = null;
    // let second_max = null;
    // let third_max = null;
    
    // for(const num of nums) {
    //     if(num === max || num === second_max || num === third_max) continue;

    //     if(max === null || num > max) {
    //         third_max = second_max
    //         second_max = max
    //         max = num
    //     } else if(second_max === null || num > second_max) {
    //         third_max = second_max
    //         second_max = num
    //     } else if(third_max === null || num > third_max) {
    //         third_max = num
    //     } 
    // }

    // if(third_max === null) {
    //     return max
    // }
    // return third_max;

    let uniqueNums = [...new Set(nums)]; // Remove duplicates
    uniqueNums.sort((a, b) => b - a); // Sort in descending order
    
    if (uniqueNums.length >= 3) {
        return uniqueNums[2];
    } else {
        return uniqueNums[0];
    }
    
}

const nums = [3, 2]
console.log(thirdMax(nums));

