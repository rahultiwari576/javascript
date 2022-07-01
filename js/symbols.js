console.log('Symbols in Javascript');

/* 
These are called primitive data types in Js :-

var x = "Hello World";               String
var x = 25;                          Number
var x = true;                        Boolean
var x = ["HTML","CSS","JS"];         Array
var x = {first:"Jane", last:"Doe"};  Object
var x = null;                        Null
var x;                               Undefined 

*/

// There is one more data types in primitive data type is called symbol.
let symbol = Symbol();
// And we can place any string or number in round braces these are called identifiers or description
symbol = Symbol('hello')

console.log(symbol);
console.log(typeof symbol);

// Both variable stores the value in string
let str1 = "harsh";
let str2 = "harsh";
console.log(str1 === str2); // It returns true

// Symbols stores a unique value it means both varialbles are not same even if it stores the same value
let sym1 = Symbol('harsh');
let sym2 = Symbol('harsh');

console.log(sym1 === sym2); // So it returns false

// We can't print the symbol value directly into our html page to do so we have to use a method of symbol which is .description
let newSymbol = Symbol('Print this value')
console.log(newSymbol.description);
// document.write(newSymbol.description) // Print this value gets printed on our html page

// We can also convert the symbol into string using .toString() method
console.log(newSymbol.toString());

// This is how we use symbols in an object 

let symObj = Symbol('This is object');
let secSymbol = Symbol('Second Symbol')

let obj = {
    name: 'Harsh',
    age: 25,
    'last name': 'jha',
    'age': 35,
    [symObj]: 2 // whenever we want to use symbol in object we have to put it into [] braces.
}

// We can also add symbol from outside in obj Object
obj[secSymbol] = 87;

// This is how we can fetch the symbol from obj (object)
// We get all the value corresponding to its keys
console.log(obj.name);
console.log(obj.age);
// for string keys
console.log(obj['last name']);
console.log(obj['age']);
// but in the case of symbol we can't fetch the values by using "object.keyName" we have to put it into square braces object[keyname] 
console.log(obj[symObj]);
console.log(obj[secSymbol]);

console.log(obj);

// In forIn loop symbols are skipped it means we can't get keys and values of symbols

for (const key in obj) {
    // console.log(key); // for keys {get each index(name, age, last name, age) in loop}
    console.log(obj[key]); // for values
}