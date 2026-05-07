/*
Problem 3 — Count Vowels
*/

const str = "programming"

const vowels = ['a','e','i','o','u'];

let count = 0;
for(let ch in str) {
    if(vowels.includes(str[ch].toLowerCase())) {
        count++;
    }
}

console.log(`Total count of vowels are : ${count}`);