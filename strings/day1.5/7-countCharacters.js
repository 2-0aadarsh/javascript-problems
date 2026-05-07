/*
Problem 7 — Count Uppercase / Lowercase / Digits / Special Characters

Input: "Aadarsh123@#"

Output: { uppercase: 1, lowercase: 6, digits: 3, special: 2 }
*/
const str = "Aadarsh123@#";

const countCharacter = (str) => {
    if(str.length < 1) return {uppercase : 0, lowercase:0, digits:0, specialChars:0 };

    let obj = {uppercase : 0, lowercase:0, digits:0, specialChars:0 };
    for(let char of str) {
        const code = char.charCodeAt(0);     ///*** "a".charCodeAt(0)  -> gives the ASCII value of character 'a' ***/  ///
        if(code>=48 && code<=57) {
            obj.digits += 1;
        }
        else if(code>=65 && code<=90) {
            obj.uppercase += 1;
        } 
        else if(code>=97 && code <= 122) {
            obj.lowercase += 1;
        } 
        else {
            obj.specialChars += 1;
        }
    }
    return obj
}

let countCharObj = countCharacter(str);
console.log(countCharObj);