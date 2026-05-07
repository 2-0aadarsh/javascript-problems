/*
Problem 8 — Check If String Contains Only Digits
*/
const str = "12345a";
// const str = "";
// const str = "a";

const checkHasOnlyDigits = (str) => {
    if(str.length < 1) return false;
    const obj = { digits:0, others:0}

    for(const char of str) {
        const code = char.charCodeAt(0);

        if(code>=48 && code<=57) {
            obj.digits += 1;
        } else {
            return false;
        }
    }
    return true;
}

const result = checkHasOnlyDigits(str);
if(result) {
    console.log("Yes, the string has only digits")
} else {
    console.log("No, the string has not only the digits")
}