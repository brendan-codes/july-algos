// Members: Don, Matthew, Taichi.

// This is an actual interview algorithm given to a Coding Dojo alum

// Find Consecutive Sums

// You are given arr, a list of positive integers 0-255
// You are given k, a value 1-255

// Find all the consecutive groups of integers that add up to the value k

// O(n2)

// findConsqSums(arr, k);
// findConsqSums([2,5,3,6,7,0,0,23,12,0], 16)

// outputs: [
//   [2, 5, 3, 6],
//   [3, 6, 7]  // 3, 6, 7 appear consecutively, so they are including in the solution
//   [3, 6, 7, 0],
//   [3, 6, 7, 0, 0],
function findConsqSums(arr, desiredSum) {
    const sums = [];
    let j = 0;
    let k = 1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === desiredSum) {
            return sums.push(arr[i]);
        }
    }
    for (let j = 0; j < arr.length - 1; j++) {
        let result = arr[j];
        for (let k = 1; k < arr.length; k++) {
            if (result + arr[k] != desiredSum) {
                sums.push(arr[k]);
                result += arr[k];
            }
            k++;
        }
    }
    return sums;
}

function findConsqSums(arr, desiredSum) {
    const sums = [];
    const temp = [];
    let i = 0;
    let result = 0;

    for (let i; i < arr.length; i++) {
        temp.push(arr[i]);
        if ()
    }

    return sums;
}

/* function findConsqSums(arr, desiredSum) {
    const sums = [];

    for (let i = 0; i < arr.length; ++i) {
        const consecNums = [];
        let sum = 0;
        let j = i;

        while (sum <= desiredSum && j < arr.length - 1) {
            if (sum + arr[j] <= desiredSum) {
                sum += arr[j];
                consecNums.push(arr[j++]);

                if (sum === desiredSum) {
                // without slice, future additions to consecNums
                // will be added to the already pushed consecNums via reference
                    sums.push(consecNums.slice());
                }
            } else {
                break;
            }
        }
    }
    return sums;
}

console.log(findConsqSums([2, 5, 3, 6, 7, 0, 0, 23, 12], 16)); */