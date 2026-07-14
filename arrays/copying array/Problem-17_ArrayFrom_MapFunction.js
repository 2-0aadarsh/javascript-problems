const arr = [1, 2, 3];

const result = Array.from(arr, x => x * 10);
/*
This will create another array object literal inside the memory(Reference#A) and then Array.from() uses the array's iterator to obtain one element at a time and inserts each element into the newly created array. Now in order to find those values the Array.from() try to find it like arr[0], arr[1] till it  reaches length-1 as it does not check if property "0" exists or not. 

So, arr[0] will return 1 and before iterating to next property, the mapFunction has some calculations to do thus, it will take the current value in the arr and then multiply it with 10. Thus at arr[0] the value becomes 1 then 1 * 10 => 10 and similarly with arr[1] will return 2 and then store 20 and arr[3] will return 3 and then store 30

thus result = { 0: 10, 1: 20, 2: 30, length: 3 }
*/

console.log(result);    // [10, 20, 30]
console.log(arr);      //  [1, 2, 3]


/*
CONCLUSION : For every value obtained from the source:

                1. Obtain value   [here arr[0] = 1]
                2. Pass that value to mapFn  
                3. Whatever mapFn returns is inserted into the new array [here arr[0] * 10 = 1 * 10 = 10]
                4. Move to the next value [move to arr[1] = 2]
*/