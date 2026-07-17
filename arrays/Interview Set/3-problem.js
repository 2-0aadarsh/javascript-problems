const arr = [10, 20, 30];

delete arr[1];

arr.push(40);

console.log(arr);   // [10, <1 empty item>, 30, 40]
console.log(arr.length);  // 4 
console.log(1 in arr);  // false


/*
delete arr[1] will go to the arr object and delete the property "1". Thus, this will create a hole in the array but the length remains the same (3) and then on push a new element is added  to the property "length i.e. 3" with value 40 and then length is incremented to 4.

*/