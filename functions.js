// ////////// Checks if number is even w. if loop

// function ifEven (a) {
//     if (a % 2 == 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(ifEven(12));
// console.log(ifEven(11));

// ////////// Also checks if number is even, but less verbose 

// function ifEven (a) {
//     return a % 2 == 0; // == zwraca wartosc logiczna, if else niepotrzebne
// }

// console.log(ifEven(11));
// console.log(ifEven(12));

// ////////// Highest number in array w. Math.max

// function maxArray (a) {
//     return Math.max(...a);
// }

// console.log("Max: " + maxArray([1, 5, 3, 9, 2]));

// ////////// Highest number in array w. for loop

// function maxArray2 (a) {
//     let max = [0];
//     for (let i = 1; i < a.length; i++) {
//         if (a[i] > max) {
//             max = a[i];
//         }
//     }
//     return max;
// }

// ////////// Sum of array

// function sumArray (a) {
//     let sum = 0;
//     for (let i = 0; i < a.length; i++) {
//         sum += a[i]
//     }
//     return sum;
// }

// console.log("Sum: " + sumArray([1, 5, 3, 9, 2]));

// ////////// Mean of array

// function meanArray (a) {
//     let sum = 0;
//     for (let i = 0; i < a.length; i++) { 
//         sum += a[i]
//     }
//     return sum / a.length;
// }

// console.log(meanArray([1, 5, 3, 9, 2]));

////////// Math operations

// function mathOperations (a, b, operation) {
//     if (operation == "add") {
//         return a + b;
//     } else if (operation == "substract") {
//         return a - b;
//     } else if (operation == "multiply") {
//         return a * b;
//     } else if (operation == "divide") {
//         if (b == 0) {
//             return "Can't do that!";
//         }
//         return a / b;
//     } else {
//         return "Invalid operation!";
//     } 
// }

// console.log(mathOperations(10, 2, "add"));

////////// Analyzes array and returns min, max, mean, aboveMean

// function analyzeArray (arr) {
//     let max = [0];
//     let min = [0];
//     let sum = 0; 

//     for (let i = 0; i < arr.length; ++i) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//         if (arr[i] < min) {
//             min = arr[i];
//         } 
//         sum += arr[i];
//     }

//     let mean = sum / arr.length;
//     let aboveMean = 0;

//     for (let i = 0; i < arr.length; ++i) {
//         if (arr[i] > mean) {
//             aboveMean++
//         }
//     }
    
//     return {max, min, mean, aboveMean};    
// }

// console.log(analyzeArray([3, 5, 7, 2, 8, -1, 4]));

////////// Failed attempt at rekursja

// function countdown (n) {
//     for (n > n - 1; ; --n) {
//         console.log(n); 
//         if (n == 1) {
//             break;
//         }
//     }
// }

// countdown(5);

////////// Proper rekursja

// function countdown(n) {
//     console.log(n);
//     if (n > 1) {
//         countdown(n - 1);
//     }
// }

// countdown(10);

////////// Recursion was suppose to add all numbers leading up to n. Failed, not my solution. 

// function sumToN(n) {
//     if (n == 1) {
//         return 1;
//     } else {
//         return n + sumToN(n - 1);
//     }
// }

// console.log(sumToN(5));

////////// Boolean to string

// function booleanToString(b){
//     if (b === true) {
//       return "true";
//     } else if (b === false) {
//       return "false";
//     }
//   }

////////// Capitlize first character

// function capitalize (str) {
//   return str[0].toUpperCase() + str.slice(1);
// }

// console.log(capitalize("dostojewski"));

////////// Reverse string with methods

// function reverseString(str) {
//     var splitString = str.split(""); 
//     var reverseArray = splitString.reverse();
//     var joinArray = reverseArray.join("");
//     return joinArray;
// }

// console.log(reverseString("dostojewski"));

////////// Reverse string less verbose (so cool you can do that)

// function reverseString2(str) {
//     return str.split("").reverse().join("");
//   }

// console.log(reverseString2("Nietzsche"));

////////// Reverse string with for loop

function reverseString3(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
      newString += str[i];
    }
    return newString;
}

console.log(reverseString3("Orwell"));