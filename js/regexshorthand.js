console.log('Regular Expression (Shorthand Characters) in Javascript');
// Character Class
let regex;
let str;
//                                 WORD CHARACTERS
//==============================================================================================
// \w - backslah small 'w' is called word character
// putting word character in regex template means we can use _ underscore, alphabet (capital or small both) and number in string to match the expression
// But in this we can use only one character
regex = /a\wrsh/; // These characters must be present in the string

// We can use any alphabet, number or underscore on the place of word character it will get match to the string
str = 'a_rsh bhai'; // Match
str = 'aHrsh bhai'; // Match Any small or capital we'll still get the match 
str = 'ahrsh bhai'; // Match
str = 'a9rsh bhai'; // Match
str = 'ahrsh bhai'; // Match
str = 'a__rsh bhai'; // Not match
str = 'a99rsh bhai'; // Not match
str = 'a*rsh bhai'; // Not match

regex = /\warsh/; // These characters must be present in the string

str = 'asfafsafsafasfarsh'; // Match from index 13
str = '____arsh'; // Match from index 3
str = 'WDDDD__arsh'; // Match from index 6 - Any small or capital we'll still get the match 
str = 'Darsh'; // Match from index 0 - Any small or capital we'll still get the match 


regex = /\warsht/; // These characters must be present in the string

str = 'asfafsafsafasfarsh'; // Not Match
str = '____arsh'; // Not Match
str = '999arsh'; //Not Match
str = 'WDDDD__arsh'; //Not Match
str = 'WDDDD__arsht'; //Match
str = '*arsht'; //Not Match
// !Important - It will match on ['tarsht', index: 5, input: '*arshtarsht', groups: undefined]
str = '*arshtarsht'; //Match */

//--------------------------------------------------------------------------------------------------

// \w - backslah small 'w' and plus '+' symbol is multi word character
// putting multi word character in regex template means we can use multiple _ underscore, alphabets (capital or small both) and numbers in the string to match the expresion

regex = /a\w+rsh/; // These characters must be present in the string
// We can add multiple character in the middle of any character by using multi word character
str = 'a__rsh bhai'; // Match
str = 'a99rsh bhai'; // Match
str = 'a*rsh bhai'; // Not Match - no word character (*)
// Putting the non word character in the middle of string will break the chain and will try found the next possible match in string
str = 'aaaa*aaarsh bhai'; // here it will match on index 5

//--------------------------------------------------------------------------------------------------
// !Important - We Cannot use alphabets, numbers or underscore in non word character

// By using capital "W" we can match the non word character but only single character
// In this method we cannot match the multiple non word character
regex = /\Wbhai/; // Here we are inserting NWC before b

str = 'harsh bhai' // it will match from index 5 including space
str = '*****bhai' // Match

regex = /harsh\Wbhai/;
str = 'harsh*bhai' // Match
// We cannot match the multiple non word character
str = 'harsh*****bhai' // not Match

//--------------------------------------------------------------------------------------------------
// !Important - We Cannot use alphabets, numbers or underscore in non word character

// By using capital "W" and plus "+" symbol we can also match the non word multiple character
// by this method we can match the multiple non word character
regex = /\W+bhai/; // Here we are inserting MNWC before b

str = 'harsh   bhai' // it will still get match from index 5 including space in multiple non word ch
str = 'harshs@#$%^&*bhai' // it will start matching from 6th index
str = '*****bhai' // Match from index 0

regex = /\W+ bhai/; //Here we are inserting MNWC before "Space" !!Important
str = 'harsh %#% bhai' // Match from index 5 !important
str = ' harsh      bhai' // Match from index 6 !important
str = ' harsh#$#%#%bhai' // Not Match
regex = /harsh\W+ bhai/
str = 'harsh bhai' // Not match because it must be non word character
str = 'harsh  bhai' // Match because here a non word character is present which is "space"
str = 'harsh_ bhai' // Not Match because underscore is non word character


                                    // DIGIT CHARACTERS 
//==============================================================================================

// By using digit character we can match any "one" digit of regex template to the string
// Here we are putting the d character before triple 9 so it will find a digit which have triple 999 afterwards 
regex = /number \d999/; // These characters must be present in the string
// And here we have the match on index 39 - 8999
str = 'harsh3$%$^ $%$bhai aur harsh ka number 89999999' 

// Not match we can use only one digit character before 999
str = 'harsh3$%$^ $%$bhai aur harsh ka number 889999999' 

//-----------------------------------------------------------------------------------------------
// By using plus symbol we can match multiple numbers in digit character
regex =/number \d+/; // These characters must be present in the string
str = 'harsh is number 000000000'
str = 'harsh is number 00000 0000' // Match from number 00000

//-----------------------------------------------------------------------------------------------

// By using backslah and capital D we can match one non digit character
regex = /\D999/; // These characters must be present in the string
str = 'harsh is number 00000harsh999' // Match from h999 "h" is a non digit character here

//-----------------------------------------------------------------------------------------------
// By using backslah capital D plus we can match multiple non digit character
regex =/\D+9/; // These characters must be present in the string
// Match from harsh9 because before 9 we have "harsh" and this is non digit character and after that we have "00000" which is digit so it will match from harsh9
str = 'harsh is number 00000harsh999' 

                                    // SPACE CHARACTERS 
//==============================================================================================
// By using backslah s we can match the one whitespace character
regex = /\ska number/; // These characters must be present in the string
str = 'harsh is ka number 00000harsh999' 
str = ' ka' // Not match 


//-----------------------------------------------------------------------------------------------
// by using backslash s+ we can match the multiple white space characters
regex = /\ska number/; // These characters must be present in the string
str = 'harsh is                          ka number 00000harsh999' 
str = '          ka' // Not match 

//-----------------------------------------------------------------------------------------------
// by using capital s we can match the one non whitespace character 
regex = /\Ska number/; // These characters must be present in the string
str = 'harsh iska number 00000harsh999' // Match - ska number
str = ' ka' // Not match 
//-----------------------------------------------------------------------------------------------
// by using capital s+ we can match the multiple non whitespace character 
regex = /\S+ka number/; // These characters must be present in the string
str = 'harsh iska number 00000harsh999'  // Match - iska number


//==============================================================================================
// Word Boundary
regex = /ber\b/
// it will find the match where boundry ends with ber
str = 'harsh iska number5454545hahfa455'; // Not match
str = 'harsh iska number 5454545hahfa455'; // match index 14

//==============================================================================================
// Assertions 
// Here we are saying match the expression where y is present after h in the string
regex = /h(?=y)/
str = 'harsh is a good ghy, he loves his mom and dad' // Match on ghy 

// Here we are saying match the expression where y is present after h in the string
regex = /h(?!y)/
str = 'harsh is a good ghy, he loves his mom and dad' // Match on harsh



let result = regex.exec(str);
console.log(result);

if (regex.test(str)) {
    console.log(`The string " ${str} " matches the expression "${regex.source}"`);
}
else {
    console.log(`The string does not match the expression`);
}

