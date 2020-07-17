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
    // method 1 (efficiency depends on the method of sort used)
    // sort array
    let sortedArr = quickSort(arr, 0, arr.length - 1);
    // iterate through sorted array until arriving at missing value
    // while loop until the loop reaches the end of the array or when it finds the missing value
    let i = 0;
    while (i < sortedArr.length + 1 || i === sortedArr[i]) {
        // if the current value in the loop equals to its index value, it is not the missing value
        // increment value of i and continue loop
        console.log(i);
        console.log(sortedArr[i]);
        i++;
    }
    // edge-case for when there's no missing value
    // i should be equal to the length of the sorted array +1 if it completes the while loops without finding a missing value
    if (i === sortedArr.length + 1) {
        return null;
    }
    // if the current value in the loop DOES NOT equal to its index value, exit while loops and current value is the missing value
    // return the current (missing) value
    return sortedArr[i];
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left >= right) {
        return;
    }

    const pivot = PartitionLomuto(arr, left, right);

    quickSort(arr, left, pivot - 1);
    quickSort(arr, pivot, right);

    return arr;
}

let swap = (arr, i, j) => {
    // swap two indexes in an array
    [arr[i], arr[j]] = [arr[j], arr[i]]
};


let PartitionLomuto = (arr, left, right) => {
    if (left === undefined) {
        left = 0;
    }

    if (right === undefined) {
        right = arr.length - 1;
    }
    // select a pivot
    const pivot = arr[right];
    // start at the left most index
    let i = left;

    // looping from the left index until the right
    for (let j = left; j < right; j++) {
        // if that value is less than or equal to the pivot
        if (arr[j] <= pivot) {
            // swap!
            swap(arr, i, j);

            // and move i!
            i++;
        }
    }
    // final swap to put the pivot back in the right spot
    swap(arr, i, right);

    // and return it's index
    return i;
}

console.log(findMissingValue([5, 2, 7, 8, 4, 9, 3, 0, 1]));


// #2 - Min of Sorted-Rotated


// You are given an an array (up to 255 thousand numbers long) of numbers that has first been sorted, then rotated by an unknown amount.
// Find and return the minimum value. Don't use any inbuilt Array functions.

//                       v here is out rotation point
//                       v
//                       v
// Given [9, 10, 11, 12, 1, 5, 6, 8]
// return 1

function minOfSortedRotated(arr) {
    var mid = Math.floor(arr.length / 2)
    var i = 1
    var j = 1
    if (arr[mid] > arr[mid - i]) {
        mid = mid - 1;
        while (arr[mid] > arr[mid - i]) {
            i++;
            mid = mid - i
        }
        return arr[mid];
    } else if (arr[mid] > arr[mid + j]) {
        mid = mid + j;
        while (arr[mid] > arr[mid + j]) {
            j++;
            mid = mid + j
        }
    }
    return arr[mid]
}


console.log(minOfSortedRotated([9, 10, 11, 12, 1, 5, 6, 8]))