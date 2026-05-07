/*
Problem 10 — Reverse String Manually
*/
const str = "Aadarsh is a React developer";

const reverseString = (str) => {
    if(!str.length) return "";

    // const strArr = [];
    // for(const ch of str) {
    //     strArr.push(ch)
    // }

    const strArr = [...str];

    // console.log(strArr);

    let startIndex = 0;
    let endIndex = strArr.length-1;

    while(startIndex < endIndex) {
        let temp = strArr[startIndex];
        strArr[startIndex++] = strArr[endIndex];
        strArr[endIndex--] = temp; 
    }
    let resultedString = "";
    for(let i=0; i<strArr.length; i++) {
        resultedString += strArr[i];
    }
    return resultedString;
}
console.log(reverseString(str));