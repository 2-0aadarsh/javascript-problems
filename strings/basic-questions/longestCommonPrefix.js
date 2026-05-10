/*
Challenge 3: Longest Common Prefix (Extraction & Iteration)
This is a classic that shifts the focus slightly away from objects and more toward string slicing and comparing.

The Prompt:
Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string "".

Test Cases:
    console.log(longestCommonPrefix(["dog", "racecar", "car"]));    // ""
    console.log(longestCommonPrefix(["flower", "flow", "flight"])); // "fl"

Hint: You don't need a complex algorithm here. Just take the very first word in the array (e.g., "flower") and assume it is the prefix. Then, check it against the next word ("flow"). Is "flower" a prefix of "flow"? No. So, use .slice() to chop the last letter off your prefix to make it "flowe". Try again. Keep chopping it down until it matches, then move to the next word in the array!
*/

const longestCommonPrefix = (strArr) => {
    if(strArr.length === 0) return "";
    
    let prefix = strArr[0];
    for(let i=1; i<strArr.length; i++) {
        while(strArr[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, -1);
        }
        console.log(prefix);
    }
    return prefix;
}
console.log(longestCommonPrefix(["dog", "racecar", "car"]));    // ""
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // "fl"