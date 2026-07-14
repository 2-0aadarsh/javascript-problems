const arr = [[1], [2], [3]];
/*
Reference #A
↓

{
   "0" : Reference #1,   --->    { "0" : 1, length : 1 }
   "1" : Reference #2,   --->    { "0" : 2, length : 1 }
   "2" : Reference #3,   --->    { "0" : 3, length : 1 }
   
   length : 3
}
*/


const result = [...arr];
/*
Reference #B
↓

{
   "0" : Reference #1,   --->    { "0" : 1, length : 1 }
   "1" : Reference #2,   --->    { "0" : 2, length : 1 }
   "2" : Reference #3,   --->    { "0" : 3, length : 1 }
   
   length : 3
}
*/

result[0].push(100);
/*this will go to Reference #B access the value at property "0" then goes to another array object at Reference#1 push another value 100 then Reference#1   ->{ "0" : 1, "1" : 100, length : 2 } */


console.log(arr);    // [[1, 100], [2], [3]]
console.log(result); // [[1, 100], [2], [3]]