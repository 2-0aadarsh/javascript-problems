const arr = [10,20,30,40,50];

const result = arr.slice(1,4);

result.push(100);

// console.log(arr);
// console.log(result);


function sliceArray(arr,  start, end){
    let ans = [];
    let finalEnd = Math.min(end,  arr.length);
    console.log(finalEnd);
    isNaN(finalEnd)? finalEnd = arr.length : console.log(finalEnd);

    for(let i=start; i<finalEnd; i++) {
        ans.push(arr[i]);
    }
    return ans;
}

let ans = sliceArray(arr,2);
console.log(ans);