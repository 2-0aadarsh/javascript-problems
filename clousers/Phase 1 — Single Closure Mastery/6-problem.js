function outer() {
    let x = 10;

    return function () {
        return ++x;
    };
}

const fn = outer();

console.log(fn());
console.log(fn());
console.log(fn());

// Predict only the output.  
/**
 11
 12
 13
**/