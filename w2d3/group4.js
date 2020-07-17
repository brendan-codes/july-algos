// Chase Pierce & Damien Simmons

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

function findConsqSums(arr, k) {
    const sumConsecutives = (s) => {
        let result = [],
            temp = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] + arr[i + 1] < k) {
                result.push(arr[i]);
            } else {
                return result;
            }
        };
    };
};

const sumConsecutives = (s) => {
let result = [],
    temp = 0;
for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
        temp += s[i];
    } else if (s[i] !== s[i + 1]) {
        result.push(temp + s[i]);
        temp = 0;
    }
}
return result;
};;
}];