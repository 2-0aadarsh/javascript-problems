/*Problem 2 — First Non-Repeating Character*/

const str = "aabbccdxe";
const firstNonRepeatingChar = (str) => {
    if(str.length === 0) return -1;
    if(str.length === 1) return str[0];

    let obj = {};
    for(let ch of str) {
        if(!obj[ch]){
            obj[ch] = 1;
        } else {
            obj[ch] += 1
        }
    }

    // now finding the first non repeating character by iterating over the object whose key's value is 1
    for(let key in obj) {
        if(obj[key] === 1 && str.indexOf(key) !== -1) { 
            console.log(`first non repeating character is : ${key}`);
            return key;
        }
    }
}

const result = firstNonRepeatingChar(str);
console.log(`result : ${result}`);