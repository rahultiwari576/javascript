console.log('Traversing Dom');


let cont = document.querySelector('.child');
// it will console the first element of child class 
console.log(cont);

// CHILD-NODES:=================================
console.log(`

childNodes

`)

let contain = document.querySelector('.container');
// There is an important thing about child node is In childNodes new line, comments are also included as text and it will assign their index 
console.log(contain.childNodes);


//CHILDREN IN DOM
console.log(`

children

`)
// if we want only elements list without comments and new line text then we use children 
console.log(contain.children);


// We can use .nodeName when we want the only name of element 
let onlynodeName = contain.childNodes[1].nodeName;
// it will get printed the name of an element in console which is h1 element on 1 index 
console.log(onlynodeName);


// NODE TYPES LIST FOR PARTICULAR ELEMENTS:======================= 
// 1 for Element 
// 2 for Attribute
// 3 for Text Node
// 8 for Comment
// 9 for Document
// 10 for DocType

// In 1 index we have an element h1 so we get 1 as we know from the above list
let thenodeType = contain.childNodes[1].nodeType;
thenodeType = contain.childNodes[10].nodeType;  // for text node
thenodeType = contain.childNodes[3].nodeType;   // for comment
console.log(thenodeType);


// to achieve the children of children we can traverse like this below 

let container = document.querySelector('div.container');
console.log(container.children);  // we get all children in container
console.log(container.children[1].children);  // we get first children of container and children of first children both i.e = ul
console.log(container.children[1].children[0].children); // we get first children of container, children of first children and children of ul which is li all by traversing like this

console.log(container.firstChild);  // we get first child of container

console.log(container.firstElementChild); // we get first element child of container



console.log(container.lastChild);  // we get last child of container

console.log(container.lastElementChild); // we get last element child of container

console.log(container.childElementCount); // it will count only elements presents in childnodes


// Siblings:============================== 
console.log(container.parentNode);  // here the parent of container is body so it will console body 

console.log(container.firstElementChild.parentNode);  // here the parent of first element child is container so it will console the container div 

// if we want to get the second child of the parent we can use sibling 
console.log(container.firstElementChild.nextElementSibling); //this is for child one
console.log(container.firstElementChild.nextElementSibling.nextElementSibling);  // this is for child second
console.log(container.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling); // this is for child third
console.log(container.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling); // this is for child forth