/*
Problem 9 — Find Character With Minimum Frequency

Input: "aabbbccd"

Output: d
*/
const str = "aabbbccd";

const charWithMinFreq = (str) => {
    if(str.length < 1) return null;

    const obj = {};
    for(const char of str) {
        if(!obj[char]) {
            obj[char] = 1;
        } else {
            obj[char] += 1;
        }
    }

    let min = Infinity;
    let minChar = '';
    for(const char of str) {
        if(obj[char]<min) {
            min = obj[char];
            minChar = char;
        }
    }

    return minChar;
}
const result = charWithMinFreq(str);
console.log(result);