console.log('Prototype Inheritance in Js')
// follow this link for more clarification on prototype inheritance
// https://www.youtube.com/watch?v=BYz0zUUsKwY&ab_channel=TechGun 

// Whenever we create an object the prototype property will always attached into it
// And in prototype we can see a bunch of properties(functions) which is predefined in javascript and it is valid for all objects
// prototype will connect with all objects by default and  prototype functions or properties can be used without defining

// Storing two functions "slogan" and "changeName" in proto variable
const proto = {
    slogan: function () {
        return `This company is the best`;
    },
    changeName: function (newName) {
        this.name = newName;
    }
}

console.log(proto);

// Here we are creating an object with the help of object.create and insterting prototype functions which is stored in proto variable
const harsh = Object.create(proto);
harsh.name = "Harsh";
harsh.role = "Programmer";
harsh.lastName = "Jha";

/*             !Important

with the help of object.create we have created harsh object with changeName and slogan function like this

example:-
harsh = {
    name: "Harsh",
    role: "Programmer",
    lastName: "Jha",
    slogan: function(){
        return `This company is the best`;
     },
     changeName: function(newName){
         this.name = newName;
     }

}

*/

// now harsh is an object which have name, role, lastname and two prototype functions in it
// console.log(harsh); 

// we can retrieve the properties name, lastname, role, slogan, changeName of harsh object 
console.log(harsh.lastName);
console.log(harsh.name);
console.log(harsh.role);

// and if we want to use our prototype function we can do like this here we have used change name prototype function
harsh.changeName("Harsh2");
console.log(harsh.name);

//-------------------- Alternative Method ------------------
// This is the alternative way of creating the harsh object
// const harsh = Object.create(proto,{
//     name: {value: "Harsh" ,writable: true},
//     role: {value: "Programmer"},
//     lastName: {value: "Jha"}
// })

// harsh.changeName("Harsh2");
// console.log(harsh);
// ---------------------------------------------------------




// console.log(proto.slogan());
// console.log(proto.changeName());


// ---------------------Prototype Interitance---------------------

// Creating a constructor name Employee

function Employee(name, salary, experience) {
    this.givenName = name;
    this.givenSalary = salary;
    this.givenExperience = experience;
}


// Adding methods in Employee constructor with the help of prototype
Employee.prototype.companySlogan = function () {
    return `This company is the best. Regards, ${this.givenName}`;
}

// Created an object with the help of constructor
let sonaliObj = new Employee("Sonali", 10000, "8 yrs");
console.log(sonaliObj);
console.log(sonaliObj.companySlogan());

// By using Employee.call we get only the properties of Employee function but not the Employee prototype function which is companySlogan in this case 
// To achieve or inherit the prototype function Employee in programmer function we need to use this line of code

Programmer.prototype = Object.create(Employee.prototype);

// And if we want to see the prototype "constructor" in object in console we need to set it manually by using this line of code


Programmer.prototype.constructor = Programmer;


// Creating an another constructor name Programmer

function Programmer(name, salary, experience, language) {
    // here we are calling the Employee constructor in this constructor with this we'll achieve all the properties of Employee constructor in this Programmer constructor
    Employee.call(this, name, salary, experience);
    this.givenLanguage = language;
}

let rohan = new Programmer("Rohan", 0, 2, "Javascript");
console.log(rohan);
console.log(rohan.givenName);
console.log(rohan.givenSalary);
console.log(rohan.givenExperience);
console.log(rohan.givenLanguage);

// Because we have use Programmer.prototype = Object.create(Employee.prototype) we are getting prototype function of Employee "Slogan" here
console.log(rohan.companySlogan());