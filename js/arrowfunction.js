console.log('Arrow function in Javascript');

// This is the example of regular function

const harsh = function harsh() {
    console.log('This is the best person ever');
};
// We can also call the function by using variable name in which the function is stored
harsh();


// Arrow Functions -------------

const arrow = () => {
    console.log("I am an arrow function");
}
arrow();


// This arrow function will return a string
const greet = () => {
    return "Good Morning";
}
// Consoling the arrow function greet
console.log(greet());


// This is the shorthand of returning value in arrow function
// We do not require to write return and parenttheses for one liner code
const onelinerFunction = () => "Returning one liner without using parenttheses";

console.log(onelinerFunction());


// When we are returning the object we require parentheses in arrow function
const object = () => ({ name: harsh });

console.log(object());


// In single liner arrow function we do not require parentheses for single parameter function
const oneArgu = one => "For argument " + one;
console.log(oneArgu(1));

// In single liner arrow function we do require parentheses for multi parameter function
const multiArgu = (one, string) => "For argument " + one + " and " + string;
console.log(multiArgu(1, "multi"));