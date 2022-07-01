// Primitive data types :-

//String
let name='Harsh';
console.log(`My string is ` + name);
// here we can know its data type by using type of operator (here data type is string)
console.log(`My data type is ` + (typeof name));



//Numbers
let marks = 45.5;
console.log(marks);
// here we can know its data type by using type of operator (here data type is number)
console.log(`My data type is ` + (typeof marks));



//Boolean (true (1) or false (0) ) - must be in small letters
let isDrive = true;
// here we are using camelCase to use emmet very eaisly 
console.log(isDrive);
// here the data type is Boolean
console.log(`My data type is ` + (typeof isDrive));



// null - here is a exception of null that is null is primitive data types but it will return the data type as object(boogus)
let nullVar = null;
console.log(nullVar);
console.log(`My data type is ` + (typeof nullVar));



// undefined 
let unDef = undefined;
console.log(unDef);
console.log(`My data type is ` + (typeof unDef));



// Reference Data Types 
// In Reference data type we can add any primitive data type and it will make no changes to its data type that is object

// Arrays 
let myArr = [23,54,6,65,true,`string`];
console.log(myArr);
console.log(`My data type is still an ` + (typeof myArr) + ` even you put primitive data type in me `);

// Object literals 

let stMarks = {
    harsh: 39, 
    deepank: 23, 
    // if we want space in between we can use single quote only 
    'gulshan rathore': 10
}

console.log(stMarks)
console.log(`My data type is ` + (typeof stMarks));


// function ( Data type is function)
function findName() {
    
}
console.log(`My data type is ` + (typeof findName));


// Date 
let date = new Date();
console.log(date);
console.log(`My data type is ` + (typeof date));








