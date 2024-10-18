// ****PROPERTIES AND METHODS OF ARRAY****

// We can also create an array using array construct like this
const arr = new Array(34, 65, 87, 45, "orange");
// console.log(arr); // it returns an array [ 34, 65, 87, 45, 'orange' ]

// In an array, we have two types: "Properties" and "Methods."
// Properties: These are characteristics of the array, such as length, which tells you how many elements are in the array.

// Methods: These are functions that perform actions on the array, like push(), pop(), map(), filter(), etc.

//****PROPERTIES****

// length property works only for arrays but not for objects that are not arrays.
// console.log(arr.length + " arr length");

//! ****METHOD****
//!!Important - Using methods, we can also change the original values at any index in the array.

// Here we are using the method "isArray" this method will check if the given input is array or not
// console.log(Array.isArray(arr)); // It will return true because "arr" holds an array

// console.log(Array.isArray("dfdf")); //it will return false because dfdf is not an array

// Here, we are changing the values in the array by targeting them with the help of indexing or positioning using a method.

arr[4] = "Harsh"; // here we have replaced the value in array from orange to harsh by using indexing method
// console.log(arr); // [ 34, 65, 87, 45, 'Harsh' ]

arr[3] = "Seattle";
// console.log(arr); // [ 34, 65, 87, 'Seatle', 'Harsh' ]

// If we want store arr[3] = seattle into any variable we can do like this
let arrElement = arr[3];
// console.log(arrelement); // Seattle

let marks = [12, 45, 76, 87, 65];
// console.log(marks);
// console.log(marks.indexOf(87)); // Index - 3

// ****MUTATIING AND MODIFYING ARRAYS****

//^ Push Method:--------------------
marks.push(99888); // it will push the number 99 into the array of marks and it will include the number at the end of the array
// console.log(marks);

//^ Unshift -------------------
// if we want to add the number at the starting of an array we use unshift
marks.unshift(1999999);
// console.log(marks);

//^ Pop -------------------
// if we want to remove or pop out the element from the end we use pop
marks.pop();
// console.log(marks);

//^ Shift -------------------
// And if we want to remove the element from the start we use shift
marks.shift();
// console.log(marks);

//^ Splice -------------------
// splice is used when we want to remove multiple elements from an array
marks.splice(1, 3); // When you execute marks.splice(1, 3);, it removes 3 elements starting from index 1. The array after this operation will look like this:
// Before Splice if: const marks = [12, 45, 76, 87, 65]
// After Splice: const mark = [12, 65]

// console.log(marks);

//^ Reverse -------------------
// if we want reverse our array use reverse
marks.reverse();
// console.log(marks);

//^ Concat -------------------
// if we want to concat or add two differnt arrays together we use concat method
let concat = [5, 3, 7, 9, 90];
let marks2 = [2, 6, 76, 56, 74];
concat = concat.concat(marks2);
console.log(concat);

/* Output
[
  5, 3,  7,  9, 90,
  2, 6, 76, 56, 74
]
*/
