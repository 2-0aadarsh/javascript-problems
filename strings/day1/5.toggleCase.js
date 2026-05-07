/*
Problem 5 — Toggle Case
*/
const str = "AZazHellO";
let newStr = "";
for(let i=0; i<str.length; i++) {
    if(str.charCodeAt(i)<=90 && str.charCodeAt(i)>=65) {
        newStr += str[i].toLowerCase();
    } else {
        newStr += str[i].toUpperCase();
    }
}
console.log(`Toggled string is ${newStr}`);