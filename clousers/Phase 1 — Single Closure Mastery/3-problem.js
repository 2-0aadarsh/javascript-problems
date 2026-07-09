function outer() {
    let x = 10;

    return function () {
        let y = 100;

        x++;
        y++;

        console.log(x, y);
    };
}

const fn = outer();

fn();
fn();
fn();

/*
your task : Don't just tell me the output. Tell me why y doesn't become 100 again on the second and third calls.

ans : when the outer function is invoken, a new FEC is created for the outer function and during the creation phase of the outer function, x is stored in the LE of outer function's FEC and initialized with 10 during execution phase and the inner function object is returned and assigned to fn. Now the inner function when invoked during the execution phase of the GEC, a new FEC is created for the inner function and during the creation phase of the inner function, y is stored in the LE and then initialized with 100 during the execution phase. Now when the inner function is invoked for the first time, x is incremented to 11 as it still has a reference to the same LE of the outer function in the outer refernce, thus when x is not found inside the environment record of inner function during variable lookup, it goes to outer function LE as the outer object still has reference to it and found x and then increment it  and then y is incremented to 101 and printed.

Now when the inner function is invoked for the second time, a new FEC is created for the inner function and during the creation phase of the inner function, y is stored in the LE and then initialized with 100 during the execution phase. Now when the inner function is invoked for the second time, x is incremented to 12 as it still has a reference to the same LE of the outer function in the outer refernce, thus when x is not found inside the environment record of inner function during variable lookup, it goes to outer function LE as the outer object still has reference to it and found x and then increment it  and then y is incremented to 101 and printed.

Now when the inner function is invoked for the third time, a new FEC is created for the inner function and during the creation phase of the inner function, y is stored in the LE and then initialized with 100 during the execution phase. Now when the inner function is invoked for the third time, x is incremented to 13 as it still has a reference to the same LE of the outer function in the outer refernce, thus when x is not found inside the environment record of inner function during variable lookup, it goes to outer function LE as the outer object still has reference to it and found x and then increment it  and then y is incremented to 101 and printed.

*/