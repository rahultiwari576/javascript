//***In Arrays***

// Merging Arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArr = [...arr1, ...arr2];
console.log(mergedArr); // [1, 2, 3, 4, 5, 6]

// Cloning an Array
const originalArr = [1, 2, 3];
const clonedArr = [...originalArr];
console.log(clonedArr); // [1, 2, 3]

// Adding elements to an array:
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];
console.log(newNumbers); // [1, 2, 3, 4, 5]

//***In Objects***

// Merging Objects:
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj); // { a: 1, b: 2, c: 3, d: 4 }

// Cloning an object:

const originalObj = { a: 1, b: 2 };
const clonedObj = { ...originalObj };
console.log(clonedObj); // { a: 1, b: 2 }

// Updating an object:
const person = { name: "John", age: 30 };
const updatedPerson = { ...person, age: 31 };
console.log(updatedPerson); // { name: 'John', age: 31 }

// *** Function Arguments Example ***

function sum(a, b, c) {
  return a + b + c;
}
const numbersTwo = [1, 2, 3];
console.log(sum(...numbersTwo)); // 6
