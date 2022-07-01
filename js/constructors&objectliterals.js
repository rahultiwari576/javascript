console.log('Constructors, Object-literals, Object Oriented in Javscript');

//! ---------------this keyword--------------------

// this refers to a window object. and if we use "this" in regular function "this" again this refers to a window object 

// to identify the regular function and it calls here is a simple example to understand
/* -------- comment starts ------------

function hello(){
    console.log(this) // this is a regular function
}

hello() // and this is a regular function call


function obj(){
    name: "Harsh"
    func: function hello(){
        console.log(this) // Here "this" consist all object "obj" data because here "this" refers to this object "obj"
    }
}


obj.hello() // here we are calling the function which is in obj it means it is not a regular function call

----------comment ends------------*/


console.log(this); // refers to window object

var user={
 firstName:"Hitesh",
 courseCount:4,
 getCourseCount:function(){
    console.log("LINE7",this); // Here this refers to "user" Object it means it contains all the data of "user" object
    function sayHello(){
      console.log("Hello");
      console.log("LINE 10",this); // again here this refers to window object because it is in regular function
   }
    sayHello(); // regular function call
}
}


user.getCourseCount()


/*
OOP stands for Object Oriented Programing

> OOP is nothing but a method/style/pattern of coding in Javascript
          Why we use Object Oriented Programming
> Its gives code more modular and reusable
> Well Organised Code
> Easier to debug
> Best for medium to large website projects
*/


// Objects are similar to variables. But objects can contain many values.
// But here in object we have stored multiple values in a single variable which is person
// Objects is a advance version of an array 
// Objects starts with curly brackets
var person = {
    //   !! Important - Key value pair in object
    // key       //value      // both are key value pairs
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
    // we can also put array in object too
    favMovies: ["Hum", "Sholay", "Dhoom"]

};

// You can add new properties to an existing object by simply giving it a value.
person.nationality = 'Indian';
console.log(person.firstName + " " + person.lastName + " " + person.age);
//or
console.log(person["firstName"] + " " + person["eyeColor"] + " " + person.nationality);

console.log(person.favMovies);


// Another example of Object literals with methods f()
// ! and if the key is present in its own object we can simply retrieve by using "this" 
let car = {
    name: 'Maruti 800',
    topSpeed: 89,

    run: function () {
        //we can also retrieve an oject which is in another scope (person.firstName)
        console.log('Car is running' + ' And the name of owner is ' + person.firstName);
        // and if the key is present in its own object we can simply retrieve by using "this" instead of typing car.name
        console.log('and the car model is ' + this.name);
    }
}

console.log(car);
console.log(car.name);
console.log(car.topSpeed);
// calling the run function in car object 
console.log(car.run());

console.log("----------Constructors In Js-----------")


//! Contructor is a template which helps to create an object it is very important to understand that eveything we assign in construtor are objects that is why we are using "this" Keyword to refer to its own object i.e if a object name is "car" then we use car.name to fetch the key values but here we don't have any object name that is why we used "this" keyword to refer this object.
// new Date(); is also a example of constructor

// Creating a constructor function for cars
// Mostly we use capital letters for constructor name it's not compulsory but it's recommeded so that we can identify between constructors and functions

// Constructor :- A special method for assigning properties. Automatically called when creating an object

function GeneralCar(givenName, givenSpeed, mSpeed) {
    // ! Important :- here we are assigning the parameters value in name variable "Object - Key"
    this.name = givenName;
    this.topSpeed = givenSpeed;
    this.mercedes = mSpeed;
    this.run = function () {
        // we used template literal here to concate all together
        console.log(`${this.name} have the best speed of ${this.topSpeed}`);
    }

    // Adding another method in GenralCar constructor named analyze
    // In this method we are stating that substract the given topspeed from 200 which we have defined dowm below (mSpeed)
    this.analyze = function () {
        console.log(`This car is slower by ${this.mercedes - this.topSpeed} Km/h than Mercedes`)
    }
}

// here we are creating a new GeneralCar object using new keyword and assigning the values to the constructor function by passing the arguments.

let car1 = new GeneralCar('Nisan', 139, 200);  // Here we have created a new object
// now we have an object stored in car1 that is why car1 is an object 
console.log(car1);
console.log(car1.run());
console.log(car1.name);
console.log(car1.topSpeed);
console.log(car1.analyze());

// Similarly if we want the same object but different key values we can do it by just passing the different parameters

let car2 = new GeneralCar('Toyota', 180, 200); // here we have created a new object
// now we have an object stored in car2 that is why car1 is an object 
console.log(car2);
console.log(car2.name);
console.log(car2.topSpeed);
console.log(car2.run());
console.log(car2.analyze());


let car3 = new GeneralCar('Mercedes', 200, 200);
console.log(car3.analyze() + " Because i am the Mercedes");


// Another Example of Objects and Constructors

// follow this link for more clarification :- https://www.youtube.com/watch?v=5Jo4GxRBG8Y&t=91s&ab_channel=CheezyCode

// Here we are creating an object with the help of function named createStudent 

function createStudent(firstName, lastName) {
    let student = {
        fname: firstName,
        lname: lastName,
        getFullName: function () {
            console.log(`${this.fname} ${this.lname}`);
        }
    }
    // Here return student is returning the result value done by function in this case the result is James Bond
    return student;
}

// retrieving the return value in student variable by calling function with parameters
let student = createStudent('James', 'Bond');

console.log(student);
console.log(student.getFullName());

// Constructor function is also like normal function but this method is pretty easy if want to create multiple objects

// Creating and calling a constructor function is bit different from normal function

// follow this link for more clarification :- https://www.youtube.com/watch?v=5Jo4GxRBG8Y&t=91s&ab_channel=CheezyCode

function Student(firstName, lastName) {
    // in constructor function we use "this" keyword which means it will create an empty object named "this" and it will add the property into the " this " object
    // let this = {};

    // Follow this link for clarification on "this" and "new" Keyword
    // https://www.youtube.com/watch?v=Uhp9xPCILno&ab_channel=HiteshChoudhary
    this.fname = firstName;
    this.lname = lastName;
    this.getFullName = function () {
        console.log(`${this.fname} ${this.lname}`);
    }
    // return this;
}

// Here we are creating a new student object using new keyword
let student1 = new Student('Harsh', 'Jha');
console.log(student1);
console.log(student1.getFullName());