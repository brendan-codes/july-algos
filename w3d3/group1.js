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

function Dedupe(str) {
    let freq1 = {};
    let newStr = "";
    for (var i = 0; i < str.length; i++) {
        freq1[str[i]] += 1;
    }
    Object.keys(freq1).forEach((key, index) => {
        if (key in freq1 == 1) {
            newStr += key
        }
    });
    return newStr;

}

function Dedupe(string) {
    var freq = {};
    var newarr = [];
    for (i = 0; i < string.length; i++) {
        console.log("i: ", i, "String: ", string[i])
        console.log("Freq: ", freq)
        if (!freq[string[i]]) {
            freq[string[i]] = 1
            newarr.push(string[i]);
            // console.log(newarr)
        }
        console.log(newarr, "\n\n")
    }
    return newarr
}

Dedupe(str2)

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
// => xtrA3 = "no";
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
// => xtrA3 = "no";
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
// => xtrA3 = "no";
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
// => xtrA3 = "no";
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
// => xtrA3 = "no";
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
// => xtrA3 = "no";
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
// => xtrA3 = "no";
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
// => xtrA3 = "no";
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
// => xtrA3 = "no";
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
// => xtrA3 = "no";
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
// => xtrA3 = "no";
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
// => xtrA3 = "no";
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
// => xtrA3 = "no";
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
// => xtrA3 = "no";
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
// => xtrA3 = "no";
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
// => xtrA3 = "no";
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