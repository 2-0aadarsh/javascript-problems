/Problem 10 — Count Specific Character/

const str = "Aadarsh is a building javascript fundamentals";
const char = 'a';

let count = 0;
for(let ch in str) {
    if(str[ch] === char) {
        count++;
    }
}

console.log(`total count of ${char} in string is ${count}`)