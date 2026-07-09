function required(parameterName) {
    throw new Error(`${parameterName} is required`)
}

function createAdder(sum = required("sum")){

    return function(value) {
        return sum+value;
    }
}

const add5 = createAdder(5);

console.log(add5(10));
console.log(add5(100));
console.log(add5(7));