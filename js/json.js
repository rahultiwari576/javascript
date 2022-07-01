console.log('Json in Javascript');
/* 
*Important - we can do conversion only if the json is in right format

JSON.parse - Used to convert string into object
JSON.stringify - Used to convert object into string

*/

let jsonObj = {
    name: "Harsh",
    channel: "Code with harsh",
    friend: "Rohan Das",
    food: "Bhindi"
}

console.log(jsonObj);

// We can convert an object into string by using JSON.stringify method
let myjsonStr = JSON.stringify(jsonObj);
console.log(myjsonStr); // String

// Before tranporting the json object through network we have convert that object into string so that we can use all the properties of string like replace, slicing

myjsonStr = myjsonStr.replace('Harsh', 'Tom');
console.log(myjsonStr); // New String

// After manupulating the string we can convert the string back to an object by using json.parse method

myjsonObj = JSON.parse(myjsonStr);
console.log(myjsonObj); // Object