// Jason Brady,bryce, taichi

// String Encode
// You are given a string that may contain sequences of consecutive characters.
// Create a function to shorten a string by including the character,
// then the number of times it appears.

// If final result is not shorter (such as "bb" => "b2" ),
// return the original string.

function stringEncode(str) {
    let newStr = "";
    let count = 1;
    for (let i = 0; i < str.length; i++) {
        if (str[i + 1] !== str[i] || i === str.length - 1) {
            newStr += str[i] + count;
            count = 1;
        } else {
            count++;
        }
    }
    if (newStr.length < str.length) {
        return newStr;
    } else {
        return str;
    }
}

const str1 = "aaaabbcdddbbb";
const expected1 = "a4b2c1d3b3";

const str2 = "";
const expected2 = "";

const str3 = "a";
const expected3 = "a";

const str4 = "bbcc";
const expected4 = "bbcc";


// String Decode

function stringDecode(str) {
    let newStr = "";
    let count = "";
    let letter = "";
    for (let i = 0; i < str.length; i++) {
        if (isNaN(str[i])) {
            for (let j = 0; j < parseInt(count); j++) {
                newStr += letter;
            }
            count = "";
            letter = str[i];
        } else {
            count += str[i];
        }
    }
    for (let j = 0; j < parseInt(count); j++) {
        newStr += letter;
    }
    return newStr;
}

const str1 = "a3b2c1d3";
const expected1 = "aaabbcddd";