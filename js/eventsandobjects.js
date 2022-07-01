console.log('Events And Events Objects');

// We use event listener function so that when we clicked the button it console the log in our webpage
// Not only on button we can use click event to any element by grabbing its id
// first we grabbed the button using its id and add click event so that when we clicked it will console


// Syntax of event listener

// The first parameter is the type of the event (like "click" or "mouseover" or any other HTML DOM Event.) 
// The second parameter is the function we want to call when the event occurs. 

// There is many event in event listener like mouseover and many more

// Mouse over is similary like click event but the only difference is when we only hover on element event will fire without any click


//============== function Parameters ======================  !! Important  // Reference Yahoo Baba youtube channel

// Its important to understand that calling the function and giving its parameter 

// In event listener the first parameter is event and second parameter is function name 

// First parameter applies the click method and second parameter applies the function when we clicked on the element
document.getElementById('id').addEventListener("click", abc);

// And here we have created the function for abc function
function abc() {
    // document.getElementById('id').style.background = 'green'; 

    // or we can use this instead of typing get element by id 

    this.syle.background = 'green';
}


// And in second method we haven't assign the function name we have directly assigned the function and function parameters in brackets "e"

// !Important:- There is another argument of function is event object denoted by 'e' literally it provides the information of which event is fired. it consists predifined properties of event object like target - to know where we place the event listener in html page, prevent dafault and mony more

document.getElementById('button').addEventListener('click', function(e) {
    let variable;

    console.log('You have clicked the button');
    // console.log(e); 
    variable = e.target; // Very important thing in event object is target used to identify the target element where we apply the event

    variable = e.target.value; // It will grab the targeted element value in the variable

    variable = e.target.className; // if we want to know the class name of target element

    variable = e.target.id; // if we want to know the id name of target element

    variable = e.target.classList; // it will give the dom list of classes so we can grab the class using its index with the help of array.from function


    variable = e.offsetX; // it will give the location of x axis relative to the element when we click anywhere on the  submit button
    variable = e.offsetY; // it will give the location of y axis relative to the element when we click anywhere on the  submit button

    variable = e.clientY; //  it will give the location of y axis relative to the browser window when we click anywhere on the  submit button
    variable = e.clientX; // it will give the location of y axis relative to the browser window when we click anywhere on the  submit button


    console.log(variable);
    // by using click event we can do more complex work like if we want to redirect the another page after click we can use location.href 
    // location.href = '//facebook.com'; 
})

//------------------------------ Blur Event -----------------------------
// here we are applying the blur event in button
// to make blur event fire first we need to click on the button (any interaction with button is important)then when we click away anywhere except on button in browser the blur event will fire
let btn = document.getElementById('btn');
btn.setAttribute('style', 'background: yellow;')
btn.addEventListener('blur', function() {
    console.log('blurevent fired');
})


//-------------------------- onChange Event --------------------------
//The onchange event occurs when the value of an element has been changed.
// When we use this event in html we use "onChange" and when we use it in Js event listener function we'll use "change" event.

//* The onchange will fire when we interact in textarea and cliked outside the outside the its done. The event will fired and changed the background color to yellow

//!Supported HTML tags:	<input type="checkbox">, <input type="color">, <input type="date">, <input type="datetime">, <input type="email">, <input type="file">, <input type="month">, <input type="number">, <input type="password">, <input type="radio">, <input type="range">, <input type="search">, <input type="tel">, <input type="text">, <input type="time">, <input type="url">, <input type="week">, <select> and <textarea>


let textArea = document.getElementById('textarea');
textArea.addEventListener('change', (e) => {
    textArea.setAttribute('style', 'background: yellow;')
        // This will fetch all the value added in textarea in console
    let x = e.target.value;
    console.log(x);

})