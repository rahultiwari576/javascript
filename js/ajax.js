console.log('Ajax in Javascript');
// Pure javascript (without any library) is called Vanilla Javascipt.

/*
                        What is Ajax?

> Ajax stands for asynchronous Javascript and Xml (AJAX).
> Ajax is not a programming language. Rather it is a set of existing technologies.
> Ajax help in fetching date asynchronously without interfering with the existing page.
> No page reload/refresh.
> Modern websites use JSON instead of XML for data transfer. We also can fetch the data in .txt or .html format too.

                        Why use Ajax?

> No page reload/refresh.
> Better user experience.
> Saves network bandwidth.
> Very Interactive.

                        How it works?

> Ajax uses XMLHttpRequest Object (also called xhr object) to achieve this.
> Data can be transferred in any format and protocol (not always https necessarily).
*/

let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonclickHandler);

function buttonclickHandler() {
    console.log('you have clicked the fetchBtn button');
    // Javascript have special class object i.e XMLHttpRequest() for calling Ajax basically it sends the request and receives the response in background without refreshing the page from the server.

    // Syntax: first we store the XMLHttpRequest() into xhr variable then we initiate to open the xhr object with the help of xhr.open("method(get/post)", "filename.txt", asynn mode(true/false))and it have three parameters in it which is mentioned and finally we use xhr.send() to send the final request.


    // Get method - this method is in visible form user can read the data very eaisly.


    // ------------------------------Get method---------------------------------------------

    // Instantiate the xhr object
    const xhr = new XMLHttpRequest();

    console.log(xhr); // we get all the perdfined properties of xhr object. which are (onprogress, readyState, status and many more)



    // Now after getting the XMLHttpRequest in xhr we initiate to open that object
    // it have three parameters
    // 1. get method (for sending only request)
    // 2. any file format
    // 2. Asynchronous mode "true" is for yes - it means we want to run the program using aynchrounous method i.e without blocking or stoping and "false" is for no we don't want to use asynchrounous method.

    xhr.open("get", "async.txt", true);
    // for url
    xhr.open("get", "https://jsonplaceholder.typicode.com/posts", true);



    // What to do on progress (onprogress) is a predefined method of XMlHttpRequest object. (optional)
    //!Important!
    // And here we are defining the particular task to the "onprogress" method that what to do when the response is in progress. Here in this case we are consoling the log.
    xhr.onprogress = function () {
        console.log('On Progress');
    }


    /*
    readyState	Holds the status of the XMLHttpRequest.
    0: request not initialized
    1: server connection established
    2: request received
    3: processing request
    4: request finished and response is ready (onload literally means we are on the readystate 4)
    */

    xhr.onreadystatechange = function () {
        console.log('ready state is ', xhr.readyState)
    }

    // We can use this method like this way (This is an old alternative method of onload.)


    // xhr.onreadystatechange = function () {
    //     if(this.readyState == 4 && this.status == 200){
    //         document.getElementById('innerData').innerHTML = this.responseText;
    //         console.log(this.responseText);
    //     }
    // }


    // --------- Onload method is a new method before we use onreadystatechange-------------

    // Onload is an another predefined method of xhr
    // What to do when response is ready
    //!Important!
    // similarly we are defining the desired task to the method "onload" with the help of function. Here in this case we are consoling and printing the reponse text.
    xhr.onload = function () {
        // here we used if-else statemet with the help of response "http status code" which is mentioned in the following url https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

        // so that it will if the response is ok it will print or console the result else it will throw an error in console.

        // here code 200 means "ok" successful response. Generally used for get method
        if (this.status === 200) {
            // by this method we will get the data in "string" format 

            // document.getElementById('innerData').innerHTML = this.responseText;
            // console.log(this.responseText);

            //or
            
            // that is why we'll use JSON parse to retrieve the data in "Object" form
            
            let obj = JSON.parse(this.responseText);
            let innerList = document.getElementById('innerList');
            let str = "";
            for(key in obj){
                // Here we are dealing with multiple objects that is why we use .title, .id etc to retrieve all the key values of all objects.
                str += `<li>${key} :- ID- ${obj[key].id} TITLE- ${obj[key].title}</li>`
            }
            console.log(obj[key]);
            console.log(obj);
            innerList.innerHTML = str;
            
        }
        else {
            console.log("Some error occurred");
        }

    }

    // And at last to send the request we use send function
    xhr.send();

    // The reason of consoling here is to check our ajax is calling without blocking or not - if we are done will print on top in the console it means asynchrounous mode is active/true
    console.log("We are done!")

}


    // ------------------------------------Post method------------------------------------------

    //!IMPORTANT! - follow this link for more clarification of post method
    //https://www.youtube.com/watch?v=D5WkKTorCqo&t=2113s&ab_channel=Coder%27sGyan


