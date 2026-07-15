const arr = Array(3);
/*
Reference#A
    ↓
{  
   length : 3
}

but arr = Reference#A
*/

const result = Array.of(arr);
/*
now Array.of(arr) will store value of arr at property "0", i.e.

Reference#B
    ↓
{  
   "0" :  Reference#A,

   length : 1
}

*/

result[0][1] = 100;
/*
now first result[0] will give the reference "Reference#A" and take the js engine to the sparse array object and at property "1" add a value of 100. Since, there's no such property exists, thus property "1" is created and insitialized with value 100.     
*/


console.log(arr);      // [empty slot, 100, empty slot]
console.log(result);  // [ [empty slot, 100, empty slot] ]