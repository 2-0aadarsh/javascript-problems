/Problem 10 — Count Specific Character/

const str = "Aadarsh is a building javascript fundamentals";
// const str = "AaAa";
const char = 'a';

let count = 0;
for(let ch of str) {
    if(ch === char) {
        count++;
    }
}

console.log(`total count of ${char} in string is ${count}`)


// const vowels = new Set(['a','e','i','o','u']);
// console.log(vowels)

// const str2 = "     hey there   How are   you doing    ??    ";
// const words = str2.trim().split(/\s+/);
// console.log(words);

console.log([...str]);