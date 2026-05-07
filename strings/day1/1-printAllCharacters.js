/*
Problem 1 — Print All Characters

Input: "hello"

Output:

h
e
l
l
o
*/

const str = "Hello";

for(let i=0; i<str.length; i++) {
    console.log(str[i])
}

for(let index in str) {
    console.log(str.at(index))
}