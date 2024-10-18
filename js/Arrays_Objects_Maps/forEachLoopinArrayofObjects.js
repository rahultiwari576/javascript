// ****** Set key name as "key" and value name as "value" corresponding to that key (read this again) ******

const fruitsCustom = [
  { name: "apple", color: "red" },
  { name: "banana", color: "yellow" },
  { name: "grape", color: "purple" },
];

const fruitColors = {};

fruitsCustom.forEach((fruit) => {
  // console.log(fruit);
  // console.log(fruit.name);
  // The code fruitColors[fruit.name] uses bracket notation to dynamically create a key in the fruitColors object based on the name property of the current fruit object.
  //! This means fruitColors["apple"] = "red"; and so on.. So basically we are creating a new object named as "fruitColors" in which key will be "apple" and value will be "red" and this will be the same process for each object in the array.
  fruitColors[fruit.name] = fruit.color;
});

// console.log(fruitColors);

/* output will be in object because we have fruitColors an empty object
  {
    "apple": "red",
    "banana": "yellow",
    "grape": "purple"
  }
  
  */
