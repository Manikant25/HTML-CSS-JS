// create Set
const set1 = new Set(); // an empty set
console.log(set1); // Set {}

// Set with multiple types of value
const set2 = new Set([1, 'hello', {count : true}]);
console.log(set2); // Set {1, "hello", {count: true}}

const set3 = new Set([1, 2, 3]);

// access the elements of a Set
console.log(set3.values()); // Set Iterator [1, 2, 3]
// check if an element is in Set
console.log(set1.has(1));


const set = new Set([1, 2]);
console.log(set.values());

// adding new elements
set.add(3);
console.log(set.values());

// adding duplicate elements
// does not add to Set
set.add(1);
console.log(set.values());
// removing a particular element
set.delete(2);

// remove all elements of Set
set.clear();

// looping through Set
for (let i of set) {
    console.log(i);
}

// JavaScript WeakSet
// The WeakSet is similar to a Set. However, WeakSet
//  can only contain objects whereas a Set can contain 
//  any data types such as strings, numbers, objects, etc

const weakSet = new WeakSet();
console.log(weakSet); // WeakSet {}

let obj = {
    message: 'Hi',
    sendMessage: true
}

// adding object (element) to WeakSet
weakSet.add(obj);

console.log(weakSet); // WeakSet {{message: "Hi", sendMessage: true}}
const obj2 = {a:1};

// add to a weakSet
weakSet.add(obj2);
console.log(weakSet); // WeakSet {{a: 1}}

// check if an element is in Set
console.log(weakSet.has(ob2j)); // true

// delete elements
weakSet.delete(obj2);
console.log(weakSet); // WeakSet {}