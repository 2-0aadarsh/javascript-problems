const arr = [10, 20, 30];

/*
this will create an array object :
{
    "0" : 10,
    "1" : 20,
    "2" : 30,

    lentgh : 3
}
*/

const x = arr.push(       //arguments passed into a function or method are always evaluated from left to right, before the method itself is actually executed. Thus, the arr.pop() get called first then after arr.shift()
    arr.pop(),
    arr.shift()
);

/*
Now since, arr.pop() get called first ->  it will simply remove the value present at the last property and return it becomes arr.push(30, arr.shift())
Thus,
{
    "0" : 10,
    "1" : 20,

    lentgh : 2
}

Now arr.shift() is called here, and it removes the 10 from the 0th index/property and return 10. So, it becomes arr.push(30, 10).
Thus,
{
    "0" : 20,

    lentgh : 1
}

Now arr.push(30, 10) is called and firstly it will add 30 by creating a new property of size length and update length and similarly it will add 10 as well. Thus,array becomes 
{
    "0" : 20,
    "1" : 30,
    "1" : 10,

    lentgh : 3
}

and arr.push returns the updated length = 3 to the varaible "x" and get stored.
*/

console.log(arr);   // [20, 30, 10]

console.log(x);  // 3