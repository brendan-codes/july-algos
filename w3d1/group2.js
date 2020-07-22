//Name:Don Nguyen, Matthew Merrill, Chase Pierce,Bryce Alderete

/*
  #1
  Reverse Word Order
  Given a string of words separated with spaces
  return a new string with words in reverse sequence.
*/

const str1 = "This is a test";
const expected1 = "test a is This";

function ReverseOrder(str) {
    var result = "";
    var split = str.split(" "); //["this", "is", "a" ,"test"]

    for (var i = split.length - 1; i >= 0; i--) {
        result += split[i] + " ";
    }
    return result;
}
console.log(ReverseOrder("This is a test"));

/*
  #2
  Reverse Words
  Given a string containing space separated words
  Reverse each word in the string.
  If you need to, use .split to start, then try to do it without.
*/

function ReverseWord(str) {
    var result = "";
    var split = str.split(" "); //hello ["h", "e", "l", "l", "o"]
    for (var i = 0; i < split.length; i++) {
        var temp = split[i].split("");
        for (var j = temp.length - 1; j >= 0; j--) {
            result += temp[j];

        }
        result = result + " ";


    }
    return result;
}
console.log(ReverseWord("This is a test"));



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