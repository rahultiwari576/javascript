// we can also write our javascript program in external javascript file too 
// for good practice dont forget the semi colon in js 
// here we are printing string 
console.log('Imported javascript file');
document.write('If we want to viwe the result on our webpage we use document.write')
console.log('if we want to view the result on our console section we use console.log')

// we can use javascript for calculating also 
// for calculation we will not put string in the bracket 
// here we are printing integer in console 

// ---------------------------------------------------- 
// if we want check how much time it will take to run my code we can use time console 
// this is the first syntax of console time second syntax is written below with the name of time end console
// remember one thing we must put an identifier in our syntax to view the results 

console.time('your code took')


console.log(1+96);

console.log(56*3);

// Boolean value 

console.log(true);

// here we are printing an array in console log

// for more clarification on array check this link - www.youtube.com/watch?v=oigfaZ5ApsM&ab_channel=ProgrammingwithMosh 

// an array is an object we can store values in array we can declare an array by using square brackets 
console.log([46,1,3,6]);

// it is an Object in javascript and sytax is written below 
console.log({harsh: 'this', marks:50});

// if we want our js object print in tabular form we can use this syntax  
console.table({harsh: 'this', marks:50});  // !important

// if we want show warning in js console we can use this syntax 
console.warn('This is a warning');

// here we are using second syntax of time console to check our running time of code
console.timeEnd('your code took')

// if we want to erase our whole console we can use this syntax 
// console.clear() 

// if we want to check the condition of our code we can use console assert 
// if this condition is true we can throw an error that this is not possible we can do this by using console assert
// console.assert(age>200, 'Age>200 This is not possible'); This is the syntax

// for simple understanding this below condition is false because we have studied in schools that 566 is not greater than 200 but this is not true 566 is greater than 200 that is why it will throw an error 

console.assert(566<200, 'Age>200 This is not possible'); //asertion failed
console.assert(566>200, 'Age>200 This is not possible'); //This condition is true that is why it will not throw any error and this condition is matches the above assert syntax


// we can also write an error message in console by using this syntax 
console.error('This is error message for demo purpose')