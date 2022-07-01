console.log('Creating a Editable Div')

let divElem = document.createElement('div');
console.log(divElem)

// here we are grabbing the text value from local storage in val variable but right now local storage is null because we haven't set the text value in local storage

let val = localStorage.getItem('text');
console.log(val);

// we can also create a blank varibale here and use it in if-else condition or we can create the text variabele directly into the loop without using let
// let text;  

// In this condition we are stating that if the local storage is empty then inject the written text into the created div but if local storage is not empty then take the value of text which stored in local storage
if (val == null) {

    text = document.createTextNode('This is my element, Click to edit it');
}
else {
    text = document.createTextNode(val);

}
// Here we are appending the text into the div which we have created with the help of appendChild
divElem.appendChild(text);
// we can give id or class to an element in both ways 
divElem.id = 'elem';
// or 
divElem.setAttribute('class', 'elem-head');

divElem.setAttribute('style', 'border: 2px solid green; width: 143px; margin: 1rem; padding: 3rem;');


// Grabbing both the elements container and first so that we can append the divElem element in between container and first

let containerJs = document.querySelector('.container');
let first = document.getElementById('first');




// Inserting the element before element with id "first" and after the parent div with class container
// this line of code says that go to the container and insert the divElem div before the div which have id first

containerJs.insertBefore(divElem, first);



// Now we are adding click event listener into the divElem div

/* Summary of this event listener :- when we click on the div, event listener will fire and the function written in event listener will executed :-  
>First it will store the length of textarea into the noTxtAreas variable then if condition will execute and in this, the condition is if noTxtAreas means textarea length is equal to 0 then do the insertion of textarea into the div but if the noTxtAreas length is not zero as we know after first click we have 1 textarea in div so the condition will became false and after second click nothing will happen only line 48 console funciton will fire

*/

// Textarea will apper only after click on divElem because we injected the textarea into the div using click event


divElem.addEventListener('click', function () {

    console.log('eventlistener fired')
    // document.getElementsByClassname.length will return all the elements which have same classname and the count of all elements is called length 
    // In this case we have only one textarea element which have class textarea we the length is 1 
    /*
    For Example:- In our html page we have 4 li elements which consist same class name that is childul so the lenght of that element is 4

    yellow = document.getElementsByClassName('childul');
    console.log(yellow.length);
     */
    let noTxtAreas = document.getElementsByClassName('textarea').length;
    console.log(noTxtAreas);

    // Here we using if condition in click event to state that if noTxtAreas length is equal to 0 only then insert the textarea into the divElem element otherwise leave it 

    if (noTxtAreas == 0) {
        // The length of textarea is 0 because we have not inserted textarea yet, the textarea is inserted in 60 line as we know code run from top to bottom
        // Instead of using document.getElementById('elem').innerHTML; we can also grab the element by this method elem.innerHTML;
        // So this will store the innerHTML text(This is my element, Click to edit it) of elem div into the html variable
        let html = elem.innerHTML;
        // or
        // let html = divElem.innerHTML;
        // or
        // let html = document.getElementById('elem').innerHTML;

        // console.log(html);


        /* 
        So here we are replacing the innerHtml text to the textarea with text(This is my element, click to edit it) which we have grabbed in html variable into the divElem innerhtml
         Example:-
        <div id="elem" class="elem-head" > 
            (here we are inserting the textarea with html variable) 
            <textarea Class="textarea form-control" rows= '3'> ${html} </textarea>
        </div>    
        */
        // injecting the textarea in innerhtml of divElem element
        divElem.innerHTML = `<textarea id="textarea" Class="textarea form-control" rows= '3'>${html}</textarea>`;
    }

    // Here we are using the blur event, To see the effect of this event first we need to click on textarea (any interaction with textarea is important before clicking away ) and then click anywhere outside from textarea our blur event will fire
    let textarea = document.getElementById('textarea');
    textarea.addEventListener('blur', function () {
        console.log('yes blur event fired and you clicked outside the box');

        // here we are saying that when we type anything in textarea and click away store the added text in divElem innerHTML so it will concat the value in textarea like this - "This is my element, click to edit it" + "the latest textarea value"

        elem.innerHTML = textarea.value;
        // Here we are stating that set the textarea value like we did for divElem or elem in the local storage for text key
        localStorage.setItem('text', textarea.value);
    })


})
//------------------------------ Blur Event -----------------------------
// here we are applying the blur event in button
// to make blur event fire first we need to click on the button (any interaction with button is important)then when we click away anywhere except on button in browser the blur event will fire
let btn = document.getElementById('btn');
btn.setAttribute('style', 'background: yellow;')
btn.addEventListener('blur', function () {
    console.log('blurevent fired');
})
