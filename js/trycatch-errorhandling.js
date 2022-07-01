console.log('Try Catch and Error Handling in Javascript');

/*
Types of errors:
TypeError = occurs when a variable or parameter is not of a valid type.
SyntaxError = occurs when there is an error in syntax.
ReferenceError = occurs when there is an invalid reference.
EvalError= occurs when there is an error in global function.
RangeError=  occurs when a numeric variable or parameter is outside of its valid range.
*/


// Pretending this is coming from server as response
let a = 'Defined'; // This is for if statement
// let a; // This is for else statement
if (a != undefined) {
    console.log('This is not undefined or we can say this is defined');
}
else {

    // ! Important - If we want to throw custom error to stop the code flow when the json is not comming in the right format from server we can do it by using custom error
    throw new Error('This is undefined (Error from code)');
}

// Here if we do anything is not correct, the catch method will get executed without giving a red error message (predefined error which stops the code flow) in console

// So to prevent our code flow from syntax error or any kind of error we use "try and catch method"

try {
    // sfsfsfsfsssf 
    console.log('We are inside try block');
    nofunction();
} catch (errorAnyv) {
    console.log('Are you okay');
    // And if we want to print the error in text form
    console.log(errorAnyv);
    // And if we want to know which type of error we are getting we can do it like this
    console.log(errorAnyv.name);
    // And if we want to get the message of an error only we can do by this way
    console.log(errorAnyv.message);
} finally{
    console.log("No matter what is in try or catch finally will always execute");
}