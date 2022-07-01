console.log("For In Loop in Javascript")

// Checkout this link for more clarification of forIn loop
//  https://www.youtube.com/watch?v=-PVcUUj_ke4&ab_channel=Telusko 

console.log('---------Example(1)---------');

let obj = {
    Name: 'Harsh jha',
    Designation: 'Web developer',
    Channel: 'code with harsh',
    Age: 35
}


// for in loop is specially designed for object by using this loop we can print all the object key and value at once

// Important:- Here x is index of array or object and in first iteration the x will check the 0th index key which is "name" here and in second iter it will check 1st index key which is "designation" here and so one
for (let x in obj) {
    console.log(x);
    // And here obj is our data so as we know x assigned index after every iteration so on 0tt index in obj data we have name value "harsh Jha" in first iteration and in second we get "web developer" value because of 1st index value and so on
    console.log(obj[x]);

    // And if we want to print both title and value we can do it like this
    console.log(x + ":-" + obj[x]);
    document.write(obj[x]);

    // but we cannot print or console the objects directly using its variable
    document.write(obj);



    // To eliminate the confusion - Here "key" is for key{all the titles name,channel,etc} and "obj[key]" is for values of titles{Harsh Jha, web developer, etc}
    // console.log(key + ":" + obj[key])
}


console.log('---------Example(2)---------')

let objName = {
    name: 'Tommy',
    age: 2,
    youtube: "code with Tommy"
}

// we created a title variable to store "key with values" 
for (let x in objName) {
    // Here title is the key of the object and objName[title] is the value of key
    console.log(`The ${[x]} of object is ${objName[x]}`);
}


console.log("---------Multiple Objects using For In loop twice to iterate everything with title----------")
// FOR IN LOOP:-------------------------------------------------------------------


// !Important - if we want to iterate multiple objects using for in loop we can do in this way

let objMulti = [
    {
        nameDoubleloop: 'Harsh jha',
        designationDoubleloop: 'Web developer',
        channelDouble: 'code with harsh',
        ageDouble: 35
    },
    {
        nameDouble: 'tom jha',
        designationDouble: 'android developer',
        channelDouble: 'code with tom',
        ageDouble: 33
    }
]


// for in loop is specially designed for object by using this loop we can print all the object key and value at once
for (let key in objMulti) {
// // First iteration it will fetch 0th index array age and Second iteration it will fetch 1st index age
//     console.log(objMulti[key].age);
//     console.log(objMulti[key])
    for (let x in objMulti[key]){
        console.log(x + ":-"+ objMulti[key][x]);
    }
}


console.log("----------Multi Object Loop----------")

// It's important to understand that the objects are in the array like this ["object1", "object2"]
// So that we can achieve it by using "array index method"

let objMulti2 = [
    {
        name: 'Harsh jha',
        designation: 'Web developer',
        channel: 'code with harsh',
        age: 35
    },
    {
        name: 'tom jha',
        designation: 'android developer',
        channel: 'code with tom',
        age: 33
    }
]


// "for in loop "is specially designed for object by using this loop we can print all the object key and value at once
// here the value of ${key} is 0 and 1 bacause of its index
for (let x in objMulti2) {
    console.log(` ${x}
          ${objMulti2[x].name}
          ${objMulti2[x].designation} 
          ${objMulti2[x].channel}
       `);
// This will not work in template literals
       console.log(objMulti2[x]);
 
}
/*

       // With the help of array indexing method we are fetching the 0th and 1st index object
       // It will console twice if we put it is in the loop
       console.log(objMulti2[0]);
       console.log(objMulti2[1]);
       // Similary we can fetch its property too
       console.log(objMulti2[0].name);
       console.log(objMulti2[1].name);

*/



let content = document.getElementById('content')
fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        for (x in data) {
            // As we know the objects are in array so here we are getting its index
            let a = (`${x} &nbsp ${data[x].name} &nbsp &nbsp &nbsp &nbsp Email:- ${data[x].email} <br>`);
            document.write(a);
        }
    })
    .catch((error) => {
        document.write("cant fetch data")
    })