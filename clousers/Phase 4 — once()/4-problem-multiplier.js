function once(fun) {
    let  hasExecuted = false;
    let result;

    return function(...args) {
        hasExecuted ? (console.log(result), result) : (hasExecuted = true, result = fun(...args));
    }
}

function multiply() {

    return function(...args) {
        let result = 1;
        for(let i = 0; i < args.length; i++) {
            result  *= args[i];
        }
        
        console.log(result);
        return result;
    }
}

const multiplyOnce = once(multiply());
multiplyOnce(2, 3, 4, 5);
multiplyOnce(4, 5);