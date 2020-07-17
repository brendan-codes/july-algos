//Name:Matthew,Ben, Taichi, Don
// #1 - Missing Value

// You are given an array with the length of n that contains in no order integers from 0 to n.
// The length of the array is n and the largest number is no bigger than n.

// Quickly determine and return the missing value.

// The short version: If I give you an array of 1-9 and it's missing a number, how do you find it?

// given [3, 0, 1]
// return 2

// given [5, 2, 7, 8, 4, 9, 3, 0, 1]
// return 6

//letval==0
//loop through looking for val
//if find val increment and look for new val
//else return val as not found



function findMissingValue(arr) {
    var n = arr.length + 1;
    var sum = 0;
    var expectedSum = n * (n + 1) / 2;

    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return expectedSum - sum;
}
console.log(findMissingValue([1, 3, 4, 5, 7, 8, 6]));

// # 2 - Min of Sorted - Rotated


// You are given an an array (up to 255 thousand numbers long) of numbers that has first been sorted, then rotated by an unknown amount.
// Find and return the minimum value. Don't use any inbuilt Array functions.

//                       v here is out rotation point
//                       v
//                       v
// Given [9, 10, 11, 12, 1, 5, 6, 8]
// return 1

function minOfSortedRotated(arr) {
    var min = arr[0]
    while (i = 0; i < arr.length; i++) {
        if i < min,
            let i = min
        else
    }

}