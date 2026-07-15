const a = Array(5);
/*
Reference #A
    ↓

This will create an sparse array with 5 empty slots of length 5
{

    length : 5
}
*/

const b = Array.of(5, 10);
/*

Reference #B
    ↓

This will first create an empty array and then insert 5 at first position ("0") and then 10 at property "1"
{
    "0" : 5,
    "1" : 10,

    length : 2
}
*/

console.log(a); // thus, this will return [5 x <empty slots>]
console.log(b); // this will print the array containing 5 and 10 i.e. [5, 10]

console.log(0 in a);  // will print false as there's no such property "0" in a
console.log(1 in a); // will print  false  again as there's no such property 0 as well as 1 in the a
console.log(1 in b); // will print  true as there's a property 0 as well as 1 in the b