/*
Problem 1 - Remove Last N Elements

Input: [1,2,3,4,5], n = 2

Output: [1,2,3]
*/
const arr = [1,2,3,4,5];
let n = 2;

function removeLastNElements(arr, n) {
    if((!arr) || (arr.length<1)) {
        return arr;
    }

    let startIndex = -n;
    let removedElements = arr.splice(startIndex,n);
    return removedElements;
}

let removedElements = removeLastNElements(arr, n);
// console.log(arr);
// console.log(removedElements);    



/*
Problem 2 - Add Element At Beginning
Input: [2,3,4], value = 1

Output: [1,2,3,4]
*/

const arr2 = [2,3,4];
let value = 99;

function addAtFirst(arr, value) {
    arr.unshift(value);
    return arr;
}
function addAtFirst2(arr, value) {
    let removedElements = arr.splice(0,0,value);
    return removedElements;
}

// console.log(addAtFirst(arr2, value))

// console.log(addAtFirst2(arr2, value))
// console.log("arr2: ", arr2)




/*
Problem 3 - Remove First Element

Input: [10,20,30]

Output: [20,30]
*/
const arr3 = [10,20,30];

function removeFirstElement(arr) {
    arr.shift();
    return arr;
}
function removeFirstElement2(arr) {
    let removedElement = arr.splice(0,1)
    return removedElement;
}

// console.log(removeFirstElement(arr3));
// console.log(removeFirstElement2(arr3));
// console.log("arr 3 : ", arr3);









/*
Problem 4 - Insert At Specific Index

Input: [1,2,4,5]
value = 3
index = 2

*/

const arr4 = [1,2,3,4,5];
let value4 = 300
let index = 20


function addElementAtSpecificPosition(arr, index, value) {
    if((!arr) || (arr.length<1)) return arr;
    if(index<0 || index>arr.length) return -1;

    let removedElements = arr.splice(index, 0, value);
    return {arr, removedElements}

}
// console.log(addElementAtSpecificPosition(arr4, index, value4));



/*
Problem 5 - Replace Elements
Input: [1,2,3,4]

Replace: 2 and 3

with: 8 and 9
Output: [1,8,9,4]
*/

function replaceElement(arr,removeValues, addValues) {
    if((!arr) || (arr.length<1)) return arr;
    if((!removeValues) || (removeValues.length<1)) {
        removeValues = [0];
    };
    if((!addValues) || (addValues.length<1)) {
        addValues = [0];
    }   
}



