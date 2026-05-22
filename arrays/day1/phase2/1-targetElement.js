const arr = [1, 2, 3, 4, 5];
const target = 3;

function findTargetElement(arr, target) {
    if(!arr || (arr.length === 0)) return -1;
    if(!target) return -1;

    for(let index in arr) {
        if(arr[index] === target) {
            return index;
        }
    }
    return -1;
}

const targetElementPos = findTargetElement(arr, target);
console.log(targetElementPos);