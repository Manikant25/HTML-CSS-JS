//strings example
const name = 'Peter';
const name1 = "Jack";
const result = `The names are ${name} and ${name1}`;

const a = 'hello';
console.log(a[1]); // "e"
console.log(a.charAt(1)); // "e"

// In Js Strings are immutable
let b = 'hello';
b[0] = 'H';
console.log(b); // "hello"