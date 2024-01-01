// function expression
let x = function(x, y) {
    return x * y;
 }

 let mm = (x,y) =>  x * y ;
 console.log(mm(10,20));

 let printName = (student_name) => { console.log(student_name) };

//  If a function doesn't take any argument, then you should use empty parentheses.

let greet = () => console.log("Hello World");

printName("Manikant")

// If a function has only one argument, you can omit the parentheses.
let hello = employeName => console.log(`EmployName ${employeName}`);

hello("Pixar")

// Arrow Function as an Expression
// You can also dynamically create a function and use it as an expression

let age = 5;

let welcome = (age < 18) ?
  () => console.log('Baby') :
  () => console.log('Adult');

welcome(); // Baby

// Multiline Arrow Functions
// If a function body has multiple statements, you need to put them inside curly brackets {}
let sum = (a, b) => {
    let result = a + b;
    return result;
}

let result1 = sum(5,7);
console.log(result1); // 12

// this with Arrow Function
// function Person2() {
//     this.name = 'Jack',
//     this.age = 25,
//     this.sayName = function () {

//         // this is accessible
//         console.log(this.age);

//         function innerFunc() {

//             // this refers to the global object
//             console.log(this.age);
//             console.log(this);
//         }
        
//         //Using Arrow Function
//         console.log(this.age);
//         let innerFunc = () => {
//             console.log(this.age);
//         }

//         innerFunc();

//         innerFunc();

//     }
// }

let x1 = new Person2();
x1.sayName();


let x2 = function () {
    console.log(arguments);
}
x2(4,6,7); // Arguments [4, 6, 7]

