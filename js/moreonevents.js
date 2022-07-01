console.log('More on Events');

// ______________________________________________________________________________________________
// Example of simple function with parameters 

// Function name = funcSimple
// Parameters in function = you and last
// Arguments = Harsh and Jha where we called the function


function funcSimple(you, last){
    console.log( "Hello " + you +" "+ last);
}
funcSimple("Harsh", "Jha"); // we can directly pass the arguments into function parameters

// _______________________________________________________________________________________________


// Grabbing the element by id into variable btn
let btn = document.getElementById('button');  // Submit Button
// Adding event listner into the btn variable 
btn.addEventListener('click', func1);    // Click Event
btn.addEventListener('dblclick', func2); // Double Click Event
btn.addEventListener('mousedown', func3); // Mouse Down Event

// And calling the function by its name "func1" and printing its parameters in console 
// for single click 

// If we have any button in form the default behaviour of that button is to submit the form instantly, to prevent that behaviour we use preventDefault function which is the property of e object in event listener
function func1(e) {
    // console.log('thanks', e); 
    // to bypass any default behaviour we can use preventDefault 
    e.preventDefault();
}

// For double click event
function func2(e) {
    // console.log('thanks its a double click', e); 
    // to bypass any default behaviour we can use preventDefault 
    e.preventDefault();
}


// For mousedown event
// In mouse down event it clicks even if we punch the wheel of mouse or punch the right click 
function func3(e) {
    console.log('thanks its a mousedown event', e);
    // to bypass any default behaviour we can use preventDefault 
    e.preventDefault();
}

// Selecting the first child of div with the help of query selector, adding mouse enter event into it with second parameter function and consoling the message when we enter our cursor in the div which has class child 

document.querySelector('.child').addEventListener('mouseenter', function() {
    // console.log('You enter in this area'); 
})

// Mouse leave event when we leave or more the cursor out from that area this event will fire
document.querySelector('.child').addEventListener('mouseleave', function() {
    // console.log('You exited from this area'); 
})

// Mouse move event when we move our cursor into that selected area this event will fire
// note that we have selected the container for this event

// Printing some event objects in this event
document.querySelector('.container').addEventListener('mousemove', function(e) {

    // it will tell the location of x axis of cursor 
    console.log(e.offsetX); 
    // similarly for y it will tell the location of y axis of cursor
    console.log(e.offsetY);
    // console.log('You have triggerd mouse move event');  
})


