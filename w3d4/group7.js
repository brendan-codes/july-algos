// String Encode
// You are given a string that may contain sequences of consecutive characters.
// Create a function to shorten a string by including the character,
// then the number of times it appears.

// If final result is not shorter (such as "bb" => "b2" ),
// return the original string.

function stringEncode(str) {}

const str1 = "aaaabbcdddbbb";
const expected1 = "a4b2c1d3b3";

const str2 = "";
const expected2 = "";

const str3 = "a";
const expected3 = "a";

const str4 = "bbcc";
const expected4 = "bbcc";

function encodeStr(str) {
    if (str.length === 0) {
        return "";
    }

    let encoded = "";
    let currChar = str[0];
    let currCharCount = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === currChar) {
            currCharCount++;
        }
        if (str[i] !== currChar || i === str.length - 1) {
            encoded += currChar + currCharCount;
            currChar = str[i];
            currCharCount = 1;
        }
    }
    return encoded.length < str.length ? encoded : str;
}

// String Decode

function strDecode(str) {
    let decoded = "";

    for (let i = 0; i < str.length; i++) {
        let n = parseInt(str[i]);

        if (n) {
            decoded += str[i - 1].repeat(n); // The repeat() method constructs and
            // returns a new string which contains the specified number of copies of
            // the string on which it was called, concatenated together.
        }
    }
    return decoded;
}

const str1 = "a3b2c1d3";
const expected1 = "aaabbcddd";