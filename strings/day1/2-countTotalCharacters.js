/*
Problem 2 — Count Total Characters

Input: "javascript"
Output: 10

*/
const str = "javascript";
// const count = str.length;   // since .length is not allowed thus :

let count = 0;
for(let index in str) {
    count ++;
} 
console.log(count);