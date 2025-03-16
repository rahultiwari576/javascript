console.log("Variables in javascript");

// follow this link for more clarification on variables https://codeburst.io/learn-let-var-and-const-in-easiest-way-with-guarantee-e6ecf551018a

// we can create the variables by using three keywords
// 1. var
// 2. const
// 3. let

// var is function scoped it means we can access that variable from anywhere in the function even if the variable is present in block scope

function hi() {
  if (true) {
    var yellow = "hg";
    yellow = "gh";
  }
  console.log(yellow);
}

hi();

// we use varibales to store the information in variables
// here we stored the name harsh in variable name
var myName = "Harsh";
// now we can call the name harsh by using console and variable name
console.log(myName);

// more examples of variable by using var keywords

var city = "Delhi";
console.log(city);

// we can also make string by using back tick so we can use quotes in our string

var description = `Harsh Jha "Web developer"`;
console.log(description);

// we can also write our js variables in this below method

var myname = "Harsh";
// and here we are informing the interpretor that we have only declared the variable but value is not assigned yet and in console we get the message that undefined means variable is declared but value is not assigned
var lastname;
// and here we have assigned the value for the lastname variable
lastname = "Jha";
// here we are using interger in variables without quotes so we can do arthemetic operations
var marks = 34;

// and we can also change the value of variables in var like here we are changing the value of marks
var marks = 99;
// so now we get the value of marks is 99 not 34

// so if we call by using console here we can do like this
console.log(myname, lastname, marks);

// Rules for creating javascript variables

// we cannot start with numbers
// we can start with letter, number _ and $
//they are case sensitive

// here we are using const in const we can also create variables but there is condition in const that we cannot change the value of variables like var

const ownersName = `Ratan Kumar Jha`;
console.log(ownersName);

// const ownersName = `Ratan Kumar Jha`;
// ownersName = `Harsh kumar Jha`  // we will get the error that ownerName is already declared
// console.log(ownersName);

// let is a block level scope means we can change the value of variables in this scope only not outside the scope
// by using let we can create local variables and it will work only in scope only not outside of the scope

{
  let city = `Mumbai`;
  city = `kolkata`;
  console.log(city);
}

// but if we put the city out side of the scope it will not fetch the city name which is in the scope that is kolkata it will fetch from global scope that is delhi and here global scope is var
console.log(city);

// collection of strings numbers or anything we called them an array
// push is a fucntion to insert the value in array

const arr1 = [12, 22, 33, 65, 6];
arr1.push(55); // we can push numbers, objects, array to the arr1 array
// in const we can add elements but we cannot change the whole value of arr1
// arr1 = [23, 45, 21, 4] ṭhis will throw an error
console.log(arr1);

// Most common programming case types

// camelCase - ownersName  (mostly used)

// snake_case - owners_name

// kebab-case - owners-name

// PascalCase - OwnersName
