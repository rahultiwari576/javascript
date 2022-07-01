console.log("Fetch Fruit and Fetch Vegetables")

let fetchFruit = document.getElementById('fetchFruit');
fetchFruit.addEventListener('click', fetchButtonfruit);
let fetchVegetables = document.getElementById('fetchVegetable');
fetchVegetables.addEventListener('click', fetchButtonvegetables);

function fetchButtonfruit(){
  console.log('fetching fruits')

  const xhr = new XMLHttpRequest();

  xhr.open("get", "fruits.json", true);

  xhr.onload = function(){
    if (this.status === 200) {
        
        let obj = JSON.parse(this.responseText);
        let innerList = document.getElementById('innerList');
        let str = "";
        for(key in obj){

            str += `<li>${key} :-- ${obj[key]}</li>`
        }
        innerList.innerHTML = str;
        
    }
    else {
        console.log("Some error occurred");
    }
  }

  xhr.send();
}
function fetchButtonvegetables(){
  console.log('fetching fruits')

  const xhr = new XMLHttpRequest();

  xhr.open("get", "vegetables.json", true);

  xhr.onload = function(){
    if (this.status === 200) {
        
        let obj = JSON.parse(this.responseText);
        let innerList = document.getElementById('innerList');
        let str = "";
        for(key in obj){

            str += `<li>${key} :-- ${obj[key]}</li>`
        }
        innerList.innerHTML = str;
        
    }
    else {
        console.log("Some error occurred");
    }
  }

  xhr.send();
}