let x = 5;

const arr = [
    x++,    // this is like, return x and then x+1; -> return 5 and x  gets 6
    ++x,    // this is like, x+1; and then return x -> x gets 7 and return 7 
    x      // thus, x is finally 7
];

console.log(arr);
console.log(x);