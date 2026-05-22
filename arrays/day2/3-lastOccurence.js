const arr = [2,3,1,3,4,5,1,2,3,4,5,6,7,8,2,3,4,5,6,7,8];

function lastOccurence(arr, target) {
    if(arr.length === 0) return -1;
    let lastIndex = -1;

    for(let i=0; i<arr.length; i++) {
        if(arr[i] === target) {
            lastIndex = i;
        }
    }
    return lastIndex;
}

console.log(lastOccurence(arr, 3)) // 15
console.log(lastOccurence(arr, 1)) // 6
console.log(lastOccurence(arr, 4)) // 16
console.log(lastOccurence(arr, 5)) // 17
console.log(lastOccurence(arr, 6)) // 18

console.log(arr.lastIndexOf(1));