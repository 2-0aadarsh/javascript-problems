const arr = [5,4,3,2,1,2];

const findAvg = (arr) => {
    if(!arr || arr.length === 0) {
        return -1;
    } 

    let sum = 0;
    for(let val of arr) {
        sum += val;
    }

    if(sum === 0) return 0;
    let avg = sum/(arr.length);

    return avg;
}

const avg = findAvg(arr);
console.log("avg : ", avg);