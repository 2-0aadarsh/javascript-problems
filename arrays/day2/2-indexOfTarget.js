const arr = [2,3,1,3,4,5,1,2];

function targetElement(arr, target) {
    if(arr.length === 0) return -1;

    for(let i=0; i<arr.length; i++) {
        if(arr[i] === target) {
            return i;
        }
    }
    return -1;
}

console.log(targetElement(arr, 3)) // 1
console.log(targetElement(arr, 1)) // 2
console.log(targetElement(arr, 4)) // 4
console.log(targetElement(arr, 5)) // 5
console.log(targetElement(arr, 6)) // -1