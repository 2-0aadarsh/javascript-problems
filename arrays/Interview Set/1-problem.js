const arr = [10, 20, 30];

const x = arr.push(arr.pop());

console.log(arr);
console.log(x);

/*
first arr.pop() will be executed and return 30 as a value and then arr.push(30) will be executed and then 30 is added again in the arr and it returns the length of the arr. Thus, x=3 and arr = [10, 20, 30]


Thus, Before calling push(), JavaScript first evaluates all function arguments from left to right. Therefore, arr.pop() executes first, returns 30, mutates the array, and only then does arr.push(30) execute with that returned value.
*/