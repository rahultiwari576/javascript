let cusArray = [
  {
    id: 1,
    name: "Harsh",
    lname: "jha",
  },
  {
    id: 2,
    name: "Rohan",
    lname: "Raj",
  },
  {
    id: 3,
    name: "Abhishek",
    lname: "Amrit",
  },
];

function blue(item) {
  console.log(item);
  return item.id !== 2; // return the elements(objects) which are not equal to 2
}

let newCusArray = cusArray.filter(blue);
console.log(newCusArray);
