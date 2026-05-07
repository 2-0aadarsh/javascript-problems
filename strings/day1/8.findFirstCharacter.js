/*
Problem 8 — Find First,last and the middle Character
*/

// const str = "javascript";
const str = "aadarsh";

console.log(`First character is : ${str[0]}`)
console.log(`Last character is : ${str.charAt(str.length-1)}`)

let start = 0;
let end = str.length-1;
let middlePointer = Math.floor(start + (end-start)/2)
console.log(`Middle character is : ${str.charAt(middlePointer)}`)