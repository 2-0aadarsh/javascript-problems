/*
7. Find First Even Number

Requirements:
. manual traversal approach
. built-in find() approach
· handle edge cases
. explain time complexity
. explain space complexity
*/ 
const arr = [1,4,2,3,1,3,4,5,1,2,3,4,5,6,7,8,2,3,4,5,6,7,8];
const arr2 = []
function firstEven(arr) {

    if(!arr || arr.length<1) return -1;

    for(let val of arr) {
        if(!(val & 1)) {
            return val;
        }
    }
    return -1;
}

// console.log(firstEven())
// console.log(firstEven([]))
// console.log(firstEven(arr))


console.log(arr.find((val) => (!(val&1))))