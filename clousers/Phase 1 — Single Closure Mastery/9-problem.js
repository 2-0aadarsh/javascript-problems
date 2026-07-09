function outer() {
    let x = 1;

    return function () {
        let y = 10;

        x++;
        y++;

        return function () {
            console.log(x, y);
        };
    };
}

const fn = outer();  // execute outer() and x is initialized with 1 in it's Lexical Environment and inner function object is returned and assigned to fn

const a = fn();   // execute fn() and x is incremented to 2 and y is initialized with 10 in it's Lexical Environment and then incremented to 11 and grandchild function object is returned and assigned to a

a();    // execute a() and x is not found in the LE of a() so it goes to fn()'s LE x is not there as well, thus it goes to outer() LE and finds x and prints 2 and y is found in the LE of a() and prints 11
a();