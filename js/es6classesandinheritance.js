console.log("ES6 Classes and Inheritance in Javascript");

// Class in javascript is like a blueprint or template in the process of creating an object

// Difference between creating an object using function and creating an object using class please follow this link for clarification https://youtu.be/5AWRivBk0Gw

class Employee {
    // Here we created a constructor in Employee Class which have name, experience, division
    constructor(givenName, givenExperience, givenDivision) {
        this.name = givenName;
        this.experience = givenExperience;
        this.division = givenDivision;
    }
    // And here we have method function in Employee class
    slogan() {
        return `I am ${this.name} and this company is the best.`;
    }

    // Adding another function in our Employee class
    joiningYear() {
        // it will substract the experience value provided from harsh object from 2021
        return 2021 - this.experience;
    }

    // Here we are using static method
    // Static is a method function which we can use and call without creating an object like we've done for harsh
    static add(a, b) {
        return a + b;
    }
}

// Here we have created a new object Employee using "new" keyword same like we do in prototype
harsh = new Employee('Harsh', 20, 'Division');
console.log(harsh);

// Here we are calling the method functions
// we are getting this data because we have passed three parameters "Harsh, 20, Division" while we are creating the object harsh
console.log(harsh.slogan());
console.log(harsh.joiningYear()); // result will be 2001 because we passed the value 20 as an experience

// Static is a method function which we can use and call without creating an object like we've done for harsh

console.log(Employee.add(2, 4));


//-------------------------- Inheritance ------------------
// it means create a new template with the help of another template 


// Here we have created a new class "Programmer" inherited from another class "Employee" means the programmer have both properties Employee as well as programmer properties by using extends property

// The process of getting the values of different templates is called inheritance.

// We used "extends" property to inherit the properties of Employee into Programmer
class Programmer extends Employee {
    constructor(givenName, givenExperience, givenDivision, givenLanguage, givenGithub) {
        // here we are calling the previous class Employee constructor with the help of super 
        super(givenName, givenExperience, givenDivision);
        this.language = givenLanguage;
        this.github = givenGithub;
    }

    // In this condition if this.language value is python then it will return "Python" in console otherwise it will return "javascript"
    favouriteLanguage(){
        if(this.language == 'python'){
            return 'Python';
        }
        else{
            return "Javascript";
        }
    }

    // We can't use this.anything in static method 

    static multiply(a,b){
        return a*b;
    }
}

rohan = new Programmer('Rohan', 3, 'lays', 'go', 'harsh34');
console.log(rohan);
// So here we are passing the value "go" in this.language so as per condition it will return javascript
console.log(rohan.favouriteLanguage());

// Here we called the static method in programmer class
console.log(Programmer.multiply(34,645));

