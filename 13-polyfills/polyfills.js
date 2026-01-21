// what is polyfills in javascript

// Polyfills in JavaScript are small pieces of code that add support for\\
// modern JavaScript features in older browsers that don’t support them yet.
// 👉 In simple words:
// A polyfill “fills the gap” for missing features.

// Example
// includes() does not work in older browser
// polyfills for include
// console.log([1, 2, 3].includes(2)) // this wouldn't work on older browser

// polyfill for includes()
if(!Array.prototype.my_includes) {
    Array.prototype.my_includes = function(value) {
        for(let i = 0; i < this.length; i++) {
            if(this[i] === value){
                return true
            }
        }
        return false
    }
}

console.log([1, 3, 4].my_includes(5))



