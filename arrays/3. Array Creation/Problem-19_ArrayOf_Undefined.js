const arr = Array.of(undefined);
/*
this will create a new array object and then insert the value "undefined" at position 0. 

Reference#A
    ↓
    {
        "0" : undefined,
        
        length : 1
    }
*/


console.log(arr);          // thus, it will print [undefined]
console.log(arr.length);   // the length is 1 only 
console.log(0 in arr);    // true as 0 as a property exists inside  the array object
console.log(arr[0]);     // prints "undefined" as value at property "0" is "undefined"