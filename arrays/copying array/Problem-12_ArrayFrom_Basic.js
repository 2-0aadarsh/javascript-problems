const arr = [10, 20, 30];
/*
Reference #A
↓

{
   "0" : 10,
   "1" : 02,
   "2" : 30,
   
   length : 3
}
*/

const result = Array.from(arr);
/*This will first create a new array object literal in the memory whose reference is Reference#B and then it start iterating over the iterable (array) till length-1 and obtain value at each index. */
/*
Reference #B
↓

{
   "0" : 10,
   "1" : 02,
   "2" : 30,
   
   length : 3
}
*/

result.push(40);
/*This will modies newly array object literal in the memory whose reference is Reference#B and add a new value 40 at new propert "4" */
/*
Reference #B
↓

{
   "0" : 10,
   "1" : 20,
   "2" : 30,
   "3" : 40,
   
   length : 4
}
*/

console.log(arr);     // [10, 20, 30]
console.log(result);  // [10, 20, 30, 40]