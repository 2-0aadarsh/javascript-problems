const arr = Array(3);

/*
this will create an array object in the memory assign it a reference, Reference#A and then store it to the arr.
Reference#A ->  {
                    length : 3
                }
*/

const result = arr.slice();
/*
Now, what will happen is for arr.slice(), engine will first goes to arr, then create an another empty array object whose length is 0 initially with reference Reference#B. 
Now, engine will try to copy the values from index 0 to length-1, basically Engine iterates over the source indices, but for each index it first checks whether the property exists. Only existing properties are defined on the new array. so first it will ask from Reference#A that is there any property "0" exists, not exists thus it will not create any property "0", similary with "1" and "2" but the length is 3, so it will get 3 as well. Thus, even in the new array  of reference Reference#B, the holes remains as it is and it does contains the emptiness.
*/


console.log(result.length);
/* This, will first goes to reference Reference#B in the mmemory and find the length property whose value is 3 and prints 3 on the console*/

console.log(result[0]);
/* This, will first goes to reference Reference#B in the mmemory and try to find property "0", since property does not exists, thus it will return "undefined" and prints undefined on the console*/


console.log(0 in result);
/* This, will first goes to reference Reference#B in the mmemory and try to find property "0" exists or not, since property does not exists, thus it will return "false" and prints false on the console*/