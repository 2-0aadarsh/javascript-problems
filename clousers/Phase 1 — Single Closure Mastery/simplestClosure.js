function outer() {
    let x = 10;

    return function () {
        console.log(x);
    };
}

const fn = outer();

fn();


/**
Part A — Predict the output
ans : 10

Part B — Engine Reasoning
so, when GEC is created it's creation phase begins and inside the Lexical Environment (LE) of the GEC where function outer and fn are just stored in the GEC's LE under Environment Record. Now during the Execution phase the value of the function is being initialized and cause it is decalred using keyword let thus until execution reaches line 9, the fn is initialized with unassigned and keep it under TDZ(Temporal Dead Zone). Now when line 9 hits the Execution phase, the outer is invoked and it's FEC is created in the call stack and during it's creation phase as well in the LE under env record function and x is stored and during execution phase x get initialized with value 10 and it's outer variable is refering to the LE it is created and thus it is refercing to the function outer's LE address. 

Now the outer() execution ended and the inner returned function object's address is retured to the fn at line 9 and at line 11 when we try to invoke the function, the fn's FEC and LE is created with it's outer is still referning to the outer's LE as it is not removed by garbage collector even it's EC is poped out of the call stack. Thus, on console.log(x) prints 10

**/