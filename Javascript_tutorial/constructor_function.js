// a constructor function is used to create objects

// constructor function
function Person (surname) {
    this.name = 'Manikant',
    this.age = 23,
    this.surname = surname
     this.greet = function () {
        console.log('hello :)');
    }
}

// create objects
const person1 = new Person("Rai");
const person2 = new Person();

// access properties
console.log(person1.name);  // John
console.log(person2.name);  // John
console.log(person1.surname)
person1.greet()


// JavaScript Constructor Function Parameters
// You can also create a constructor function with parameters. 
// constructor function
function Person2 (person_name, person_age, person_gender) {

    // assigning  parameter values to the calling object
     this.name = person_name,
     this.age = person_age,
     this.gender = person_gender,
 
     this.greet = function () {
         return ('Hi' + ' ' + this.name);
     }
 }
 
 
 // creating objects
 const person10 = new Person2('John', 23, 'male');
 const person20 = new Person2('Sam', 25, 'female');
 
 // accessing properties
 console.log(person10.name); // "John"
 console.log(person20.name); // "Sam"


 // adding property to person1 object
person1.gender = 'male';

// adding method to person1 object
person1.greet = function () {
    console.log('hello World');
}

person1.greet();   // hello


// JavaScript Object Prototype
// You can also add properties and methods to a constructor function using a prototype

// adding new property to constructor function
Person.prototype.gender = 'Female';
console.log(person2.gender); // Female




