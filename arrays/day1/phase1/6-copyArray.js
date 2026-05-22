const arr = [5,4,3,2,1];

const copyArr = (arr) => {
    if(!arr || arr.length === 0) return null;
    let newArr = [];
    if(arr.length === 1) return newArr[arr[0]];
    
    for(let val of arr) {
        newArr.push(val);
    }
    return newArr;
}

const newArr = copyArr(arr);
console.log(newArr);