// #1 - Missing Value
// David Carrillo CLAIMED!

// You are given an array with the length of n that contains in no order integers from 0 to n.
// The length of the array is n and the largest number is no bigger than n.

// Quickly determine and return the missing value.

// The short version: If I give you an array of 1-9 and it's missing a number, how do you find it?

// given [3, 0, 1]
// return 2

// given [5, 2, 7, 8, 4, 9, 3, 0, 1]
// return 6
/*
Psuedo:
-declare var to hold length
-another var to hold 'total'
- loop over the array and total -=arr[i]

*/


function findMissingValue(arr) {
    var x = 0;
    for (var i = 0; i < arr.length; i++) {
        x = x + 1;
        if (arr[i] != x) {
            return (x);
        }
    }
}
console.log(findMissingValue([1, 2, 3, 4, 5, 6, 7, 8, 10]));

function findMissingValue(arr) {

    var n = arr.length;
    var total = (n * (n + 1) / 2);
    var missingValue = 0;

    for (let i = 0; i < arr.length; i++) {
        total -= arr[i];

    }



}


// #2 - Min of Sorted-Rotated


// You are given an an array (up to 255 thousand numbers long) of numbers that has first been sorted, then rotated by an unknown amount.
// Find and return the minimum value. Don't use any inbuilt Array functions.

//                       v here is out rotation point
//                       v
//                       v
// Given [9, 10, 11, 12, 1, 5, 6, 8]
// return 1

function minOfSortedRotated(arr) {

}