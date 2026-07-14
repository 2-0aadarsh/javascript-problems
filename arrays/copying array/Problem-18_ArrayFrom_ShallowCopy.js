const arr = [
    { name: "A" },
    { name: "B" }
];

/*
Reference #A
↓

{
   "0" : Reference#1,         ---->   { "name" : "A"}
   "1" : Reference#2,         ---->   { "name" : "B"}
   
   length : 2
}
*/
const result = Array.from(arr);   
//This will create another array object literal inside the memory(Reference#B) and then Array.from() uses the array's iterator to obtain one value(reference) at a time and inserts each reference value into the newly created array as Array.from() allows shallow copy only. Now in order to find those values the Array.from() try to find it like arr[0], arr[1] till it  reaches length-1 as it does not check if property "0" exists or not. 


result[0].name = "Rahul";
// now js engine will go to Reference#B in memory and access the property "0" which will return a reference value(Reference#1) and when js engine goes to this reference (Reference#1), then it will get an object and then engine will try to get to the "name" property from the object and modifies it  to "Rahul".

// i.e. Reference#1         ---->   { "name" : "A"} changes to Reference#1         ---->   { "name" : "Rahul"}

console.log(arr[0].name);   // now engine will go to Reference#A in memory and access the property "0" which will return a reference value(Reference#1) and when js engine goes to this reference (Reference#1), then it will get an object and then engine will try to access the "name" property from the object and then it prints "Rahul"
console.log(result[0].name);   // now engine will go to Reference#B in memory and access the property "0" which will return a reference value(Reference#1) and when js engine goes to this reference (Reference#1), then it will get an object and then engine will try to access the "name" property from the object and then it prints "Rahul"




/*
CONCLUSION : Array.from() obtains one element at a time.

            --If that element is a primitive,
                the primitive value is copied.

            --If that element is an object,
                the element itself is a reference,
                so the reference is copied.
*/