////////// Skips odd numbers

// for (let i = 0; i < 10; i++) {
//     if (i % 2 == 0) {
//         alert(i);
//     }
// }

////////// Skips even numbers, but using continue, without nesting if

// for (let i = 0; i < 10; i++) {
//     if (i % 2 == 0) continue;
//     alert(i);
// }

////////// Alerts a number up to 2

// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
//   }

////////// Same thing as before, but with do... while loop

// let i = 0;
// do {
//     alert(`number ${i}!`);
//     i++;
// } while (i < 3);

////////// Prompts for number until it's higher than 100

// let numberInput;

// do {
//     numberInput = prompt("Yo, enter number > 100");
// } while (numberInput <= 100);

////////// Checks for prime number 2 <= 100, not my solution

for (let i = 2; i <= 100; i++) {
    let count = 0;
    for (let j = 2; j <= i; j++) {
        if (i % j == 0) ++count;
        if (count > 1) break;
    }
    if (count == 1) alert(i);
    }