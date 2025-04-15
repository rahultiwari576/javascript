// String

let word = "cat";
word[0] = "h"; // Try to change "c" to "h"
// console.log(word); // Output: cat (no change, string is immutable)

// Number

let num = 5;
num = 6; // This assigns a new number, not changing the old 5
// console.log(num); // Output: 6

// Boolean

let isHappy = true; // Boolean: true
// console.log(isHappy); // Output: true
isHappy = false; // Assign a new value (immutable: not modifying "true")
// console.log(isHappy); // Output: false

// Null

let userData = null; // Nothing is here
// console.log(userData); // Output: null
userData = "some data"; // Assign a new value (immutable: not modifying "null")
// console.log(userData); // Output: some data

// Undefined

let myValue; // No value assigned
// console.log(myValue); // Output: undefined
myValue = 42; // Assign a new value (immutable: not modifying "undefined")
// console.log(myValue); // Output: 42

// Symbol

let key1 = Symbol("myKey"); // Create a unique symbol
let key2 = Symbol("myKey"); // Create another symbol with same description
console.log(key1 === key2); // Output: false (they’re different)
let obj = {};
obj[key1] = "secret"; // Use symbol as a key
console.log(obj[key1]); // Output: secret
// console.log(key1); // symbol(myKey)

// BigInt

let bigNumber = 12345678901234567890n; // BigInt (note the 'n')
// console.log(bigNumber); // Output: 12345678901234567890n
bigNumber = 98765432109876543210n; // Assign a new value
// console.log(bigNumber); // Output: 98765432109876543210n
let sum = bigNumber + 100n; // BigInt arithmetic
// console.log(sum); // Output: 98765432109876543310n
