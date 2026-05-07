/*
Problem 5 — Character Frequency Object
*/ 
const str = "Hello I am Aadarsh";

const countFrequency = (str) => {
    if(str.length === 0) return 0;
    if(str.length === 1) return 1;

    const obj = {};
    for(const ch of str) {
        // 1. Skip the rest of the loop if the character is a space
        if (ch === ' ') continue; 
        if(!obj[ch] && ch !== ' ') {
            obj[ch] = 1;
        } else {
            obj[ch] += 1;
        }
    }
    return obj;
}
const freq = countFrequency(str);
console.log(freq);