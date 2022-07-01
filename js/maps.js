console.log('Maps in Javascript'); //!! Important Maps and map method in array both are different

// Maps in javascript : We can use any type of key or value
// We can call and store the maps by using "new Map()" keyword get all the perdefined methods in it
const myMap = new Map();
console.log(myMap);

// We can also create and store objects, functions, strings on the position of keys in maps.
const mapCollection = new Map();

const key1 = 'myStr',
    key2 = { name: 'harsh' },
    key3 = function() {};

mapCollection.set(key1, 'This is a string')
mapCollection.set(key2, 'This is an object')
mapCollection.set(key3, { value: 'This is a function' })

console.log(mapCollection);

// Here we are using the predefined prototype property of maps "set", It helps to set any key and any value pair (boolean, number, string, array)
myMap.set(1, "uno")
myMap.set(2, "dos")
myMap.set(3, "tres")
myMap.set(4, "cuatro")

// We'll get all the key value pair with size 4 in myMap 
// These are not regualar objects and we can differenciate by checking the arrow symbol which connects keys and values pair like this - Map(4) {1 => 'uno', 2 => 'dos', 3 => 'tres', 4 => 'cuatro'}
console.log(myMap);

// We can get the value corresponding to that key by using "get" method of maps
let value1 = myMap.get(1)
console.log(value1 + " - value1");

/**************************************************************/
// Check the forof and forin loop tutorial for more clarifications on keys and values method.....
/**************************************************************/

// !Important - In forOf loop- loop is designed in such way that we get keys first and then values

// We can use for of loop to iterate through the maps to get all "keys" of maps by using .keys() method
for (const key of myMap.keys()) {
    console.log(`key is ${key}`);
}

// We can also get the values of map by using .values() method in for of loop
for (const value of myMap.values()) {
    console.log(`value is ${value}`);
}

// And if we want to get all the keys and value both by using for of loop we can do by
// here we put both key and value variable in square brackets and we do not need to use any method after myMap to fetch the both pairs 
for (const [key, value] of myMap) {
    console.log(`key is ${key} and value is ${value}`)
}


// We can also use forEach loop to iterate key and value of maps
// !Important = In ForEach - Loop is designed in such way that we get values first corresponding to that key

// Here we get the values corresponding to that key
myMap.forEach(key => {
    console.log(key);
});

// And if we want both keys and value by using forEach loop we can get it 
myMap.forEach((key, value) => {
    console.log(`value of corresponding to that key is ${key} and the key corresponding to that value is ${value}`);
})

// And if we want to delete any key value we can use "delete" method of maps
// Method "delete" and "key name or title"
myMap.delete(2);

// key 2 will be deleted with its corresponding value
console.log(myMap);


// Converting myMap into an array
let myArray = Array.from(myMap);
console.log('Map to array is', myArray);


// Converting myMap keys into an array
let mykeysArray = Array.from(myMap.keys());
// Here we'll get the all keys in an array [1,3,4]
console.log('Map to keys array is', mykeysArray);


// Converting myMap values into an array
let myvaluesArray = Array.from(myMap.values());
// Here we'll get the all values in an array ['uno', 'tres','cuatro']
console.log('Map to values array is', myvaluesArray);