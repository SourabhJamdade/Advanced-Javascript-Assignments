// Problem Description – ensureAsync(fn)

// You are required to write a function named ensureAsync that takes another function fn as input. 
// The goal is to guarantee that calling fn always returns a Promise, even if fn is synchronous.
// Using the async keyword is recommended, as it automatically wraps return values and errors in a Promise.
function ensureAsync(fn) {
    return async function (...data) { // its rest operator used to collect paramters in array
        const result = fn(...data); // its spread operator to spread out values from array
        return result;
    }
}

module.exports = ensureAsync;
