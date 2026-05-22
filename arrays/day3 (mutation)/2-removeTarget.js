/*
2. Remove Specific Element

Example:
Input: [1,2,3,2,4], target = 2

Output: [1,3,4]
*/

// const arr = [1,2,3,2,4];
const arr = [2,2,2,2,4];
const target = 2;
function removeTarget1(arr, target) {
    if((!arr) || arr.length<1) return -1;
    if(!target) return -1;
    
    // removing element from the original array in moving forward direction will cause index shift and we might miss some elements. 
    // for(let index in arr) {
    //     if(arr[index] === target){
    //         arr.splice(index,1)  
    //     }
    // }

    // removing element from the original array in moving backward direction will not cause index shift and we will not miss any elements.
    for(let i = arr.length-1; i>=0; i--) {
        if(arr[i] === target) {
            arr.splice(i,1);
        }
    }
}

console.log(arr);
removeTarget1(arr, target);
console.log(arr);


function removeTarget2(arr, target){
    if((!arr) || arr.length<1) return -1;
    if(!target) return -1;

    let ans = [];
    for(let val of arr) {
        if(val !== target) {
            ans.push(val);
        }
    }
    return ans;
}

// console.log(arr);
// let ans = removeTarget2(arr, target);
// console.log(ans);



function removeTarget3(arr, target){
    if((!arr) || arr.length<1) return -1;
    if(!target) return -1;

    let ans = arr.filter((val) => (val !== target))
    return ans;
}


// console.log(arr);
// let ans = removeTarget3(arr, target);
// console.log(ans);
