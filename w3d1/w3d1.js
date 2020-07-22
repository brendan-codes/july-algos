/*
  #1
  Reverse Word Order
  Given a string of words separated with spaces
  return a new string with words in reverse sequence.
*/

const str1 = "This is a test";
const expected1 = "test a is This";

function reverseWordOrder(wordsStr) {
    let currWord = "";
    let reversedWordOrder = "";

    for (let i = wordsStr.length - 1; i >= 0; i--) {
        if (wordsStr[i] !== " ") {
            // prepend so the Word itself is not reversed by looping backWords
            currWord = wordsStr[i] + currWord;
        }
        // space found
        else {
            // add a space in front of the word, except on first word
            if (reversedWordOrder.length > 0) {
                currWord = " " + currWord;
            }

            reversedWordOrder += currWord;
            currWord = "";
        }
    }

    // no space at end of string means we didn't add the last word
    if (currWord.length > 0) {
        reversedWordOrder += " " + currWord;
    }
    return reversedWordOrder;
}

/*
  #2
  Reverse Words
  Given a string containing space separated words
  Reverse each word in the string.
  If you need to, use .split to start, then try to do it without.
*/



function reverseWordsSplit(wordsStr) {
    const words = wordsStr.split(" ");
    let wordsReversed = "";

    for (const word of words) {
        let reversedWord = "";

        for (let i = word.length - 1; i >= 0; i--) {
            reversedWord += word[i];
        }

        // add a space in front of word if it's not the first word
        if (wordsReversed.length > 0) {
            reversedWord = " " + reversedWord;
        }
        wordsReversed += reversedWord;
    }
    return wordsReversed;
};

function reverseWords(wordsStr) {
    let reversedWord = "";
    let wordsReversed = "";

    for (const char of wordsStr) {
        if (char !== " ") {
            // prepend to reverse it
            reversedWord = char + reversedWord;
        }
        // space found
        else {
            // add space in front of word if not first word added
            if (wordsReversed.length > 0) {
                reversedWord = " " + reversedWord;
            }

            wordsReversed += reversedWord;
            reversedWord = ""; // reset
        }
    }

    // last word wasn't added if there are no trailing spaces at the end to cause it to be added
    if (reversedWord.length > 0) {
        // to avoid adding a space when it's the only word
        if (wordsReversed.length !== 0) {
            reversedWord = " " + reversedWord;
        }
        wordsReversed += reversedWord;
    }

    return wordsReversed;
}

console.log(reverseWords(str1));


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