// constructor function
function Person (name) {

    // assigning  parameter values to the calling object
     this.name = name;
 
     // defining method
     this.greet = function () {
         return ('Hello' + ' ' + this.name);
     }
 }
// create an object
const person1 = new Person("Manikant");
console.log(person1.greet());

// into classes
// creating a class
class Person2 {
    constructor(name) {
      this.name = name;
    }
     // defining method
     greet() {
        console.log(`Hello ${this.name}`);
    }
    getter
    get personName() {
        return this.name;
    }

    // setter
    set personName(x) {
        this.name = x;
    }
  }

let name23 = new Person2("Manikant");
console.log(name23.name);
name23.personName = "Manikant Rai";
console.log(name23.name);
// console.log(name23.greet());

class Person23 {
    constructor() {
      a = 0;
      this.name = a;
    }
  }
  
  let p = new Person23(); // ReferenceError: Can't find variable: a