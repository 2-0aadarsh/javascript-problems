const set = new Set([10, 20, 30]);

const result = Array.from(set);
/*
This will create another array object literal inside the memory(Reference#A) and then Array.from() uses the Set's iterator to obtain one value at a time and inserts each value into the newly created array.

thus result = { 0: 10, 1: 20, 2: 30, length: 3 }
*/

console.log(result);        // [10, 20, 30]

console.log(result.length); // 3 
console.log(result[2]);  // 30