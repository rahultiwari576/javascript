console.log('Generators in Javascript');

// Generators are basically a function but we create it by using "*"

// Generators provides full control on all statements which is present in the function
// We can pause or skip the statement using 'yield' keyword in the generators

function* generateit() {
    console.log('First Message');
    // yield means pause the statement and return an object (value and done) here we can run this statement only by using next() method
    yield 'yield number 1'
    console.log('Second Message');
    yield 'yield number 2'
    console.log('Third Message');
    yield 'yield number 3'
    console.log('Forth Message');
    yield 'yield number 4'
    console.log('Fifth Message');
    yield 'yield number 5'

}

let gen = generateit();
console.log(gen); // it will return a generator
// Here we used the predefined method of generator "next()"
// After running the next method we'll get two key of object "value" and "done" 
// if the key "done" consist value "false" it means our statement or loop is not complete yet and we can retrieve the values of yield by using .value after the next().value

// The statment of generator will not execute untill we run the next() function or method

console.log(gen.next()); // "First Message and yield number 1, done false"
console.log(gen.next().value); // "Second Message and yield number 2 only value"
console.log(gen.next()); // "Third Message and yield number 3, done false"
gen.next(); // And we can skip the forth "yield" by using only next method without consoling
console.log(gen.next()); // "Fifth Message and yield number 5, done false"
console.log(gen.next()); // "value: undefined and done:true" it means we have gone through all the statements of generators

console.log('---------Generators using for of and while loop----------');

// using "for of" loop in generators
function* genloop() {
    yield 'yield 1'
    yield 'yield 2'
    yield 'yield 3'
    yield 'yield 4'
    yield 'yield 5'

}

// We can iterate all yields at once in generators by using for of loop
let genl = genloop();
for (const any of genl) {
    console.log(any);
}


// using while loop

// Short example of while loop using condition "true" in it. Hence it will hang the opeator as the loop will never stop because of condition given in it
/* 
let h = 0;
while (true) {
    console.log(h + 1);
    h++;
} */

function* genwhile() {
    let nextNum = 200;

    // Taking condition "true" in while loop means the while loop will generate the numbers unlimited times
    while (true) {
        yield (nextNum++) // Increment the number by 1 for each iteration
    }
}

let genw = genwhile();
// We can generate unlimited numbers after calling next() method using while loop in generators
// console.log(genw.next());
// console.log(genw.next());
// console.log(genw.next());
// console.log(genw.next());
// console.log(genw.next());
// console.log(genw.next());
// console.log(genw.next());
// console.log(genw.next());
// console.log(genw.next());

// or we can use for of loop to iterate the numbers at once without consoling next() again and again
console.log('----Break Method using while and for of loop-----');

for (const value of genw) {
    // Using if condition to prevent loop from hanging because we are incrementing the number by 1 without any conditon given in while loop

    // Here we are saying that if the value becomes greater than 205 break the loop
    // break will only work when the condition will get true, So when the value becomes 206>205 break will execute !! Important 
    if (value > 205) break; {
        console.log(value);
    }

    // For example: Here we said that if value is less than 205 break the loop so the will not excute because the loop will get break with first iteration as the condition we provided gets true 200<205
    // if(value < 205) break;{
    //     console.log(value);
    // }
}


console.log('--------Passing arguments in generator----------');

function* genArg() {
    let result;
    result = yield;
    // We can also do multiplication using yield value 
    result = (yield) * 10;
    // We can also create arrays of yields for multiple values
    result = [yield, yield, yield]
    console.log(`Value on 2 index : ${result[2]}`); // result will be 200 as it coming on 2 index in array
    // We can also get strings in yield array
    result = [yield, yield, yield];

    console.log(`Result: ${result}`);
}

let genA = genArg();
genA.next(); // First step to initiate the generator
// Passing a number as an argument in next function, This value will set for yield which is in generator 
genA.next(100); // This is for first yield

// Passing the value "500" for 2nd yield to do multiplication
genA.next(500); // This is for second yield in gen function 

// Passing the multiple numeric values in arrays of yield
genA.next(100);
genA.next(200);
genA.next(300);

// Passing the multiple string values in arrays of yield
genA.next('Php');
genA.next("Node");
genA.next("Js");


console.log('-------Direct method of reading the properties of yield--------');

function* genD() { // We can also set the value of yield directly and read the yields step by step by using next function method
    yield 55;
    yield ['node', 'js', 'python'];
    // If we want to read all the value one by one we can use '*' symbol in yield
    yield* ['hello', 'hi', 'bye'];

    yield 'Angular'
    yield 'React'
    yield 'Php'
    yield 'Java'
}

genDirect = genD();
console.log(genDirect.next()); // Returns numeric value 55
console.log(genDirect.next()); // Returns an array of stings

// getting the array value one by one by calling next() for each string in array
console.log(genDirect.next()); // hello
console.log(genDirect.next()); // hi
console.log(genDirect.next()); // bye

// Getting the values of all yields at once using spread operator
console.log(genDirect.next()); // Angular
// With the help of spread operator it will wrap up all the rest yields in array
console.log([...genDirect]);

console.log(genDirect.next()); // Return done:true


// Return method in generator function
console.log('-----Return Method in Generator Function-------');
// Return method is a predefined method of generator function and it is used to end the iteration

function* returnGen() {
    yield 'Angular'
    yield 'React'
    yield 'Php'
    yield 'Java'
}

returnG = returnGen();

console.log(returnG.next()); // Anugular
console.log(returnG.return('Ending Now----')); // Return method will end the iteration
console.log(returnG.next()); // done: true

