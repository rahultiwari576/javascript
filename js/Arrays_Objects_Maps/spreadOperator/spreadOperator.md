# Spread Operator

In reference data types when you copy a reference type, you copy the address to the data, not the data itself. Changing the copy affects the original because they point to the same thing.

## <p style="color:deepskyblue">In Arrays</p>

### Merging Arrays

```js
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArr = [...arr1, ...arr2];
console.log(mergedArr); // [1, 2, 3, 4, 5, 6]
```

### Cloning an Array

```js
const originalArr = [1, 2, 3];
const clonedArr = [...originalArr];
console.log(clonedArr); // [1, 2, 3]
```

### Adding elements to an array

```js
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];
console.log(newNumbers); // [1, 2, 3, 4, 5]
```

## <p style="color:deepskyblue">In Objects</p>

### Merging Objects

```js
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj); // { a: 1, b: 2, c: 3, d: 4 }
```

### Cloning an Object

```js
const originalObj = { a: 1, b: 2 };
const clonedObj = { ...originalObj };
console.log(clonedObj); // { a: 1, b: 2 }
```

### Updating an Object

```js
const person = { name: "John", age: 30 };
const updatedPerson = { ...person, age: 31 };
console.log(updatedPerson); // { name: 'John', age: 31 }
```

## <p style="color:deepskyblue">Function Arguments Example</p>

```js
function sum(a, b, c) {
  return a + b + c;
}
const numbersTwo = [1, 2, 3];
console.log(sum(...numbersTwo)); // 6
```

## <p style="color:deepskyblue">Using Spread Operator to Create Copies</p>

In JavaScript, arrays and objects are **reference types** ( For more clarification on **reference types** check [referenceDataTypes.md](../dataTypes/referenceDataTypes.md) file ) When you assign an array or object to a new variable, you're not creating a copy, but rather a new reference to the same original array or object.

### Array References

- Here's an example:

```js
const originalArr = [1, 2, 3];
const newArr = originalArr;

newArr.push(4);
console.log(originalArr); // [1, 2, 3, 4]
console.log(newArr); // [1, 2, 3, 4]
```

- As you can see, both `originalArr` and `newArr` point to the same array. Changes made to one affect the other.

### Object References

- Similarly, with Objects:

```js
const originalObj = { a: 1, b: 2 };
const newObj = originalObj;

newObj.c = 3;
console.log(originalObj); // { a: 1, b: 2, c: 3 }
console.log(newObj); // { a: 1, b: 2, c: 3 }
```

- Again, both `originalObj` and `newObj` reference the same object, so changes to one affect the other.

## <p style="font-size:2rem; font-weight:bold; color:yellow">Using the Spread Operator to Create Shallow Copies without Changing the Original Top-Level Values</p>

This is where the spread operator comes in handy. By using the spread operator, you can create a new copy of an array or object, rather than just referencing the original:

- Example:

```js
const originalArr = [1, 2, 3];
const newArr = [...originalArr];

newArr.push(4);
console.log(originalArr); // [1, 2, 3]
console.log(newArr); // [1, 2, 3, 4]

const originalObj = { a: 1, b: 2 };
const newObj = { ...originalObj };

newObj.c = 3;
console.log(originalObj); // { a: 1, b: 2 }
console.log(newObj); // { a: 1, b: 2, c: 3 }
```

### <p style="color:coral; font-weight:bold;">What is shallow copy?</p>

As we know, reference data types (objects or arrays) are mutable, meaning changes to them can affect the original data. However, by using the spread operator, we can create shallow copies of the originals, which are independent of the originals at the top level. Changes to the top-level properties of these copies won't affect the originals, but changes to nested properties might still affect the originals due to the shallow nature of the copy.

- The spread operator creates a shallow copy, not a deep copy. This means that if the original object or array has nested objects or arrays, the copy will reference the same nested objects or arrays.
- Changes to top-level properties of the copy won't affect the original, but changes to nested properties might still affect the original.

- **For Example:**

```js
const originalObj = { a: 1, b: { c: 2 } };
const newObj = { ...originalObj };

newObj.a = 10; // doesn't affect originalObj
console.log(originalObj.a); // 1

newObj.b.c = 20; // affects originalObj
console.log(originalObj.b.c); // 20
```

<p style="font-size:2rem; font-weight:bold; color:yellow;">How to handle targeted nested object or array in shallow copy</p>

- `{ ...user }` creates a shallow copy of the `user` object, including all its properties, such as `addresses`. This means `newUser.addresses` would reference the same array as `user.addresses.`
- By adding `addresses: [...user.addresses]`, we're overriding the `addresses` property in the shallow copy with a new shallow copy of the `user.addresses` array.

**We're doing this to achieve two levels of shallow copying:**

- Shallow copying the top-level user object using `{ ...user }`.
- Shallow copying the nested addresses array using `[...user.addresses]`.

### Example:

```js
const user = {
  name: "John",
  addresses: [{ street: "123 Main St" }],
};

// Only shallow copying the top-level object
const newUser1 = { ...user };
newUser1.addresses.push({ street: "456 Elm St" });
console.log(user.addresses.length); // 2 (affected)

// Shallow copying the top-level object and the addresses array
const newUser2 = { ...user, addresses: [...user.addresses] };
newUser2.addresses.push({ street: "456 Elm St" });
console.log(user.addresses.length); // 1 (not affected)
```

- In the first example, `newUser1.addresses` references the same array as `user.addresses`, so changes to the array affect the original. In the second example, `newUser2.addresses` is a new shallow copy of the array, so changes to the array don't affect the original.

<p style="font-size:2rem; font-weight:bold; color:yellow;">Limitations of Shallow Copying Nested Objects</p>

New object `newUser` by spreading the properties of the `user` object, and specifically handling the `addresses` property as an array.

- `{ ...user }` spreads the properties of the user object into a new object.
- `addresses: [...user.addresses]` specifically handles the addresses property by creating a new array copy of user.addresses using the spread operator.

**The result is a new object `newUser` that has:**

- All the properties of `user`, copied over at the top level.
- A new array `addresses` that is a shallow copy of `user.addresses`.

**By doing this, you're ensuring that:**

- <p style="color:yellow;">Changes to top-level properties of <code>newUser</code> won't affect <code>user</code>.</p>

- <p style="color:yellow;">Changes to the <code>addresses</code> array itself (e.g., pushing or popping elements) won't affect <code>user.addresses</code>.</p>

- <p style="color:yellow;">However, if the <code>addresses</code> array contains objects, and you modify those objects, it will still affect the original objects in <code>user.addresses</code>, because the spread operator only creates a shallow copy.</p>

```js
const user = {
  name: "John",
  addresses: [{ street: "123 Main St" }, { street: "456 Elm St" }],
};

const newUser = { ...user, addresses: [...user.addresses] };

newUser.name = "Jane"; // doesn't affect user
newUser.addresses.push({ street: "789 Oak St" }); // doesn't affect user.addresses
newUser.addresses[0].street = "987 Maple St"; // affects user.addresses[0].street

console.log(user.name); // John
console.log(user.addresses); // [{ street: '987 Maple St' }, { street: '456 Elm St' }]
console.log(newUser.addresses); // [{ street: '987 Maple St' }, { street: '456 Elm St' }, { street: '789 Oak St' }]
```

If you need to deeply clone the `addresses` array and its contents, you might need to use a different approach, such as `JSON.parse(JSON.stringify(user.addresses))` or a library like Lodash.
