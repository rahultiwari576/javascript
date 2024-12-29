// Use of return console this file using node js
let str = `This is Harsh Jha and He is a web developer`;

let func = () => {
  let temp = str.replace("This", "Helly ya");
  temp = str.replace("This", "Helly ya").replace("is", "Ho ya");
  temp = str
    .replace("This", "Helly ya")
    .replace("is", "Ho ya")
    .replace("web developer", "scienctist");
  return temp; // Once a return statement is reached, the function ends, and no further code within the function will be executed.
};

//or both method are same str.replace or temp(variable)

// let func = () => {
//     let temp = str.replace('This', "Helly ya")
//     temp = temp.replace('is', "Ho ya")
//     temp = temp.replace('web developer', "scienctist")
//     return temp
// }

let value = func();
console.log(value);
