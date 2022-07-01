console.log('Prototype Object in Js');

// follow this link for more clarification on prototype object https://www.youtube.com/watch?v=7wFduiQPOt4&ab_channel=TechGun


// -------------------------------- Object ---------------------------
let obj = {
    name: "harry",
    channel: "Code With Harry",
    address: "mars"
}

// we can add the properties separetely into the object like this but we can't do the same in constructors
obj.lastName = "Jha";
console.log(obj);

// ------------------------------ Constructor --------------------------

//---------------- Important ---------------
// constructer function will create a prototype of its own name that is why there are two prototypes in console one prototype for constructor which we have created and one come default by javascript

function Obj(givenName){
    this.name = givenName
    // A function which is associated with object we called it that function is "method"
    this.run = function(name){
        console.log(name)
    }
}

// if we want to add the another property in our constructor we cannot add directly like this 
// Obj.lastName = "Jha";  //-- This method is invalid
// So that is why we use prototype to add properties separately without interfering in our constructors

// Here we have added the lastname in "Obj" constructor if we check in prototype section it will display the lastname for all objects "obj2 and obj3" which we have create down below because we have added the lastname property in Obj constructor using prototype method
Obj.prototype.lastName = 'Roy';

// Similary we are adding method using prototype method
Obj.prototype.run2 = function(){
    console.log(`My name is ${this.name} and my surname is ${this.lastName}`);
}

let obj2 = new Obj();
console.log(obj2.run("jerry"));
let my = "hero";
let obj3 =new Obj(my);
console.log(obj3);

// And we can access the newly added property using prototype method same as we do for other properties
console.log(obj2.lastName);
console.log(obj3.lastName);

// Here we the calling newly created method which we have created using prototype method
// console.log(obj2.run2());


// console.log(obj3.run());
