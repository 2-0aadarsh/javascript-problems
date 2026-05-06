/*
You are given a string of lowercase English letters. Your task is to find the first non-repeating character in it and return its index. If every single character repeats and there is no unique character, return -1.

// Test Case 1
let str1 = "wemakeover"; 
// Output should be 0 (The first 'w' is unique, so index 0. Wait, 'w' is 0, 'e' repeats, 'm' is 2... actually 'w' is unique! So index 0).
// Let's use simpler test cases to avoid manual counting mistakes!

console.log(firstUnique("leetcode"));     
// Expected Output: 0 (Because 'l' only appears once, and it's the first one).

console.log(firstUnique("loveleetcode")); 
// Expected Output: 2 (Because 'l' and 'o' repeat, but 'v' only appears once, and it is at index 2).

console.log(firstUnique("aabb"));         
// Expected Output: -1 (Because every character repeats).
*/


// const str = "loveleetcode";
// const str = "wemakeover";
const str = "aabb";

const firstUnique = (str) => {
    let obj = {};

    // step 1 : iterate over the string and calculate the frequency of each characters
    for(let i=0; i<str.length; i++) {
        if(!obj[str[i]]) {
            obj[str[i]] = 1;
        } else {
            obj[str[i]] += 1;
        }
    }
    console.log(obj);
    
    // step 2 : iterate over the string and then check if any character is non-repeating then we return the number of non-repeating characters
    for(let i=0; i<str.length; i++) {
        if(obj[str[i]]<=1) {
            return i;        
        }
    }

    return -1;
}
console.log(firstUnique(str));