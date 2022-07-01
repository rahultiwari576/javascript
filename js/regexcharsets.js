console.log('Regular Expression Character Sets in Javascript');

// Character Sets - []
// This [a-z] character set means if we put any alphabet between a to z on that position we will get the match
let regex = /h[a-z]rsh/;

// This [ayz] character set means we will get the match only if these alphabets[ayz] are present
regex = /h[ayz]rsh/ // 'hzrsh' - Match

// matching the single space on index 1 in charset to str  
regex = /h[ ]rsh/; //'h rsh - Match

// matching the multiple spaces using + operator in charset on index 1 to str 
regex = /h[ ]+rsh/; //'h          rsh - Match

// Using caret symbol here means if these characters are present it will not get match
regex = /h[^ayz]rsh/ // 'hirsh'- Match

// We can also use multiple character set in the string
// can't be ayz and can only be jfg in string to match the expression
regex = /h[^ayz]rsh [jfg]hai/ //'hirsh ghai' - Match

// The character sets are not case insensitive so we have to take both capital and small alphabets to match the expressions
regex = /h[a-zA-Z]rsh [gG]hai/ // 'hZrsh Ghai' - Match

// We can use numbers also in character set to match the expression
regex = /h[a-zA-Z]rsh[0-9][gG]hai/ // 'hirsh8ghai' - Match


// Quantifiers - {} - A quantifier is a word that usually goes before a noun to express the quantity of the object

// Here using quantifiers will tell that "r" will occur two times exactly not more than that or less to make the match
regex = /har{2}y/ // harry bhai - Match  hary bhai - Not match

// here r will occur 0 to 2 times exactly to make the match
regex = /har{0,2}y/ // hay bhai, hary bhai, harry bhai - Match, harrry bhai - Not match


// Groupings - ()
// With the help of parentheese we can group the object and decide how much times if it will occur to make the match, Here "har" will have to occur 2 times in string to make the match
regex = /(har){2}/ // harharharry bhai - Match, harry bhai - Not match


regex = /(har){2}([0-9]r){3}/
    // harhar1r2r3r bhai, harhar1r2r3r4r bhai, harharhar1r2r3r4r bhai - Match
    // har2r3r bhai, harharrrr bhai, harhar0r0r bhai - Not match


let str = 'harhar0r0r bhai';

let result = regex.exec(str);
console.log(result);

if (regex.test(str)) {
    console.log(`The string " ${str} " matches the expression "${regex.source}"`);
} else {
    console.log(`The string does not match the expression`);
}