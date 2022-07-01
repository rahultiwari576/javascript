 console.log('Sets in Javascript');

 // Set stores unique values it means it can't store the same values but it is not applicable for uppercase values it is treated as unique values in sets
 // We can create a new set constructor like this
 mySet = new Set();

 mySet.add('This')
 mySet.add('My Name')
 mySet.add('This')
 mySet.add('this')
 mySet.add('That')
 mySet.add('That2')
 mySet.add(34)
 mySet.add(true)
 mySet.add(false)
 console.log('The sets looks like this', mySet);

 // We can retrive the size of set using its 'size' method
 console.log(mySet.size);

 // We can check the if the value is present in set or not by using 'has' method, it returns boolean value
 console.log(mySet.has('this'));
 console.log(mySet.has(34));
 console.log(mySet.has(false));
 console.log(mySet.has('This'));
 console.log(mySet.has('harsh'));

 // We can alos remove any elements from sets by using delete method
 console.log('Before Removal', mySet, mySet.has('this')); // Size 8, true
 mySet.delete('this')
 console.log('After Removal', mySet, mySet.has('this')); // Size 7, false

 // We can also store collections of thing in Set in an array like 
 let mySet2 = new Set([1, 45, 'This', false, { a: 4, b: 8 }, 'this']);
 console.log('Array in Set', mySet2.size);
 console.log('Array in Set', mySet2);


 // Iterating a Set using for of loop
 for (let item of mySet) {
     console.log('Item is ', item);
 }

 // Iterating a Set using for Each loop
 mySet.forEach(element => {
     console.log("ForEach: Items are - ", element);
 });

 // We can also convert set into an array using Array.from method

 let setArray = Array.from(mySet);
 // It will convert all the set elements into an array like this [ 'This', 'My Name', 'That', 'That2', 34, true, false ]
 console.log('Set Array', setArray);

 // Here we've remove all the duplicates of array by converting into set and converting again into array using Array.from method
 let array = [1, 1, 3, 4, 5, 5]
 console.log(array);
 let arSet = new Set(array);
 console.log(arSet);
 let removedDup = Array.from(arSet);
 console.log("Here we have new Array with duplicated removed", removedDup);