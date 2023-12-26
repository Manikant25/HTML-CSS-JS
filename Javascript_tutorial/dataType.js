//strings example
const name = 'ram';
const name1 = "hari";
const result = `The names are ${name} and ${name1}`;

const number1 = 3;
const number2 = 3.433;
const number3 = 3e5 // 3 * 10^5

// BigInt value
const value1 = 900719925124740998n;

// Adding two big integers
const result1 = value1 + 1n;
console.log(result1); // "900719925124740999n"

const value2 = 900719925124740998n;

// Error! BitInt and number cannot be added
// const result2 = value2 + 1; 
// console.log(result2); 
const dataChecked = true;
const valueCounted = false;

// two symbols with the same description

const value10 = Symbol('hello');
const value20 = Symbol('hello');


// JavaScript Object
// An object is a complex data type that allows us to store collections of data. For example,
const student = {
    firstName: 'ram',
    lastName: null,
    class: 10
};

/**
 * JavaScript Type
JavaScript is a dynamically typed (loosely typed) language. 
JavaScript automatically determines the variables' data type for you.
 */

// data is of undefined type
let data;

// data is of integer type
data = 5;

// data is of string type
data = "JavaScript Programming";

