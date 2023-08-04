console.log("Arrays and Objects in JS");

//> What is an array?
//> The Array object lets you store multiple values in a single variable. It stores a fixed-size sequential collection of elements of the same type. An array is used to store a collection of data, but it is often more useful to think of an array as a collection of variables of the same type.

// CREATING DIFFERNT TYPES OF ARRAYS:------------------------

// Here we are creating arrays of numbers, strings and mixed arrays

let marks = [12, 45, 76, 87, 65];
const fruits = ["Orange", "Lemon", "Banana"];
// we can create an array into an array
const mixed = [[23, 65, 87], "Apple", 76];

// we can also create an array using array construct like this
const arr = new Array(34, 65, 87, 45, "orange");

console.log(arr); // it returns an array
console.log(mixed);
console.log(marks);
console.log(fruits);

// INDEXING OF ARRAYS :---------------------------

// Indexing in array
console.log(fruits[1]); // it will return the whole element which lies on position 1st
console.log(fruits[0]); // it will return the whole element which lies on position 0th
console.log(fruits[2]); // it will return the whole element which lies on position 2nd

// In array we have two types 1st is property and 2nd is method

//PROPERTIES:-----------------------
// length property works only for arrays not in objects
console.log(arr.length + " arr length");

//! METHOD:----------------  !!Important - These methods are also change the original array of marks

// here we are checking the condition by using boolean value that arr is an array or not
console.log(Array.isArray(arr)); // It will return true because "arr" stored an array

console.log(Array.isArray("dfdf")); //it will return false because dfdf is not an array

// here we are changing the value of array by targetting the single element with the help of indexing or positioning using method

arr[4] = "Harsh"; //here we have changed the value of array from orange to harsh by using indexing method
console.log(arr);

arr[3] = "Seatle";
console.log(arr);

// if we want store arr[3] = seatle into any variable we can do this
let arrelement = arr[3];
console.log(arrelement);

console.log(marks);
console.log(marks.indexOf(87)); //It will show the result of 87 is on 4th position

// MUTATIING AND MODIFYING ARRAYS:---------------------------

//? Push --------------------
marks.push(99888); //it will push the number 99 into the array of marks and it will include the number at the end of the array
console.log(marks);

// it will push the 1996 into mynane array
// let mynane = [23, 54, 646, 64];
// mynane.push(1996);

// console.log(mynane);

//? Unshift -------------------
// if we want to add the number at the starting of an array we use unshift
marks.unshift(1999999);
console.log(marks);

//? Pop -------------------
// if we want to remove or pop out the element from the end we use pop
marks.pop();
console.log(marks);

//? Shift -------------------
// And if we want to remove the element from the start we use shift
marks.shift();
console.log(marks);

//? Splice -------------------
// splice is used when we want to remove multiple elements from an array
marks.splice(1, 3); //it means start from 1 position and remove 3 elements from an array
console.log(marks);

//? Reverse -------------------
// if we want reverse our array use reverse
marks.reverse();
console.log(marks);

//? Concat -------------------
// if we want to concat or add two differnt arrays together we use concat method

let marks2 = [2, 6, 76, 8787, 575];
marks = marks.concat(marks2); //here we can't change our marks value because we have created the variable using const so first we change the variable type using let the we can view the results
console.log(marks);

//? Filter -------------------console.log("-------------filter");
let ageArray = [2, 10, 48, 40, 20, 6];

// Here we used filter method to filter the age which is greater than 18
// This "filter method" return an array with the condition which is defined in function i.e filterout the age which is less than 18.
let filterArray = ageArray.filter(checkAge); // Here we are calling the function "checkAge" which is defined in below lines

console.log(filterArray, "filter");

// Here this function recevies an callback in the parameter which we've seen in loops "element, index and array" so in this callback "age" we receive all the age [2, 10 , 48, 40, 20, 6] and it will check the condition where age value is greater or equal to 18 or not and it "returns" only the set of array which is greater than 18. ie. [48, 40, 20]
function checkAge(age, index, array) {
  console.log(age, index, array);

  // This dowm below lines only returns true or false. if it returns true then the 0 index element get send into that filter array if it returns false then the 2 index element will not included in array
  return age >= 18;
}

