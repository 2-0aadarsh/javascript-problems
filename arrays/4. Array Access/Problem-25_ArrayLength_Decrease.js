// const arr = [10, 20, 30, 40, 50];
/*
Reference #C
    ↓
{
    "0" : 10,
    "1" : 20,
    "2" : 30,
    "3" : 40,
    "4" : 50,

    length : 5
}
*/










// const arr = [];
// arr.length  = 20;
// const x = arr.pop();
// console.log(arr);
// console.log(x);
// console.log(Object.keys(arr));




































// arr.length = 2;

// console.log(arr);

// console.log(arr[3]);

// console.log(3 in arr);


// let arr = [10,20,30];
// function test() {
//     console.log("Lauda");
//     return  10;
// }

// let arr = Array(3);
// let val = arr.unshift(5);
// val = arr.unshift(10);
// let val = arr.pop();
// let val = arr.unshift(1, test() ,2);
// console.log(arr);
// console.log(val);
// let val = arr.push(10);   // so the push appends one or more elements to the end of an array and returns the new length of the array.
// val = arr.push(20);
// val = arr.push(30);
// console.log(val);


// val = arr.pop(); // so the pop removes the last element of the array and return the removed element of the array
// console.log(val);






// const arr = [10, 20, 30];

// const x = delete arr[1];  // it will simply check if the property exists  then delete that property
// console.log(x);    // why does it prints true?? and even I do delete arr[12] it still returns true

// console.log(arr);     // [10, <1 empty item>, 30]

// console.log(arr.length); // 3 as  delete does not have any effect on length

// console.log(arr[1]);   // undefined  as property "1" does not exists in the array object

// console.log(1 in arr);  // false

// console.log(Object.keys(arr)); // [0, 2]



// const obj = {};

// Object.defineProperty(obj, "x", {
//     value: 100,
//     configurable: false
// });

// console.log(delete obj.x);

const arr = [10, 20, 30, 40, 50];
console.log(arr.splice(2, 2, 100,200,300,400));
console.log(arr)