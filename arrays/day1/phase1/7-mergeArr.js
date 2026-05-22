const arr1 = [5,4,3,2,1];
const arr2 = [50,40,30,20,10];

const mergeArrays = (arr1, arr2) => {
    if(!arr1 && !arr2) return null;
    if(!arr1 || arr1.length === 0) return arr2;
    if(!arr2 || arr2.length === 0) return arr1;

    let mergeArr = [];

    for(let val of arr1) {
        mergeArr.push(val);
    }
    for(let val of arr2) {
        mergeArr.push(val);
    }

    return mergeArr;    
}

const mergeArr = mergeArrays(arr1, arr2);
console.log(mergeArr)