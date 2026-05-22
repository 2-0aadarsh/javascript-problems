/*
Problem 2 — Reverse Words In String
*/

const str = "I love programming";

const reverseWords = (str) => {
    if(!str) return null;

    const strArr = str.split(" ");
    let res = "";

    // for(let word of strArr) {
    //     res += word;
    // }
    // for(let i=strArr.length-1; i>=0; i--) {
    //     res+=strArr[i];
    // }
    let s=0; let e=strArr.length-1;
    while(s<e){
        let temp = strArr[s];
        strArr[s] = strArr[e];
        strArr[e] = temp;
        s++; e--;
    }
    // console.log(strArr.join(" "));
    res = strArr.join(" ")
    return res;
}

const res = reverseWords(str);
console.log(res);