/*
Problem 1 — Reverse Only Vowels
*/

const str = "Hey buddy";

const isVowel = (ch) => {
    if(!ch) return -1;
    const vowel = ['a', 'e','i', 'o','u'];

    const char = ch.toLowerCase();
    return vowel.includes(char)
}

const isAlpha = (ch) => {
    if(!ch) return -1;
    if(ch.length>1) return -1;

    const code = ch.charCodeAt(0)
    if((code>=65 && code<=90)||(code>=97 && code<=122)) return true;
    else {
        return false;
    }
}

const reverseVowels = (str) => {
    if(!str.length) return -1;
    let strArr = str.split("");
    let s=0; let e=strArr.length-1;
    while(s<e) {
        if(!isVowel(strArr[s])) s++;
        else if(!isVowel(strArr[e])) e--;
        else {
            let temp = strArr[s];
            strArr[s] = strArr[e];
            strArr[e] = temp;
            s++;
            e--;
        }
    }
    console.log(strArr.join(""));
    return strArr.join("");
}

const swap = (a,b) => {
    let temp = a;
    a = b;
    b = temp;
}

reverseVowels(str);