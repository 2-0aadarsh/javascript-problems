/*
Problem 9 — Check Character Exists
*/
const str = "Aadarsh is a javascript developer";
const char = 'a';

// 1st way : loop
const checkCharacterExists = (str, char) => {
    if(str.length === 0) return `String required`;
    if(!char) return `Char does not exists`

    for(let i=0; i<str.length; i++) {
        if(str[i] === char) {
            console.log(`Char exists at index ${i}`);
            return;
        }
    } 
    console.log(`Char does not exists`);
}
console.log(checkCharacterExists(str, char));

// 2nd way : includes()
if(str.includes(char)) {
    console.log(`Char exists`);
} else {
    console.log(`Char does not exists`);
}


// 3rd way : indexOf()
if(str.indexOf(char) !== -1) {
    console.log(`Char exists`);
} else {
    console.log(`Char does not exists`);
}