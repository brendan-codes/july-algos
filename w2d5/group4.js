// Jason Brady,Don Nguyen,David Carrillo

// matrix search

// given two matrices, return true or false if the second matrix is contained within the first.
// a matrix is just an array of arrays
// we can assume our matrices are rectangular
function compareValues(m1, m2, i, j) {
    let indexI = i;
    let indexJ = j;
    let k = 0;
    let l = 0;
    while (m1[indexI][indexJ] === m2[k][l]) {
        if (k === m2.length - 1 && l === m2[k].length - 1) {
            return true
        }
        if (l === m2.length - 1) {
            l = 0;
            k++;
            indexJ = j;
            indexI++;
        } else {
            l++;
            indexJ++;
        }


    }
    return false;
}


function matrixSearch(matrix1, matrix2) {
    const firstElement = matrix2[0][0];
    const m1Len1 = matrix1.length;
    const m1Len2 = matrix1[0].length;
    const m2Len1 = matrix2.length;
    const m2Len2 = matrix2[0].length;
    for (let i = 0; i < m1Len1; i++) {
        if (m1Len1 - i >= m2Len1) {
            for (let j = 0; j < m1Len2; j++) {
                if (matrix1[i][j] === firstElement && (m1Len2 - j >= m2Len2)) {
                    if (compareValues(matrix1, matrix2, i, j)) {
                        return true;
                    }
                }

            }
        }

    }
    return false;
}

console.log(matrixSearch([
    ['a', 'b', 'c'],
    ['a', 'b', 'c'],
    ['a', 'b', 'f'],
    ['a', 'c', 'x']
], [
    ['b', 'c'],
    ['b', 'c']
]))

// end code here
x = [
        ['a', 'b', 'c'], // 0
        ['a', 'b', 'c'], // 1
        ['a', 'b', 'f'], // 2
        ['a', 'c', 'x'] // 3
    ] //  0    1    2

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
rixa