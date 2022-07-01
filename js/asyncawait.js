console.log('Async Await in Javascript');



// We can make a normal function to async by just putting async before function

// An async function will always return a promise
// It means if the function will resolved this function will return the value

async function test() {
    return 'Hello';
}

// We do not require to call resolve or reject function in async function like we do in promise
// Here we are using .then function and it says that if the async test function is being resolved to this task which is defined in then function
// We are receiving the return value in result variable in "then function parameter"
test().then(function (result) {
    // And here we are consoling the return value which is stored in result variable
    console.log(result);
})

//or

// we can store the function into the variable the call it by using it variable name
// or we can use arrow function also, As we know if the statement is one liner we do not require parentheses and return
let variableFunc = async () => 'variable function Hello';

variableFunc().then((result) => {

    console.log(result);
})



//!----------------  Important-------------------------
// --------------- To test await method comment all the upper codes ---------------

// Await method in async function - The await method is useless without async method
// Understanding the code flow of await method in async function
async function demo() {
    console.log('B');
    // If we put the await method here it will hold all the next tasks(i.e D and E) and skip out of this function and will complete the rest task (here consoling F) and after completion it will get back to complete the incomplete task (i.e D and E)
    //! await is basically means wait until data received
    await console.log('C');
    console.log('D');
    console.log('E');
}

// As we know our compiler will run the console A first
console.log('A');
// After that it will call the demo function and it will console "B", "C"
demo();
// Then it will execute the last console F
console.log('F');

 

// Async Await method using fetch
async function fetchMethod() {
    // This fetch method will return "response" and it will store it into result variable
    // 2.flow - 2nd in console
    console.log('Message - 2 flow 2'); // --2
    // using await here which means it will hold the next task and get exist from this function and it will continue the 3. flow
    //! we use await twice first is for fetching response and second is for return json
    //! await is basically means wait until data received
    const result = await fetch("student.json");
    console.log(result) // --4
        // And here we are extracting the json data from response which we received in result variable into the students variable
        // 5.flow - 5th in console - it says if the fetching is complete only then run the console because of await method
    console.log('Message - 3'); // 5

    // we used await again here so it will exit the function and the "a" function is being called the flow 6. flow executed where it stores and return the json
     // to get the final data first we need to fetch the student.json in response then we parse this response into json using response.json()
    const students = await result.json();
    console.log(students); //6

    return students; //6
}

// 1.flow - 1st in console
console.log('Message - 1 flow 1'); // 1

let a = fetchMethod();

// 3. flow - 3rd in console
console.log('Message - 4 flow 3'); // 3

// after flow 1st the function will be called and flow 2nd continued which is in fetch await function
//and note this function "a" being called after 3rd flow "thrice". 
//! because we used "await" in result.json that's why when we called the function it shows promise pending
// 4.flow - 4th in console and it will get the response in promise in array (promise pending)
console.log(a); // 2  //4  //6





// Using then in async function
async function thenfetchMethod() {
    // to get the final data first we need to fetch the student.json in response then we parse this response into json using response.json()

    //! await is basically means wait until data received
    // fetching the data from api
    const response = await fetch("student.json");
    console.log(response)
    // storing the data in jsonStudents variable
    const jsonStudents = await response.json();
    console.log(jsonStudents);

    return jsonStudents;

    // or we can use one liner
    // return (await fetch("student.json")).json();
}

// We also need then ond catch function to specify that what to do after function is resolved or failed
// If the response return the promise successfully our "then" function will get executed otherwise catch function 


// thenfetchMethod(); // it will or also if we don't need to define what to do for fullfilment and what to do for failed


// or

thenfetchMethod().then((res) => {
    console.log(res);
}).catch((error) => {
    console.log('Getting some error');
})



// Try and catch method in Async Function
// To eleminate the defining of catch function over and over again for error we can just put it into try and catch function only for once
async function tryfetchMethod() {
    try {
        const res = await fetch("student.json");
        const tryStudents = await res.json();

        // console.log(tryStudents); //either use console or return at the same time
        return tryStudents;

    } catch (error) {
        console.log(error)
        console.log("getting error in try catch method")
    }

}

//! either use this with console or use .then with return
// tryfetchMethod() // to use this method we need to use console.log(tryStudents) instead of return

// or 

tryfetchMethod().then((res) => {
        console.log(res);
    }) // we do not require to add catch here because we've used try catch method