/*
Input: [1,2,2,3,4,4,5]

Output: [1,2,3,4,5]
*/ 
const arr = [1,2,2,3,4,4,5];

// Approach 1 — Manual
function removeDuplicates(arr) {
    if((!arr) || (arr.length < 1)) return [];

    let ans = [];
    for(let val of arr) {
        !(ans.includes(val)) && ans.push(val)
    }

    return ans;
}

let ans = removeDuplicates(arr)
// console.log(ans)

// console.log([1,2,2,3,4,4,5].find((val) => val === 2))
// console.log([1,2,2,3,4,4,5].findIndex())






// Approach 2 — HashMap 
function removeDuplicatesUsingHashMap(arr) {
    if((!arr) || (arr.length<1)) return [];

    let hashMap = {};
    let ans = [];
    for(let val of arr) {
        if(!hashMap[val]) {
            hashMap[val] = 1;
            ans.push(val)
        }
    }
    // console.log(ans)
    console.log(hashMap)
    return ans;
}

console.log(removeDuplicatesUsingHashMap(arr));