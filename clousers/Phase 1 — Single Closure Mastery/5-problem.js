function outer() {
    let x = 5;

    return function () {
        return x++;
    };
}

const fn = outer();

console.log(fn());
console.log(fn());
console.log(fn());

// Predict only the output.  
/**
 6
 7
 8
**/