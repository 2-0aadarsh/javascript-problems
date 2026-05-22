const arr = [2,4,3,1,5,8,6];

const countEven = (arr) => {
    if(!arr || arr.length === 0) return 0;
    let totalEven = 0;

    for(let val of arr) {
        // if(val%2 === 0) {
        if((val&1) === 0) {
            totalEven += 1;
        }
    }
    return totalEven;
}

const totalEven = countEven(arr);
console.log(totalEven);