const arr = [2,3,1,3,4,5,1,2,3,4,5,6,7,8,2,3,4,5,6,7,8];

function largest (arr) {
    if(arr.length === 0) return -1;

    let largestNum = -Infinity;
    for(let i=0; i<arr.length; i++){
        if(arr[i] > largestNum) {
            largestNum = arr[i];
        }
    }
    return largestNum;
}

function secondLargest (arr) {
    if(arr.length < 2) return -1;

    let largestNum = largest(arr);
    let secondLargestNum = -Infinity;

    for(let i=0; i<arr.length; i++) {
        if(arr[i]<largestNum && arr[i]>secondLargestNum) {
            secondLargestNum = arr[i];
        }
    }
    return secondLargestNum;
}

console.log(secondLargest(arr));