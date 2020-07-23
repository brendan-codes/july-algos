//Joseph Sunderland, Ben Jensen, Ivan Moncada
// String Encode
// You are given a string that may contain sequences of consecutive characters.
// Create a function to shorten a string by including the character,
// then the number of times it appears.

// If final result is not shorter (such as "bb" => "b2" ),
// return the original string.

function stringEncode(str) {
    console.log(str)
    var encodable = false;
    for (i = 0; i < str.length; i++) {
        if (str[i] == str[i + 1] && str[i + 1] == str[i + 2]) {
            var count = 0;
            var encodedStr = "";
            for (i = 0; i < str.length; i++) {
                count += 1;
                if (str[i] !== str[i + 1]) {
                    encodedStr += str[i] + count;
                    count = 0;
                }
            }
            console.log("Final Encoded String: ", encodedStr)
            return encodedStr
        }
    }
    console.log(str, "is Not Encodable")
    return str
}

const str1 = "aaaabbcdddbbb";
const expected1 = "a4b2c1d3b3";

const str2 = "";
const expected2 = "";

const str3 = "a";
const expected3 = "a";

const str4 = "bbcc";
const expected4 = "bbcc";

// stringEncode(str4);

// String Decode

function stringDecode(str) {
    var decodedStr = "";
    for (i = 0; i < str.length; i += 2) {
        for (j = 1; j <= str[i + 1]; j++) {
            decodedStr += str[i];
        }
    }
    console.log(decodedStr)
    return decodedStr
        //for every other
        // add to string each i=# after letter
}

// const str1 = "a3b2c1d3";
// const expected1 = "aaabbcddd";

// stringDecode(str1)

stringDecode(stringEncode(str1))