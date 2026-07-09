function required(parameterName) {
    throw new Error(`${parameterName} is requrired`)
}

function createCounter(count = required("count")) {

    return function(){
        return ++count;
    }
}

const counter = createCounter(5);
console.log(counter()); // 6   
console.log(counter()); // 7
console.log(counter()); // 8   
