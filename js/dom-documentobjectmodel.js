console.log('DOM');

// DOM:==================================

// With the HTML DOM, JavaScript can access and change all the elements of an HTML document. 
// When a web page is loaded, the browser creates a Document Object Model of the page. 
// The HTML DOM model is constructed as a tree of Objects: 

// With the object model, JavaScript gets all the power it needs to create dynamic HTML:

// JavaScript can change all the HTML elements in the page
// JavaScript can change all the HTML attributes in the page
// JavaScript can change all the CSS styles in the page
// JavaScript can remove existing HTML elements and attributes
// JavaScript can add new HTML elements and attributes
// JavaScript can react to all existing HTML events in the page
// JavaScript can create new HTML events in the page


let a = window.document;
// to achieve the html collection of all the tags from our html page we can use document.all
a = document.all;

// to achieve all the tags form body we can use document.body
// a = document.body;

// to get all the forms in our html page we can use document.forms
// a = document.forms; 

// we can also target a particular form by using number of position
// a = document.forms[0];


// it means create an array by using "a" variable and then iterate this function
// so first in (a) variable we have document.all means collection of html tags so it says convert all html tags which is stored in (a) into an array and then print all the elements one by one in console by using for each function 
// Array.from(a).forEach(function(element){
//     console.log(element);
// })


// to get all the links from the webpage we can use document.links 
a = document.links;

// we can also achieve particular links

a = document.links[2].href;

// to get the images from the webpage we use this method 
a = document.images;

// and the fetch all the scripts we can use this method
a = document.scripts;


console.log(a);