// New Stuff that were introduced in es6

// variable declared using let
let name = 'Sara';
{
    // can be accessed only inside
    let name = 'Peter';

    console.log(name); // Peter
}
console.log(name); // Sara 

// name declared with const cannot be changed
const name1 = 'Manikant';

// JavaScript Arrow Function\
// for example, below function can be converted 

// function expression
let x = function(x, y) {
    return x * y;
 }

 // into 
 // function expression using arrow function (Some sort of  lambda expression)
let y = (x, y) => x * y;

console.log(x(2,2));
console.log(y(2,2));
 

// Classes

class Person {
    constructor(name) {
      this.name = name;
    }
  }

  const person1 = new Person('John');

console.log(person1.name); // John


// Default Parameters
function sum(x, y = 5) {

    // take sum
    // the value of y is 5 if not passed
    console.log(x + y);
}

sum(5); // 10
sum(5, 15); // 20

// JavaScript Template Literals
const first_name = "Jack";
const last_name = "Sparrow";

console.log(`Hello ${first_name} ${last_name}`);


// JavaScript Destructuring
// The destructuring syntax makes it easier to assign values to a new variable. 
// before you would do something like this
const person = {
    name: 'Sara',
    age: 25,
    gender: 'female'    
}

let name2 = person.name;
let age = person.age;
let gender = person.gender;

console.log(name2); // Sara
console.log(age); // 25
console.log(gender); // female

// Intead of above way we can 

let { name3, age3, gender3 } = person;

console.log(name3); // Sara
console.log(age3); // 25
console.log(gender3); // female

// JavaScript Promises
// Promises are used to handle asynchronous tasks.

// returns a promise
// let countValue = new Promise(function (resolve, reject) {
//     reject('Promise rejected'); 
//  });
 
//  // executes when promise is resolved successfully
//  countValue.then(
//      function successValue(result) {
//          console.log(result); // Promise resolved
//      },
//   )

function show(a, b, ...args) {
    console.log(a); // one
    console.log(b); // two
    console.log(args); // ["three", "four", "five", "six"]
  }
  
  show('one', 'two', 'three', 'four', 'five', 'six')
