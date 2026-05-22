const arr = [2,4,3,1,5,8,6];

const smallestNum = (arr) => {
    if(!arr || arr.length === 0) return -1;

    let smallest = Infinity;
    
    for(let val of arr) {
        if(val<smallest) {
            smallest = val;
        }
    }
    return smallest;
}

const smallest = smallestNum(arr);
console.log(smallest);