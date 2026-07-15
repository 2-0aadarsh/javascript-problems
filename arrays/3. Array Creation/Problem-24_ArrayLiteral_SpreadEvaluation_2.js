const arr1 = [1, 2];
/*
Reference #A
    ↓
{
    "0" : 1,
    "1" : 2,
    length : 2
}
*/


const arr2 = [3, 4];
/*
Reference #B
    ↓
{
    "0" : 3,
    "1" : 4,
    length : 2
}
*/

const result = [
    ...arr1,
    100,
    ...arr2,
    200
];


/*
Now here when js engine reach during runtime, firstly it will create an empty array the moment it encounters "[" and initialized the length with 0. Now it starts evaluating the expressions one at a time so, the very first expression is Spread Element and js engine start iterating over the  array iterable and store each produced value into the next available index. So, the result  becomes

Reference #C
    ↓
{
    "0" : 1,
    "1" : 2,
    length : 2
}

Now, the next expression is 100 and it  evaluates to 100 only and get stored in the next available  index in the array and then comes another Spread Elements and js engine again start iterating over the array iterable and store each produced value into the next available index. So, the result  becomes

Reference #C
    ↓
{
    "0" : 1,
    "1" : 2,
    "2" : 100,
    "3" : 3,
    "4" : 4,
    length : 5
}

lastly, the next expression is 200 and it  evaluates to 200 only and get stored in the next available  index in the array

Reference #C
    ↓
{
    "0" : 10,
    "1" : 20,
    "2" : 100,
    "3" : 3,
    "4" : 4,
    "5" : 200,

    length : 6
}
*/

console.log(result);  // thus, it will print [1, 2, 100, 3, 4, 200]