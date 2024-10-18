// **** Filter ****

let ageArray = [2, 10, 48, 40, 20, 6];

// Here we used filter method to filter the age which is greater than 18
// This "filter method" return an array with the condition which is defined in function (checkAge) i.e filterout the age which is less than 18.

let filterArray = ageArray.filter(checkAge); // Here we are calling the function "checkAge" which is defined in below lines

// Here this function recevies an callback in the parameter which we've seen in loops "element, index and array" so in this callback "age" we receive all the age [2, 10 , 48, 40, 20, 6] and it will check the condition where age value is greater or equal to 18 or not and it "returns" only the set of array which is greater than 18. ie. [48, 40, 20]
function checkAge(age, index, array) {
  //   console.log(age, index, array);

  // This dowm below lines only returns true or false. if it returns true then the 0 index element get send into that filter array if it returns false then the 2 index element will not included in array
  return age >= 18;
}

// console.log(filterArray, "filter");

/* Output

Before: [2, 10, 48, 40, 20, 6]
After: [ 48, 40, 20 ]

*/

// Here, we have a return statement that returns a boolean value, either true or false. The string "harsh" has a length of 5, which is not equal to 0, so this will return true. Consequently, this function will return the 0th index element to the filtered array. On the other hand, the empty string has a length of 0, which is equal to 0. According to the condition, this statement returns false, so it will filter out the 1st index element. Therefore, we have only one element left in the new filtered array, which is why its length is 1.

let xx = ["harsh", ""];
// console.log(xx.length) // here we are getting the length is the array which is 2

let yy = xx.filter(yellow); // calling the function "yellow" which we defined below

function yellow(element, index, array) {
  // console.log(element); // we get both the element "harsh" and ""
  // Here we are getting the length of the element "5" which is in array for "harsh" and 0 for empty string element
  //   console.log(element.length); // we get both elements length "harsh" 5 and "" 0

  return element.length !== 0; // it will return only harsh element because only this element matching the following condition
}

// console.log(yy); // As we know filter function returns a new array after filteration ['harsh']
// console.log(yy.length); // And the length of above array is 1

// or we can use this shorthand to achieve the same result

// let xx = ["harsh", ""].filter((element) => {
//   return element.length !== 0;
// }).length;  // length of an array we get is 1 ["harsh"]

// xx = [""]
// xx.length = 1
// but in function callback
// element.length = 0
// how?
// In js the "" length is 1
// but in function we are getting 1th index element only without string from array that's why its length is 0

// Another example of filter method
let zz = [""];
// console.log(zz.length);
let ff = zz.filter(red);

function red(element) {
  //   console.log(element); // here element is nothing
  //   console.log(element.length); // and the length of the element is 0

  return element.length !== 0; // so it will return false
}
// console.log(ff.length); // that is why the length of yy array is 0
// console.log(zz);

// ***Filter in Objects***

// removing an object from the array using filter
let cusArray = [
  {
    id: 1,
    name: "Harsh",
    lname: "jha",
  },
  {
    id: 2,
    name: "Rohan",
    lname: "Raj",
  },
  {
    id: 3,
    name: "Abhishek",
    lname: "Amrit",
  },
];

function blue(item) {
  //   console.log(item);
  return item.id !== 2; // return the elements(objects) which is not equal to 2
}

let newCusArray = cusArray.filter(blue);
// console.log(newCusArray);
