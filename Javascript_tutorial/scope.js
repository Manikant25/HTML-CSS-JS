// Global Scope
// program to print a text 
let a = "hello";

function greet () {
    console.log(a);
}

greet(); // hello

// program to show the change in global variable
function greetName() {
    a = 3;
}

// before the function call
console.log(a);

//after the function call
greetName();
console.log(a); // 3


// In JavaScript, a variable can also be used without declaring it.
//  If a variable is used without declaring it, that variable automatically becomes a global variable.
function greet2() {
    a = "Hello Manikant Rai :)"
}

greet2();

console.log(a); // hello


// Local Scope
// program showing local scope of a variable
let a1 = "hello";

function greet() {
    let b = "World"
    console.log(a1+ b);
}

greet();
// console.log(a1 + b); // error


// In JavaScript, var is function scoped and let is block-scoped. If you try to use var c = 'hello'; 
// inside the if statement in the above program, 
// the whole program works, as c is treated as a local variable.