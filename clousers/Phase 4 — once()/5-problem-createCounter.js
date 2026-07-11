function once(fun) {
    let hasExecuted = false;
    let result;

    return function(...args) {
        hasExecuted ? (console.log(result), result) : (hasExecuted = true, result = fun(...args));
    }
}


function createCounter() {
    let count = 0;

    return once(function() {
        count++;
        console.log(count);
        return count;
    })
}

const counter = createCounter();
counter();
counter();
counter();