// #1 String: Dedupe
// Given a string,
// return a new string with the duplicates excluded
// Bonus: Keep only the last instance of each character.
// Bonus: Keep the string stable

const str1 = "abcABC";
const expected1 = "abcABC";


const str2 = "helloo";
const expected2 = "helo";

const str3 = "hohehn";
const expected2 = "oehn";


function stringDedupe(str) {
    let distinctStr = "";
    const seen = {};

    for (let i = str.length - 1; i >= 0; --i) {
        if (!seen[str[i]]) {
            distinctStr = str[i] + distinctStr;
            seen[str[i]] = true;
        }
    }
    return distinctStr;
}




// #2 isAnagram

// Given two strings
// return whether or not they are anagrams (true or false)

// an anagram is a string that uses all the same letters the same number of times as another string
// think of it as just a jumbled name.


const strA1 = "yes";
const strB1 = "eys";
const expected1 = true;

const strA2 = "yes";
const strB2 = "eYs";
const expected2 = true;

const strA3 = "no";
const strB3 = "noo";
const expected3 = false;

const strA4 = "silent";
const strB4 = "listen";
const expected4 = true;

const strA5 = "code";
const strB5 = "code";
const expected5 = true;


let character = "X";
character = character.toLowerCase();
// => x

function isAnagram2(s1, s2) {
    if (s1.length !== s2.length) {
        return false;
    }

    for (let i = 0; i < s1.length; i++) {
        let s1CharCount = 0;
        let s2CharCount = 0;
        let currChar = s1[i].toLowerCase();

        // count how many times currChar appears in both strings
        for (let j = 0; j < s1.length; ++j) {
            if (s1[j].toLowerCase() === currChar) {
                s1CharCount++;
            }

            if (s2[j].toLowerCase() === currChar) {
                s2CharCount++;
            }
        }

        if (s1CharCount !== s2CharCount) {
            return false;
        }
    }
    return true;
}