// Here we have this return which is returning a boolean value true or false the string "harsh" length is 5 which is not equal to 0 so this will return true and this function will return 0th index element to the filter array again we have an empty string length 0 which is equal to 0 but according to the condition this statement returns false so it will filter out the 1st index element so we have only one element left in new filtered array that's why its length is 1.

let xx = ["harsh", ""];
// console.log(xx.length) // here we are getting the length is the array which is 2
let yy = xx.filter(yellow); // calling the function "yellow" which we defined below

function yellow(element, index, array) {
  console.log(element); // we get both the element "harsh" and ""
  // Here we are getting the length of the element "5" which is in array for "harsh" and 0 for empty string element
  console.log(element.length); // we get both elements length "harsh" 5 and "" 0

  return element.length !== 0; // it will return only harsh element because only this element matching the following condition
}
console.log(yy); // As we know filter function returns a new array after filteration ['harsh']
console.log(yy.length); // And the length of above array is 1

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

let zz = [""];
console.log(zz.length);
let ff = zz.filter(red);

function red(element) {
  console.log(element); // here element is nothing
  console.log(element.length); // and the length of the element is 0

  return element.length !== 0; // so it will return false
}
console.log(ff.length); // that is why the length of yy array is 0
console.log(zz);

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

let newCusArray = cusArray.filter(blue);

function blue(item) {
  console.log(item);
  return item.id !== 2; // return the elements(objects) which is not equal to 2
}

console.log(newCusArray);

console.log("Maps in Array--------------"); // Maps in arrays
//? follow this link for more clarification https://www.youtube.com/watch?v=5AFav46K9LM&ab_channel=TechGun
// Without map method for iterating an array and getting new array with some changes using old array

let array = [10, 3, 5, 7, 8];

let newArray = [];

for (let i = 0; i < array.length; i++) {
  newArray[i] = array[i] * 2;
}

console.log(`Using old loop method: ${newArray}`);

//or

let ary = [10, 3, 5, 7, 8];

let b = ary.map(function test(x) {
  // we get all the values of array in x one by one
  return x * 2;
}); // This map method return a new array set and in this method we called a function "test"

console.log(`getting the same result using map method: ${b}`);
console.log("-----------Maps---------------");

// We can also play with multiple objects using map method

// Here we have array of an objects

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

// This will iterate each array one by one
// first we get 0th index object then 2nd and then 3rd
obj.map(function (value, index, arrayName) {
  console.log(index); // 0, 1, 2
  console.log(arrayName); // how many arrays and their names
  console.log(value); // iterate value on 0th index 1st index 2nd index
  console.log(value.firstName); // 0th index firstName 1st index firstName 2nd index firstName
  console.log(value.lastName); // Same goes with last name also
});

console.log("-----------Maps---------------");

// OBJECTS:------------------------------
//Collection of arrays, strings, boolean are called objects

let myobj = {
  name: "Harsh",
  "last name": "jha", //want space in between key titles last <> name, keep it in string
  village: "kachhua",
  Occupation: "web developer",
  isActive: true,
  marks: [23, 65, 76, 86],
};

console.log(myobj); // it will print eveything in object
// and if we want to fetch only particular item from an object we can console like this
console.log(myobj.name);
console.log(myobj.isActive);
console.log(myobj.marks);
console.log(myobj["last name"]); // we can fetch the string key value ['last name']

// Javascript defines five types of primitive data types

/*   string
     number
     boolean
     null
     undefined   */

// Primitive Data Types:============
// In primitive Data Types, variable contain only single value means we can't put mutiple values in a variable
let myVar = 43;
let myVar2 = "string";
let myVar3 = true;
let myVar4 = null;
let myVar5 = undefined;

// Object - All JavaScript values, except primitives, are objects.

/* Booleans can be objects(if defined with the new keyword)
 Numbers can be objects(if defined with the new keyword)
 Strings can be objects(if defined with the new keyword)
 Dates are always objects
 Maths are always objects
 Regular expressions are always objects
 Arrays are always objects
 Functions are always objects
 Objects are always objects */
console.log("----------------------------------------");

// Objects are variables too. But objects can contain many values.
// But here in object we have stored multiple values in a single variable which is person
// Objects is a advance version of an array
var person = {
  //   !! Important - Key value pair in object
  // key       //value      // both are key value pairs
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
  // we can also put array in object too
  favMovies: ["Hum", "Sholay", "Dhoom"],
  // we can also use functions in object which are called method
  salary: function () {
    return 250000;
  },
  fullname: function () {
    // return person.firstName + " " + person.lastName;
    // or "this" is basically used here to specify that the first and last name belongs to this object
    return this.firstName + " " + this.lastName;
  },
  // We can also use object in this object
  object: {
    city: "Delhi",
    country: "India",
  },
};

