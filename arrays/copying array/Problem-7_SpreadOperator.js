const arr = Array(3);

const result = [...arr];
/*
this will create an new array and spread operator will iterate over iterable to obtain values from the array's iterable one by one and insert them into newly created array literal (Reference#B). But since the arr is a sparse array thus, it does not contain any property except the length : 3. 

Now  in order to copy the values from arr(Reference#A) spread  will try to find if arr[0] and gets  undefined, so it will store undefined for propert 0 inside the newly create array literal (Reference#B), similarly arr[1] and arr[2] also gives undefined. 

Thus, Reference#B becomes : {
                                "0" : undefined,
                                "1" : undefined,
                                "2" : undefined,
                                
                                length : 3,
                            }
*/

console.log(result.length);   // 3


console.log(result[0]);   // undefined
console.log(0 in result); // true
console.log(0 in arr);   // false  as there's no property "0" exists inside an arr