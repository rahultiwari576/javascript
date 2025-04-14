// Simple Example of Splice
// const marks = [12, 45, 76, 87, 65];
// marks.splice(1, 3);
// console.log(marks);

// Other properties in Splice

const marks = [12, 45, 76, 87, 65];
const removedMarks = marks.splice(1, 2, 23, 56);
console.log(marks); // [12, 23, 56, 87, 65]
console.log(removedMarks); // [45, 76]
