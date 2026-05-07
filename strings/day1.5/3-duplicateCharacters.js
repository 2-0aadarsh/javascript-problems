/*
Problem 3 — Find Duplicate Characters 
*/

const str = "programming";
const duplicates = (str) => {
    if(str.length <= 1) return 0;

    // step 1 : calculate the frequency if characters in the string
    const obj = {};
    for(let ch of str) {
        if(!obj[ch]) {
            obj[ch] = 1;
        } else {
            obj[ch] += 1;
        }
    }

    // step 2 : see the frequency of characters, if > 1 then push it into the arr
    const arr = [];
    for(let key in obj) {
        if(obj[key] > 1) {
            arr.push(key)
        }
    }

    // step 3 : printing and returing the array
    console.log(arr);
    return arr;
}

const duplicateValues = duplicates(str);
console.log(duplicateValues);