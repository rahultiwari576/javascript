console.log('Data Type and Coercion')

// CONVERSION OF STRINGS:--------------------------------------

// here the data type is number if we want to change our data type to string we can use string function 

let myVar;
// here we converting the data type from number to string don't forget to use captital S in string for conversion
myVar = String(45);
// console.log(myVar);
// console.log(typeof myVar);

// or 

console.log(myVar,typeof myVar);


// CONVERSION OF BOOLEAN INTO STRING:--------------------------------------

// we can also convert boolean to string 

let booleanVar;
booleanVar = true;
console.log(booleanVar, typeof booleanVar);

// converting to string by using string function and don't forget captital S in string otherwise it will throw an error and in boolean the value of true is 1 and value of false is 0
let booleanVarr;
booleanVarr = String(true);
console.log(booleanVar, typeof booleanVarr);

// CONVERSION OF NEW DATE INTO STRING:---------------------------------------


// we can do same for date also and if we want to convert it to string we can use string function
let date = String(new Date());
console.log(date, typeof date);

// CONVERSION OF ARRAY INTO STRING:--------------------------------


// and also same for array 
let arr = String([1,2,3,4,5]);
console.log(arr, typeof arr);

// the benifits of converting array into string is that we can use string functions in array for example 
let arra = String([2,3,4,5,6]);
// dot length is a function of string so we can know the exact length of string including characters but square brackets are not counted
console.log(arra.length, typeof arra);

// and here is the another example of array with no string conversion 
let ar = [2,6,6,7,7];
// here the length of array is 5 because no special characters are counted 
console.log(ar.length, typeof ar);


// TO STRING METHOD OF CONVERSITON INTO STRING:---------------------------



// There is another method also to convert into strings which to tostring method

let i = 3;
// here we are converting number into string by using .toString method don't forget Capital S and dot 
console.log(i.toString());

// we can change it to string pretty much everything by using toString function 
let r = true;
console.log(i.toString());

let g = new Date();
console.log(g.toString());

// CONVERSION OF STRING INTO NUMBERS:-------------------------------


// Now here we learn about how to convert string into number by using number function it is simliar to string function 
let str = '45';
// here we can change the variable name because we are using let but we can't do this in const 
str = Number('17d6') 
// if we put any letter in between numbers it will not convert the string into number and give the return message NaN - not a number 

// CONVERSION OF BOOLEAN INTO NUMBER:-------------------------

// here we are converting the boolean into number and it will convert into number with the true value of 1 (false = 0)
str = Number(true) 
console.log(str, typeof str)

// here the example of converting decimal numbers in string into number by using number function 
let x = Number('3.4545');
console.log(x, typeof x);
// it will print the whole number including decimals by using number function 

// TO FIXED FUNCTION OF NUMBER:------------------------------

// here tofixed is also a property of number that is .toFixed it allows the numbers after decimal to be fixed (default value is 0 if bracket is blank)
let fixed = Number('64.6565656565656565656');
// here we are allowing only 4 digits to be shown after decimal by using to fixed function 
console.log(fixed.toFixed(4), typeof fixed);


// PARSE INT AND PARSE FLOAT:-------------------------------------


// Here parse int convert string into interger number (note - decimals are not intergers that is why result will be only 45 and type is number in console)
let number = parseInt('45.5565');
console.log(number, typeof number);

// Parse float is also works in simliar manner but points to be noted for parse float are
// Note: Only the first number in the string is returned! 

// Note: Leading and trailing spaces are allowed.  

// Note: If the first character cannot be converted to a number, parseFloat() returns NaN. 

let float = parseFloat('45.5565 454 545');
console.log(float, typeof float);


// Type Coercion - it is nothing but adding a String or Number together or number number together and so on 
// here we are adding a string and number by using type coercion method 
let mystr = '454';
let myNum = 45;
console.log( mystr + myNum);






