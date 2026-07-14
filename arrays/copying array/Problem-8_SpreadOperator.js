const arr = [
    { name: "A" },
    { name: "B" }
];

/* 
this will create an array literal(Reference#A) then inside the array there's another object literal(Reference1), gets create in memory and it's reference get stored inside arr[0], similarly for arr[1] stores the Reference2
*/

const result = [...arr];
/*
[] will create another array object literal inside the memory(Reference#B) and then spread operator iterate over the Reference#A i.e.array iterable to obtain values. Since, spread allows shallow copy only thus Reference1 and Reference2 gets copied instead of the values at each references. 

rsult => {
            "0" : Reference1,   
            "1" : Reference2,
            length : 2   
         }
*/

result[0].name = "Rahul";  // this will go to Reference#B inside the memory and try to access the value of propert 0 i.e. Reference1 and then it goes to this object in memory, modifies the value of the name propert to "Rahul"

console.log(arr[0].name);     // this is will go to reference#A, and try to access the value at property "0", goes to object at referece1 and try to access the name property  and  then prints the name i.e. Rahul
console.log(result[0].name); // this is will go to reference#b, and try to access the value at property "0", goes to object at referece1 and try to access the name property  and  then prints the name i.e. Rahul