// You can add new properties to an existing object by simply giving it a value.
person.nationality = "Indian";
console.log(person.firstName + " " + person.lastName + " " + person.age);
//or
console.log(
  person["firstName"] + " " + person["eyeColor"] + person.nationality
);

// document.write(person.favMovies);  //It will not work
// We can retrieve the particular array using its index in object
console.log(person.favMovies[2]);
// This is how we can call methods of an object
let salary = person.salary();
console.log(salary);
// calling the function directly without storing the return value into the variable
console.log(person.fullname());

// We can retrieve the objects in object
console.log(person.object.city);
console.log(person.object.country);

// Object Destructuring
let bioData = {
  name: "harsh",
  age: 25,
  language: "node.js",
  hob: {
    first: "playing",
    sec: "making videos",
  },
};

console.log(`My name is ${bioData.name}`); // Without Destructuring

// It is very important to put the variable name same from object keys in bioData while declaring
// let { name, age, language } = bioData;

// console.log(`After des name is ${name}`);
// console.log(`After des age is ${age}`);
// console.log(`After des language is ${language}`);

// or we can also declare the variable first then assign the keys
let language, age, name;

// ({ age, language, name } = bioData);

// console.log(`After des name is ${name}`);
// console.log(`After des age is ${age}`);
// console.log(`After des language is ${language}`);

// And if we don't want matching name variables from object keys we can to this way

({ age: myAge, language: myLanguage, name: myName, hob } = bioData);

console.log(`After des name is ${myName}`);
console.log(`After des age is ${myAge}`);
console.log(`After des language is ${myLanguage}`);

// We get the same result by using all three different methods

console.log(`i love ${bioData.hob.sec}`);

console.log(`i love ${bioData.hob["sec"]}`);

// Accessing the key of hob object which is in bioData object with the help of obj destructuring
console.log(`i love ${hob.sec}`);

// Here we have to different functions we'll create new object using object destructuring method

const add = function (a, b) {
  return a + b;
};

const sub = function (a, b) {
  return a - b;
};

// Now we have both functions in object with key name "add" and "sub" stored in funcObject variable
let funcObject = { add, sub };
console.log(funcObject); // result { add: [Function: add], sub: [Function: sub] }

// now we can call the methods in same way like we used to call the methods in objects
console.log(funcObject.add(5, 5)); // result 10
console.log(funcObject.sub(10, 5)); // result 5

// ------------------- Object Keys, Values and Entries -------------------------
// follow this link to understand more about Obj.keys/values/entries https://www.youtube.com/watch?v=3s0YFgxuOV0
// Here we have an object stored in sales variable

const sales = {
  John: 30,
  Sally: 40,
  Tobby: 45,
  Mad: 70,
  King: 20,
};

// It will create an array of "keys"
console.log(Object.keys(sales)); // result [ 'John', 'Sally', 'Tobby', 'Mad', 'King' ]
// It will create an array of "values"
console.log(Object.values(sales)); // result  [ 30, 40, 45, 70, 20 ]
// It will convert the object into an array and also it creates an array of "key and value pair"
console.log(Object.entries(sales));
/*  result

 [
    [ 'John', 30 ],
    [ 'Sally', 40 ],
    [ 'Tobby', 45 ],
    [ 'Mad', 70 ],
    [ 'King', 20 ]
  ]

*/

// we are grabbing the value from above array like index 0th is this ['john', 30] from the whole array and again index 0th from this ['john', 30] array is "john"
console.log(Object.entries(sales)[0][0]); // result John
console.log(Object.entries(sales)[0][1]); // result 30
console.log(Object.entries(sales)[1][0]); // result Sally
console.log(Object.entries(sales)[1][1]); // result 40

console.log(
  "------ Custom function for adding all the key values ---------------"
);

