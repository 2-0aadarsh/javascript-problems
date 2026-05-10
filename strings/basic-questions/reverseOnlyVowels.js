/*
The Prompt:
Given a string s, reverse only all the vowels in the string and return it. The vowels are 'a', 'e', 'i', 'o', and 'u' (both lowercase and uppercase).

console.log(reverseVowels("hello"));    // "holle"
console.log(reverseVowels("leetcode")); // "leotcede"

Hint 1: Remember, primitive strings are immutable. You cannot do str[0] = str[4]. You must use a method from Phase 2 to turn the string into an Array first, swap the elements in the Array, and then turn it back into a string at the very end.

Hint 2: Move your left pointer forward if it's NOT a vowel. Move your right pointer backward if it's NOT a vowel. If they are both sitting on vowels, swap them, then move both pointers!
*/

const str = "leetcode";
// function swapVowels(vowels, startIndex, endIndex) {
//     let temp = null;
//     temp
// }

const reverseVowels = (str) => {
    let startIndex = 0;
    let endIndex = str.length-1;

    const vowels = ['a','e','i','o','u'];
    const strArr = str.split(''); //['l','e','e','t','c','o','d','e']
    while(startIndex<endIndex) {
        if(!vowels.includes(strArr[startIndex])) startIndex++;
        else if(!vowels.includes(strArr[endIndex])) endIndex--;
        else {
            let temp = strArr[startIndex];    // temp = 'e1'
            strArr[startIndex++] = strArr[endIndex];   // strArr[1] = 'e4'
            strArr[endIndex--] = temp;    // strArr[7] = 'e1'
        }
    }

    console.log(strArr.join(""));
}
reverseVowels("leetcode");
reverseVowels("hello");
reverseVowels("aeiou");   //uoiea