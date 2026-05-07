/*
Problem 4 — Remove Duplicate Characters
*/
const str = "programming";

const removeDuplicates = (str) => {
    if(str.length <= 1) return str;
    const obj = {};
    let result = "";
    for(let ch of str) {
        if(!obj[ch]) {
            obj[ch] = 1;
            result += ch
        }
    }
    return result;
}

const removedDuplicates = removeDuplicates(str);

console.log(`Removed duplicates from ${str} : ${removedDuplicates}`)