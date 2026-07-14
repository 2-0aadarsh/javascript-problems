const obj = {
    0: "A",
    2: "C",
    length: 4
};

/*
This will create an object literal (Reference#A) inside the memory and initialized with properties 0, 2 and length with values "A", "C" and 4 respectively and returned reference get stored inside the obj variable.

thus, obj = Reference#A
*/

const result = Array.from(obj);
/*
This will create another array object literal inside the memory(Reference#B) and then Array.from() iterate over array-like object (object here) to obtain the values and put those values inside the newly create array object. Now in order to find those values the Array.from() try to find it like obj[0], obj[1] till it  reaches length-1 as it does not check if property "0" exists or not. 
So, obj[0] will return "A" but obj[1] will return  undefined as property 1 does not exists in the obj

thus result = { 0: "A", 1: undefined, 2: "C", 3: undefined, length: 4 }
*/

console.log(result); // thus this will print the array ["A", undefined, "C", undefined]

console.log(result.length);  // it is of length 4

console.log(1 in result);  // result contains the property of "1" thus, it will print true

console.log(result[1]);  // the value at property 1 in result contains undefined, thus it will print undefined


/*
CONCLUSION : Array.from() has two execution paths: an iterable path and an array-like path. Objects with a length property but no iterator use the array-like path, where indices from 0 to length - 1 are read and missing properties become undefined
*/