function outer() {
    let x = 10;

    return function () {
        x++;
        return x;
    };
}

const fn = outer();

console.log(fn());
console.log(fn());
console.log(fn());

/*
task : Don't just tell me the output. Tell me why x doesn't become 10 again on the second and third calls.

ans : when outer is called and FEC is created for outer() and during the creation phase of outer's FEC, x is stored in the LE of outer's FEC and initialized with value 10. Now when the inner function object is returned and assigned to fn, it still has a reference to the LE of outer's FEC where x is stored.

Now when fn() is called for the first time, FEC is created for fn() in the call stack and during the execution phase, x is incremented by 1, so x becomes 11 and returned. Now when fn() is called for the second time, a new FEC is created for fn() in the call stack, but the inner function still has a reference to the same LE of outer's FEC where x is stored. Therefore, x is now 11, and when it is incremented again, it becomes 12 and returned. The same happens on the third call, where x becomes 13.

So, the output will be:
11  
12  
13 

*/  