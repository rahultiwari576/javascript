console.log('Alarm App in Javascript');

// Getting the audio file from html
var audio = document.getElementById('audio');

function ringBell() {
    audio.play();
}

// Grabbing the submit button and adding click event listener in it
const alarmSubmit = document.getElementById('alarmSubmit');
alarmSubmit.addEventListener('click', setAlarm);

function setAlarm(e) {
    e.preventDefault();
    // Grabbing the input tag in alarm variable
    const alarm = document.getElementById('alarm')

    // Inserting the input value in new Date object so that we'll get our desired date in alarmDate variable
    let alarmDate = new Date(alarm.value)
    console.log(`Setting Alarm for ${alarmDate}`);

    // Storing the present date into "now" variable using new date object
    let now = new Date();

    /*    
    Example:- formula of getting difference between alarm time from present time in milliseconds
    
 input time -  Sat Feb 05 2022 21:10:00 = 10 minutes = 600 seconds (10 x 60)
 present time -  Sat Feb 05 2022 21:09:14 = 9 minutes 14 seconds = 554 seconds (9 x 6 + 14)
    
        600 - 554 = 46 seconds  = 46000 milliseconds (46 x 1000)
    */
    console.log(alarmDate); // input time
    console.log(now); // present time

    // Substracting the present time from input time
    let timeToAlarm = alarmDate - now; // result we get in milliseconds

    console.log(timeToAlarm);

    // In this statement we are saying that if variable "timeToAlarm" is greater or equal to 0 means in positive number then execute the setTimeOut function after the given time interval which the value coming from "timeToAlarm" variable
    if (timeToAlarm >= 0) {
        setTimeout(() => {
            ringBell();
        }, timeToAlarm); // Example: Here we are setting the milliseconds which we get after substraction in timeInterval so that it will execute the function after 46000 milliseconds i.e 46 seconds from now
    }
}

// function to validate form
let form = document.getElementById('alarm');
form.addEventListener('blur',()=>{
    console.log('form is blurred');
    let regex = /[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1]) (2[0-3]|[01][0-9]):[0-5][0-9]:[0-5][0-9]/
    let str = form.value;
    if(regex.test(str)){
        console.log('vlaue is correct')
    }
    else{
        console.log('value is not correct')
        alert('value in form is incorrct')
    }
})