// ***Object Destructuring***

let bioData = {
  name: "harsh",
  age: 25,
  language: "node.js",
  hob: {
    first: "playing",
    sec: "making videos",
  },
};

// console.log(`My name is ${bioData.name}`); // Without Destructuring

// It is very important to use the same variable names as the object keys in bioData during object destructuring.

// let { name, age, language } = bioData;

// console.log(`After destructuring, name is ${name}`);
// console.log(`After destructuring, age is ${age}`);
// console.log(`After destructuring, language is ${language}`);

// Alternatively, we can declare the variables first, then assign the keys.
let language, age, name;

// ({ age, language, name } = bioData);

// console.log(`After destructuring, name is ${name}`);
// console.log(`After destructuring, age is ${age}`);
// console.log(`After destructuring, language is ${language}`);

// If we want to use different variable names from the object keys, we can do it this way:

({ age: myAge, language: myLanguage, name: myName, hob } = bioData);

// console.log(`After destructuring, name is ${myName}`);
// console.log(`After destructuring, age is ${myAge}`);
// console.log(`After destructuring, language is ${myLanguage}`);

// We get the same result using all three different methods.

// console.log(`I love ${bioData.hob.sec}`);

// console.log(`I love ${bioData.hob["sec"]}`);

// Accessing the key of the hob object, which is inside bioData, with the help of object destructuring.
// console.log(`I love ${hob.sec}`);

// Here we have two different functions. We'll create a new object using the object destructuring method.

const add = function (a, b) {
  return a + b;
};

const sub = function (a, b) {
  return a - b;
};

// Now we have both functions in an object with the keys "add" and "sub" stored in the funcObject variable.
let funcObject = { add, sub };
// console.log(funcObject); // result { add: [Function: add], sub: [Function: sub] }

// Now we can call the methods in the same way as we call methods in objects.
// console.log(funcObject.add(5, 5)); // result 10
// console.log(funcObject.sub(10, 5)); // result 5
