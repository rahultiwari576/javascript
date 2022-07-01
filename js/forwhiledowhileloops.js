console.log('for, while, do-while loops')

// GENERAL TYPES OF LOOPS:------------------------------------------------------------------------
// for
// while
//do-while

// FOR LOOP

//In this loop first thing we are intializing the loop by using the value of i which is zero so our loop starts with zero then our loop check the condition that Is the value of i is less than 100 or not, And yes the value of i is 0 so the condition is true that is i is less than 100, So it will print the value of i in console which is zero then here comes an important part after printing the value of i it will go to increment the value of i by one (i++) so now the original value of i becomes 1 then it will check the condtion that i is less than 100 or not and yes the value of i is now 1 and the condition is true so it will again print the latest value of i which is 1 and the process will go on and on until the value of i is 99. And at last again it will run the loop so after printing i is "99" then it will increment the value of i by one now the value of i becomes 100 then it will check the condition which says the i<100 means i less than 100 but no here the value of i is 100 and the condition became false so loop will break and will not print in console after 99. 


// for(let i=0; i<100; i++){
//     console.log(i);
// }

console.log('Incrementing operators')
// we can increment our number from both the ways 
let a = 45;
// both will increment the number by 1
a += 1;
a++;
console.log(a);


// WHILE LOOP 

console.log('While Loop of J')

let j = 0; // In while loop we'll do initialization here
while (j < 10) { // then condition
    console.log(j);
    j += 1; // And we'll do incrementation here
}

console.log('While loop of h')

let h = 0;
while (h < 20) {
    //if we want to initialize our loop from 1 and ends with 20 even if our loop initilize with 0 we can do by adding plus 1 into variable in console.log so that it will add 1 before printing in console
    console.log(h + 1);
    // example after checking the condition the first value of h will be 0 so before consoling it will add 1 to console before printing so our value of h becomes 1 and in last loop same process will be done as the value is 19 and it will add 1 to it becomes 20. 
    h++;
}



// DO-WHILE 
console.log('Do-while')

// there is only one difference in do while and while loop is it will atleast one time even if condition is false
let k = 12; //like here condition became false and our loop haven't started yet
do {
    console.log(k); // this happen because our conditon is written below so it will print only 12 as the value of k is 12, if we change the value of k to zero it will act same like while or for loop.
    k++;
} while (k < 10)

//We have two statements in our loop first is 'break' and second is 'continue' by using this we can play with loop iteration
console.log('Break and Continue Statement in Loops')
let y = 0;
do {
    console.log(y);
    if (y === 5) {  // if we don't want our loop print after 5 or if we want to break the iteration we can use break statement here by using if condition
        break;
    }
    y++;
} while (y < 10);

console.log('Means break the loop after 5 and print this message in console')


// And if we want to skip one iteration we can use continue statement in our loop 
console.log('Continue Statement')

// first it start the loop with 0 then it will move to if condition it will check if the value of g is equal to 5 or not, and no in first iteration the value of g is 0 so it will move to next part where it will print the value of g is 0 in console then it will increment to value of g by 1 and then it will check the condition the value of g is equal to 1 is less than 10 or not and yes the value of g is less than 10 than again loop will start the second iteration where we have g=1 then again it will check the if condtion that value of g is eqaul to 5 or not, so it will run the iteration until the value of g is equal to 5 after reaching the value 5 if condition will apply the continue statement and will skip the iteration until we do change the value of g so we have also put another conditon in if that is increment the g by 1 'g++' to now the value is g becomes 6 and will continue the iteration.

let g = 0;
do {
    if (g === 5) {
        g++;
        continue;
    }
    console.log(g);
    g++;
} while (g < 10);



console.log('For Each loop')
// FOR EACH LOOP:------------------------------------------------------------
// For each loop is used to iterate each element one by one in loop 
// Example :- arr=[3,5,6,34,76]; - 3
//                                 5
//                                 6
//                                 34
//                                 76

let arr = [3, 5, 6, 34, 76];
arr.forEach(function (element, index, array) {
    console.log(element, index, array);
    // (3, 5, 6, 34, 76 - element, 0, 1, 2, 3, 4 - index, [3, 5, 6, 34, 76] - array x 5 ) result
});

console.log(arr.length + ' - This is arr variable length');

