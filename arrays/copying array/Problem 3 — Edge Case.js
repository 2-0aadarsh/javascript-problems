const arr = [10,20,30,40,50];

const result = arr.slice(-100, 100);

console.log(result);


/*
okay for this code : 
during creation phase : we will have 2 variables arr, result and initialized with <uninitialized>
and now during execution phase : 
js engine will first create an empty array object whose reference is Reference#A and then starts adding values in the array object with properties starting from "0" and containing length : 5 in the end and that reference is returned to arr and get stored in arr.

Now , arr.slice() will first see there's an array object and get start index and end index since both are negative thus, start and end have to get normalized first. So, start = arr.length + start = 5 + (-100) = -95, but since it's out of bounds, it will be clamped to 0. end = arr.length +  end = 5 + (100) = 105, but since it's out of bounds, it will be clamped to arr.length only i.e. 5. Thus, engine has to execute the instruction that, first it  has to create a new array whose length is 0 initially, i.e. length : 0 with reference Reference#B and copy the values from start index till not including end index into the newly created array. Once  values are copied then newly created array becomes : 

so, step 1 : 

{
    length : 0
}

step 2 : 
{
    "0" : 10,
    length : 1
}

step 3 : 
{
    "0" : 10,
    "1" : 20,
    length : 2
}

step 4 :
{
    "0" : 10,
    "1" : 20,
    "2" : 30,
    length : 3
}

step 5 :
{
    "0" : 10,
    "1" : 20,
    "2" : 30,
    "3" : 40,
    length : 4
}

step 6 :
{
    "0" : 10,
    "1" : 20,
    "2" : 30,
    "3" : 40,
    "4" : 50,
    length : 5
}

and then the Reference#B is returned to the result and thus 
console.log(arr);   -> prints [10, 20, 30, 40, 50]
console.log(result); -> prints [10, 20, 30, 40, 50]
*/