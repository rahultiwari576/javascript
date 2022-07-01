// DOM = DOCUMENT OBJECT MODEL , dom is part of window object
// window is global object in client side javascript

console.log('Window Object and Dom');

let a = window;

// because window is a global object it is not neccessary to add window before method


// ALERT METHOD IN WINDOW OBJECT:===============

// window.alert('Hello Harsh') 
// or 
// alert('Hello Harsh') 


// PROMPT METHOD:=================
//if we write okay or any message in this prompt the value(okay or any message) will store in our variable a the than it will console the okay or any message which is store in variable in console

// a = prompt('this will destroy your computer');



//CONFIRM METHOD:================
// if we click on okay it will return the boolean value i.e 'true' and if we press cancel than it will return false in console

// a = confirm('Are you sure'); 


// SOME OTHER METHODS IN WINDOW OBJECT:===================== 

// it will tell in innerHeight of the window 
// a = window.innerHeight;  

// it will tell the inner width of the window
// a = innerWidth;

// it will tell the outer height of the window
// a = outerHeight;

// it will tell the outer width of the window
// a = outerWidth; 

// >> If we write these methods in console and press enter we can view the changes 

// it is for scrolling on x-axis 
// a = scrollX; 

// it is for scrolling on y-axis
// a = scrollY; 

a = window.history;
a = console.log(a);

// history.go(-1) is a function in window object by using this we can go to previous steps that is how our back buttons work in our browser 



console.log(a);

// LOCATION:----------------------
// There are various functions and methods in location we can all to experiment by typing these commands in console (reload, href, origin)

// let y = location; 


// For console:= location.reload() - it will reload the whole page
//  location.href - it will show the url of the page 

// if we console this command it will take to the website we have put on 
// location.href = 'http://www.flipkart.com/' 

//String function in location = we can achieve the location(url) of our page
y = location.toString();

console.log(y);