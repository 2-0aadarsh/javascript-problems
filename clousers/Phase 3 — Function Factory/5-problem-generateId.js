function createIdGenerator() {
    let id  = 0;

    return function() {
        return id++;
    }
}

const generateId = createIdGenerator();

console.log(generateId()); // 0
console.log(generateId()); // 1
console.log(generateId()); // 2
console.log(generateId()); // 3

// let arr = [10,20,30,40,50];
// // for(let i = 0; i < arr.length; i++) {
// //     console.log(arr[i]);
// // }
// console.log(arr);
// delete arr[2];
// // for(let i = 0; i < arr.length; i++) {
// //     console.log(arr[i]);
// // }
// console.log(arr)