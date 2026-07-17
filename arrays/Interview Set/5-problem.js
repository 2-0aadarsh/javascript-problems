const arr = [1, 2, 3, 4];

const removed = arr.splice(1, 2, 10);

console.log(arr);
console.log(removed);


/*
splice() on recieving the 3 arguments will first try to get to the start index i.e 1 here and try to remove number of elements i.e. 2(2nd argument) and then on removing that value  at that property will try to insert the new value (10, 3rd argument) in the array object. 

{
    "0" : 1,
    "1" : 2,
    "2" : 3,
    "3" : 4,
    length : 4,
}
    then 
{
    "0" : 1,
    "1" : , -> value is removed from the array object
    "2" : , -> value is removed from the array object
    "3" : 4,
    length : 4,
} 
    then

{
    "0" : 1,
    "1" : 10, -> value 10 is added in the array object
    "2" : ,
    "3" : 4,
    length : 4,
}
    then 
{
    "0" : 1,
    "1" : 10, -> value 10 is added in the array object
    "2" : 4,  -> value 4 is moved to the left
    "3" : 4,
    length : 4,
}
    then 
{
    "0" : 1,
    "1" : 10, -> value 10 is added in the array object
    "2" : 4,  -> value 4 is moved to the left
              -> last unused prpoerty is removed from the array  object   
    length : 4,
}


and at last it will return the array of the removed elements [2]. Thus, arr = [1, 10, 4] and removed = [2, 3]

*/