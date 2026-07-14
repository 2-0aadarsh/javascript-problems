const arr = [10, 20, 30];

/* 
this will create an array object inside the memory and initialized with values 10,20,30 with properties "0", "1" and "2" respectively and it's reference Reference#A is returned and stored inside arr.
*/

const result = [...arr];
/* 
this will again create an array object inside the memory because of [] with reference Reference#B and inside the [...] this ... is a spread operator which instruct the engine to iterate over all the elements inside the arr and add to the newly create array of reference Reference#B one by one meaning "spread obtains values from the array's iterator one by one and inserts each value into the newly created array literal." and it's reference Reference#B is returned and stored inside result. Thus, result  becomes = [10, 20, 30]  --> { "0" : 10, "1" : 20, "2" : 30, length : 3 }
*/


result.push(40);   // now this will tell engine to go to reference Reference#B first and then add another value 40 to it and thus result becomes -> { "0" : 10, "1" : 20, "2" : 30, "3" : 40, length : 4 }

console.log(arr);   // [10, 20, 30]
console.log(result); // [10, 20, 30, 40]