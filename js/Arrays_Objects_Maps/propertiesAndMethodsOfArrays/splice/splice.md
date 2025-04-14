# How `splice` works

## <p style="color:deepskyblue">Simple Example: Removing 3 elements from the `marks` array</p>

Splice is used when we want to remove multiple elements from an array.

- When you execute `marks.slice(1, 3)`, You are remove `3` elements starting from index `1`.
- **For Example**:
  - Before: `marks = [12, 45, 76, 87, 65]`
  - After: `marks = [12, 65]`

```js
const marks = [12, 45, 76, 87, 65];
marks.splice(1, 3);
console.log(marks);
```

## <p style="color:deepskyblue">Other properties in `Splice`</p>

**Properties of splice() Method**:

The `splice()` method in JavaScript has more properties than just removing elements. Here are some key properties:

**Adding Elements**:

You can add new elements to the array by passing them as arguments after the delete count. For example: `marks.splice(1, 0, 23, 56)` would insert 23 and 56 at index 1 without removing any elements.

**Returning Removed Elements**:

`splice()` returns an array of the elements that were removed from the original array. You can capture this returned array in a variable for further use.

**Modifying the Original Array**:

`splice()` modifies the original array directly.

### For Example:

```js
const marks = [12, 45, 76, 87, 65];
const removedMarks = marks.splice(1, 2, 23, 56);
console.log(marks); // [12, 23, 56, 87, 65]
console.log(removedMarks); // [45, 76]
```
