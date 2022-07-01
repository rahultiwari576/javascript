console.log('Element Selectors')

// Type of Element Selectors:============================= 
// > Single element selector
// > Multi element selector



// Single Element Selectors:=============================

// Here we are grabbing the element from dom by using single element selector by ID
// So now the element which have id = node stored in element variable
let element = document.getElementById('node');
// Here the parent node is main div which have id node and class container 
element.parentNode;

// And all the elements and tags are in parent node is called node we can also grab them by using index method  
element = element.childNodes[5]; 
//=====================================================================================================
// As we know code will get replaced if we overwrite in the same variable so here it will affect on child which is on 5th index in childnodes if we comment it out the effect will be shown on parentnode  
element.style.color = "red";
element.style.backgroundColor = "yellow";
//======================================================================================================

// With the help of innertext method we can change the innertext of any element and here we have grabbed the div which have id "node" and in the upper lines we have stored the child div in the element that is why the changes will visible in first child of parent div "node" id 

element.innerText = 'Harsh in child changing the innertext of child using innertext method'


console.log(element);


let childHtml = document.getElementById('child-html');
childHtml.innerHTML = '<b>Here we have used innerHtml in this we can use any tags of html and change the innertext as well of any child by grabbing with the help of element selector</b>'
console.log(childHtml);

// we can also grab and console in consolel log it will console the whole innerHtml of childHtml in console
console.log(childHtml.innerHTML);



// QuerySelector :===================================

// In query selector we can grab css selector of any element like .container, #node etc 

let sel = document.querySelector('.child');

sel = document.querySelector('#node');

sel = document.querySelector("div");

sel = document.querySelectorAll("div"); 

// Grabbing and changing the background color of h1 element with the help of queryselector
sel = document.querySelector("h1"); 
sel.style.backgroundColor = "blue"; 

console.log(sel, ` 
1. It returned the first child which have class child '.child'
2. it returned the element which have css selector name #node 
3. it will returned only first div from html page
4. it will return all div's exist in html page`);




// Multi Element Selector:===========================================

let slec = document.getElementsByClassName("child");

slec = document.getElementsByTagName("div");

// ===================================IMPORTANT================================================
// !! As we know we can only iterate an array by using for each loop that's why first we change html collection into an array then we use for each loop to loop the arrays  !!IMPORTANT

// we cannot use foreach method on html collection in dom that is why we use array.from
console.log(`

Converted html collection into array so that we use ForEach loop


`)

// with the help of forEach loop we have iterated all html collection into blue color
Array.from(slec).forEach(function(element) {
    console.log(element);
    element.style.color = 'blue';
});

console.log(slec);



