// matrix search

// given two matrices, return true or false if the second matrix is contained within the first.
// a matrix is just an array of arrays
// we can assume our matrices are rectangular

function matrixSearch(matrix1, matrix2) {

}

x = [
    ['a', 'b', 'c'], // 0
    ['a', 'b', 'c'], // 1
    ['a', 'b', 'f'], // 2
    ['a', 'c', 'x'] // 3
];

// the first element is the y axis
// the second element is the x axis
console.log(x[0][0])

y = [
    ['b', 'c'],
    ['b', 'c']
]


z = [
    ['a', 'c'],
    ['a', 'c']
];


// returns the index of the upper left corner of the match or returns [-1, -1]
function matrixSearch(matrix, search) {
    const first = search[0][0];
    const searchHeight = search.length;
    const searchWidth = search[0].length;
    const relevantHeight = matrix.length - searchHeight + 1;
    const relevantWidth = matrix[0].length - searchWidth + 1;

    for (let i = 0; i < relevantHeight; i++) {
        for (let j = 0; j < relevantWidth; j++) {
            // keep going until we find the first value of our search
            if (matrix[i][j] !== first) continue;

            // move in unison until broken
            for (var k = 0, matching = true; k < searchHeight && matching; k++) {
                for (let l = 0; l < searchWidth && matching; l++) {
                    if (search[k][l] !== matrix[i + k][j + l]) {
                        // matching = false;
                        return false
                    }
                }
            }
            // if (matching) return [i, j];
            return true;
        }
    }

    // return [-1, -1];
    return false;
}