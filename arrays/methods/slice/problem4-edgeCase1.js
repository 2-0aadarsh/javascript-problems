// /////*******Edge Case 1: when start index is greater than end index ********///////

// const arr = [10,20,30,40,50];

// const result = arr.slice(4,1);

// console.log(result);


// /////*******Edge Case 2: when start index is equal to end index ********///////
// const arr2 = [10,20,30,40,50];
// const result2 = arr2.slice(200,200);
// console.log(result2);

const numbers = [10, 20, 30];

// function demo(...args) {
//     console.log(args === numbers);
// }
function demo(a, b, c) {
    console.log("a:", a);
    console.log("b:", b);
    console.log("c:", c);
}

// console.log(1, ...numbers, 2, 3, 4, ...[200, 400, 600]); 
const arr = Array(3); 
const res = arr.slice();

// console.log(res[0]);

const arr2 = [undefined, undefined, undefined];
console.log([...arr]); // [undefined, undefined, undefined]
console.log(res); // [ <3 empty items> ]


console.log("0" in arr)
console.log("10" in [...arr])   // basically it checks whether the index is present in the array or not. If it is present then it returns true otherwise false. In this case, 10 is not present in the array so it returns false.
