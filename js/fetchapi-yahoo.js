console.log('Fetch Api - Yahoo Baba');


let regularF = function(){
let url = "async.txt";

fetch(url)
// Here we are getting the response from url
.then(function(response){
    console.log(response);
    // console.log(response.text());
    // This .then function will also return a promise so to retrieve the text file we have to use .then function again
    return response.text();
    // This will return the response text and stored into data variable
}).then(function(data){
    // Now we have response text in data variable   
    console.log(data);
})
}

// regularF();


// Using fake data Json 

let fakeJ = function(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        for (x in data) {
            document.write(`<br> Index:- ${x}  <br><br>`);
            // Extracting custom data from array of objects

            // As we know the objects are in array so here we are getting its index
            // let a = (`${x} &nbsp ${data[x].name} &nbsp &nbsp &nbsp &nbsp Email:- ${data[x].email} <br>`);
            // document.write(a);

            // -------------- Important ---------------
            // Here we are using forIn loop again to print all data with title at once
            // For more clarification check forIn loop file in js bootcamp
            for (k in data[x]) {

                document.write(`${k}:- ${data[x][k]} <br>`)
            }
        }
    })
    .catch((error) => {
        document.write("cant fetch data")
    })
}

// fakeJ();

// Post, Insert, Delete, Put methods using fetch (Default - Get)

// Inserting method using Post fetch method
let postFunc = function(){
    fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',  // We just need to change the method to perform the particular method of delete, put, "nothing will change after that" Except in Delete

    // We can't send the object directly to the server first we need to convert it into string with the help of stirngify method
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),

     // Note:-                  --      it is headers not header
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((response) => response.json())
    .then((json) => console.log(json));
} 

// postFunc();


// Inserting form using fetch method



let form = function (e){
    e.preventDefault();
    fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',  // We just need to change the method to perform the particular method of delete, put, "nothing will change after that" Except in Delete

    // We can't send the object directly to the server first we need to convert it into string with the help of stirngify method
    body: JSON.stringify({
        title: document.getElementById('titleText').value,
        body: document.getElementById('bodyText').value,
        userId: document.getElementById('userId').value,
    }),

     // Note:-                  --      it is headers not header
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((response) => response.json())
    .then((json) => console.log(json));

    
} 
// We cannot use form function before before defining the varible that is why we put the click event in last

let submit = document.getElementById('saveForm');
submit.addEventListener('click', form);


//                          or 



// we can use this shortcut method to submit the form using url form encoded

/*

// This form method will not work in fake json dummy data

let formData = document.getElementById('myForm');

let form = function (e){
    e.preventDefault();
    fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',  
    // Using new javascript method to insert form using its id
    body: new FormData(formData),

    headers: {

        // form url encoded method
        'Content-type': 'application/x-www-form-urlencoded',
    },
})
    .then((response) => response.json())
    .then((json) => console.log(json));

    
} 
// We cannot use form function before before defining the varible that is why we put the click event in last

let submit = document.getElementById('saveForm');
submit.addEventListener('click', form);

*/