// matrix search

// given two matrices, return true or false if the second matrix is contained within the first.
// a matrix is just an array of arrays
// we can assume our matrices are rectangular

function matrixLoop(matrix, start, layer, reference) {
    console.log("Start:", start[0], start[1])
    console.log("Looking For: ", reference)
    for (j = 0; j <= layer; j++) {
        var val = matrix[j][layer];
        console.log("Found ", reference, "j: ", j, "val: ", val)
        if (val == reference) {
            console.log("Matrix 1: ", j, layer)
            return true
        }
    }
    for (i = layer - 1; i >= 0; i--) {
        var val = matrix[layer][i]
        console.log("i: ", i, "val: ", val)
        if (val == reference) {
            console.log("Matrix 1: ", layer, i)
            return true
        }
    }
}

function matrixSearch(matrix1, matrix2) {
    var rows1 = matrix1.length
    var rows2 = matrix2.length;
    var columns1 = matrix1[0].length
    var columns2 = matrix2[0].length

    console.log("Rows 1: ", rows1, "Columns 1: ", columns1, "Rows 2:", rows2, "Columns 2:", columns2)
    if (rows1 < rows2 || columns1 < columns2) {
        console.log("The second matrix is larger")
        return false
    }

    var layer = 0;
    var start = [0, 0]
    var reference = matrix2[0][0];
    matrixLoop(matrix1, start, layer, reference)
}



x = [
        ['a', '1', 'c'], // 0
        ['3', '2', 'c'], // 1
        ['a', 'b', 'f'], // 2
        ['a', 'c', 'x'] // 3
    ] //  0    1    2

// the first element is the y axis
// the second element is the x axis
// console.log(x[0][0])

y = [
    ['a', 'c'],
    ['b', 'c']
]


z = [
    ['a', 'c'],
    ['a', 'c']
];

// i column
// j row



// matrixLoop(x,0)
matrixSearch(x, y)