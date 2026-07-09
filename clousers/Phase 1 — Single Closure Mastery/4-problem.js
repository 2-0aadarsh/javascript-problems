function outer() {
    let x = 10;

    return function () {
        let y = 100;

        x++;
        y++;

        return function () {
            console.log(x, y);
        };
    };
}

const fn = outer();

const inner1 = fn();   // when executed x becomes 11 and y becomes 101 and grandchild fun is retured and assigned to inner1

inner1();  // when executed the inner1 FEC is created  and during execution phase it has to print x and y but x is not found in the inner1's LE so it goes to middle function's LE first to find x, still not found then it follow the outer reference to the grand parent function's i.e outer() LE and finds x and prints 11 and y is found in the child function's LE and prints 101

inner1(); // when executed the inner1 FEC is created again and during execution phase it has to print x and y but x is not found in the inner1's LE so it goes to middle function's LE first to find x, still not found then it follow the outer reference to the grand parent function's i.e outer() LE and finds x and prints 11 and y is found in the child function's LE and prints 101
