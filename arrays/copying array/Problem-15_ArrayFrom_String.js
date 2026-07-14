const str = "ABC";

const result = Array.from(str);
/*
This will create another array object literal inside the memory(Reference#A) and then Array.from() uses the string's iterator to obtain one character at a time and inserts each character into the newly created array. Now in order to find those values the Array.from() try to find it like str[0], str[1] till it  reaches length-1 as it does not check if property "0" exists or not. 

So, str[0] will return "A" but str[1] will return "B" and str[2] will return "C"

thus result = { 0: "A", 1: "B", 2: "C", length: 3 }
*/

console.log(result);  // ["A", "B", "C"]

console.log(result.length);  // it is of length 3

console.log(result[1]);    // it will return "B"


/*
CONCLUSION : When the source is iterable (like a string, Set, or Map), Array.from() uses the iterable path by obtaining an iterator and consuming one value at a time to build a new array.
*/