// Here we have created a custom function name "sumSales"
function sumSales(sales) {
  // Here we have a variable called sum and number stored in this variable
  let sum = 0;

  for (let valuee of Object.values(sales)) {
    // Object.values(sales) will return all the numbers in array
    // In valuee we are getting all the numbers in iteration (one by one)

    /* 
        'Incrementing operators'
        // ! we can increment our number from both the ways 
        let a = 45;
        //! both will increment the number by 1
        a += 1;
        a++;
        console.log(a);
        
    */

    //by the above example what we are doing is adding the numbers which we are getting in valuee into sum
    // ex: first we'll get "30" in "valuee" and we have "0" stored in "sum" so it will add the value to current value of sum like this 0+30 = 30 again it goes like 30+40 = 70 and so on
    sum += valuee;
  }

  return sum; // and when the iteration end it will return the sum of all numbers
}

console.log(sumSales(sales)); // result 205

console.log(
  "------ Custom function for iterating all the key values pair ---------------"
);

function personSales(obj) {
  // used object destructuring method to store both key and value pair into keyy and valuee variables
  for (let [keyy, valuee] of Object.entries(obj)) {
    console.log(`${keyy} had ${valuee} sales`);
  }
}

console.log(personSales(sales));

// -------------------------- Advance use of object.entries ----------------------------

let tokenDark = {
  blue: {
    fir: "#aaaa",
    sec: "#bbbb",
    thr: "#cccc",
  },
  green: {
    for: "#dddd",
    fif: "#eeee",
    six: "#ffff",
  },
  yellow: {
    sev: "#gggg",
    eig: "#hhhh",
    nin: "#iiii",
    // ten: "#oooo",  to check key.length in forEach loop
  },
};

// console.log(Object.entries(tokenDark)); // ['blue', {…}] ['green', {…}] ['yellow', {…}]

// console.log(Object.keys(tokenDark)); // ['blue', 'green', 'yellow']

const reversedTokens = {};

