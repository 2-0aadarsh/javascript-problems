const arr = Array(3);

arr.push(10);

console.log(arr);       // [<3 empty items>, 10]
console.log(arr.length);    // 4
console.log(3 in arr);  // true
console.log(0 in arr);  // false


/*
Array(3) will create an empty array of length 3 and then arr.push(10) will first check the value of length and then try to add the value at  new property "length i.e. 3" so, the array object looks like : 
{
    length : 3
}
    to

{
    "3" : 10,
    length : 4    
}

*/