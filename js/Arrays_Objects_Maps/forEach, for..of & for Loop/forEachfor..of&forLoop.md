# `for` Loop and `forEach` Loop

---

## Syntax of `for` Loop

- **Initialization**: Variable initialization before the loop starts.
- **Condition**: Loop executes as long as this condition is true.
- **Update**: Updates the loop variable after each iteration.

```javascript
for (let i = 0; i < 3; i++) {
  console.log(i);
}
```

- Variables can be declared both inside and outside the loop, and both approaches work the same.

```js
for (let i = 0; i < 3; i++) {
  console.log(i);
}
```

### **Example**:

```js
// Syntax of for loop is (initialization, condition, update)
// Loop will break when condition gets false

let i = 0;
for (i = 0; i < 3; i++) {
  console.log(i);
}
```

### Output:

```
0
1
2
```

---

## Old Method of Iterating an Array Using `for` Loop

- **Condition**: `i < friends.length` ensures all elements are iterated.
- **Dynamic Length**: Using `friends.length` instead of a hardcoded number ensures all names are printed regardless of the array size.

### Example:

```javascript
let friends = ["Pulkit", "Sammer", "Himanshu", "Harsh", "khushi"];

// Syntax of for loop to iterate an array
for (let i = 0; i < friends.length; i++) {
  console.log("Hello friend, " + friends[i]);
}
```

### Output:

```
Hello friend, Pulkit
Hello friend, Sammer
Hello friend, Himanshu
Hello friend, Harsh
Hello friend, khushi
```

- In case if we wanted to print only first three elements in `friends` array.

```js
for (let i = 0; i < 3; i++) {
  console.log("Hello friend, " + friends[i]); // Prints first three names.
}

// Output:

// Hello friend, Pulkit
// Hello friend, Sammer
// Hello friend, Himanshu
```

-

- Accessing Array Elements: `friends[1]` accesses the element at the `1`-th index.
- Example:

```javascript
console.log(friends[1]); // Prints 'Sammer'
```

---

## Using `forEach` Method: Modern and Simplified Array Iteration

- Logs each element, its index, and the entire array during every iteration.

### Example:

```javascript
let arr = [3, 5, 6, 34, 76];
arr.forEach(function (element, index, array) {
  console.log(element, index, array);
});
```

### Output:

```
3 0 [ 3, 5, 6, 34, 76 ]
5 1 [ 3, 5, 6, 34, 76 ]
6 2 [ 3, 5, 6, 34, 76 ]
34 3 [ 3, 5, 6, 34, 76 ]
76 4 [ 3, 5, 6, 34, 76 ]
```

## Iterating an Array of Friends using `forEach` Loop

### Example:

```javascript
let friendsNew = ["Jarry", "Peter", "Kyle", "Jeremy", "Emma"];
friendsNew.forEach(function (element) {
  console.log("Hello friends " + element);
});
```

### Output:

```
Hello friends Jarry
Hello friends Peter
Hello friends Kyle
Hello friends Jeremy
Hello friends Emma
```

---

## Using `for...of` Loop: Simpler and More Modern Array Iteration

### Example:

```js
let forofFriends = ["Tina", "John", "Paul", "Jane", "Logan"];
for (let element of forofFriends) {
  console.log(element);
}
```

### Output:

```
Tina
John
Paul
Jane
Logan
```

---

## Iterating Over Objects: Object with Key-Value Pairs using `forEach` Loop

- Lets take two objects `employee` and `employee2`.

```javascript
let employee = {
  name: "Harsh",
  salary: 2,
  channel: "code with harsh",
};
let employee2 = {
  name: "Tom",
  salary: 5,
  channel: "code with tom",
};
```

- Push both the objects into an array which will make them array of objects.

```javascript
notesObj = [];
notesObj.push(employee, employee2);
```

- Now iterate with `forEach` loop.

```javascript
notesObj.forEach(function (element, index) {
  console.log(
    `My name is ${element.name} and my salary is ${element.salary} and my channel is ${element.channel}`
  );
  console.log(index);
  console.log(element);
});
```

### Example:

```js
let employee = {
  name: "Harsh",
  salary: 2,
  channel: "code with harsh",
};
let employee2 = {
  name: "Tom",
  salary: 5,
  channel: "code with tom",
};

notesObj = [];
notesObj.push(employee, employee2);

notesObj.forEach(function (element, index) {
  console.log(
    `My name is ${element.name} and my salary is ${element.salary} and my channel is ${element.channel}`
  );
  console.log(index);
  console.log(element);
});
```

### Output:

```
My name is Harsh and my salary is 2 and my channel is code with harsh
0
{ name: 'Harsh', salary: 2, channel: 'code with harsh' }
My name is Tom and my salary is 5 and my channel is code with tom
1
{ name: 'Tom', salary: 5, channel: 'code with tom' }
```

---

## Mapping an array of objects into a single object with key-value pairs

- Here we have an array of objects `fruitsCustom`.

```js
const fruitsCustom = [
  { name: "apple", color: "red" },
  { name: "banana", color: "yellow" },
  { name: "grape", color: "purple" },
];
```

- Initiating an empty object named as `fruitColors`.

```js
const fruitColors = {};
```

- We are looping through each object in the `fruitsCustom` array using the `forEach` method.
  - We take the name of each fruit as the key.
  - We take the color of each fruit as the value.
  - Using bracket notation, we add this key-value pair to the fruitColors object.

```js
fruitsCustom.forEach((fruit) => {
  fruitColors[fruit.name] = fruit.color;
});
```

- Result: After the loop finishes, the `fruitColors` object is populated with `name` as keys and `color` as their respective values for all the fruits in the array.

```js
 {
    "apple": "red",
    "banana": "yellow",
    "grape": "purple"
 }
```

### Example:

```javascript
const fruitsCustom = [
  { name: "apple", color: "red" },
  { name: "banana", color: "yellow" },
  { name: "grape", color: "purple" },
];

const fruitColors = {};

fruitsCustom.forEach((fruit) => {
  // The code fruitColors[fruit.name] uses bracket notation to dynamically create a key in the fruitColors object based on the name property of the current fruit object.

  // This means fruitColors["apple"] = "red"; and so on.. So basically we are creating a new object named as "fruitColors" in which key will be "apple" and value will be "red" and this will be the same process for each object in the array.
  fruitColors[fruit.name] = fruit.color;
});
```

### Output:

```js
 {
    "apple": "red",
    "banana": "yellow",
    "grape": "purple"
 }
```
