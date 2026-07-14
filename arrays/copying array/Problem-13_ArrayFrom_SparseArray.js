const arr = Array(3);
/*
Reference #A
↓

{  
   length : 3
}
*/

const result = Array.from(arr);
/*This will first create a new array object literal in the memory whose reference is Reference#B and then it start iterating over the iterable (array i.e. arr(Reference#A)) till length-1 and try to obtain value at each index. Now since Reference#A have no property other than length and Array.from() tries to access the value at each index till length-1 instead of checking if the property "0" exists or not unlike .slice(), thus arr[0] will return undefined and thus Reference#B at property 0 stores undefined, similarly with property 1 and 3*/
/*
Reference #B
↓

{
   "0" : undefined,
   "1" : undefined,
   "2" : undefined,
   
   length : 3
}
*/


console.log(result.length);   // thus, this will return 3 as arr also used to contain length 3
console.log(result[0]);   // this will go to Reference#B in the memory and try to access the value at property "0" and it will return undefined

console.log(0 in result);   // it will check if there's any property "0" exists at Reference#B or not, since exists thus return true

console.log(0 in arr);    // it will check if there's any property "0" exists at Reference#A or not, since no such property exists thus return false

console.log(result)   // [undefined, undefined, undefined]