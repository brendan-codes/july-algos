// Jason Brady, Nema, Joseph Sunderlund

/*
  #1
  Reverse Word Order
  Given a string of words separated with spaces
  return a new string with words in reverse sequence.
*/

const str1 = "This is a test";
const expected1 = "test a is This";

function revOrder(str, del) {
    const arr = [];
    let newString = "";
    let newWord = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== del) {
            newWord = newWord + str[i]
        } else if (newString === "") {
            newString = newWord + newString;
            newWord = "";
        } else {
            newString = newWord + del + newString;
            newWord = "";
        }
    }
    newString = newWord + del + newString;
    return newString;
}
// iterate through string, searching for delimiter.
// once delimiter is reached, push word onto array.
// build new string in reverse order..

/*
  #2
  Reverse Words
  Given a string containing space separated words
  Reverse each word in the string.
  If you need to, use .split to start, then try to do it without.
*/

function revWords(str) {
    const del = " ";
    let newStr = "";
    let newWord = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== del) {
            newWord = str[i] + newWord;
        } else {
            newStr = newStr + newWord + del;
            newWord = "";
        }
    }
    newStr = newStr + newWord;
    return newStr;
}

const str1 = "hello";
const expected1 = "olleh";

const str2 = "hello world";
const expected2 = "olleh dlrow";

const str3 = "abc def ghi";
const expected3 = "cba fed ihg";




// string .split()

const x = "abc efg";
x[3] = "d";
const letters = x.split("");
// => ["a", "b", "b", " ", "e", "f", "g"];

const y = "123 456";
const numbers = y.split(" ");
// => ["123", "456"];

const z = "apple, pear, orange";
const fruit = z.split(", ");
// => ["apple", "pear", "orange"]

const a = "mr.";
const b = "example";

const c = a + " " + b;
const d = `${a} ${b}`;
ne