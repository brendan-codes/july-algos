/*
  #1
  Reverse Word Order
  Given a string of words separated with spaces
  return a new string with words in reverse sequence.
*/

const str1 = "This is a test";
const expected1 = "test a is This";

function reverseWordOrder(str) {
    // method 1
    // split each word in the original string separated by spaces with .split(" ")
    let newArr = str1.split(" ");
    console.log(newArr);
    // use nested for loops to either swap or create a new array of strings with reversed word
    for (i = 0; i < newArr.length; i++) {
        console.log(newArr[i]);
        let strlen = Math.floor(newArr[i].length / 2);
        if (newArr[i].length <= 1) {
            // do nothing
        } else if (newArr[i].length = 2) {
            console.log(newArr[i][0]);
            let temp = newArr[i][0];
            newArr[i][0] = newArr[i][1];
            newArr[i][1] = temp;
        } else {
            for (j = 0; j < strlen; j++) {
                let temp = newArr[i][j];
                newArr[i][j] = newArr[i][newArr[i].length - j];
                newArr[i][newArr[i].length - j] = temp;
            }
        }
        console.log(newArr[i]);
    }
    // concatenate reversed strings with spaces in between each word
}




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
spl