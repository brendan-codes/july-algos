// Don Nguyen, Chase Pierce, Joseph Sunderland

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


function dedupe(string){
    // Let's use a frequency table! We'll loop through the string and populate the frequency table
    // with how many times each character appears
    let freq = {};
    for(let i = 0; i < string.length; i++) {
        if(!freq[string[i]]){
            freq[string[i]] = 1;
        } else {
            freq[string[i]]++;
        }
    }
    // Now let's create our new string!
    let newString = "";
    // The goal here is to loop through the string, and use the frequency table
    // to determine if the character we're looking at is the last one in the string
    for(let i = 0; i < string.length; i++) {
        // Decrement the value in the frequency table for each character
        freq[string[i]]--;
        // If, after decrementing the value in the frequency table, the value is 0,
        // that means it's the last time the character appears in the string, so we can
        // add the character to the new string.
        if(freq[string[i]] == 0){
            newString += string[i];
        }
    }

    return newString;
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
function isAnagram(str1, str2){
  if (str1.length !== str2.length){
    return false
  }
//   str1 = str1.toLowerCase()
//   str2 = str2.toLowerCase()
  var new1 = str1.toLowerCase().split("").sort().join("");
  var new2 = str2.toLowerCase().split("").sort().join("");
  return new1 == new2
}