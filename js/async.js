console.log("Asynchronous Programming in Javascript");

// Here we are creating for loop to check synchronous method.
// Because of synchronous method "Done Printing" this will not get printed untill the loop is completed that is why we use asynchronous method.


// for (let index = 0; index < 4555; index++) {
//     console.log("This is index number" + index);
    
// }

// console.log("Done Printing");


// And her we are creating loop to check Asynchronous method
// Putting the loop in setTimeout function - with the help of setTimeout call we converted the synchronous method into asynchronous method
// So that "Done Printing" will get printed first and loop will not block our console log

setTimeout(() => {
    for (let index = 0; index < 4555; index++) {
        console.log("This is index number" + index);
        
    }
}, 100);

console.log("Done Printing")