/****
Problem Statement : 

You are given:

A number n
A function fn

Your task is to return another function.

That returned function can be called any number of times.

However,

For the first (n − 1) calls, it should do nothing.
Starting from the nth call, it should execute fn() every single time.

****/






function after(n, fun, msg) {
    let count = 1;
    return function() {
        if(count>=n) {
            return fun();
        } else {
            count++;
            // console.log(msg);
            return msg;
        }
    }
}

function greet(name) {

    return function() {
        console.log(`Hello, ${name}!`);
        return "Greeting completed.";
    }
}

const greetAfter = after(3, greet("Alice"), "Too early");
console.log(greetAfter());
console.log(greetAfter());
console.log(greetAfter());
console.log(greetAfter());













