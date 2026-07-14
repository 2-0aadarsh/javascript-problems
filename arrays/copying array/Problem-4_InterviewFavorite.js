const arr = [
    { name: "A" },
    { name: "B" },
    { name: "C" }
];

const result = arr.slice(0, 2);

result[0].name = "Rahul";

console.log(arr[0].name);
console.log(result[0].name);



/*
okay for this code : 
during creation phase : we will have 2 variables arr, result and initialized with <uninitialized>
and now during execution phase : 

1. js engine will first create an empty array object whose reference is Reference#A and then starts adding values in the array object with properties starting from "0". Now, at each propert the engine has to : 

2. engine see an object thus, will create an empty object in the memory whose porperty is "name" and value is "A" and that reference (Reference#1) is returned to arr[0] and get stored in arr[0].

similarly js engine will  see an object thus, will create an empty object in the memory whose porperty is "name" and value is "B" and that reference (Reference#2) is returned to arr[1] and get stored in arr[1].

and then at last js engine will  see an object thus, will create an empty object in the memory whose porperty is "name" and value is "C" and that reference (Reference#3) is returned to arr[2] and get stored in arr[2].


Now , arr.slice() will first see there's an array object and get start index and end index since both are positive thus, start and end are already normalized0. So, start = 0 end = 2. 
Step 1 → Parameter Binding : start = 0, end = 2
Step 2 → Normalize start : start = 0 (already normalized)
Step 3 → Normalize end : end = 2 (already normalized)
Step 4 → Can copying happen? Yes, since start < end and both are in bounds. Thus, engine has to execute the instruction that, first it  has to create a new array whose length is 0 initially, i.e. length : 0 with reference Reference#B and copy the values from start index till not including end index into the newly created array.

Since the arr contains object reference whose properties and values are : 

conceptually arr -> Reference#A => {
                                        "0" : Reference#1,
                                        "1" : Reference#2,
                                        "2" : Reference#3,
                                        length : 3
                                    }   

Thus, engine has to execute the instruction that, first it  has to create a new array whose length is 0 initially, i.e. length : 0 with reference Reference#B and copy the values from start index till not including end index into the newly created array. Once  values are copied then newly created array becomes : 

so, step 1 : 

{
    length : 0
}

step 2 : 
{
    "0" : Reference#1,
    length : 1
}

step 3 : 
{
    "0" : Reference#1,
    "1" : Reference#2,
    length : 2
}

step 4 :
{
    "0" : Reference#1,
    "1" : Reference#2,
    length : 3
}

and then the Reference#B is returned to the result and thus 


now result[0].name = "Rahul"; => it will first goes to result array object at referenece Reference#B and then get the value at index 0 which is Reference#1 and then it will go to that reference and change the value of property "name" from "A" to "Rahul". Thus, now the Reference#1 will be :

Reference#1 => {
                name : "Rahul"
            }

console.log(arr[0].name);  -> it will first goes to arr array object at referenece Reference#A and then get the value at index 0 which is Reference#1 and then it will go to that reference and get the value of property "name" which is "Rahul" and thus prints "Rahul".

console.log(result[0].name); -> it will first goes to result array object at reference Reference#B and then get to the value at index 0 which is Reference#1 and then it will go that reference and get the value of the "name" property which is "Rahul" and thus it will print "Rahul" as well.

*/