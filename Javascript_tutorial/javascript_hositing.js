// Hoisting in JavaScript is a behavior in which a function or a variable can be used before declaration
// using test before declaring
console.log(test);   // undefined
var test = "Manikant";


// Variable Hoisting
// In terms of variables and constants, keyword var is hoisted and let and const does not allow hoisting.

// program to display value
a = 5;
console.log(a);
var a; // 5

// initializations are not hoisted.
// program to display value
console.log(b);
var b = 5;


// program to display value
// d = 5;
// console.log(d);
// let d; // error


// Function Hoisting
// A function can be called before declaring it

// program to print the text
greet2();

function greet2() {
    console.log('Hi, there. 😄');
}