// ***Advance use of object.entries***

// Nested Objects

let tokenDark = {
  blue: {
    fir: "#aaaa",
    sec: "#bbbb",
    thr: "#cccc",
  },
  green: {
    for: "#dddd",
    fif: "#eeee",
    six: "#ffff",
  },
  yellow: {
    sev: "#gggg",
    eig: "#hhhh",
    nin: "#iiii",
    // ten: "#oooo",  to check key.length in forEach loop
  },
};

// console.log(Object.entries(tokenDark));

// Result (Object.entries(tokenDark));

// [
//   ['blue', { fir: '#aaaa', sec: '#bbbb', thr: '#cccc' }],
//   ['green', { for: '#dddd', fif: '#eeee', six: '#ffff' }],
//   ['yellow', { sev: '#gggg', eig: '#hhhh', nin: '#iiii' }]
// ]

// console.log(Object.keys(tokenDark)); // ['blue', 'green', 'yellow']

const reversedTokens = {};

// After applying Object.entries, Now we will be able to use forEach loop because we have coverted the object of objects or nested objects into the an array of key-value pairs like this :-

// [
//   ['blue', { fir: '#aaaa', sec: '#bbbb', thr: '#cccc' }],
//   ['green', { for: '#dddd', fif: '#eeee', six: '#ffff' }],
//   ['yellow', { sev: '#gggg', eig: '#hhhh', nin: '#iiii' }]
// ]

