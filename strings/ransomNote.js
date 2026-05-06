/*
Challenge 1: The Ransom Note (Frequency Counter)
This is a direct follow-up to the Anagram and First Unique Character problems.

The Prompt:
You are given two strings: ransomNote and magazine. Return true if ransomNote can be constructed by using the letters from magazine and false otherwise. Each letter in magazine can only be used once.

Test Cases:
console.log(canConstruct("a", "b"));       // false
console.log(canConstruct("aa", "ab"));     // false
console.log(canConstruct("aa", "aab"));    // true
*/ 

let str1 = "knife";
let str2 = "knee";

const canConstruct = (str1, str2) => {
    let obj = {};
    for(let ch in str1) {
        if(!obj[str1[ch]]) obj[str1[ch]] = 1;
        else {
            obj[str1[ch]] += 1;
        }      
    }
    console.log(obj)
    for(let ch in str2) {
        if(!obj[str2[ch]]) return false;

        else {
            obj[str2[ch]] -= 1;
        }
    }
    return true;
    // console.log(obj);
}
console.log(canConstruct(str1, str2));
console.log(canConstruct("cat", "tac"));