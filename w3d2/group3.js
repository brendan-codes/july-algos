// Jason Brady, Joseph Sunderland, Zack Cowan

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


function rotateString(str, num) {
    num %= str.length;
    // define new str
    if (num === 0) {
        return str;
    }
    let newstr = "";
    //from num number cer from the end of str to the end of str
    for (let i = str.length - num; i < str.length; i++) {
        //add to the new str this gives the new str the end of old str
        newstr += str[i];
    }
    //now we need the strt of the old str
    for (let i = 0; i < str.length - num; i++) {
        //add to new str
        newstr += str[i]
    }


    return newstr;
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

function isRotation(str1, str2) {
    if (str1.length === str2.length && str1 !== str2) {
        for (let i = 0; i < str1.length; i++) {
            if (rotateString(str2, i) === str1) {
                return true;
            }
        }
        return false;
    } else {
        return false;
    }
}

function isRotationTwo(str1, str2) {
    let idx1 = 0;
    let idx2 = 0;
    if (str1.length !== str2.length || str1 === str2) {
        return false;
    }
    while (str1[idx1] !== str2[idx2] && idx2 < str2.length) {
        idx2++
    }
    if (idx2 === str2.length) {
        return false;
    }
    while (str1[idx1] === str2[idx2] && idx1 < str1.length) {
        idx1++;
        idx2++;
        if (idx2 === str2.length) {
            idx2 = 0;
        }
    }
    if (idx1 === str1.length) {
        return true;
    } else {
        return false;
    }

}