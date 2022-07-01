console.log('Creating and Replacing element Javascript ');


// ------------------------ Append Child ----------------------------------------------


// we can create elements by using document.createElement in Javascript 

let element = document.createElement('li');

 

// we can also add class to the above element by this method 
element.className = 'childul';
// we can add id to the element using the same method 
element.id = 'createdli';
// we can add attributes to the element with the help of javascript
element.setAttribute('title', 'myTitle')
// console.log(element);


// here we have added some plain texts for li element
// element.innerText = 'hello this is created by harsh using javascript';  
// or if we want to add text with html properties for li element we can use innerHTML
// element.innerHTML = '<h1>hello we have added this by using innerhtml text in javascript</h1>'; 

// or we can add text in our element by using create text node 

let text = document.createTextNode('I am a text node');
// And here we have appended the childtextnode into the upper text of the variable 'element'. 
element.appendChild(text);

console.log(element);


// METHOD OF APPENDING THE LI ELEMENT INTO UL IN HTML WITH THE HELP OF JAVASCRIPT =============================

// first we grab the parent of li (which is ul in this case) with the help of query selector
// As we know it will select the first ul from the dom
let ul = document.querySelector('ul.ulfirstclass');

// And here we have added or append the li element which we have stored in element variable into the ul in dom/webpage
ul.appendChild(element);

console.log(ul);


//-----------------------------    Replace With -----------------------------------------


// METHOD OF REPLACING ELEMENTS

// ------ Create a new element h3 and assign the id, class and text with the help of text node

let elem2 = document.createElement('h3')
elem2.id = 'elem2';
elem2.className = 'child-heading';
let textElem = document.createTextNode('Text node for child heading replaced');
elem2.appendChild(textElem);

// ------ then grab the element into new variable which you want to replace with the help of query selector
// As we know it will select only first li in dom

let elem3Replacing = document.querySelector('li.childul');


// ------- And at last replace the element with the created one. In this case the new element is h3 
elem3Replacing.replaceWith(elem2); 



// !! Important ===================================

// Replacing Targetted child using children index with the help of replaceWith  =============================

// First we have grabbed the parent of child in this case parent is ul which have class ulfirstclass 
let childnode = document.querySelector('.ulfirstclass');

// Then create a new Element 
let child = document.createElement('h2')
// console.log(child.children[2]); 

// Adding some texts to the new element
let textChild = document.createTextNode('replacing child with the help of children index');
child.appendChild(textChild);

// Then grabbing the particular child in ul with the help of children index
let textchildReplacer = childnode.children[2];
console.log(textchildReplacer);

// And at last replace children with the created element
textchildReplacer.replaceWith(child); 
console.log(child);


//------------------------------- Replace Child -------------------------------------



// Replacing child using id 

// here we have created an anchor element using create element 

let mul = document.createElement('a')

// then we set the attribute href for anchor tag with link
mul.setAttribute('href', 'https://www.google.co.in/')

// adding some text for anchor tag
let textmul = document.createTextNode('Go to Google created this using replace child method');
mul.appendChild(textmul);



// grabbing the parent of child here parent in container which have id = node 
let parent = document.getElementById('node');

// In the process of replacement parent and child element both must be written in code
// and at last replacing the child with anchor tag and grabbing the child which will be replaced using its id

// Parent                            //Child
parent.replaceChild(mul, document.getElementById('ful')); 


//--------------------------- Removing Child ----------------------------------------

// Child 2 which have id "lul" removed from webpage using remove child method

parent.removeChild(document.getElementById('lul'));


//---------------------------- Get, Has and remove Attribute ---------------------------------------

// Get Attribute is a function which will bring any attribute from the page 
// it will tell us the id of the parent
let pr = parent.getAttribute('id');
console.log(parent, pr);
// And it will tell us the class of the parent
let ar = parent.getAttribute('class');
console.log(parent, ar);

// Has attribute is used to know the attribute is present in the element or not using boolean method

let gr = parent.hasAttribute('class');

console.log(parent, gr);    // it will return true because the element contains class


// It will remove the attribute from the element
parent.removeAttribute('class'); 

console.log(parent);


// Instead of using document.getElementById('is).innerHTML; we can also grab the element by this method is.innerHTML;

let paras = is.innerHTML;
console.log(paras);