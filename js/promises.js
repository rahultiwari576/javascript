console.log('Promises in Javascript');
//* Promise function using simplified method

let complete = true;

// We can create promise by using "new Promise keyword" which have two parameters "success" and "failed" in callback function
let prom = new Promise(function(success, failed) {
    // if complete is defined and it returns true
    if (complete) {
        // calling the function parameter "success with a message in it"
        success('I am successful');
    }
    // if complete is not defined and it returns false
    else {
        //calling the function parameter "failed with a message in it"
        failed('I am failed');
    }
});

// This promise function is different from normal function that is why we don't use round braces  in console for calling function actually it is an object 

// if the complete variable return 'true' it will fetch the success function "message" and if the complete variable return "false" it will fetch the failed function "message".

console.log(prom) 

//*---------------------- then and catch method ---------------------------------
//! Now instead of storing the function is variable like prom we can create directly a function named "Prom" which returns promise and we have also defined the variable "complete" in prom function parameter which returns true

function prom(complete) { // here we getting true or false from function call "prom" parameter
    // When we call the prom function it wil return the promise method
    return new Promise(function(success, failed) {
        // if "complete" is defined or it returns true
        if (complete) {
            // Here we are sending the parameter "I am successful" message to outfullfilment function as an argument which means this function is defined then
            success('I am successfully fetched');
        }
        // if "complete" is not defined or it returns false
        else {
            // And here we are sending the parameter "I am failed" message to onrejection function as an argument and this function is defined for catch
            failed('I am failed to fetching');
        }
    });
};

//! commenting this code because we'll call the function using then and catch method
// console.log(prom(true)); // sending the parameter true to the prom function as an argument, it works as the same as we do for "complete" variable


//* now we'll use then and catch method for calling the prom function

// Here we are receiving the "successful" and "failed" message in function parameter from success and failed which function which we defined in prom
let outfullfiment = function(successss) {
    console.log(successss);
}
let onRejection = function(faileddd) {
    console.log(faileddd);
}

// These are two inbuilt method of promise function object "then" and "catch"

// Here we are sending the true as an argument into the prom function in "complete" parameter as an argument
// If we send true to the prom function "then" method will execute and if we send false to the prom function "catch" method will execute 

//! either we can pass true in both parameters or false in both to see the results
// prom(true).then(outfullfiment);
// prom(true).catch(onRejection);

//! or we can write it by using (method chaining)
prom(true).then(outfullfiment).catch(onRejection);


// or we can use this shorthand

// prom(true).then(function (success) {
//     console.log(success);
// }).catch(function (failed) {
//     console.log(failed);
// });



//* -----------------Promise method using setTimeout function----------------------

function func1() {
    // Here we are returning a new method Promise
    // And in promise we define a function with two parameters 
    // 1. resolve - we use resolve if promise gets fulfilled (we can use any name for these parameters)
    // 2. reject - we use reject if promise get rejected (we can use any name for these parameters)
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            // here we've used const so that the value of error is fixed
            const error = true;
            // !error - this statment means print only if error is not equal to true which is false
            // so if the value of error is false the operator will excute the if statment otherwise else
            if (!error) { // if the variable "error" consist false this statement will execute
                console.log('You promise has been resolved');
                // we don't have to create any function for resolve it is just a syntax of promise method that when the promise gets fulfilled we call the function here
                resolve();
            } else { // if the variable "error" consist true this statement will execute
                // Similarly it is a part of syntax when the promise gets rejected we call the function here
                console.log('Your promise has not been resolved')
                    //! basically we call a function which is defined in catch and sending the parameter "message" to it
                    /*   example:-       catch(function(failed){;
                                         console.log(failed) 
                                       })                           */
                reject('Sorry not fulfilled');
            }
        }, 2000);

    })
};

func1().then(function() {
    console.log('Thanks for resolving');
}).catch(function(failed) {
    console.log('Very bad bro');
    console.log(failed)
});