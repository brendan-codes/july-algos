//Joseph,Bryce,Fabian,Nema
// This is an actual interview algorithm given to a Coding Dojo alum

// Find Consecutive Sums

// You are given arr, a list of positive integers 0-255
// You are given k, a value 1-255

// Find all the consecutive groups of integers that add up to the value k

// O(n2)

// findConsqSums(arr, k);
// findConsqSums([2,5,3,6,7,0,0,23,12,], 16)

// outputs: [
//   [2, 5, 3, 6],
//   [3, 6, 7]  // 3, 6, 7 appear consecutively, so they are including in the solution
//   [3, 6, 7, 0],
//   [3, 6, 7, 0, 0],
// ]

function findConsqSums(arr, num) {
    var arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        let temp = arr[i];
        let index = i + 1;
        let arr1 = []
        arr1.push(arr[i])
        while (temp <= num) {
            temp = temp + arr[index]
            arr1.push(arr[index])
            index++
            if (temp == num) {
                arr2.push(arr1);
            }
        }
    }
    return arr2;
}
findConsqSums([2, 5, 3, 6, 7, 0, 0, 23, 12, ], 16);
console.log(findConsqSums([2, 5, 3, 6, 7, 0, 0, 23, 12, ], 16))