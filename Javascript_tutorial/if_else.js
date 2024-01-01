// check if the number is positive

// const number = prompt("Enter a number: ");

// // check if number is greater than 0
// if (number > 0) {
//  // the body of the if statement
//   console.log("The number is positive");
// }

// console.log("The if statement is easy");

// Loops
// program to display text 5 times
const n = 5;

// looping from i = 1 to 5
for (let i = 1; i <= n; i++) {
    console.log(`I love JavaScript.`);
}

// program to display numbers from 1 to 5
// initialize the variable
let i = 1, n1 = 5;

// while loop from i = 1 to 5
while (i <= n1) {
    console.log(i);
    i += 1;
}


// program to display numbers
// do...while loop from 1 to 5
do {
    console.log(i);
    i++;
} while(i <= n);


// program using switch statement
let a = 2;

switch (a) {

    case 1:
        a = 'one';
        break;
    case 2:
        a = 'two';
        break;
    default:
        a = 'not found';
        break;
}
console.log(`The value is ${a}`);


// multiple case switch program
let fruit = 'apple';
switch(fruit) {
    case 'apple':
    case 'mango':
    case 'pineapple':
        console.log(`${fruit} is a fruit.`);
        break;
    default:
        console.log(`${fruit} is not a fruit.`);
        break;
}