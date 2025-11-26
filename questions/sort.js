const nums = [5, 4, 2, 3, 1, 10, 8]

var threeSumClosest = function(nums, target) {
    // nums.sort((a, b) => a-b)
    // let closestSum = Infinity

    if (nums.length < 3) return 0;

    nums.sort((a, b) => a - b); 

    // Initialize with first 3 elements’ sum (always valid)
    let closestSum = nums[0] + nums[1] + nums[2];

    for(let i = 0; i < nums.length - 2; i++) {
        let left = i + 1
        let right = nums.length - 1

        while(left < right){
            const sum = nums[i] + nums[left] + nums[right]

            // update closest sum if this one is closer target
            if(Math.abs(sum-target) < Math.abs(closestSum - target)){
                closestSum = sum
            }

            if(sum < target){
                left++
            } else if(sum > target) {
                right--
            } else {
                return sum
            }
        }
    }
    return closestSum
};