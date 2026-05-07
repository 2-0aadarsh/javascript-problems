///////******* Problem 11 — Palindrome*********/////// 

const str = "Racecar";
const str2 = "A man, a plan, a canal: Panama";

const isPalindrome = (str) => {
    if(str.length <= 1) return false;

    let startIndex=0; 
    let endIndex=str.length-1;

    while(startIndex<endIndex){
        if(str[startIndex].toLowerCase() !== str[endIndex].toLowerCase()) return false
        startIndex++;
        endIndex--;
    } 
    return true;
}
const res = isPalindrome(str);



const isModifiedPalindrome = (str2) => {
    if(str.length <= 1) return true;
    const arr = [];

    for(let ch of str2) {
        // if(ch === " " || ch=== ',' || ch === ':') continue;
        // arr.push(ch);
        const code = ch.charCodeAt(0);
        if((code>=65 && code<=90) || (code>=97 && code<=122)) {
            arr.push(ch)
        }
    }

    let startIndex=0; 
    let endIndex = arr.length-1;

    while(startIndex<endIndex) {
        if(arr[startIndex].toLowerCase() !== arr[endIndex].toLowerCase()) return false;

        startIndex++;
        endIndex--;
    }
    return true;
}

const res2 = isModifiedPalindrome(str2);


if(res) {
    console.log(`${str} is a palindrome`)
} else {
    console.log(`${str} is not a palindrome`)
}


if(res2) {
    console.log(`${str2} is a palindrome`)
} else {
    console.log(`${str2} is not a palindrome`)
}

