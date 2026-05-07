/*
Problem 6 — Remove Spaces
*/
const str = "hello world js";

let result = "";

// 1st way : loop
for(let i=0; i<str.length; i++) {
    if(str[i] !== " ") {
        result += str[i];
    }
}

// 2nd way : replaceAll()
result = str.replaceAll(" ", "");

// 3rd  way : split().join()
result = str.split(" ").join("");


console.log(`String after removing the spaces : ${result}`);