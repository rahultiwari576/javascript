console.log('Math-object');

let x = 3;
let y = 6;
// This is how we do normal calculations with numbers in js
z = x + y;
z = x - y;
z = x / y;
z = x * y;

// Exploring the Math-object
// To get all the functions of Math object we just need to put it into variable like this down below note- make sure math object starts with capital M
z = Math;
console.log(z)

// To achieve the real value of pi we can do with the help of math object 
z = Math.PI;  //3.14159

// To achieve the euler's number we can to using math object
z = Math.E;

//!!Important
// These all three functions round, ceil, floor is used to convert it into intergers
// An integer is a number with no decimal or fractional part, from the set of negative and positive numbers, including zero.

// Round function will round the decimals up and down depending on the value
z = Math.round(5.5); // Result will 6
z = Math.round(5.4); // Result will 5
z = Math.round(5.7); // Result will 6


// Ceil function will catch the next bigger integer of the number
z = Math.ceil(5.1);  // Result will 6
z = Math.ceil(5.7);  // Result will 6
z = Math.ceil(5);  // Result will 5 !Important no change result will remain same
z = Math.ceil(-5.8) // Result will be -5 as we know in negative numbers -5 is greater than -6
console.log(z)
// for better understanding of floor and ceil function
// 3
// 2.8
// 2
// 1
// 0
// -1
// -2
// -2.7
// -3

// floor function will catch the next smaller integer of the number
z = Math.floor(5.1);  // Result will 5
z = Math.floor(5.7);  // Result will 5
z = Math.floor(5);  // Result will 5 !Important no change result will remain same
z = Math.floor(-5.6) // Result will be -6 as we know in negative numbers -6 is smaller than -5


// abs function it will convert the negative value into positive and the positive value will remain same
// In our example, we are given -3. This number is 3 units away from 0, and thus the absolute value of -3 is 3. If a number is negative, its absolute value will be the positive number with the same magnitude. If a number is positive, it will be its own absolute value.
z = Math.abs(-3);

// sqrt function is used to acheive the square root of the number
z = Math.sqrt(144); // 12*12 = 144 so the square root of 144 is 12

// pow function is literally used like we do in maths like 2 to the power 3 means 2*2*2
z = Math.pow(2, 3); // 2*2*2 = 8

// min function is used to find the minumum or smaller value present in the set of numbers
z = Math.min(3, 5, 7, 3, -1); // -1 is the smallest value in this set

// max function is used to find the maximum or greater value present in the set of numbers
z = Math.max(3, 5, 7, 3, -1); // 7 is the greater in this set


// random function is used to generate random numbers
// ! Important - The number lies between 0 to 1
z = Math.random();

// If we want to generate the random numbers between 0 to 100 we can use this formula
// (100 * 0.8682886570492814 = 86.82886570492813)
z = 100*Math.random();

// And if we want to generate the random number between 50 to 100 we can use this formula
// As per bodmas rule we know first we do caluculation of brackets then multiplication then addition
// Example:- 10 + (90)x0.2 = 10 + 18 = 28

// Example:- 10 + (90)x0 = 10 + 0 = 10 - as we can see the number doesn't go below 10
// a = 10+ (100-10)*Math.random();  result will lies between 10 to 100;

// In this result lies between 50 to 100
let a = 50;
let b = 100;
z = a + (b-a)*Math.random();
console.log(z + " line-89")

// Using these functions in random function will help to remove decimals and convert it into integers
z = Math.ceil(50 + (100-50)*Math.random());
z = Math.floor(50 + (100-50)*Math.random());
z = Math.round(50 + (100-50)*Math.random());

console.log(z); 