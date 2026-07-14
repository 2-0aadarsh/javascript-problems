const arr = [1, 2, 3];

const copy = arr.slice();   // This creates a new array object, copies all the elements from the original array into it, and returns the reference to that new array inside the variable "copy".

copy.push(4);   // now the copy becomes [1,2,3,4] but the original array remains unchanged.

console.log(arr);  // this will print [1,2,3] because the original array is unchanged.
console.log(copy); // this will print [1,2,3,4] because the copy has been modified.


/*
assuming arr is holding the reference of the  array object [1,2,3] i.e. Reference#A and copy is holding the reference of the newly created array object [1,2,3] i.e. Reference#B.

When we push 4 to the copy array, it modifies the array object referenced by Reference#B but does not affect the array object referenced by Reference#A. Hence, the original array remains unchanged.
*/