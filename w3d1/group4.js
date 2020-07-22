/*
  #1
  Reverse Word Order
  Given a string of words separated with spaces
  return a new string with words in reverse sequence.
*/
const str1 = "This is a test";
const expected1 = "test a is This";

// function reverseWordOrder(string1) {
//     const words = string1.split(" ")
//         // const wordsarr = []
//     const newStr = ""
//     for (i = words.length; i = 0; i--) {
//         newStr += words[i];
//     }
//     return newStr
// }


function reverseWordOrder(string1) {
    const words = string1.split(" ")
    console.log(words)
    const len = words.length;
    console.log(len)
        // const wordsarr = []
    var newStr = ""
    for (i = len - 1; i >= 0; i--) {
        console.log("i: ", i, "i Word", words[i])
        newStr += " " + words[i];
    }
    console.log("This is the new String", newStr)
    return newStr
}

reverseWordOrder(str1)



// wordsarr.push(words[i]);
// split by space
// loop through each word backwards pushing to a new string
// concat strings & print





/*
  #2
  Reverse Words
  Given a string containing space separated words
  Reverse each word in the string.
  If you need to, use .split to start, then try to do it without.
*/

const str1 = "hello";
const expected1 = "olleh";

const str2 = "hello world";
const expected2 = "olleh dlrow";

const str3 = "abc def ghi";
const expected3 = "cba fed ihg";

function reverseWord(str) {
    var revstr = "";
    for (var i = str.length; i <= str; i--) {
        revstr += str.charAt(i);
    }
    return revstr
}

console.log(reverseWord("hello"))
console.log(reverseWord("hello world"))
console.log(reverseWord("abc def ghi"))

function reverseWord(str) {
    var revstr = "";
    for (var i = str.length; i >= 0; i--) {
        revstr += str.charAt(i);
        console.log("This is the rev String", revstr)
    }
    console.log("This is the reverse string", revstr)
    return revstr
}

reverseWord(str3)








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
const d = `${a} ${b}`;;
wrdver // wordsarr.push(words[i]);orst()tv.