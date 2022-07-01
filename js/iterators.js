console.log('Iterators in Javascript');

// Iterators is a advanced loop which help to traversing the array in a very advanced method.
// In the previous loops the iterator will not stop untill loop is not get finished but in iterators we can customly iterate in arrays

// Creating an Iterator------------
// We can create our own Iterator using function. We can use any name for the iterators

function iterator(arrayFruits) {
    // Creating a variable named nextIndex and we'll initializing it from 0
    let nextIndex = 0;
    console.log(nextIndex);
    // Here we are returning an object by using curly braces which we used to create an object
    return {
        // Creating a method named "next" in object
        next: function() {
            // In this object we have "next" method/function in it we are saying in this "if" statement that if the value of nextIndex is less than arrayFruits length (Here the array is myArray receiving as an argument) then return an object
            if (nextIndex < arrayFruits.length) {
                // Returning the object when the next method/function will be called with the condition of if-else in which we have two keys "value" and "done"
                return {
                    /* 

                    !! Important
                    In value key we are achieving the arrayFruits index by using nextIndex variable value (0) which is incremental to specifing the index of this array "arrayFruits" ex- we know nextIndex variable have a value "0" so we are using the value as an index here in array to getting that partiular value on that index in array which is "apples" here

                    */
                    // we can use any name for keys
                    value: arrayFruits[nextIndex++],
                    // Here done:false means we still have iteration left to iterate
                    done: false,
                }
            } // if ends
            else {
                // And if the nextIndex is not less than arrayFruits.length then return an object it means our array has completed the iteration
                return {
                    // Here done:true means our iteration is complete 
                    done: true
                }
            } // else ends
        }
    }

}

const myArray = ['Apples', 'Oranges', 'Grapes', 'Bhindi'];

// console.log(myArray);

//Using the iterator ------------
// console.log(iterator(myArray).next());
// or 

// fruits is the object here which we are receiving by return and next is the method of fruits object
fruits = iterator(myArray);

console.log(fruits);

// We can achieve the arrays value by calling next method of iterator-----------

console.log(fruits.next()); // Apples
console.log(fruits.next()); // Oranges
console.log(fruits.next()); // Grapes
console.log(fruits.next()); // Bhindi
console.log(fruits.next()); // Done:true

// to get value only and "value is the key name of next methods object could be anyname"

// console.log(fruits.next().value);  // Apples
// console.log(fruits.next().value);  // Oranges
// console.log(fruits.next().value);  // Grapes
// console.log(fruits.next().value);  // Bhindi
// console.log(fruits.next().value);  // Done:true


// This is a small iterator for incrementing a number

function incrementing() {
    let increment = 0;
    return {
        next: function() {
            return {
                value: increment++
            }
        }

    }


}
// yes is the object and next is the method of that object 
let yes = incrementing();
console.log(yes.next());
console.log(yes.next());
console.log(yes.next());

// console.log(yes.value);
// console.log(yes.value);



// follow this link for more clarification https://stackoverflow.com/questions/39706443/why-is-my-javascript-increment-operator-not-working-properly-in-my-addone-f

/* 
There are two increment operators: prefix and postfix.

The postfix operator increments the variable after it is evaluated. For example, the following code produces 11, because it adds 5 and 6:

var a = 5;
(a++) + (a++)
The prefix operator increments the variable before it is evaluated. Sounds like that is what you want. The following code produces 13, because it adds 6 and 7:

var a = 5;
(++a) + (++a)

*/

function plus() {
    let i = 5;
    return ++i;
}
let x = plus();
console.log(x);