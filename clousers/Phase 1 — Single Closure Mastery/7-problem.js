function outer() {
    let x = 100;

    return function () {
        x += 5;
        return x;
    };
}

const fn = outer();

console.log(fn());
console.log(fn());
console.log(fn());

// Predict only the output.  
/**
 105
 110
 115
**/