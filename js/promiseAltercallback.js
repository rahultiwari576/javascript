console.log('Callback Functions in Javascript');
const students = [
    { name: "Harsh", subject: "Javascript" },
    { name: "Tom", subject: "Python" }
];

// Creating a function "enrollStudent"
// Here we are receiving the "newStudent" variable in student parameter
function enrollStudent(student) {
    // Returning a new promise function when enrollStudent will be called
    // We have two parameters in promise function "resolve" and "reject", sending these parameters 
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            // Pushing the "newStudent" variable into students (array of objects)
            students.push(student);
            // here we've used const so that the value of error is fixed
            const error = false;
            // !error - this statment means print only if error is not equal to true which is false
            // so if the value of error is false the operator will excute the if statment otherwise else
            if (!error) {
                resolve('Student has been enrolled');
            } else {
                reject('Enroll failed')
            }
        }, 3000);
    })

}
// Creating getStudent function so that when we call this function it will print the results in the html page using dom
// !Important! = Here we are receiving the "resolve" function paramter "Student has been enrolled" string in getStudent function parameter "success"
function getStudent(success) {
    setTimeout(function() {
        let str = "";
        students.forEach(function(element) {
            str += `<li>${element.name}</li>`;
            document.getElementById('students').innerHTML = str;
            console.log(element);
            // Consoling the resolve function parameter which we are getting from getStudent parameter "success"
            console.log(success)
        });
    }, 1000);
}
let newStudent = { name: "Sunny", subject: "Php" }
    // Calling the enrollStudent function and send the "newStudent" variable as an argument
enrollStudent(newStudent).then(function(success) { // Here we are fetching the resolve function parameter string
    // Sending that string into getStudent funciton parameter "success"
    // calling the getStudent function is enroll is successful
    getStudent(success);
}).catch(function(failed) { // Here we are fetching the reject function parameter string "Enroll Failed"
    console.log(failed);
});