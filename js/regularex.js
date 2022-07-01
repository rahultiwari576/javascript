console.log('Regular Expression in javascript');

// We create regular expression in between forward slash called regular expression literal

let reg = /harsh/;

// We used global flag here to achieve all the matches of content which is in string "s"
reg = /harsh/g;

// We used case insensitive flag here (it means it will not affect the matches no matter if it is in uppercase or lower)

// reg = /harsh/i;

console.log(reg);
// .source is basically the content written between the regular expression literal
console.log(reg.source);

let s = 'This is a great code with harsh and also harsh bhai ';
// String For case insensitive flag "i"
// let s = 'This is a great code with haRsH and also HaRSh bhai ';

// Functions to match the expressions------------------------

// 1. exec() - this is predefined function of javascript and it will return an array for match or null for no match 


// It will match the reg ex literal content "harsh" to string which we have provided "s"
let result = reg.exec(s);
// console.log(result); // testing to find it is null or not

// this if statement will only get executed when the result variable is defined (not null) if the result value store null it will not get executed

if (result) { //- We use this if condition for test() function

    // And it return an array of description about the content which is in reg template into the result variable like this
    //['harsh', index: 26, input: 'This is a great code with harsh ', groups: undefined]
    console.log(result);

    // As we know we have two harsh in "s" string it will return the description about the first harsh no matter how much time we run the exec function so to achieve the second "harsh" description we use flags in our Regular Expression Literal
    result = reg.exec(s);
    console.log(result);

    // It will return null because we have only two matches "harsh" in the string
    // result = reg.exec(s);
    // console.log(result);

    // We can alos retrieve the input and index of matches in string
    console.log(result.input)
    console.log(result.index)
}else {
    throw new Error('Some Error Ocurred');
}



// 2. test() - This function will return true or false 
// If the reg template value is present in string it will return "True"
// And if not (null) it will return "False"

let resultTest = reg.test(s);
// If "harsh" is present in the string it will return true and get stored in resultTest variable
console.log(resultTest);


//3. match() - This function will return an array of results or null

// Exec is applied on a regular expression not on string while match is applied on string not on a regex 

// let resultMatch = reg.match(s); //- This is wrong 
let resultMatch = s.match(reg);     // This is correct
// If we activate global flag in regex we get the arrays of match here we get 0. harsh 1. harsh in array
console.log(resultMatch);


// 4. search() It returns index of first match or else -1 - it means we can't find any match
let resultSearch = s.search(reg);
console.log(resultSearch);


// 5. replace() - It returns new replaced string with all replacements - Only if we activate global flag otherwise it will replace only first match in string
let resultReplace = s.replace(reg, 'MARK ANTHONY');
console.log(resultReplace);

