/*
Problem 1 — Maximum Occurring Character
*/ 
const str = "daaddarsh";

const findMaxOccuring = (str) => {
    if(str.length === 0) return 0;
    if(str.length === 1) return str[0];

    // Step 1 → create frequency object
    const obj = {};
    for(let ch of str) {
        if(!obj[ch]) {
            obj[ch] = 1;
        } else {
            obj[ch] += 1;
        }
    }
    console.log(obj);


    // Step 2 → find maximum occurring character
    let maxCount = 0;
    let maxChar = '';
    for(let key in obj) {
        if(obj[key]>maxCount) {
            maxCount = obj[key];
            maxChar = key;
        }
    }
    console.log(maxChar, maxCount);
    return maxChar;
}

let maxCharacter = findMaxOccuring(str);

console.log(`maximum occuring character is : ${maxCharacter}`)