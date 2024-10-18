//***Maps Method in arrays***

//? follow this link for more clarification https://www.youtube.com/watch?v=5AFav46K9LM&ab_channel=TechGun
// Without map method for iterating an array and getting new array with some changes using old array

let array = [10, 3, 5, 7, 8];

let newArray = [];

for (let i = 0; i < array.length; i++) {
  newArray[i] = array[i] * 2;
}

// console.log(`Using old loop method: ${newArray}`);

//or

let ary = [10, 3, 5, 7, 8];

let b = ary.map(function test(x) {
  // we get all the values of array in x one by one
  return x * 2;
}); // This map method return a new array set and in this method we called a function "test"

// console.log(`getting the same result using map method: ${b}`);

// ***Map Method in Array of Objects***

let obj = [
  {
    firstName: "harsh",
    lastName: "jha",
  },
  {
    firstName: "Abhay",
    lastName: "panday",
  },
  {
    firstName: "Sonya",
    lastName: "mital",
  },
];

// This will iterate each object in array one by one
// first we get 0th index object then 2nd and then 3rd
obj.map(function (value, index, arrayName) {
  //   console.log(index); // 0, 1, 2
  //   console.log(arrayName); //arrayName represents the array obj, and since map iterates three times (once for each object in the array), it will print the entire array three times
  //   console.log(value); // iterate all the object in key value format
  //   console.log(value.firstName); // 0th index firstName 1st index firstName 2nd index firstName
  //   console.log(value.lastName); // Same goes with last name also
});

let myobj = {
  name: "Harsh",
  "last name": "jha", // If key contains more than one word we have place the key value in string
  village: "kachhua",
  Occupation: "web developer",
  isActive: true,
  marks: [23, 65, 76, 86],
};

// console.log(myobj); // it will print eveything in object
// and if we want to fetch only particular item from an object we can console like this
// console.log(myobj.name);
// console.log(myobj.isActive);
// console.log(myobj.marks);
// console.log(myobj["last name"]); // we can fetch the string key value ['last name']
