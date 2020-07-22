// String: Rotate String
// Create a standalone function that accepts a string
// and an integer, and rotates the characters in the string
// to the right by that given integer amount.


const str1 = "Hello World";
const rotateAmnt1 = 0;
const expected1 = "Hello World";

const str2 = "Hello World";
const rotateAmnt2 = 1;
const expected2 = "dHello Worl";

const str3 = "Hello World";
const rotateAmnt3 = 2;
const expected3 = "ldHello Wor";

const str4 = "Hello World";
const rotateAmnt4 = 4;
const expected4 = "orldHello W";


function rotateStr(str, n) {
    let res = "";
    let rotatedSubStr = "";
    n = n % str.length;

    for (let i = 0; i < str.length; i++) {
        if (i >= str.length - n) {
            rotatedSubStr += str[i];
        } else {
            res += str[i];
        }
    }
    return rotatedSubStr + res;
}

// slice the last `n` characters then concatenate that to the string without those last `n` characters
function rotateString(str, n) {
    return str.slice(str.length - n) + str.slice(0, str.length - n);
}



// String: ionIs Rotat (Is Rotation)
// Create the function isRotation(str1,str2) that
// returns whether the second string is a rotation of the first.


const strA1 = "ABCD";
const strB1 = "CDAB";
const expected1 = true;
// Explanation: if you start from A in the 2nd string, the letters are in the same order, just rotated

const strA2 = "ABCD";
const strB2 = "CDBA";
const expected2 = false;
// Explanation: all same letters in 2nd string, but out of order

function isRotation(str1, str2) {}

// const str4 = "Hello World";
// const rotateAmnt4 = 4;
// const expected4 = "orldHello W";

// "Hello WorldHello World"

// Solution approach:
// s1: ABCD
// s1 + s1: ABCDABCD

// s2: CDAB
// s2: DABC
// s2: BCDA
// all rotated versions of s2 are included in s1 + s1


// Time: O(n) linear, from the .includes loop
// Space: O(2n) -> O(n), where n is s1.length, 2n from s1 + s1
function isRotation(s1, s2) {
    if (s1.length !== s2.length) {
        return false;
    }
    return (s1 + s1).includes(s2);
}