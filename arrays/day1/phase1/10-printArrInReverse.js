const arr = [5,4,3,2,1,2];

const printArrInReverse = (arr) => {
    if(!arr || arr.length === 0) return null;

    let index = arr.length-1;
    while(index>=0) {
        console.log(arr[index]);
        index--;
    }
}
// printArrInReverse(arr);
console.log(Array.isArray([]));
console.log(Array.from([[8,9],1,2,3]));