const arr = [1, 2, 3];
/*
Reference #A
↓

{
   "0" : 1,
   "1" : 2,
   "2" : 3,
   
   length : 3
}
*/

const result = [...arr]
/*
Reference #B
↓

{
   "0" : 1,
   "1" : 2,
   "2" : 3,
   
   length : 3
}
*/

result[0] = 100;
/*
Reference #B
↓

{
   "0" : 100,
   "1" : 2,
   "2" : 3,
   
   length : 3
}
*/


console.log(arr);      // [1, 2, 3]
console.log(result);   // [100, 2, 3]