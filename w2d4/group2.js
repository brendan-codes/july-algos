// Jason Brady, Joseph Sunderland


// #1 - Missing Value

// You are given an array with the length of n that contains in no order integers from 0 to n.
// The length of the array is n and the largest number is no bigger than n.

// Quickly determine and return the missing value.

// The short version: If I give you an array of 1-9 and it's missing a number, how do you find it?

// given [3, 0, 1]
// return 2

// given [5, 2, 7, 8, 4, 9, 3, 0, 1]
// return 6


function findMissingValue(arr) {
    let sum = 0;
    let natSum = arr.length;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        natSum += i;
    }
    return natSum - sum;
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
    let start = 0;
    let end = arr.length - 1;
    let mid;
    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        if (arr[mid - 1] > arr[mid]) {
            return arr[mid];
        }
        if (arr[mid + 1] < arr[mid]) {
            return arr[mid + 1]
        }
        if (arr[mid] > arr[end]) {
            start = mid;
        } else {
            end = mid;
        }
    }
}