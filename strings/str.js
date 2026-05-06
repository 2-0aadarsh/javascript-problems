// let str1 = "hello world";

// let str2 = 'hello world';

// let str3 = ` hello

//     world
// `;

// console.log(str3);

let filePath = "/user/documents/resume.pdf";

let firstIndex = filePath.lastIndexOf("/")+1;
let lastIndex = filePath.indexOf(".");
console.log(firstIndex, lastIndex)

const fileName = filePath.slice(firstIndex, lastIndex);
// filePath = filePath.replace(/\\/g, "/");
// console.log(filePath.split("/"))
// console.log(filePath.slice(-3))
// console.log(fileName);


/*
Question 1 (Basic Extraction):
You are given an email address: const email = "aadarsh@wemakeover.in".
Using indexOf and slice (or substring), how would you extract just the domain name
*/ 

const email = "aadarsh@wemakeover.in"
const emailFirstIndex = email.indexOf("@");
console.log(email.slice(emailFirstIndex));


/*
Question 2 (Medium - The Split & Reverse):
You are given a sentence: const sentence = "The quick brown fox".
Using split() and basic array methods, how would you reverse the order of the words (not the letters) to get the output: "fox brown quick The"
*/

// const sentence = "The quick brown fox"
// const sentenceArr = sentence.split(" ");
// console.log(sentenceArr);
// const reversedSentenceArr = sentenceArr.reverse();
// console.log(reversedSentenceArr);
// const reversedSentence = reversedSentenceArr.join(" ")
// console.log(reversedSentence);




/*
Question 3: The UI Data Masker (Extraction & Transformation)
In frontend development, you frequently handle sensitive data coming from a backend that needs to be masked before rendering on the screen.

The Task: You are given a 16-digit credit card string. You need to extract just the last 4 digits, and replace the first 12 digits with asterisks (*).

Input: const card = "1234567890123456";

Expected Output: "************3456"

Hint: You can use slice() to get the last four digits. To generate the stars, look into a string method called .padStart() or simply string concatenation.
*/
const card = "1234567890123456";
const last4digit = card.slice(-4);
console.log(last4digit);
const paddedLength = card.length-last4digit.length;
let newCard = "";
for(let i=0; i<paddedLength; i++) {
    newCard += "*"
}
console.log(newCard+last4digit);

let name = "aadarsh";
console.log(name.padStart(10, "*"));
console.log(name.padEnd(8, "*"));


// newCard = "*".repeat(paddedLength)+last4digit;
console.log(paddedLength+last4digit.length)
newCard = last4digit.padStart(paddedLength+last4digit.length, "*");
console.log(newCard)






/*
Question 2: The Classic Interview Follow-Up (Split & Reverse)
If you successfully answer the "reverse the words" question, interviewers will almost always hit you with this exact follow-up to test if you truly understand array mapping.

The Task: Reverse the letters of each word, but keep the words in their original order.

Input: const sentence = "The quick brown fox";

Expected Output: "ehT kciuq nworb xof"

Hint: You will need to split(" ") the sentence into an array of words first. Then, you will need to iterate over that array (using something like .map()), and apply the split("").reverse().join("") logic to each individual word before joining the whole sentence back together.
*/

const sentence = "The quick brown fox";

const sentenceArr = sentence.split(" ");
console.log(sentenceArr);

const modifiedSentenceArr = sentenceArr.map((item) => (
    item.split('').reverse().join('')
))

const newStr = modifiedSentenceArr.join(" ");
console.log(newStr);



/*
Question 3: The URL Slug Formatter (Transformation)

The Task: You have a URL slug with hyphens. Replace all hyphens with spaces, and convert the string to uppercase.

Input: const slug = "advanced-system-design-basics";

Expected Output: "ADVANCED SYSTEM DESIGN BASICS"
*/

const slug = "advanced-system-design-basics";
const slugArr = slug.split("-");
console.log(slugArr)

const newSlugArr = slugArr.map((str) => (
    str.toUpperCase()
))
let slugFormatter = newSlugArr.join(" ");
console.log(newSlugArr, slugFormatter);

slugFormatter = slug.split("-").map((str) => (str.toUpperCase())).join(" ")

slugFormatter = slug.replaceAll("-", " ").toUpperCase();
console.log(slugFormatter);




const str = "cac";

const checkPalindrome = (str) => {

    let startIndex = 0;
    let endIndex= str.length-1;
    while(startIndex<endIndex){
        if(str[startIndex] !== str[endIndex]) return false;

        else {
            startIndex++;
            endIndex--;
        }
    }
    return true;
}

console.log(checkPalindrome(str));
console.log(checkPalindrome("racecar"));


const checkAnagram = (str1, str2) => {
    if(str1.length !== str2.length) return false;

    let obj = {};
    // iterating 1st string
    for(let i=0; i<str1.length; i++) {
        if(obj[str1[i]] === undefined) {
            obj[str1[i]] = 1;
        } else {
            obj[str1[i]] += 1;
        }
    }

    // iterating 2nd string
    for(let i=0; i<str2.length; i++) {
        if(!obj[str2[i]]) return false;
        else {
            obj[str2[i]] -=1
        }
    }
    return true;
}

let str1 = "aab";
let str2 = "abb";

console.log(checkAnagram(str1, str2));

let obj = {};
for(let i=0; i<str1.length; i++) {
    if(obj[str1[i]] === undefined) {
        obj[str1[i]] = 1;
    } else {
        obj[str1[i]] += 1;
    }
}

for(let i=0; i<str2.length; i++) {
    obj[str2[i]] -=1;
}

console.log(obj);

























