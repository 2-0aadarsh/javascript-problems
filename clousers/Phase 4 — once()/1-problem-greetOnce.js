// function execute(fn){
//     console.log("Executing the function");
//     fn();
// }

// function greet(name){
//     console.log(`Hello ${name}`);
// }

// execute(greet("Aadarsh"));

// function execute() {
//     let hasExecuted = false;
//     let result;

//     return function(name) {
//         if (hasExecuted) {
//             console.log(result);
//             return;
//         } 
//         console.log(`Hello ${name}`);
//         result = "Done";
//         hasExecuted = true;
//     }
// }

// const greetOnce = execute();
// greetOnce("Aadarsh");
// greetOnce("Rahuliya");




function once(fn) {
    let hasExecuted = false;
    let result;

    return function(){
        if (hasExecuted) {
            console.log(result);
            return;
        }
        result = fn();
        hasExecuted = true;
    }
}

function connectDatabase() {
    console.log("Connecting to database...");
    return "Already connected to database";
}

function fetchData() {
    console.log("Fetching data from database...");
    return "Data fetched";
}

const connectOnce = once(connectDatabase);   // this creates a new FEC for once function and stores the state of hasExecuted and result in closure 
connectOnce(); // Connects to database
connectOnce(); // Logs "Already connected to database"

const fetchOnce = once(fetchData);  // this creates a new FEC for once function and stores the state of hasExecuted and result in closure
fetchOnce();
fetchOnce();
fetchOnce();


function greet(name) {

    return function(){
        console.log(`Hello ${name}`);
        return "Done";
    }
}

const greetOnce = once(greet("Aadarsh"));
greetOnce();







// function once(fun) {
//     let hasExecuted = false;
//     let result;

//     if(hasExecuted) {
//         return result;
//     }  else {
//         result = fun();
//         hasExecuted = true;
//         return result;
//     }
// }

// function greet(name){

//     return function() {
//         console.log(`Hello ${name}`)
//         return "Done";
//     }
// }

// const greetOnce = once(greet);
// console.log(greetOnce("Aadarsh"));