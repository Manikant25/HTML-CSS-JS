// constructor function
function Person () {
    this.name = 'Manikant',
    this.age = 23
}

// creating objects
const person1 = new Person();
const person2 = new Person();

// adding property to constructor function
Person.prototype.gender = 'male';

// prototype value of Person
console.log(Person.prototype);

// adding a method to the constructor function
Person.prototype.greet = function(surname) {
    console.log('hello' + ' ' +  this.name +' ' +  surname);
}


// inheriting the property from prototype
console.log(person1.gender);
console.log(person2.gender);

console.log(person1.greet("Rai"))


// Changing Prototype
// If a prototype value is changed, then all the new objects
//  will have the changed property value. All the previously 
//  created objects will have the previous value.

// constructor function
function Person() {
    this.name = 'John'
}

// add a property
Person.prototype.age = 20;

// creating an object
const person4 = new Person();

console.log(person4.age); // 20

// changing the property value of prototype
Person.prototype = { age: 50 }

// creating new object
const person3 = new Person();

console.log(person3.age); // 50
console.log(person1.age); // 20

// JavaScript Prototype Chaining
// If an object tries to access the same property that is in the constructor
//  function and the prototype object, the object takes the property from the constructor function

function Person() {
    this.name = 'John'
}

// adding property 
Person.prototype.name = 'Peter';
Person.prototype.age = 23

const person11 = new Person();

console.log(person11.name); // John
console.log(person1.age); // 23