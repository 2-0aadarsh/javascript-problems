const arr = [5,4,3,2,1];

const reverseArr = (arr) => {
    if(!arr || arr.length === 0) return undefined;
    if(arr.length === 1) return arr;

    let s=0; let e=arr.length-1;
    while(s<e) {
        // now we gotta swap the values
        let temp = arr[s];
        arr[s] = arr[e];
        arr[e] = temp;

        s++; e--;
    }
}
console.log("before reversing the arrary : ", arr);
reverseArr(arr);
console.log("after reversing the arrary : ", arr);