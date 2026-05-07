/*
Problem 4 — Count Consonants
*/
const str = "programming"

const vowels = ['a','e','i','o','u'];
let count = 0;
for(let i=0; i<str.length; i++) {
    if(!vowels.includes(str[i].toLowerCase())) {
        count++;
    }
}

console.log(`Total count of consonants are ${count}`);