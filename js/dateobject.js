console.log('Date Object');

// Date is an object and here we are storing today's date description in today variable 
let today = new Date();
console.log(today);
console.log(typeof today);

// We can also redirect or fetch the other dates and the whole description like this
let otherDate = new Date('8-4-2004 04:54:08');
// we can also fetch the other dates in this format too
otherDate = new Date('June 13 1996 03:00:00')
    // MM/DD/YY we used this format here
otherDate = new Date('12/30/2032 03:12:54:02')
console.log(otherDate);

// Here we are assigning the otherDate value in variable a 
let a;
// getDay() will return the day from otherDate
a = otherDate.getDay(); // it will return 4 means thrusday if we count it from (0) Sunday then  thrusday will lie on 4th 

// getDate() will return the date from otherDate
a = otherDate.getDate();
// Similarly it will return the minutes
a = otherDate.getMinutes();
// Similarly it will return the hours
a = otherDate.getHours();
// Similarly it will return the miliseconds
a = otherDate.getMilliseconds();
// Similarly it will return the miliseconds
a = otherDate.getMonth(); // it will count from 0 Jan to 11 Dec
// Similarly it will return the miliseconds
a = otherDate.getFullYear();

// console.log(a);

// (Time Stamp)it will return the number of seconds since 1 january 1970 till now !Important
// Sets the Date object to the time represented by a number of milliseconds since January 1, 1970

a = otherDate.getTime();


// console.log(a);

// if we want to change the set time and date of otherDate we can use this method
otherDate.setDate(23);
otherDate.setMonth(0);
otherDate.setFullYear(1390);
otherDate.setMinutes(1);
otherDate.setHours(2);
otherDate.setSeconds(12)

console.log(otherDate);

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var d = new Date();
var dayName = days[d.getDay('March 23 2022')];

console.log(dayName);