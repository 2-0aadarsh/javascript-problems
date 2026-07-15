/*
Problem Statement

Given an array of integers, return a new array containing only the first occurrence of each element while preserving the original order.

Example 1
    Input:
    [3, 1, 2, 3, 2, 5, 1]

    Output:
    [3, 1, 2, 5]

Example 2
    Input:
    []

    Output:
    []

Example 3
    Input:
    [7, 7, 7, 7]

    Output:
    [7]

Requirements
    1. Do not mutate the input array.
    2. Preserve the order of first appearance.
    3. Return a new array.
    4. Assume the array contains only integers.
    5. Do not use any third-party libraries.
*/

function solution(arr) {
    let ans = [];
    let obj =  {};
    for(let  i=0; i<arr.length; i++) {
        let key = arr[i];

        if(!(key in obj)) {
            ans.push(key);
            obj[key] = key;
        } 
        console.log(obj);
    }
    return ans;
}

let ans  = solution([0,0,0,1,2,2,3,3,3,4,4,4,4]);
console.log(ans); 




// const obj = {
//     a: 0,
//     b: false,
//     c: "",
//     d: null,
//     e: NaN,
//     f: undefined,
//     g: 100
// };

// console.log("value of ",obj["a"])
// console.log("value of ",!obj["a"])

// console.log("value of ",obj["b"])
// console.log("value of ",!obj["b"])

// console.log("value of ",obj["c"])
// console.log("value of ",!obj["c"])

// console.log("value of ",obj["d"])
// console.log("value of ",!obj["d"])

// console.log("value of ",obj["e"])
// console.log("value of ",!obj["e"])

// console.log("value of ",obj["f"])
// console.log("value of ",!obj["f"])

// console.log("value of ",obj["g"])
// console.log("value of ",!obj["g"])

// if(!obj["a"]) {
//     console.log("a does not exists")
// }
// if(!obj["b"]) {
//     console.log("b does not exists")
// }
// if(!obj["c"]) {
//     console.log("c does not exists")
// }
// if(!obj["d"]) {
//     console.log("d does not exists")
// }
// if(!obj["e"]) {
//     console.log("e does not exists")
// }
// if(!obj["f"]) {
//     console.log("f does not exists")
// }
// if(!obj["g"]) {
//     console.log("g does not exists")
// }



// const obj = {
//     x: 0,
//     y: undefined,
//     z: false
// };

// console.log(!obj.x);
// console.log(!obj.y);
// console.log(!obj.z);

// console.log("x" in obj);
// console.log("y" in obj);
// console.log("z" in obj);