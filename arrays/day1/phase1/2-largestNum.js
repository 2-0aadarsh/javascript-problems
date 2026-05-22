const arr = [2,4,3,1,5,8,6];

const largestNum = (arr) => {
    if(!arr || arr.length === 0) return -1;

    let largest = -Infinity;
    
    for(let val of arr) {
        if(val>largest) {
            largest = val;
        }
    }
    return largest;
}

const largest = largestNum(arr);
console.log(largest);