let postfetchBtn = document.getElementById('postfetchBtn');
postfetchBtn.addEventListener('click', postbuttonclickHandler);

function postbuttonclickHandler() {
    console.log('you have clicked the postfetchBtn button');
    // Javascript have special class object i.e XMLHttpRequest() for calling Ajax basically it sends the request and receives the response in background without refreshing the page from the server.

    // Syntax: first we store the XMLHttpRequest() into xhr variable then we initiate to open the xhr object with the help of xhr.open("method(get/post)", "filename.txt", asynn mode(true/false))and it have three parameters in it which is mentioned and finally we use xhr.send() to send the final request.

    // Post method - it is generally used when we want to save or send any data into the server in hidden form. This method is more secure when it comes to saving the password and username into the server.



    // Instantiate the xhr object
    const postXhr = new XMLHttpRequest();

    console.log(postXhr); // we get all the perdfined properties of xhr object. which are (onprogress, readyState, status and many more)



    // Now after getting the XMLHttpRequest in xhr we initiate to open that object
    // it have three parameters
    // 1. get method (for sending only request) and Post method (for sending both request and data)
    // 2. any file format
    // 2. Asynchronous mode "true" is for yes - it means we want to run the program using aynchrounous method i.e without blocking or stoping and "false" is for no we don't want to use asynchrounous method.

    // We are retrieving the fake data using dummy JSON url.
    postXhr.open("POST", "https://jsonplaceholder.typicode.com/users", true);

    // Here we are receiving the parameters of send request for post method
    postXhr.getResponseHeader('Content-type', 'application/json');
    // Setting the content type in json format so that we can send the data to server in a right format which is "json"
    postXhr.setRequestHeader('Content-type', 'application/json');


    // What to do on progress (onprogress) is a predefined method of XMlHttpRequest object. (optional)
    //!Important!
    // And here we are defining the particular task to the "onprogress" method that what to do when the response is in progress. Here in this case we are consoling the log.
    postXhr.onprogress = function () {
        console.log('On Progress');
    }


    /*
    readyState	Holds the status of the XMLHttpRequest.
    0: request not initialized
    1: server connection established
    2: request received
    3: processing request
    4: request finished and response is ready (onload literally means we are on the readystate 4)
    */

    postXhr.onreadystatechange = function () {
        console.log('ready state is ', postXhr.readyState)
    }

    // We can use this method like this way (This is an old alternative method of onload.)

    // xhr.onreadystatechange = function () {
    //     if(this.readyState == 4 && this.status == 201){
    //         document.getElementById('innerData').innerHTML = this.responseText;
    //         console.log(this.responseText);
    //     }
    // }


    // --------- Onload method is a new method before we use onreadystatechange-------------

    // Onload is an another predefined method of xhr
    // What to do when response is ready
    //!Important!
    // similarly we are defining the desired task to the method "onload" with the help of function. Here in this case we are consoling and printing the reponse text.
    postXhr.onload = function () {
        // here we used if-else statemet with the help of response "http status code" which is mentioned in the following url https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

        // so that it will if the response is ok it will print or console the result else it will throw an error in console.

        // here code 201 means "created" successful response. Generally used for "Post" method
        //or
        // We can use 500 means Server error response using not equal to "operator"
        if (this.status !== 500) {
            document.getElementById('postinnerData').innerHTML = this.responseText;
            console.log(this.responseText);
        }
        else {
            console.log("Some error occurred");
        }

    }

    // For post method we use send function to send the request and "Object" parameters both in setResponseHeader
    let postParams = `{
         "userId":"Harsh",
         "id":"200",
         "title":"25",
         "body":"kuch bhi"
        }`
    // Here we are passing the argument object for setResponseHeader parameters     
    postXhr.send(postParams);

    // The reason of consoling here is to check our ajax is calling without blocking or not - if we are done will print on top in the console it means asynchrounous mode is active/true
    console.log("We are done!")

}