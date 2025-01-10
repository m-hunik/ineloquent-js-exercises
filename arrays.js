const listOfMakes = ["Dodge", "Ford", "Ferrari"];

// let selectedCar = listOfMakes [0];

// console.log(listOfMakes[0]);

// //////// Changes the value of selected element

// listOfMakes[0] = "Porsche";

// console.log(listOfMakes[0]);

// //////// Converts array to a string

// console.log(listOfMakes.toString());

// //////// Accesses (whatever that means) the full array

// console.log(listOfMakes);

// //////// We can also have numbers in array, or even functions or objects

// const person = ["John", "Smith", 46];

// //////// This is an object, it uses properties to access it's elements. JS does NOT support named indexes for arrays

// const personObject = {firstName: "John", lastName: "Smith", age: 46};
// console.log(personObject.lastName);

// //////// Returns length of an array (it is always one more higher than the index in this example index is 2 and the length is 3)

// console.log(listOfMakes.length);

// //////// Accesses first element

// console.log(listOfMakes[0]);

// //////// Accesses last element, last element is always index - 1

// console.log(listOfMakes[listOfMakes.length - 1]);

// //////// The difference between arrays and objects is: objects use named indexes, arrays use numbered indexes. Arrays are special kind of objects with numbered indexes.

// //////// Associative indexes - meaning, arrays with named indexes, are NOT supported in JS

// //////// When you check whether the variable is an array or not, typeof operator will return "object" (because as we said arrays are objects)
// //////// To solve this we can use method Array.isArray();

// console.log(Array.isArray(listOfMakes));

// //////// Arguments is an array like object accessible inside functions that contains the values of the arguments passed to the functions

// function func1(a, b, c) {
//     console.log(arguments[1]);
//   }
  
//   func1(1, 2, 3);


// //////// Function takes an array and some arguments, and removes arguments from that array

// const removeFromArray = function(array, ...args) {
//     const newArray = [];
//     array.forEach((item) => {
//         if (!args.includes(item)) {
//           newArray.push(item);
//         }
//       });
//       return newArray;
// };

// //////// Adds element to array

listOfMakes.push("Syrena", "Zuk");


//////// Deletes first element from array

// listOfMakes.shift();

/////// If you want to display what was deleted, you need to store it in a variable

let removedElement = listOfMakes.shift();
console.log(listOfMakes);
console.log(removedElement);