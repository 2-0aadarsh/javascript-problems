/*
6. Check Duplicates

Problem Meaning
Determine: Does any element appear more than once?

Example: [1,2,3,4]
Output: false

Example: [1,2,3,1]  
Output: true
*/

const arr = [5,2,3,1,2];

function selectionSort(arr) {
    if(arr.length<1) return arr;
    for(let i=0; i<arr.length-1; i++) {
        
        // find minimum value in the remaining array
        let minValIndex = i;
        for(let j=i; j<arr.length; j++){
            if(arr[j]<arr[minValIndex]) {
                minValIndex = j;
            }
        }

        // now swap it with the current element
        let temp = arr[i];
        arr[i] = arr[minValIndex]; 
        arr[minValIndex] = temp;
    }
}

function checkDuplicates(arr) {
    if(arr.length<1) return false;
    selectionSort(arr);

    for(let i=0; i<arr.length-1; i++) {
        if(arr[i] === arr[i+1]) {
            return true;
        }   
    }
    return false;
}

// 2nd appraoch using hash map
function checkDuplicates2(arr) {
    if(arr.length<1) return false;
    let hashMap = {};

    for(let val of arr) {
        if(!hashMap[val]) {
            hashMap[val] = 1;
        } else {
            hashMap[val] += 1;
        }
    }

    // print the hash map
    console.log(hashMap);

    // now we will iterate over the array, not the hash map and check if the current value has count more than 1 in the hash map
    
    for(let val of arr) {
        if(hashMap[val] > 1) {
            return true;
        }
    }
    return false;
}




// const set = new Set([1,2,3]);
// console.log(set)
// console.log(arr.find((val) => val%2 === 0))


// console.log(checkDuplicates(arr))
// console.log(checkDuplicates2(arr))