Object.entries(tokenDark).forEach(function ([key, val]) {
  // console.log(key + " Keys in forEach function"); // it will console only key without putting it in array  blue, green , yellow because Object.entries(tokenDark) returns an array of key-value pairs so that is why it will show only the "key value in that array"
  // console.log(typeof key); // String 3 times for blue, green, yellow

  // console.log(val); // similar it will console the values corresponding to that key {fir: '#aaaa', sec: '#bbbb', thr: '#cccc'}, {for: '#dddd', fif: '#eeee', six: '#ffff'}, {sev: '#gggg', eig: '#hhhh', nin: '#iiii'}
  // console.log(typeof val); // object

  //! Now we are converting the nested "keys" in array
  const keys = Object.keys(val);
  // console.log(keys); // converting the object which we have in "val" only "keys" in array ['fir', 'sec', 'thr'] , ['for', 'fif', 'six'], ['sev', 'eig', 'nin']

  //! Now we are converting the nested "values" in array

  const values = Object.values(val);
  // console.log(values); // converting the oject which we have in val only values in array ['#aaaa', '#bbbb', '#cccc'], ['#dddd', '#eeee', '#ffff'], ['#gggg', '#hhhh', '#iiii']

  //! It will console "3" three times because it is in forEach loop and it will fetch the length of each 3 arrays stored in "keys" variable
  const length = keys.length; // 3 times 3 "total arrays in 3" and the total number of strings in that array is 3
  // console.log(length); // as we know we are iterating each array one by one so it will calculate length of each array first array is ['fir', 'sec', 'thr'] which have 3 strings so the length is 3 same goes with second array ['for', 'fif', 'six'] is 3 and same for 3rd as well
  let reversedObj = {};

  for (let i = 0; i < length; i++) {
    // this iteration will iterate 3 times for each array and 9 times in total for each value in "keys"
    /* 
   * first iteration in array :- ['fir', 'sec', thr]
   condition = i<3
   result :- keys[0] = fir , keys[1] = sec, keys[2] = thr

   * second iteration in array :- ['for', 'fif', 'six']
   condition = i<3
   result :- keys[0] = for , keys[1] = fif, keys[2] = six

   * third iteration in array :- ['sev', 'eig', 'nin']
   condition = i<3
   result :- keys[0] = sev , keys[1] = eig, keys[2] = nin

   console.log(keys[i]) - fir, sec, thr, for, fif, six, sev, eig, nin
   */
    //! keys is a variable which we have initiated above
    //! We are simply iterating the keys using its index in for loop
    // console.log(keys[i]); // Here i is the index (number value explained above)

    /* *Reversing the values

   * first iteration in array ['#aaaa', '#bbbb', '#cccc']
    condition = i<3  and  logic = [length - i - 1]
    result :- values[3-0-1] = values[2] = #cccc , values[3-1-1] = values[1] = #bbbb, values[3-2-1] = values[0] = #aaaa

   * second iteration in array ['#dddd', '#eeee', '#ffff']
    condition = i<3
    result :- values[3-0-1] = values[2] = #ffff , values[3-1-1] = values[1] = #eeee, values[3-2-1] = values[0] = #dddd

   * third iteration in array ['#gggg', '#hhhh', '#iiii']
    condition = i<3
    result :- values[3-0-1] = values[2] = #iiii , values[3-1-1] = values[1] = #hhhh, values[3-2-1] = values[0] = #gggg

    console.log(values[length - i - 1]) - #cccc, #bbbb, #aaaa, #ffff, #dddd, #iiii, #hhhh, #gggg
  */
    // console.log(values[length - i - 1]); // with the help of this logic we are revering the values corresponding to each key

    //! reverseObj[fir, sec, thr and so on ] = values[#cccc, #bbbb, #aaaa and so on]

    //!important reversedObj is an empty object which we've initiated above with the help of this code we create a new object (reversedObj) by reversing the order of values in an array (values) and associating them with specific keys from another array (keys). It is important to note that both keys and values arrays should have the same length for this operation to work correctly

    //* The line reversedTokens[key] = reversedObj; is assigning the newly created reversedObj (which contains the reversed key-value pairs of the current color) to the reversedTokens object using the color as the key.

    /* Example to understand this logic:- reversedObj[keys[i]] = values[length - i - 1];

       const fruitsCustom = [
                                { name: "apple", color: "red" },
                                { name: "banana", color: "yellow" },
                                { name: "grape", color: "purple" },
                              ];

         const fruitColors = {};

          fruitsCustom.forEach((fruit) => {
            fruitColors[fruit.name] = fruit.color;
          });

          console.log(fruitColors);

          Output:-

          {
            "apple": "red",
            "banana": "yellow",
            "grape": "purple"
          }

*/

    reversedObj[keys[i]] = values[length - i - 1];
    // console.log(reversedObj); // it will show the process of reversing the values[2] corresponding keys[0]

    // console.log(reversedObj[keys[i]]) // To see the final reversed results
  }
  // Process Example
  /* first iteration (forEach loop) - {fir: '#cccc', sec: '#bbbb', thr: '#aaaa'} - first time first object stored in reverseObj variable */
  /* second iteration (forEach loop) - {for: '#ffff', fif: '#eeee', six: '#dddd'} - second time  second object stored in reverseObj variable */
  /* third iteration (forEach loop) - {sev: '#iiii', eig: '#hhhh', nin: '#gggg'} - third time third object stored in reverseObj variable */
  // console.log(reversedObj);

  //! and here this consists 3 keys in 'key' parameter "blue", green, yellow
  // console.log(key);
  // console.log(reversedObj); //! consoling again outside of the loop to see the converted final results
  /* Output (console.log(reversedObj))
{ fir: "#cccccc", sec: "#bbbbbb", thr: "#aaaaaa" } // After processing 'blue'
{ for: "#ffffff", fif: "#eeeeee", six: "#dddddd" } // After processing 'green'
{ sev: "#cccccc", eig: "#bbbbbb", nin: "#aaaaaa" } // After processing 'yellow'
 */

  //* it will set reversed values corresponding to that keys like - for key "blue" : value will be {fir: '#cccc', sec: '#bbbb', thr: '#aaaa'} for key "green" : {for: '#ffff', fif: '#eeee', six: '#dddd'} and for "yellow" {sev: '#iiii', eig: '#hhhh', nin: '#gggg'}
  reversedTokens[key] = reversedObj; //! after that we are storing this reversedTokens in empty object "reversedTokens" which we defined above

  //***** it will not work in this context you need to use only square brackets not dot notation *****/
  // console.log(reversedTokens.key); //XXXXXXXXXXXXXXXXXXX
  /* Square Bracket Notation (Correct for Dynamic Property Access):
      When you use square bracket notation, like reversedTokens[key], it treats key as a variable and uses its value to access the corresponding property in the reversedTokens object.
      For example, if key holds the value 'someKey', then reversedTokens[key] is equivalent to reversedTokens['someKey'], which accesses the property named 'someKey' in the reversedTokens object. */

  // reversedTokens[key] is same like we did to fetch key "values" in object like this
  // console.log(reversedTokens["blue"]); // another way of fetching key values in Object person.firstname or person['firstname']
  // console.log(reversedTokens["green"]);
  // console.log(reversedTokens["yellow"]);

  /* 
  For example, let's assume keys is ['a', 'b', 'c'], and reversedObj is { a: 3, b: 2, c: 1 }. After executing the line reversedTokens[key] = reversedObj; in an iteration, the reversedTokens object will look like this:

  reversedTokens = {
  'a': { a: 3, b: 2, c: 1 },
  'b': { a: 3, b: 2, c: 1 },
  'c': { a: 3, b: 2, c: 1 }
}
 
  */
});

// console.log(tokenDark);
//! BEFORE REVERSED RESULT
/* 
{
  blue: {
    fir: "#aaaa",
    sec: "#bbbb",
    thr: "#cccc",
  },
  green: {
    for: "#dddd",
    fif: "#eeee",
    six: "#ffff",
  },
  yellow: {
    sev: "#gggg",
    eig: "#hhhh",
    nin: "#iiii",
  },
};
*/
// console.log(reversedTokens);
//! REVERSED RESULT
/* 
  blue: {
    fir: "#cccc",
    sec: "#bbbb",
    thr: "#aaaa",
  },
  green: {
    for: "#ffff",
    fif: "#eeee",
    six: "#dddd",
  },
  yellow: {
    sev: "#iiii",
    eig: "#hhhh",
    nin: "#gggg",
  },

 */
