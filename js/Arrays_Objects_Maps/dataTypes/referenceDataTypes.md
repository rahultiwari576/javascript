# What is Reference Data Types?

Reference types are like containers (e.g., a box or a list). You can change what’s inside the container without creating a new container. This is what I mean by “changing” for reference types.

## <p style="color:deepskyblue">1. Object</p>

- An object is like a box with labeled slots (properties). You can change what’s in the slots without making a new box.
- **Example:**

```js
let person = { name: "Anna", age: 20 }; // An object (the "box")
person.age = 21; // Change the age inside the same box
console.log(person); // Output: { name: "Anna", age: 21 }
```

- Here, we didn’t create a new object. We just updated the `age` slot in the same object.

## <p style="color:deepskyblue">2. Array</p>

- An array is like a numbered list. You can change items in the list without making a new list.
- **Example:**

```js
let fruits = ["apple", "banana"]; // An array (the "list")
fruits[0] = "orange"; // Change the first item in the same list
console.log(fruits); // Output: ["orange", "banana"]
```

- We didn’t create a new array; we just replaced `"apple"` with `"orange"` in the same array.

## <p style="color:deepskyblue">Why Are They Mutable?</p>

- For reference types, “changing” means modifying the contents (like a property or an array item) while keeping the same object or array in memory.

## <p style="color:yellow; font-weight:bold">Key Points</p>

<p style="font-size:1.5rem; font-weight:bold">Reference Types: Copies Share the Same Data</p>

- When you copy a reference type, you copy the address to the data, not the data itself. Changing the copy affects the original because they point to the same thing.
- **Example:**

```js
let list1 = ["apple", "banana"]; // Reference: an array
let list2 = list1; // list2 points to the same array
list2[0] = "orange"; // Change list2
console.log(list1); // Output: ["orange", "banana"]
console.log(list2); // Output: ["orange", "banana"]
```
