//Implicit Conversion to String
// numeric string used with + gives string type
let result;

result = '3' + 2; 
console.log(result) // "32"

result = '3' + true; 
console.log(result); // "3true"

result = '3' + undefined; 
console.log(result); // "3undefined"

result = '3' + null; 
console.log(result); // "3null"

// Implicit Conversion to Number
// numeric string used with - , / , * results number type

let result2;

result = '4' - '2'; 
console.log(result); // 2

result = '4' - 2;
console.log(result); // 2

result = '4' * 2;
console.log(result); // 8

result = '4' / 2;
console.log(result2); // 2


// non-numeric string used with - , / , * results to NaN

let result3;

result = 'hello' - 'world';
console.log(result); // NaN

result = '4' - 'hello';
console.log(result3); // NaN


// if boolean is used, true is 1, false is 0

let result4;

result = '4' - true;
console.log(result); // 3

result = 4 + true;
console.log(result); // 5

result = 4 + false;
console.log(result4); // 4

// null is 0 when used with number
let result5;

result = 4 + null;
console.log(result5);  // 4

result = 4 - null;
console.log(result5);  // 4


// Arithmetic operation of undefined with number, boolean or null gives NaN

let result6;

result = 4 + undefined;
console.log(result);  // NaN

result = 4 - undefined;
console.log(result);  // NaN

result = true + undefined;
console.log(result);  // NaN

result = null + undefined;
console.log(result);  // NaN


// JavaScript Explicit Conversion
let result7;
// string to number
result = Number('324');
console.log(result); // 324

result = Number('324e-1')  
console.log(result); // 32.4

// boolean to number
result = Number(true);
console.log(result); // 1

result = Number(false);
console.log(result); // 0

// if a string is an invalid number, the result will be NaN
let result8;
result = Number('hello');
console.log(result); // NaN

result = Number(undefined);
console.log(result); // NaN

result = Number(NaN);
console.log(result); // NaN




