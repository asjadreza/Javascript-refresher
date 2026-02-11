

function bs(arr, target) {
    let sorted_arr = arr.sort((a, b) => a-b)
    let n = sorted_arr.length
    let low = 0;
    let high = n-1
    
    while(low <= high) {
        let mid = Math.floor((low + high) / 2)
        if(sorted_arr[mid] === target) {
            return `Target Found: ${sorted_arr[mid]}`
        } else if(sorted_arr[mid] < target) {
            low = mid+1
        } else {
            high = mid - 1
        }

    }
    return `Target not in the list ${arr}`
}

const arr = [4, 2, 1, 6, 8, 5]
const target = 2
console.log(bs(arr, target))