function callLimit(fun, n){
    let limit = 1;

    return function(...args) {
        if(limit <= n) {
            limit++;
            return fun(...args)
        } else {
            return "Limit exhausted!"
        }
    }
}

function greet() {

    return function(name){
        console.log(`Hello ${name}`);
        return "Done";
    }
}

const greetBefore = callLimit(greet(), 3);
console.log(greetBefore("Alice"));
console.log(greetBefore("Alice"));
console.log(greetBefore("Alice"));
console.log(greetBefore("Alice"));