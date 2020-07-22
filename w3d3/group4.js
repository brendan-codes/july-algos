// Jason Brady, David Carrillo 

// #1 String: Dedupe
// Given a string,
// return a new string with the duplicates excluded
// Bonus: Keep only the last instance of each character.
// Bonus: Keep the string stable

function stringDeDupe(str) {
    let newStr = "";
    let freq = {};
    for (let i = 0; i < str.length; i++) {
        if (freq[str[i]]) {
            freq[str[i]]++;
        } else { freq[str[i]] = 1 };
    }
    for (let j = 0; j < str.length; j++) {
        freq[str[j]]--;
        if (freq[str[j]] === 0) {
            newStr += str[j];
        }
    }
    return newStr;
}

const str1 = "abcABC";
const expected1 = "abcABC";


const str2 = "helloo";
const expected2 = "helo";

const str3 = "hohehn";
const expected2 = "oehn";

function anagrams(stringA, stringB) {
    const aCharMap = buildCharMap(stringA);
    const bCharMap = buildCharMap(stringB);

    // case to check if length of keys.  Must be strA===strB to be an anagram.
    if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
        return false;
    }

    //to iterate over an "object" ( let char IN)
    for (let char in aCharMap) {
        if (aCharMap[char] !== bCharMap[char]) {
            return false;
        }
    }

    return true;
}

function buildCharMap(str) {
    const charMap = {};

    //regular expression to remove unwanted chars and to lowercase the string as well
    for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1;
    }

    return charMap;
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
function isAnagram(str1, str2) {
    let freq1 = {};
    let freq2 = {};
    if (str1.length !== str2.length) {
        return false;
    }
    for (let i = 0; i < str1.length; i++) {
        if (freq1[str1[i]]) {
            freq1[str1[i]]++;
        } else {
            freq1[str1[i]] = 1;
        }
        if (freq2[str2[i]]) {
            freq2[str2[i]]++;
        } else {
            freq2[str2[i]] = 1;
        }
    }
    Object.keys(freq1).map(key => {
        if (freq1[key] !== freq2[key]) {
            return false;
        }
    });
    return true;
}