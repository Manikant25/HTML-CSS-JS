// Before ES6
// assigning object attributes to variables
const person = {
    name: 'Sara',
    age: 25,
    gender: 'female'    
}

let name = person.name;
let age = person.age;
let gender = person.gender;

console.log(name); // Sara
console.log(age); // 25
console.log(gender); // female

// After ES6

// assigning object attributes to variables
const person2 = {
    name1: 'Sara',
    age1: 25,
    gender1: 'female'    
}

// destructuring assignment
// When destructuring objects, you should use the same name for the variable as the corresponding object key.
let { name1, age1, gender1 } = person2;

console.log(name1); // Sara
console.log(age1); // 25
console.log(gender1); // female

// destructuring assignment
// using different variable names
let { name: name2, age: age2, gender:gender2 } = person;

console.log(name2); // Sara
console.log(age2); // 25
console.log(gender2); // female


// Array Destructuring
const arrValue = ['one', 'two', 'three'];

// destructuring assignment in arrays
const [x, y, z] = arrValue;

console.log(x); // one
console.log(y); // two
console.log(z); // three

// assigning default value 5 and 7
let arrValue2 = [10];
let [x1 = 5,  y1 = 7] = arrValue2;

console.log(x1); // 10
console.log(y1); // 7


// In object destructuring, you can pass default values in a similar way.
const person3 = {
    name5: 'Jack',
}

// assign default value 26 to age if undefined
const { name5, age4 = 26} = person3;

console.log(name5); // Jack
console.log(age4); // 26

// Swaping Variable using Destructing
// program to swap variables

let x2 = 4;
let y2 = 7;

// swapping variables
[x2, y2] = [y2, x2];

console.log(x2); // 7
console.log(y2); // 4

// destructuring assignment in arrays
const arrValue11 = ['one', 'two', 'three'];
// You can skip unwanted items in an array without assigning them to local variables.
const [x11, , z11] = arrValue11;

console.log(x11); // one
console.log(z11); // three

// destructuring assignment in arrays
// assigning remaining elements to y
const [x22, ...y22] = arrValue;

console.log(x22); // one
console.log(y22); // ["two", "three", "four"]

const person33 = {
    name: 'Sara',
    age: 25,
    gender: 'female'    
}

// destructuring assignment
// assigning remaining properties to rest
let { name33, ...rest } = person33;

console.log(name33); // Sara
console.log(rest); // {age: 25, gender: "female"}

// The variable with the spread syntax cannot have 
// a trailing comma ,. You should use this rest element
//  (variable with spread syntax) as the last variable.
// const arrValue = ['one', 'two', 'three', 'four'];

// // throws an error
// const [ ...x, y] = arrValue;

// console.log(x); // error



