function createCounter() {
    let count = 0;

    function increment() {
        return ++count;
    }

    function decrement() {
        return --count;
    }

    function getValue() {
        return count;
    }

    return {
        increment, decrement, getValue
    }
}

const counter = createCounter();

console.log(typeof counter);     // object
console.log(typeof counter.increment); // function

console.log(counter.getValue()); // 0

console.log(counter.increment()); // 1
console.log(counter.increment()); // 2

console.log(counter.decrement()); // 1

console.log(counter.getValue()); // 1