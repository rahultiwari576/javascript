const numbers = [3, 7, 10, 15, 20];

const index = numbers.findIndex((num) => num % 2 === 0);

// console.log(index); // Output: 2 (because 10 is the first even number at index 2)

// -----------------------

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

const indexTwo = users.findIndex((user) => user.name === "Bob");

// console.log(indexTwo); // Output: 1 (Bob is at index 1)

// -----------------------

const number = [1, 3, 5, 7];

const i = number.findIndex((num) => num > 10);

console.log(i); // Output: -1 (because no number is greater than 10)
