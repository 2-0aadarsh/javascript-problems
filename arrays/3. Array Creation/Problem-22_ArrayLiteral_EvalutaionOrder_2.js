let x = 1;

const arr = [
    x,   //this will evaluate the expression x and the expression evaluates to is 1 
    x = x + 5,  // this will evaluate the expression x+5 => 1+5 = 6 and thus x get's 6 and 6 is returned here
    x * 2,  // this will evaluated  x*2 => 6*2 = 12 => 12 is evaluated only and then returned i.e. (conceptually like arr[2] = x*2, Runtime evaluates x * 2 get's 12 and Stores 12 at property "2")
    x   // this will evaluate the expression x and the expression evaluates to is 6 as the pervious value doesn't change the value of x
];

console.log(arr);  // [1, 6, 12, 6]
console.log(x);    // 6