// with the help of object destructing we are the key in 'key' variable and value in "val" variable
Object.entries(tokenDark).forEach(function ([key, val]) {
  // console.log(key); // it will console only key without putting it in array  blue, green , yellow
  // console.log(typeof key); // String

  // console.log(val); // it will console the values corresponding to that key in 'object' {fir: '#aaaa', sec: '#bbbb', thr: '#cccc'}, {for: '#dddd', fif: '#eeee', six: '#ffff'}, {sev: '#gggg', eig: '#hhhh', nin: '#iiii'}
  // console.log(typeof val); // object

  //! Now we are converting the "keys" in array
  const keys = Object.keys(val);
  // console.log(keys); // converting the object which we have in "val" only "keys" in array ['fir', 'sec', 'thr'] , ['for', 'fif', 'six'], ['sev', 'eig', 'nin']

  //! Now we are converting the "values" in array

  const values = Object.values(val);
  // console.log(values); // converting the oject which we have in val only values in array ['#aaaa', '#bbbb', '#cccc'], ['#dddd', '#eeee', '#ffff'], ['#gggg', '#hhhh', '#iiii']

  //! It will console "3" three times because it is is forEach loop and it will fetch the length of each 3 arrays stored in "keys" variable
  const length = keys.length; // 3 times 3 "total arrays in 3" and the total number of strings in that array is 3
  // console.log(length); // as we know we are iterating each array one by one so it will calculate length of each array first array is ['fir', 'sec', 'thr'] which have 3 strings so the length is 3 same goes with second array ['for', 'fif', 'six'] is 3 and same for 3rd as well
  let reversedObj = {};

  for (let i = 0; i < length; i++) {
    // this iteration will iterate 3 times for each array and 9 times in total for each value in "keys"
    /* 
   * first iteration in array :- ['fir', 'sec', thr]
   condition = i<3
   result :- keys[0] = fir , keys[1] = sec, keys[2] = thr

   * second iteration in array :- ['for', 'fif', 'six']
   condition = i<3
   result :- keys[0] = for , keys[1] = fif, keys[2] = six

   * third iteration in array :- ['sev', 'eig', 'nin']
   condition = i<3
   result :- keys[0] = sev , keys[1] = eig, keys[2] = nin

   console.log(keys[i]) - fir, sec, thr, for, fif, six, sev, eig, nin
   */
    // console.log(keys[i]);

    /* 
   * first iteration in array ['#aaaa', '#bbbb', '#cccc']
    condition = i<3
    result :- values[3-0-1] = values[2] = #cccc , values[3-1-1] = values[1] = #bbbb, values[3-2-1] = values[0] = #aaaa

   * second iteration in array ['#dddd', '#eeee', '#ffff']
    condition = i<3
    result :- values[3-0-1] = values[2] = #ffff , values[3-1-1] = values[1] = #eeee, values[3-2-1] = values[0] = #dddd

   * third iteration in array ['#gggg', '#hhhh', '#iiii']
    condition = i<3
    result :- values[3-0-1] = values[2] = #iiii , values[3-1-1] = values[1] = #hhhh, values[3-2-1] = values[0] = #gggg

    console.log(values[length - i - 1]) - #cccc, #bbbb, #aaaa, #ffff, #dddd, #iiii, #hhhh, #gggg
  */
    // console.log(values[length - i - 1]);

    //! reverseObj[fir, sec, thr and so on ] = values[#cccc, #bbbb, #aaaa and so on]

    //! reversedObj is an empty object which we've initiated above with the help of this code we create a new object (reversedObj) by reversing the order of values in an array (values) and associating them with specific keys from another array (keys). It is important to note that both keys and values arrays should have the same length for this operation to work correctly
    reversedObj[keys[i]] = values[length - i - 1];
    // console.log(reversedObj); // it will show the process of reversing the values[2] corresponding keys[0]
  }

  /* first iteration (forEach loop) - {fir: '#cccc', sec: '#bbbb', thr: '#aaaa'} - first time first object stored in reverseObj variable */
  /* second iteration (forEach loop) - {for: '#ffff', fif: '#eeee', six: '#dddd'} - second time  second object stored in reverseObj variable */
  /* third iteration (forEach loop) - {sev: '#iiii', eig: '#hhhh', nin: '#gggg'} - third time third object stored in reverseObj variable */
  // console.log(reversedObj);

  //! and here this consists 3 keys in 'key' parameter "blue", green, yellow
  // console.log(key);
  // console.log(reversedObj);

  //* it will set reversed values corresponding to that keys like - for key "blue" : value will be {fir: '#cccc', sec: '#bbbb', thr: '#aaaa'} for key "green" : {for: '#ffff', fif: '#eeee', six: '#dddd'} and for "yellow" {sev: '#iiii', eig: '#hhhh', nin: '#gggg'}
  reversedTokens[key] = reversedObj; //! after that we are storing this reversedTokens in empty object "reversedTokens" which we defined above

  //*********** it will not work in this context you only square brackets not dot notation */
  // console.log(reversedTokens.key); //XXXXXXXXXXXXXXXXXXX
  /* Square Bracket Notation (Correct for Dynamic Property Access):
      When you use square bracket notation, like reversedTokens[key], it treats key as a variable and uses its value to access the corresponding property in the reversedTokens object.
      For example, if key holds the value 'someKey', then reversedTokens[key] is equivalent to reversedTokens['someKey'], which accesses the property named 'someKey' in the reversedTokens object. */

  // reversedTokens[key] is same like we did to fetch key "values" in object like this
  // console.log(reversedTokens["blue"]); // another way of fetching key values in Object person.firstname or person['firstname']
  // console.log(reversedTokens["green"]);
  // console.log(reversedTokens["yellow"]);

  /* 
  For example, let's assume keys is ['a', 'b', 'c'], and reversedObj is { a: 3, b: 2, c: 1 }. After executing the line reversedTokens[key] = reversedObj; in an iteration, the reversedTokens object will look like this:

  reversedTokens = {
  'a': { a: 3, b: 2, c: 1 },
  'b': { a: 3, b: 2, c: 1 },
  'c': { a: 3, b: 2, c: 1 }
}
 
  */
});

// console.log(tokenDark);
//! BEFORE REVERSED RESULT
/* 
{
  blue: {
    fir: "#aaaa",
    sec: "#bbbb",
    thr: "#cccc",
  },
  green: {
    for: "#dddd",
    fif: "#eeee",
    six: "#ffff",
  },
  yellow: {
    sev: "#gggg",
    eig: "#hhhh",
    nin: "#iiii",
  },
};
*/
// console.log(reversedTokens);
//! REVERSED RESULT
/* 
  blue: {
    fir: "#cccc",
    sec: "#bbbb",
    thr: "#aaaa",
  },
  green: {
    for: "#ffff",
    fif: "#eeee",
    six: "#dddd",
  },
  yellow: {
    sev: "#iiii",
    eig: "#hhhh",
    nin: "#gggg",
  },

 */
