const arr = [2,3,1,3,4,5,1,2,3,4,5,6,7,8,2,3,4,5,6,7,8];

function targetElement(arr, target) {
    if(arr.length === 0) return -1;

    for(let i=0; i<arr.length; i++) {
        if(arr[i] === target) {
            return i;
        }
    }
    return -1;
} 

function targetElement2(arr, target) {
    if(arr.length === 0) return -1;
    let ans = [];

    for(let i=0; i<arr.length; i++) {
        if(arr[i] === target) {
            ans.push(i);
        }
    }
    return ans;
}

console.log(arr.includes(3))
console.log(arr.indexOf(300))
console.log(arr.findIndex((val) => val === 30))

// console.log(targetElement(arr, 3)) // 1
// console.log(targetElement(arr, 1)) // 2
// console.log(targetElement(arr, 4)) // 4
// console.log(targetElement(arr, 5)) // 5
// console.log(targetElement(arr, 6)) // -1


// console.log(targetElement2(arr, 3)) // [1, 3, 8, 15]
// console.log(targetElement2(arr, 1)) // [2, 6]
// console.log(targetElement2(arr, 4)) // [4, 9, 16]
// console.log(targetElement2(arr, 5)) // [5, 10, 17]
// console.log(targetElement2(arr, 6)) // [11, 18]