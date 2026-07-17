const arr = Array(2);
/*
this will make the array object like : 
{  
    length : 2
}, with no property
*/

arr[0] = 10;        // now here we are not adding any more property but updating the "0"th property by 10 as currently it contains a hole  at that place.

/*
this will make the array object like : 
{
    "0" : 10,     
    length : 2
}
*/

let ans = arr.unshift(5);    

console.log("ans", ans);
/*
Now unshift tries to move the values to the  right of the property and add the new value upfront. Thus, it will update the array object like :

{
    "0" : 10,
    length : 2
}
    to
{
    "0" : 10,
    "1" : 10,    -> add a new property 
    length : 3
}
    then 
{
    "0" : 5,    -> add the value upfront
    "1" : 10,
    length : 3
}
*/


console.log(arr);   // [5, 10, <1 empty item>]

console.log(1 in arr);  // true

console.log(2 in arr);  // false

console.log(arr.length);  // 3


/*
CONCLUSION : Array(2) creates an array object whose length is 2 but with no indexed properties. Assigning arr[0] = 10 creates property "0" with value 10; property "1" still doesn't exist.

The engine asks one question whenever you do: arr[index] = value;

Is index >= current length ? if yes, then Update length to index + 1 else Keep length unchanged

eg. const arr = Array(5);
    arr[4] = 100;
    console.log(arr.length);

ans. : In this case, length : 5 at first and then assigning value at index/property (4) => 4>= 5, no then keep the length as it is in the object array    

*/