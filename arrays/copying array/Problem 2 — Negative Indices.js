const arr = [10,20,30,40,50];

const result = arr.slice(-4, -1);

console.log(result);

/*
okay for this code : 
during creation phase : we will have 2 variables arr, result and initialized with <uninitialized>
and now during execution phase : 
js engine will first create an empty array object whose reference is Reference#A and then starts adding values in the array object with properties starting from "0" and containing length : 5 in the end and that reference is returned to arr and get stored in arr.

Now , arr.slice() will first see there's an array object and get start index and end index since both are negative thus, start and end have to get normalized first. So, start = arr.length + start = 5 + (-4) = 1 and end = arr.length +  end = 5 + (-1) = 4. Thus, engine has to execute the instruction that, first it  has to create a new array whose length is 0 initially, i.e. length : 0 with reference Reference#B and copy the values from start index till not including end index into the newly created array. Once  values are copied then newly created array becomes : 

so, step 1 : 

{
    length : 0
}

step 2 : 
{
    "0" : 20,
    length : 1
}

step 3 : 
{
    "0" : 20,
    "1" : 30,
    length : 2
}

step 4 :
{
    "0" : 20,
    "1" : 30,
    "2" : 40,
    length : 3
}

and then the Reference#B is returned to the result and thus 
console.log(arr);   -> prints [10, 20, 30, 40, 50]
console.log(result); -> prints [20, 30, 40]
*/