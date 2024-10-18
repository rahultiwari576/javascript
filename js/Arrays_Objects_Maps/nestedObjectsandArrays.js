// Objects are variables too, but objects can contain many values.
// In this object, we have stored multiple values in a single variable called 'person'.
// Objects are an advanced version of arrays.
var person = {
  //   !! Important - Key-value pairs in an object
  // key       //value      // both are key-value pairs
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
  // We can also put arrays inside objects.
  favMovies: ["Hum", "Sholay", "Dhoom"],
  // We can also use functions in objects, which are called methods.
  salary: function () {
    return 250000;
  },
  fullname: function () {
    // return person.firstName + " " + person.lastName;
    // "this" is used here to refer to the current object (the 'person' object).
    return this.firstName + " " + this.lastName;
  },
  // We can also nest objects inside other objects.
  object: {
    city: "Delhi",
    country: "India",
  },
};

// You can add new properties to an existing object by simply assigning a value to them.
person.nationality = "Indian";
// console.log(person.firstName + " " + person.lastName + " " + person.age);
// or
// console.log(
//   person["firstName"] + " " + person["eyeColor"] + " " + person.nationality
// );

// document.write(person.favMovies);  // It will not work in Node.js, only in browser environments.
// We can retrieve a particular array element using its index in the object.
// console.log(person.favMovies[2]);
// This is how we can call function of an object.
let salary = person.salary();
// console.log(salary);
// Calling the function directly without storing the return value in a variable.
console.log(person.fullname());

// We can retrieve nested objects.
// console.log(person.object.city); // Delhi
// console.log(person.object.country); // India
