// David Carrillo, Chase Pierce, Matthew Merrill
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

function encodeString(string) {
    let newString = "";
    let char = string[0];
    let count = 1;

    for (let i = 1; i < string.length; i++) {

        if (string[i] == char) {
            count++;
        } else {
            newString += char;
            if (count > 1) {
                newString += count;
            }
            count = 1;
            char = string[i];
        }
    }
    newString += char;
    if (count > 1) {
        newString += count;
    }
    return newString;
}


// String Decode

function stringDecode(str) {}

const str1 = "a3b2c1d3";
const expected1 = "aaabbcddd";