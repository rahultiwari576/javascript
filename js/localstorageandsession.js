
// For more clarification on JSON or stringify please visit Tutorial Video 

console.log('Local Storage and Session Storage');
// In browser local storage and session storage are availabe in applications in inspect element tab

// Local Storage -  In browser we can store data in local storage with the help of key value pair

// set item is one of the function of local storage which helps to store data in local storage in browser permanently
// NOTE:- after storing the data in local storage it will stored permanently even if we comment this code(localStorage.setItem) or deleted it
// If we type window.localStorage in console we can view the results of stored data in a string

// Basically it sets the key-value pair inside the local storage
localStorage.setItem('Name', 'Harsh');

localStorage.setItem('Name2', "Tom");
localStorage.setItem('Name3', "Pulkit")
// we can also retrieve the data particularly by grabbing with the help of key "value name" in console == window.localStorage.Name2 - the result is 'tom' in array

// Name3 = Pulkit is also stored in local Storage


// As we know that once we set the item for local storage we cannot clear it from console by removing or commenting the code so we use this command to clear the entire data from application tab
// localStorage.clear(); 

// Or if we want to clear only particular data from local storage
//localStorage.removeItem('Name3');  // it will show null for name in console


// we can also get data from local storage and print it in console by storing it into any variable and consoling in the browser 

let name = localStorage.getItem('Name');
console.log(name);

let name2 = localStorage.getItem('Name2');
console.log(name2);


// Adding an array in local Storage:=========================================

let veg = ['Tomato', 'Kiwi', 'Ginger']; 

// localStorage.setItem('Sabzi', veg); // by this method we can only get an array in the form of string in local storage 

// if we want all sabzi item in form of an lookalike array in local storage we can use json stringify 

localStorage.setItem('Sabzi', JSON.stringify(veg));  // now it will make the veg item looks like an array but not an actual array

let vegi = localStorage.getItem("Sabzi");
console.log(vegi, "Here is an example of only json.stringify method");


//This method will return only string =====================  
// Rule :- without using json stringify we cannot use json parse !Important

//let vegetables = localStorage.getItem('Sabzi');  // with this method we cannot retrieve the item in an array
// So we use JSON.parse

// But this method will convert string into an array
let vegetables = JSON.parse(localStorage.getItem('Sabzi'));  // to convert it into actual array we use json parse to convert a string {lookalike array} into an actual array

console.log(vegetables, "Here is an example of parsed json");


// Session Storage :=================

// Session Storage works similarly like local storage but only one differece is it stores the data temporary 
// if we delete the code or commented it all data will gone 

sessionStorage.setItem('sessionName', "sHarsh");

sessionStorage.setItem('sessionName2', "sTom");

sessionStorage.setItem('sessionSabzi', JSON.stringify(veg));


let sessionName = sessionStorage.getItem('sessionName');
console.log(sessionName);

// Similarly like local storage if we want to clear the session storage we can use sessionStorage.clear
// or if we delete the code it also works 
// sessionStorage.clear(); 
 

// Example of converting a string into an array and retrieving in console in the form of array

let veg1 = ['Tomato111', 'Kiwi111', 'Ginger111'];

// By using this method we get only string
// note :- dont forget to clear the local storage before run this program
localStorage.setItem('Sabzzi', veg1) // this will return only string with commas
let i = localStorage.getItem('Sabzzi');
console.log(i);

localStorage.setItem('Sabzzi', JSON.stringify(veg1));  // this will also return string but a lookalike array
let j = localStorage.getItem('Sabzzi');
console.log(j);

// Rule :- without using json stringify we cannot use json parse 

let item = JSON.parse(localStorage.getItem('Sabzzi')); // but this will return a pure array
console.log(item);