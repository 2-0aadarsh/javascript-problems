const arr = [1,2,3,4,5];

const sum = (arr) => {
    let sumVal = 0;
    if(!arr || arr.length === 0) return sumVal;
    
    for(let val of arr) {
        sumVal += val;
    }
    return sumVal;
}

const sumVal = sum(arr);
console.log(sumVal);