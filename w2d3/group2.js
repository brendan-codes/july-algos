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
// ]


// function findConsqSums(arr, k) {
//     var len = arr.length;
//     var newarr = []
//     for (i = 0; i < len; i++) {
//         for (j = i; j < len; j++) {
//             if (arr[i] + arr[j] == k) {
//                 newarr.push(arr[i])
//                 newarr.push(arr[j])

//             }
//         }
//     }
// }

function consecutiveSums(arr, k) {
    solutions = [];
    for (let i = 0; i < arr.length; i++) {
        let sum = arr[i];
        let idx = i;
        if (sum <= k) {
            while (sum <= k && idx < arr.length) {
                idx++;
                sum += arr[idx];
                if (sum === k) {
                    solutions.push(arr.slice(i, idx + 1));
                }
            }
        }
    }
    return solutions;
}


[
    [2, 5, 3, 6],
    [3, 6, 7],
    [3, 6, 7, 0],
    [3, 6, 7, 0, 0]
]