function sum(x = 3, y = 5) {

    // return sum
    return x + y;
}

console.log(sum(5, 15));  // 20 
console.log(sum(7));        // 12
console.log(sum());          // 8


// Using Expressions as Default Values
function sum2(x = 1, y = x,  z = x + y) {
    console.log( x + y + z );
}

sum2(); // 4