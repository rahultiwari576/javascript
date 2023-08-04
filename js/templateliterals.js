const Tut6 = "Properties, methods and template literals";
console.log(Tut6);
// document.write('Tutorial 6th of Javascript');

// STRING CONCARDINATION:-------------

// here we are adding two strings by using plus string concardination
const name = "Harsh";
const greeting = "Good Morning";
// if we want space in between name and greeting we can do simply just by putting quotes and space in between
console.log(name + " " + greeting);

// here we are adding two strings of header and paragraph by using plus string concardination
let html;
html = "<h1>This is heading</h1>" + "<p> this is para </p>";
// there is also a second method of adding strings after existing strings by using this concat string function we can add as many strings as we want
html = html.concat("This is a ANOTHER para by using concat", " ", "method");
console.log(html);

// LENGTH FUNCTION:-----------------------

// here we are using lenth string function to know the lenth of our entire html
console.log(html.length);

// CONVERSION:----------------------------

// here we can convert our html doc to lower case by using lower case string function round brackets are important after this function
console.log("Example of lower case", html.toLowerCase());
// here we can convert our html doc to upper case by using upper case string fucntion round brackets are important after this function
console.log("Example of Upper case", html.toUpperCase());

// and important this is it will not change our original html if we console.log it will show the unchanged html
console.log(html);

// INDEXING IN STRINGS:--------------------------------

// in indexing we achieve the characters through numbers In most of the programming languages indexing will start from 0
// here are the example of indexing of strings
console.log(html[0]); //it will return the greater than symbol of html because the symbol lies on 0th position
console.log(html[1]); // it will return the h of html doc lies on 1st positon and so on.
// There is also a another method of indexing by using charAt
console.log(html.charAt(48));
console.log(html.charAt(46));

// And by using sub string function fetch multiple characters of our string
// it will show the result of 1 to 5th characters in our string
console.log("substring", html.substring(1, 5)); // output h1>T //! it will fectch the character from index 1 to 4 h=1 1=2 >=3 T=4
console.log(html.substring(8, 30));

// if we want to know our index lies on which positon we use indexof function of string
console.log(html.indexOf("This")); // it will count 0 to 4 and gives the result of first occurance of 'This' on 4th position
console.log(html.indexOf("para")); // it will show the result of first occurance of para
// if the string does't exist it will return -1 in result means string does't exist
console.log(html.indexOf("fsdfdsfs"));

// and suppose if there are multiple characters in string and we want the indexing of last occurance we use this string function - lastIndexOf function
console.log(html.lastIndexOf("is"));

// CONDITIONS USING BOOLEEAN:-------------------------

// here we are checking the condition if our character ends with this character or not it will return Boolean value
console.log(html.endsWith("para")); // result will be false because our html doc ends with 'method' not para
console.log(html.endsWith("method"));

// And if we want to check whether the character is available in our string or not we use include string function
console.log(html.includes("is")); // result is true, yes this character is available in our string
console.log(html.includes("fdfdf")); // result is false, no it is not availabel in our string
console.log(html.includes("")); // result is true, yes space is also available in our string

// SLICING:-------------------------------

// by using slice string function we can fetch last character of our string or we can do slicing anywhere in our string
console.log(html.slice(-4));
console.log(html.slice(4, 9));
console.log(html.slice(-9));

// SPLITING:---------------------------

// The split() method is used to split a string into an array of substrings, and returns the new array.
console.log(html.split(" ")); //here we split the string based on "space" it will seprate each characters in the string where this find a space
console.log(html.split(">")); // it will replace this ">" character and split into different characters in an array
let x = "Hello Harsh";
console.log(x.split(" "));
console.log(x.split(""));
console.log(x.split("H"));
//! It will break the string value based on space. It means we have two value in x string it will break into 2 elements and placed it into an array and the total count(length) of an array is 2 that is why length is 2.
// NOTE:- It will count the element in array not space
console.log(x.split(" ").length);

let gg = "";
let ffg = gg.split(" ");
console.log(ffg); // return empty array ['']
console.log(ffg.length); // and the length of the array is 1 and length of the element in it is 0

// REPLACING:---------------------------

// here we are using replace string function it will replace the first occurance of character in our string
console.log(html.replace("This", "Harsh"));

// TEMPLATE LITERRALS !!Imporant:-----------------------------------------------
let fruit1 = "orange";
let fruit2 = "Apple";
let myHtml = `hello ${name} ${greeting}
    <h1> This is Heading in Template "fdfd" Literals</h1>
    <p> This is ${fruit1} and ${fruit2} in template literals <p>

`;
// document.write(myHtml);
// document.write(fruit2);
document.body.innerHTML = myHtml; // another method to print on webpage
