const arr = [1, 2, 3, 4];
/*
this will create an array object : 
{
    "0" : 1,
    "1" : 2,
    "2" : 3,
    "3" : 4,

    lentgh : 4
}
*/

delete arr[1];
/*
this will delete the property "1" in the array object, but the length remains the same, as delete does not affect the length property and returns "true" : 
{
    "0" : 1,
    "2" : 3,
    "3" : 4,

    lentgh : 4
}, so the array becomes = [1, <1  empty item>, 3, 4]
*/

let removedArr = arr.splice(1, 1, 100);  // this means go to index 2 remove 1 element and add the value 100 to it.
console.log(removedArr);
/*
thus the array object becomes : 
{
    "0" : 1,

    "2" : 100,
    "3" : 4,

    lentgh : 4
}, so the array becomes = [1, <1  empty item>, 100, 4]
*/

console.log(arr);  // [1, <1  empty item>, 100, 4]

console.log(arr.length); // 4

console.log(1 in arr); // false

console.log(2 in arr); // true 


/*
NOTE : splice() will removes the logical position starting at that index, whether that position currently contains a value or a hole.

Initially:


Index
0    1    2    3
-----------------
1    2    3    4

After delete arr[1];

Index
0    1      2    3
----------------------
1   HOLE    3    4

So, Seat 1 still exists as a logical position because length is still 4.
*/