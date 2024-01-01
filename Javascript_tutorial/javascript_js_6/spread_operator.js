const arrValue = ['My', 'name', 'is', 'Jack'];

console.log(arrValue);   // ["My", "name", "is", "Jack"]
console.log(...arrValue); // My name is Jack

let numbers = [1,2,3,4,4,5];
console.log(numbers);
console.log(...numbers);

// Copy Array Using Spread Operator
const arr1 = ['one', 'two'];
const arr2 = [...arr1, 'three', 'four', 'five'];

console.log(...arr2); 
//  Output:
//  ["one", "two", "three", "four", "five"]

// Clone Array Using Spread Operator
// In JavaScript, objects are assigned by reference and not by values.
let arr10 = [ 1, 2, 3];
let arr20 = arr1;

console.log(arr10); // [1, 2, 3]
console.log(arr20); // [1, 2, 3]

// append an item to the array
arr10.push(4);

console.log(arr10); // [1, 2, 3, 4]
console.log(arr20); // [1, 2, 3, 4]

// However, if you want to copy arrays so that they 
// do not refer to the same array, you can use the spread operator.

let arr12 = [ 1, 2, 3];

// copy using spread syntax
let arr22 = [...arr1];

console.log(arr12); // [1, 2, 3]
console.log(arr22); // [1, 2, 3]

// append an item to the array
arr12.push(4);

console.log(arr12); // [1, 2, 3, 4]
console.log(arr22); // [1, 2, 3]

// Spread Operator with Object
// You can also use the spread operator with object literals.
const obj1 = { x : 1, y : 2 };
const obj2 = { z : 3 };

// add members obj1 and obj2  to obj3
const obj3 = {...obj1, ...obj2};

console.log(obj3); // {x: 1, y: 2, z: 3}

// Rest Parameter
// When the spread operator is used as a parameter, it is known as the rest parameter.
// You can also accept multiple arguments in a function call using the rest parameter. 

let func = function(...args) {
    console.log(args);
}

func(3); // [3]
func(4, 5, 6); // [4, 5, 6]

// Using the rest parameter will pass the arguments as array elements.
function sum(x, y ,z) {
    console.log(x + y + z);
}

const num1 = [1, 3, 4, 5];
// If you pass multiple arguments 
// using the spread operator, the function takes the required arguments and ignores the rest.
sum(...num1); // 8