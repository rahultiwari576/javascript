console.log("Fetch Api in Javascript");

// Yahoo Baba - for more clarification follow this link
// https://www.youtube.com/watch?v=9YNGAxXGJzM&t=691s&ab_channel=YahooBaba


// button with id myBtn
let myBtn = document.getElementById('myBtn');
// Div with id content
let content = document.getElementById('content');

// Get Request using Fetch Api------------------
myBtn.addEventListener("click", getData)
function getData(e) {
    // !Important - fetch api is asynchronous it will run in background- to understand the code flow check the consoles
    e.preventDefault();
    console.log('Started getData')

    let url = "async.txt";

    // We are using fetch api function to fetch the data
    // Fetch api function returns a "promise" as we know promise have two methods then and catch
    // then - when data is successfully fetched
    // catch - when fetching is failed

    // Here we are saying that if fetch successfully get the data from url store the response in "then function parameter" which is "response" 
    // i.e
    // [Response {type: 'basic', url: 'http://127.0.0.1:5502/html/async.txt', redirected: false, status: 200, ok: true, …}]

    fetch(url).then((response) => { // here we've used arrow function
        console.log(response);

        console.log('first then to get response');
        // And return the data text which in fetched "url"
        return response.text();
        // And this "then" function will get the reponse text in the parameter "data"
    }).then(function (data) { // and here we've used regular function 
        console.log('second then to get data');
        console.log(data);
        content.innerHTML = data;
    })

}

// it is not required to call the getData function again if we are calling it from eventListner

// console.log('before running getData');
// getData();
// console.log('after running getData');


// Fetching data using Json
function getdataJson() {
    // !Important - fetch api is asynchronous it will run in background- to understand the code flow check the consoles

    console.log('Started getData')

    let url = "https://api.github.com/users";

    fetch(url).then((response) => { // here we've used arrow function
        console.log(response);
        // If the data from url is the right string json format we can use .json to retrive the parsed data (object) directly instead of using .text
        return response.json();
    }).then(function (data) {
        console.log(data);
    })
}

// getdataJson(); 



// Post request using Fetch Api
function postData() {
    // !Important - fetch api is asynchronous it will run in background- to understand the code flow check the consoles

    let url = "https://jsonplaceholder.typicode.com/posts";
    // As we know in post request we require parameters too to intergrate the data new in the json database


    let data = {
        title: 'hellooo fake server',
        body: 'oakdkd',
        userId: 45,
    };
    // Note:-                  --      it is headers not header
    let params = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        //if the data in not in the string format we have the stringfy it first
        body: JSON.stringify(data)
    }
    fetch(url, params).then(response => { // here we've used arrow function
        console.log(response);
        // If the data from url is the right string json format we can use .json to retrive the parsed data (object) directly instead of using .text
        return response.json();
    }).then(function (data) {
        console.log(data);
    })
}

// After calling the function we'll successfully inserted the fake data into the server and we can check it in console
postData();

