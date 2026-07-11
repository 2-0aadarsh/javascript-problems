function once(fn) {
    let hasExecuted = false;
    let result;

    return function() {
        // if(hasExecuted) {
        //     console.log(result);
        //     return result;
        // }
        // hasExecuted = true;
        // result = fn();

        hasExecuted ? (console.log(result), result)  : (hasExecuted =  true, result = fn());
    }
}

function sayHi() {

    return function() {
        console.log("Hi");
        return 100;
    }
}

const sayHiOnce = once(sayHi());
sayHiOnce();
sayHiOnce();
sayHiOnce();