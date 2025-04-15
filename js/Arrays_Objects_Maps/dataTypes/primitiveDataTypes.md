# What is Primitive Data Types?

Primitives (like `strings`, `numbers`, `booleans`, etc.) are **immutable**. This means you can’t change the value itself. For example, you can’t modify the letters inside a string or turn a number into a different number within the same value. Instead, you create a new value.

## <p style="color:deepskyblue">1. String</p>

- A string is text, like `"hello"`. You can’t change the letters inside `"hello"` directly because it’s immutable.
- **Example**:

```js
let word = "cat";
word[0] = "h"; // Try to change "c" to "h"
console.log(word); // Output: cat (no change, string is immutable)
```

- Why? The string `"cat"` is fixed. You can’t edit its letters. To “change” it, you need a new string:

```js
word = "hat"; // This is a new string, not editing the old one
console.log(word); // Output: hat
```

## <p style="color:deepskyblue">2. Number</p>

- A number like `5` is fixed. You can’t change `5` to `6` within the same value.
- **Example**

```js
let num = 5;
num = 6; // This assigns a new number, not changing the old 5
console.log(num); // Output: 6
```

- The original `5` isn’t modified; you just point the variable to a new number.

## <p style="color:deepskyblue">3. Boolean</p>

- You can’t change `true` to `false` directly. Assigning `false` creates a new value for `isHappy`.
- **Example:**

```js
let isHappy = true; // Boolean: true
console.log(isHappy); // Output: true
isHappy = false; // Assign a new value (immutable: not modifying "true")
console.log(isHappy); // Output: false
```

## <p style="color:deepskyblue">4. Null</p>

- Represents “nothing” or an empty value on purpose.
- `null` is a fixed value. You can’t modify it (e.g., there’s no way to “edit” `null`). You just assign something else to the variable.
- **Example:**

```js
let userData = null; // Nothing is here
console.log(userData); // Output: null
userData = "some data"; // Assign a new value (immutable: not modifying "null")
console.log(userData); // Output: some data
```

## <p style="color:deepskyblue">5. Undefined</p>

- Means a variable has been declared but has no value assigned yet.
- Like saying, “I made a box, but I didn’t put anything in it.”
- `undefined` is a specific state. You can’t change what `undefined` is; you just give the variable a new value.

- **Example:**

```js
let myValue; // No value assigned
console.log(myValue); // Output: undefined
myValue = 42; // Assign a new value (immutable: not modifying "undefined")
console.log(myValue); // Output: 42
```

## <p style="color:deepskyblue">6. Symbol</p>

- Creates a unique identifier every time, even if the description looks the same.
- Often used to make unique keys for objects to avoid conflicts.
- A `Symbol` is fixed and unique. You can’t modify the symbol itself (e.g., change its description). You can only create a new symbol.
- **Example:**

```js
let key1 = Symbol("myKey"); // Create a unique symbol
let key2 = Symbol("myKey"); // Create another symbol with same description
console.log(key1 === key2); // Output: false (they’re different)
let obj = {};
obj[key1] = "secret"; // Use symbol as a key
console.log(obj[key1]); // Output: secret
```

## <p style="color:deepskyblue">7. BigInt</p>

- Represents very large whole numbers that regular numbers can’t handle safely.
- Used when you need numbers bigger than 2^53 - 1.
- A `BigInt` value like `12345678901234567890n` is fixed. You can’t edit the digits inside it. Assigning a new `BigInt` or doing math creates a new value.
- **Example:**

```js
let bigNumber = 12345678901234567890n; // BigInt (note the 'n')
console.log(bigNumber); // Output: 12345678901234567890n
bigNumber = 98765432109876543210n; // Assign a new value
console.log(bigNumber); // Output: 98765432109876543210n
let sum = bigNumber + 100n; // BigInt arithmetic
console.log(sum); // Output: 98765432109876543310n
```

## <p style="color:deepskyblue">Why Are They Immutable?</p>

- For all these primitives, you can’t modify the value itself. For example:
  - “changing” means assigning a new value to the variable. The original value (like `"cat"` or `5`) stays the same in memory; you just point the variable to something else.
  - You can’t change `true` to `false` within the same value.
  - You can’t edit `null` to be “half-null” or something else.
  - You can’t tweak a `Symbol` to have a different ID.
  - You can’t change the digits inside a `BigInt` without creating a new one.
- Instead, when you “change” a primitive, you’re assigning a new value to the variable. The original value (like `true`, `null`, or `123n`) stays unchanged in memory.

## <p style="color:yellow; font-weight:bold">Key Points</p>

<p style="font-size:1.5rem; font-weight:bold">Primitives: Copies Are Independent</p>

- When you copy a primitive, you get a new, separate value. Changing the copy doesn’t affect the original.
- **Example:**

```js
let a = "dog"; // Primitive: a string
let b = a; // b gets a copy of "dog"
b = "cat"; // Assign a new string to b
console.log(a); // Output: dog (a doesn’t change)
console.log(b); // Output: cat
```
