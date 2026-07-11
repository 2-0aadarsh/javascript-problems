/*
Problem Statement -> You are given:

A positive integer n
A function fn

Your task is to return another function.

The returned function behaves as follows:

It should execute fn() only for the first n calls.
After that, it should never execute fn() again.
*/

function before(n, fun, msg) {
    let count = 1;
    return function(...args) {
        if(count<=n) {
            count++;
            return fun(...args);
        } else {
            return msg;
        }
    }
}

function greet() {

    return function(name){
        console.log(`Hello ${name}`);
        return "Done";
    }
}

const greetBefore = before(3, greet(), "Invalid call");
console.log(greetBefore("Alice"));
console.log(greetBefore("Alice"));
console.log(greetBefore("Alice"));
console.log(greetBefore("Alice"));