console.log('Functions')

// We can also create a function and store it into the variable
const harsh = function (){
    console.log('This is the best person ever');
};

// We can also call the function by using variable name in which the function is stored
harsh();

// FUNCTIONS WITH TWO PARAMETERS:------------------------------------------------------------------------
// here we are creating a function name 'youtube' 
function youtube(youtubechannel, description){
    console.log(youtubechannel + ' is a best youtube channel')
    console.log(youtubechannel + description)
}

let channel = 'codewithharry';
let channel2 = 'paisa waisa';
let channel3 = 'nomadshubham'; 
let deschannel = ' is very hardworking and dedicated';


//Here we are calling the function and youtube is a function name  
// Here we are passing the arguments ex- channel, deschannel into function parameters youtubechannel and description
// first it will fetch the variable value of channel and deschannel (arguments)and pass it into function (parameters) on 1st (youtubechannel)and 2nd(description) position of variable which is created in function
youtube(channel, deschannel);  // Calling the function that we have created
youtube(channel2, deschannel);
youtube(channel3, deschannel)

// FUNCTIONS WITH TWO PARAMETERS:===============================================================
console.log('====================================')




let name = 'Harsh';
let nameOne = 'Pulkit'; // And this name is in global scope
let nameTwo = 'Chaudhary';
let nameThree = 'Himanshu';
let greetText = 'good morning ';


function greet(xyz,greet){
    console.log(greet + xyz)
    console.log(xyz + ' is a good boy');
}
// Calling the function using its function name greet

// Here we are passing the variable value into the function it means we are passing the argument nameOne and greetText into the function parameters xyz and greet

greet(nameOne, greetText); // so the value of nameOne 'pulkit' passes into the function xyz and the function says print the xyz plus string so it will print the current value pulkit in the place of xyz and plus string
greet(nameTwo, greetText);
greet(name, greetText);
greet(nameThree, greetText);

// USING LOCAL SCOPE IN THE FUNCTION:================================
console.log('==================================')
let flight = 'spicejet';
let flight2 = 'indigo';
let flight3 = 'katar';
let passenger = 'Harsh'

function airlines(flights, pname = 'default passenger'){
    // we know nameOne is already exists but it will not get affected because of local variable 
    let nameOne = 'Shayam' // nameOne is in local scope of function and here we have used local variable in the function 
    let passenger = 'Vipin' 
    console.log(flights +  ' is going to india')
    console.log(nameOne + ' is the passenger');
    console.log(passenger + ' is a second passenger in local scope')
    console.log(pname + ' is me')
}

airlines(flight2,passenger); //if we remove the variable passenger from here it will take default variable set in the function "pname"

console.log('==================================')
airlines(flight); // it will adapt the default passenger name

console.log('==================================')
airlines(flight3, passenger);
// here it will not return anything and because return is not defined 
let returnval1 = airlines(flight3);
console.log(returnval1);
//undefined


//                                     Mutilple function calling


//FUNCTION:========================== to demonstrate we can use function as many times as we want
// Here the name of function is sum and a,b,c is its parameters
function sum(a,b,c){
    // Here we say the to the function is add the value of a,b and c
    let d = a + b + c;
    console.log(d);
}

// Passing the arguments in sum 1,3,5 into the function parameters a,b,c
// Here we are calling the same function with different parameters
sum(1,3,5); // The result is 9
sum(4,5,6); // Second result is 15

console.log('---------------Return-----------------')
// RETURN VALUE OF FUNCTION:========================== 
// We use return in function when we want to reuse the return value anywhere ex- here we created a function and the task of function is to add the value of a,b,c but we want to use the result which is done by function anywhere to do this we call the function and stored in into any variable so the result which comes from return is stored into the variable 
// Here the name of function is sum and a,b,c is its parameters
function sum(a,b,c){
    // Here we say the to the function is add the value of a,b and c
    let d = a + b + c;

    // here it will return the value "sum of all digits" when the sum function is called
    return d;
}

// Passing the arguments in sum 1,3,5 into the function parameters a,b,c
// The return value 9 will stored into the variable returnValue it because we call the function sum and the work of sum function is to add the all numbers and give the total value in return 
let returnValue = sum(1,3,5); 

// !Important - we can retrieve the result value by both method but the only difference is in first console we have the result value stored in single variable but not in second case there we are directly calling the function
console.log(returnValue);
console.log(sum(1,3,5));



console.log('Return for function ')

// Here we have created a function named sum it task is to add all the subjects and return the total sum 

function sum(math,eng,sc){
    var s = math + eng + sc;

    return s;
}

// Here we have created an another function name percentage and the task of this function is to give the percentage and console the result after doing the math

function percentage(tt){
    var per = tt/300 * 100;
    console.log(per);
}


// Here we called the function 'sum' and passing the three arguments into the function sum parameters the sum will do its task and return the result to variable name "total"
var total = sum(39,45,65);

// Here we are console the return value which we get from the sum function
console.log(total);

// Here we called the function "percentage" and passing the argument "total" which we get from "sum" function, it means as we know the total sum is stored in "total" variable which we achieved form return so here we pass the total variable value as an argument into the percentage function parameter

// So by calling this function the function will do its task 
percentage(total);

console.log('=====================x=====================')

function age (a,b) {   
    
    // here we are saying if this condition is true run this condition and return the vaule of b into the returnvalThree variable
    if (b>a ){
    return b; }

    // or if this condition is true run this condition only and return the value of a into the returnvalThree variable

   if  (b<a){
     return a; 
   }
}

   let returnvalThree = age(8,9);
   console.log(returnvalThree);

   console.log('----------------testing return in function so that I can understand where it will get stored--------------------')

   let abhi = 1

   const reducer = ()=>{
    return abhi+=1
   }

   console.log(reducer())
