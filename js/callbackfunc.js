console.log("Callback Functions in Javascript");

// ********Callback and Reference Function***********

// Define the function
function sayHello() {
  console.log("Hello, world!");
}

// Pass `sayHello` as a reference to another function
function greet(callback) {
  //   console.log("Greeting function is called:");
  callback(); // This will call the referenced function
}

// Passing `sayHello` as a reference without parentheses
greet(sayHello);

// Assuming that this response is coming from server
// Putting two objects in an array
const students = [
  { name: "Harsh", subject: "Javascript" },
  { name: "Tom", subject: "Python" },
];

//**************************Important*********************************** */
// WHENEVER WE PASS THE FUNCTION AS AN ARGUMENT IT IS CALLED CALLBACKS
//********************************************************************* */

// Here we have created enrollStudent function to push new student object into students array
// Here we are taking another parameter for callBack function we can use any name for callback function.
// Here the getStudent is a callback function
function enrollStudent(student, getStudent) {
  // setTimeout is a callback function.
  // setTimeout always runs in background without interfering code flow.
  // If we have a function inside a function, then we will understand that it is a callback function.
  setTimeout(function () {
    // pushing the parameter value "student" into the "students" Array which is set of objects
    students.push(student);
    console.log("Student has been enrolled");

    // And here we are setting the timeout it means the function will not execute before 3 Seconds.
    //------------------ How callBack function works -----------------
    // Previously we have an another setTimeout function function(getStudent) which hava time limit of 1 second so that function will fetch and print the students first then this function "enrollStudent" will execute after 3 seconds that is why we couldn't get the updated student in our students object.

    // To prevent that we use callBack function with the help of callBack function it will hold the print of student (using getStudent function) in our webpage until the students will not get enrolled

    // !Important -We received the getStudent function as an arugument in enrollStudent parameters And here we are calling the getStudent function after students get pushed so we can called it callback
    getStudent();
    // callback();
  }, 3000);
}

// Here we have created getStudent function to print the students in our html page.

function getStudent() {
  setTimeout(function () {
    let str = "";
    // using forEach function to print the elements one by one
    students.forEach(function (element) {
      str += `<li>${element.name}</li> <ol><li>${element.subject}</li></ol>`;
      document.getElementById("students").innerHTML = str;
      console.log(element);
      console.log("Students have been fetched");
    });
  }, 1000); // 5000 students will inject after 8 seconds because first timeOut will take 3 seconds to push the students and the this function gets called through callback and it will take 5 seconds to inject the code in html so total process take 8 seconds but if we use 1 second it will take 4 second to inject
}

// creating a new object newStudent
let newStudent = { name: "Sunny", subject: "Php" };
// Passing the newStudent object as an argumnet into the enrollStudent function
//Here we are passing an argument(getStudent function) for callback function.
enrollStudent(newStudent, getStudent);
// calling the getStudent function after pushing newStudent object in Students array
// getStudent();
