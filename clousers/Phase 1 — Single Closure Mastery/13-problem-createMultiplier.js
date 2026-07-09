function required(parameterName) {
    throw new Error(`${parameterName} is requrired`)
}


function createMultiplier(factor = required("factor")) {

    return function(value) {
        return factor*value;
    }
}

const double = createMultiplier(2);

console.log(double(10));
console.log(double(20));
console.log(double(50));