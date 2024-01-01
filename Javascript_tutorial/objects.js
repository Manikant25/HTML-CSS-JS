// JavaScript objects are a bit different. You do not need to create classes in order to create objects.

// object
const student = {
    firstName: 'ram',
    class: 10
};


// object creation
const person = { 
    name: 'John',
    age: 20
};
console.log(typeof person); // object
console.log(person.name); // John
// accessing property
console.log(person["name"]);

// nested object
const student2 = { 
    name: 'John', 
    age: 20,
    marks: {
        science: 70,
        math: 75
    }
}

// accessing property of student object
console.log(student2.marks); // {science: 70, math: 75}

// accessing property of marks object
console.log(student2.marks.science); // 70


const person3 = {
    name: 'Sam',
    age: 30,
    // using function as a value
    greet: function() { console.log('hello') }
}

person3.greet()

// Adding properties and methods to an object 

// creating an object
let student3 = { };

// adding a property
student3.name = 'Manikant Rai';

// adding a method
student3.greet = function() {
    console.log('hello');
}

// accessing a method
student3.greet(); // hello

// the function inside of an object can access it's variable in a similar way as a normal function would.
const person10 = {
    name: 'Manikant',
    age: 23,
    greet: function() {
        let surname = 'Rai';
        console.log('The name is' + ' ' + this.name + ' ' + surname); }
};

person10.greet();












