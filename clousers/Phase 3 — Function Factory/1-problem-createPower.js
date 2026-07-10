function createPower(exponent = 0) {

    return function(base) {
        return base ** exponent;
    }
}

const square = createPower(2);

console.log(square(5));
console.log(square(8));

const cube = createPower(3);

console.log(cube(2)); // 8
console.log(cube(5)); // 125