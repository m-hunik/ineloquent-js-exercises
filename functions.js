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

function analyzeArray (a) {
    let max = [0];
    let min = [0]; 
    for (let i = 0; i < a.length; ++i) {
        if (a[i] > max) {
            max = a[i];
        }
        if (a[i] < min) {
            min = a[i];
        } 
    }
    return {max, min};    
}

console.log(analyzeArray([3, 5, 7, 2, 8, -1, 4]));