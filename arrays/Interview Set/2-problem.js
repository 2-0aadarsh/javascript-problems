const arr = [1, 2];

arr.unshift(arr.pop());

console.log(arr);    // [2, 1]



/*
Before calling unshift, js first evaluates all the arguments from left to right and thus, it will execute the pop() function first thus, arr.pop() will return value "2" and then arr.unshift(2) is executed which will do : 

{
    "0" : 1
} 
    to

{
    "0" : 2,    
    "1" : 1,    
}
add 2 at the property "0" and then shift all the values at other property to the right by creating one more property = length and then at last update the length property.
*/