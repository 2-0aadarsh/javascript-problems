// /*
// Problem 6 — Check All Characters Unique
// */

// const str = "Aadarsh";
const str = "abcde";

const checkAllCharactersUnique = (str) => {
    if(str.length < 2) return true;

    const freqObj = {};
    for(let char of str) {
        if(!freqObj[char]) {
            freqObj[char] = 1;
        } else {
            return false;
        }
    }
    return true;
}

const result = checkAllCharactersUnique(str);
console.log(result);










