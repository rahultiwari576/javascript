# Filter method in Arrays & Objects

---

## Filtering the numbers that are greater or equal to 18.

- We used filter method to filter out the numbers in `ageArray` that are greater than or equal to 18.
- This `filter` method returns a new array filtering out the numbers which is greater or equal to 18.
- Here, this function receives a callback as a parameter, which we've seen in loops as `element, index, and array.` In this callback, "age" represents each value in the array `[2, 10, 48, 40, 20, 6]`. The function checks whether the value of "age" is greater than or equal to 18. It then "returns" a new array containing only the elements that satisfy this condition, i.e., `[48, 40, 20]`.

```js
function checkAge(age, index, array) {
  return age >= 18;
}
```

- The `filter()` method creates a new array containing only the elements of the original array that pass the condition specified in the callback function (`checkAge` in this case).

```js
let filterArray = ageArray.filter(checkAge);
```

- The lines below only return `true` or `false`. If the function returns `true`, the element at index 0 is added to the filtered array. If it returns false, the element at index 2 (or any other element) is not included in the filtered array.

```js
return age >= 18;
```

### **Example**:

_Filtering the numbers which is greater than 18_

```js
let ageArray = [2, 10, 48, 40, 20, 6];

let filterArray = ageArray.filter(checkAge);

function checkAge(age, index, array) {
  return age >= 18;
}

console.log(ageArray); // [2, 10, 48, 40, 20, 6]
console.log(filterArray); // [48, 40, 20]
```

### Output :

```js
[2, 10, 48, 40, 20, 6]; // ageArray
```

```js
[48, 40, 20]; // filterArray
```

---

## Filtering the string that have length of 0

- We have an array `xx` which have two strings `"harsh"` and `""` whose length is `2`.

```js
let xx = ["harsh", ""];
console.log(xx.length); // output 2
```

- In the filter method we are calling the `yellow` callback function, which has a condition to perform filtration in the array `xx` whose length is not equal to `0` and storing the returned array in `yy` constant.

```js
let yy = xx.filter(yellow);
```

- And here in this function we are filtering out the element which has length not equal to `0`. In this case, `harsh` will be returned to `filter` method and `filter` method will creates a new array ['harsh'].

```js
function yellow(element, index, array) {
  return element.length !== 0;
}
```

### **Example**:

_filtering the value whose length is not equal to 0_

```js
let xx = ["harsh", ""];
let yy = xx.filter(yellow);
function yellow(element, index, array) {
  // console.log(element); // output "harsh" and ""

  // console.log(element.length); // output 5, 0 for each element (harsh - 5 and "" - 0)

  return element.length !== 0; // extracting the only value which has length not equal to 0
}

console.log(yy);
console.log(yy.length);
```

### Output :

```js
["harsh"];
```

```
1 // Arrays length
```

- **Shorthand:**
- The `return` statement ensures that the result of the condition (true or false) is passed back to `.filter()`.
- Without the return, the callback would not provide any output, resulting in an error or unexpected behavior.

```js
let xx = ["harsh", ""].filter((element) => {
  return element.length !== 0;
}).length; // output 1
```

---

## Filter method in an array with one element: an empty stirng

### **Example**:

```js
let zz = [""]; // Create an array with one element: an empty string.
console.log(zz.length); // Output: 1 (because the array has one element, even though it's an empty string).

let ff = zz.filter(red); // Use the filter method to apply the red function to the array.

function red(element) {
  // console.log(element); // Output: "" (an empty string).
  // Note: Don't get confused with array's length and element's length in array "zz"
  // console.log(element.length); // Output: 0 (because the length of an empty string is 0).

  return element.length !== 0; // Check if the element's length is not equal to 0.
  // This condition will return false for the empty string, so it will be excluded from the filtered array.
}

console.log(ff.length); // Output: 0 (because the empty string was filtered out, so the new array is empty).
console.log(ff); // Output: [] (an empty array, because the only element was filtered out).
```

---

## Filter method in Objects

## Removing an object from the array using filter method

- The `console.log(item)` inside the `blue` function will print each object in the `cusArray` one by one as the `filter` method iterates through the array.

```js
// Output will look like this:
{ id: 1, name: 'Harsh', lname: 'jha' }
{ id: 2, name: 'Rohan', lname: 'Raj' }
{ id: 3, name: 'Abhishek', lname: 'Amrit' }
```

- The `blue` function returns `true` for the objects where `item.id !== 2`. This means the object with id: 2 will be filtered out, and the resulting `newCusArray` will contain the remaining objects.

```js
console.log(newCusArray)// output will look like this
[
  { id: 1, name: "Harsh", lname: "jha" },
  { id: 3, name: "Abhishek", lname: "Amrit" },
];
```

### **Example**:

```js
let cusArray = [
  {
    id: 1,
    name: "Harsh",
    lname: "jha",
  },
  {
    id: 2,
    name: "Rohan",
    lname: "Raj",
  },
  {
    id: 3,
    name: "Abhishek",
    lname: "Amrit",
  },
];

function blue(item) {
  console.log(item);
  return item.id !== 2; // return the elements(objects) which is not equal to 2
}

let newCusArray = cusArray.filter(blue);
console.log(newCusArray);
```

### Output :

```js
{ id: 1, name: 'Harsh', lname: 'jha' }
{ id: 2, name: 'Rohan', lname: 'Raj' }
{ id: 3, name: 'Abhishek', lname: 'Amrit' }
```

```js
[
  { id: 1, name: "Harsh", lname: "jha" },
  { id: 3, name: "Abhishek", lname: "Amrit" },
];
```

---
