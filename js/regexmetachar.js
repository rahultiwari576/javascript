console.log('Meta Characters Regular Expression in Javascript');

let regex = /harsh/;
// -------------- Meta Character Symbols ----------------------
// We can use "Caret" symbol to find the match in str string from starting letters
regex = /^h/; // but if we add anything after it, it does not match
// let str = 'harsh is harsh';

// We can use "dollor" symbol to find the match in str string from ending letters
regex = /sh$/;
// let str = 'harsh is harsh';

// We can use 'dot' to make the match if any single letter or character lies on dot in string
regex = /h.rsh/; 
// It will still get the match
// let str = 'hbrsh is hyrsh'; // String For dot meta character

// We can use 'star' to make the match if multiple letters or characters lies on star in string
regex = /h*rsh/; 
// It will still get the match
// let str = 'hssssssssdfdfdrsh is hdsfafasfasfrsh'; // String For Star meta character

// We can use 'Question symbol' after the character to make that character optional
regex = /ha?rshi?/ 
// regex = /ha?rshi?t/ // but if we add anything after optional character it will not match to 'hrshj'
// let str = 'hrsh is hrshi'; // This will match
// let str = 'Tom is hrshj' // this will also match

// We can use 'Back Slah' to find the exact match of metacharacters, Here we want to make the star exactly matches the star in string without using multi letter match property
regex = /h\*arsh/
let str = 'h*arsh'; // it will match
// let str = 'harsh' // it will not match the star is not present in between h and a


let result = regex.exec(str);
console.log(result);
// it works only with global flag
// console.log('First match',result);
// result = regex.exec(str);
// console.log('Second match',result);

// test() - This function will return true or false 
// If the reg template value is present in string it will return "True"
// And if not (null) it will return "False"

if(regex.test(str)){
    // Here str is the string and regex.source will extract the content from regex template
    console.log(`The string " ${str} " matches the expression "${regex.source}"`);
}
else{
    console.log(`The string does not match the expression`);
}