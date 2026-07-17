const arr = [1, 2, 3];
/*
this will create an array object : 
{
    "0" : 1,
    "1" : 2,
    "2" : 3,

    lentgh : 3
}
*/

arr.splice(1, 0, arr.pop(), arr.shift());
/*
Since, js evalutes the expressions from left to right in the argument thus, arr.pop() is called first and then the arr.shift(). Thus, arr.pop() remove the last element (3), update the length to 2 and return (3).

Then, arr.shift() removes the first element at logical index and it will return (1) here, update the length to 1.
Thus, the final expression becomes : arr.splice(1, 0, 3, 1) => go to first logical index, remove 0  elements and add 3 and 1 at the index 1. 

Also, the array  object becomes,
{
    "0" : 2,

    lentgh : 1
}

Now for arr.splice(1, 0, 3, 1) => go to first logical index, remove 0  elements and add 3 and 1 at the index 1.But index 1 does not exists thus it will go to the last index and then start inserting the values  one at a time, update the length and then repeat it again.
so, it becomes :
1. {
        "0" : 2,
        "1" : 3,
        lentgh : 2
    } 
2. {
        "0" : 2,
        "1" : 3,
        "2" : 1,
        lentgh : 3
    } 
and lastly it will return the array of the removed elements. And here it is [].

so, 
*/


console.log(arr);  // [2, 3, 1]


/*
splice() does not ask:
    "Does property 1 exist?"

It asks:
    "Where should insertion begin?"

    The start is 1.
    Current array length is 1.

Since
    start = 1
    length = 1

NOTE : start is equal to length, so insertion starts at the end of the array. If start were greater than length, JavaScript would clamp it to length
*/