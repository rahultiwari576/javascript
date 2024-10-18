// ***Object Keys, Values and Entries***

// follow this link to understand more about Obj.keys/values/entries https://www.youtube.com/watch?v=3s0YFgxuOV0

// Here we have an object stored in sales variable
const sales = {
  John: 30,
  Sally: 40,
  Tobby: 45,
  Mad: 70,
  King: 20,
};

// It will create an array of "keys"
console.log(Object.keys(sales)); // result [ 'John', 'Sally', 'Tobby', 'Mad', 'King' ]
// It will create an array of "values"
console.log(Object.values(sales)); // result  [ 30, 40, 45, 70, 20 ]
// It will convert the object into an array and also it creates an array of "key and value pair"
//! Note that this is not an array of object here we have only array with key and value pair..

console.log(Object.entries(sales));
/*  result
  
   [
      [ 'John', 30 ],
      [ 'Sally', 40 ],
      [ 'Tobby', 45 ],
      [ 'Mad', 70 ],
      [ 'King', 20 ]
    ]
  
  */

// we are grabbing the value from above array like index 0th is this ['john', 30] from the whole array and again index 0th from this ['john', 30] array is "john"
console.log(Object.entries(sales)[0][0]); // result John
console.log(Object.entries(sales)[0][1]); // result 30
console.log(Object.entries(sales)[1][0]); // result Sally
console.log(Object.entries(sales)[1][1]); // result 40

//! Difference between array of key-value pairs and array of objects.

// Array with key value pair only

// [
//   ['John', 30],
//   ['Sally', 40],
//   ['Tobby', 45],
//   ['Mad', 70],
//   ['King', 20]
// ]

//* In an array of key-value pairs, you use index-based access (e.g., Object.entries(sales)[0][1]).  --  Result will be 30

//* In an array of objects, you access values directly using the object's key (e.g., sales[0].John).  --  Result will be 30

// Array of objects

// [
//   { John: 30 },
//   { Sally: 40 },
//   { Tobby: 45 },
//   { Mad: 70 },
//   { King: 20 }
// ]

console.log(
  "------ Custom function for adding all the key values ---------------"
);

// Here we have created a custom function name "sumSales"
function sumSales(sales) {
  // Here we have a variable called sum and number stored in this variable
  let sum = 0;

  for (let valuee of Object.values(sales)) {
    // Object.values(sales) will return all the numbers in array
    // In valuee we are getting all the numbers in iteration (one by one)

    /* 
          'Incrementing operators'
          ! we can increment our number from both the ways 
          let a = 45;
          ! both will increment the number by 1
          a += 1;
          a++;
          console.log(a);
          
      */

    // In the above example what we are doing is adding the numbers which we are getting in valuee into sum

    // ex: first we'll get "30" in "valuee" and we have "0" stored in "sum" so it will add the value to current value of sum like this 0+30 = 30 again it goes like 30+40 = 70 and so on
    sum += valuee;
  }

  return sum; // and when the iteration end it will return the sum of all numbers
}

console.log(sumSales(sales)); // result 205

console.log(
  "------ Custom function for iterating all the key values pair ---------------"
);

function personSales(obj) {
  // used object destructuring method to store both key and value pair into keyy and valuee variables
  for (let [keyy, valuee] of Object.entries(obj)) {
    console.log(`${keyy} had ${valuee} sales`);
  }
}

console.log(personSales(sales));
