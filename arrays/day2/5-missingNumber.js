/*
5. Find Missing Number

Problem Meaning
Usually:

You're given numbers from:

1 to n
But one number is missing.

Example: [1,2,3,5]
Output: 4
*/

const arr = [1,2,3,5];
function missingNumber (arr, n) {
    if(!arr || arr.length === 0) return -1;
    if(!n || n===0) return -1;

    let sum=0;
    for(let val of arr) {
        sum += val;
    }

    let actualSum = (n*(n+1))/2;
    return actualSum-sum;
}

console.log(missingNumber(arr, 5))

function missingNumner2(arr, n) {
    if(!arr || arr.length === 0) return -1;
    if(n === 0) return -1;

    let xorAll = 0;
    let xorArr = 0;

    for(let val of arr) {
        xorArr ^= val;
    }

    for(let index=0; index<n; index++) {
        xorAll ^= parseInt(index+1);
    }

    return xorAll^xorArr;
}

console.log(missingNumner2(arr, 5));