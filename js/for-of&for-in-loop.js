console.log('For of and For in loop in javascript');
//************* For In loop ***************

// In this tutorial basically we learn about the difference between for of and for in loops and when to use this loops

// ITERATING AN OBJECT 

let obj = {
    name: 'Harsh',
    language: 'Javascript',
    hobbies: 'Android App Development'
}

//Using Object.keys() method We'll get all the keys of object in obj (3) ['name', 'language', 'hobbies']
console.log(Object.keys(obj)); 
console.log(Object.keys(obj).length); // Using same method to fetch the length of an obj

console.log('------For loop to iterate the object in tradional way--------');
// Traditional "for" loop for iterating an object
for (let index = 0; index < Object.keys(obj).length; index++) {
    const element = obj[Object.keys(obj)[index]];
    console.log(element);
}

// Or we can use "for in loop" to iterate the object in the simplest way
console.log('------For In loop to iterate the object------');

for (const key in obj) {
    console.log(obj[key]);
}

// ITERATING THE STRING
let myString = 'This is my string';


// console.log('------For loop to iterate the string in tradional way--------');
// for (let index = 0; index < myString.length; index++) {
//     const element = myString[index];
//     console.log(element);
// }


console.log('-------Using for-in-loop for string--------');

// Or We can use for in loop with strings to loop through all the characters

for (const char in myString) {
        const element = myString[char];
        console.log(element);
}


//************* For Of loop ***************

// ITERATING AN ARRAY
let people = ['Harsh', 'Rohan', 'Skillf', 'Shubham', 'Vikrant'];

// Traditional "for" loop for iterating an array
console.log('------For loop to iterate the array-------');
    // Here people length is 5 ['Harsh', 'Rohan', 'Skillf', 'Shubham', 'Vikrant'];
    for (let i = 0; i < people.length; i++) {
        console.log('Hello friend, ' + people[i]); // Here i is the latest value of i in the loop
    }
    // people[i] means people[on which index]
    // it will print Rohan because Rohan lies on 1st index in the people array
    console.log(people[1]);


// Or we can use "for of loop" to iterate the array in the simplest way
console.log('------For Of loop to iterate the array------');

for (const array of people) {
    console.log(array);
}

console.log('------- Using for of loop for the string------');
// We can also iterate the string using for of loop
myString = 'This is my string';

for (const iterator of myString) {
    console.log(iterator);
}