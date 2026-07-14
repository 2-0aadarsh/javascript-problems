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

const result = [...arr];
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

arr.push(4);
/*
Reference #A
↓

{
   "0" : 1,
   "1" : 2,
   "2" : 3,
   "3" : 4,
   
   length : 4
}
*/

console.log(arr);     // [1, 2, 3, 4]
console.log(result); // [1, 2, 3]