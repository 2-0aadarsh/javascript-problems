function outer() {
    let x = 1;

    return function () {
        let y = 10;

        y++;

        return [x++, y];
    };
}

const fn = outer();  // when executed x is intialized with 1 in it's Lexical Environment and inner function object is returned and assigned to fn

console.log(fn());  // when executed the fn() FEC is created  and during creation phase y is created in LE and during execution phase it is initialized with 10 and then incremented to 11 and since x if not found in the LE of fn() it goes to outer() LE and finds x and then increments it to 2 and returns [2, 11] 
console.log(fn());
console.log(fn());