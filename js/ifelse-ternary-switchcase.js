console.log('if, else if, else, ternary operator and switch case in javascript')

// Here we are creating a variable using const 
const age = 34; //note:- if we change the value of age here the else condition will apply 

// Here we are using the if else condition where it says if age is equal to 34 than console "age is 34" and the condition is not matches from the above age than console "age is not 34"


if (age == 34) // Here we have used comparison operator (==) This operator only checks the value not type
{
    console.log('Age is 34')
} else {
    console.log('Age is not 34')
}


// Here we are checking two conditions by using if and else if 
// Means if ageSecond is equal to 65 than print age is 65 but if age is 77 then print "we cannot take this age" by using else if or if none of them are true than print "please enter the value" 
const ageSecond = '77';

if (ageSecond == 65) { // it will print the value even if we have 77 is in string
    console.log('Age is 65')
} else if (ageSecond == 77) {
    console.log('we cannot take this age') //note:- if the condition matches to ageSecond the operator will stop running the code and show this result and if we use if condition the operator will not stop and keeps running the next code
} else {
    console.log('please enter the value')
}

//But if we want to check both the value and type we use this operator (===)
const ageThird = "54";

if (ageThird === 54) { // value is integer
    console.log("This if age value and type is correct")
} else if (ageThird === '54') { // value is string
    console.log('This elseif value is correct and its type also')
} else {
    console.log('none of them are correct')
}


//------------------------------------------------------------
// const ageForth = 'adfds';
const ageForth = 17;
// const ageForth = 18; 

if (ageForth == 17) {
    console.log('sorry you are not eligible')
} else if (ageForth != 17) {
    console.log('yes are not the age of 17 or 16, You are eligible now')
} else {
    console.log('if none of them are correct than print this else condition')
}

// "<" and ">" greater than and less than operators 
if (ageForth < 17) {
    console.log('sorry you are not eligible')
} else if (ageForth > 17) {
    console.log('yes are not the age of 17 or 16, You are eligible now')
} else {
    console.log('if none of them are correct than print this else condition')
}


//  *****************************************************************************************

// Another operator is not eqaul to (!=)

const ageFifth = 17;

if (ageFifth === 17) { //this condition is false and not get printed if 17 is not match the type of agefifth
    console.log('if1')
}

// Here we are saying if condition only get true when 17"ageFifth" is not equal to 17 but here the ageFifth is 17 = 17 so if returns false and "else statement get executed" but if we use (!==) it matches its type also means if ageFifth "17" !== 17 this condition get true as the type of both "17" and 17 is not matching so here if statement get executed.

// (!==) this operator checks the type and value both 

if (ageFifth !== 17) { // this condition is true and get printed only if the age type is not matching from the above
    console.log('if2')
} else {
    console.log('else')
}


function hdk() {
    nb = [1, 3, 4, 5, 6]
    console.log(nb.length)

    // Here we are not sending nb.length based on this condition here we are sending the boolean value based on this condition like we did in console for "bvv" and "cvv"

    return nb.length >= 5
}

let newhd = hdk();
console.log(newhd)



let bvv = 5;
let cvv = 5;

console.log(bvv !== cvv) // it returns false

// *******************************************************************************************

//! Important - if we does't assign any value to a variable it means the variable is null and in if-else condition if the variable consist "null" then the "else" condition will get execute

let element; // here this variable 'element' consist null so the "else" statement will execute

// but if we assign the value to the element then it will execute the "if" statement

// element = 'any'; // Now the if statement will get executed


if(element){ //! If element have any value
    console.log('htes')
}
else{ //! If element have no value means null
    console.log('error')
}

// or 

let element2 = null // it will console "no" because element2 is null
if(element2){ // if element have any value then run the statement
    console.log('yes')
}
else{ // if element2 is null then run this statament
    console.log('no'); 
}

//or

let element3;

if(!element3){ // if element have no value means null
    console.log("element is null");
}
else{ // if element have any value
    console.log('element not is null');
}




// !Important:- we can use this method only if the variable have boolean value
// Here we are checking the variable doesDrive is defined or not
const doesDrive = false;

if (doesDrive) { // if doesDrive consist "true"
    console.log('you can drive')
} else { // if doesDrive consits "false"
    console.log('you cannot drive')
}

const harsh = true;

if (!harsh) { // is harsh is not equal to true
    console.log('harsh can drive')
} else { // if harsh is equal to true
    console.log('harsh cannot drive')
}

// If we remove the check variable from here the else statement will not get printed it will throw an error that variable is not defined
const check = 34;
if (check) { // if check is defined
    console.log('Yes check is defined')
} else { // if check is not defined
    console.log('No check is not defined')
}

//So we use typeof method to check if a certain variable exists or not in our javascript 
const vari = 43;
console.log(typeof vari);

// here the type of vari is number and here the statement says "the condition is "number"(type of vari is number here) is not equal to undefined" if this statement is true then print the if statement otherwise print else statement
if (typeof vari !== 'undefined') { // it means vari is equal to defined *we just twisted the statment
    console.log('vari is defined')
} else {
    console.log('vari is not defined')
}


// && - this is called And operator means if both the condition get true only than apply the following console.log 
// here if we make the age greater than 18 and doesDrive condition is true than it will console the if statement and if the age is less than 18 and doesDrive condition is false than print the else statement 
const driveAge = 25;
if (doesDrive && driveAge > 18) {
    console.log('You can drive')
} else (
    console.log('you can not drive')
)


// another operator is or (||) we use this when we want any one statement gets true 
const makeFood = true;
const makingAge = 15;
if (makeFood || makingAge > 18) { // if any one statement is true it will print if statement
    console.log('pass')
} else {
    console.log('notpass') // if none of them is true than it will print the else statement
}


// TERNARY OPERATOR:----------------------------------------------------------------------

const ter = 34;
// here we are using ternary operator it says that if the ter variable value is 34 than print the ter is 34 but if the variable value is not matching the above value than print ter is not 34  
console.log(ter == 34 ? 'ter is 34' : 'ter is not 34')

const ter2n = 65
console.log(ter2n == 66 ? 'yes this value exist in the variable' : 'No this value is not available')

const bool = false;
console.log(bool == true ? 'yes boolean is true' : 'no boolean is false');


//  SWITCH CASE:-----------------------------------------------------------------------------
// here we are using switch case in this first we define a variable than we set multiple set of cases for the varaiable like if the first case matches the value of variable than console the first case if the second one matches than print the second one and so on  
const myAge = 20; // here we have defined a variable for switch case
switch (myAge) {
    case 10: // case first if the variable age is 10 than it will print this case
        console.log('you are 10')
        break; // break will help to execute only one case if we dont use break than it will print all the cases 
    case 20: // case second if the variable age is 20 tha it will print this case
        console.log('you are 20')
        break;
    case 30: // similarly if the variable age matches to this case than it will print the case
        console.log('you are 30')
        break;
    default:
        console.log('You age is unknown') // if the variable do not match any of the cases than print this default case
        break;
}

