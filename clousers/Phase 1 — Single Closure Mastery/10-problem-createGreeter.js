function required(parameterName) {
    throw new Error(`${parameterName} is requrired`)
}

function createGreeter(name = required("name")) {
    return function() {
        console.log(`Hello ${name}`)
    }
}

const greet = createGreeter("Aadarsh");
greet();
greet();    