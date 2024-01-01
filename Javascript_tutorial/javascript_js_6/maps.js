// create a Map
const map1 = new Map(); // an empty map
console.log(map1); // Map {}

// insert key-value pair
map1.set('info', {name: 'Jack', age: 26});
console.log(map1); // Map {"info" => {name: "Jack", age: 26}}

// Map with object key
let map2 = new Map();

let obj = {gender : "Male"};
map2.set(obj, {name: 'Jack', age: "26"});

console.log(map2); // Map {{} => {name: "Jack", age: "26"}}

// access the elements of a Map
console.log(map1.get('info')); // {name: "Jack", age: "26"}
// / check if an element is in Set
console.log(map1.has('info')); // true

// removing a particular element
map1.delete('address'); // false
console.log(map1); // Map {"info" => {name: "Jack", age: "26"}} 

map1.delete('info'); // true
console.log(map1); // Map {}

// removing all element
map1.clear();
console.log(map1); // Map {}

let map3 = new Map();
map3.set('info', {name: 'Jack', age: "26"});
map3.set('cs', { sub : 'system design' })

console.log(map3.size); // 1

let map4 = new Map();
map4.set(1,20);
console.log(map4.get(1));

// Iterating through maps
let map5 = new Map();
map5.set('name', 'Jack');
map5.set('age', '27');

// looping through Map
for (let [key, value] of map5) {
    console.log(key + '- ' + value);
}

// looping through Map
map5.forEach(function(value, key) {
    console.log(key + '- ' + value)
  })


//   Get Key/Values of Map
// You can iterate over the Map and get the key/value of a Map using the entries() method.
let map6 = new Map();
map6.set('name', 'Jack');
map6.set('age', '27');

// looping through the Map
for (let elem of map6.entries()) {
    console.log(`${elem[0]}: ${elem[1]}`);
}

