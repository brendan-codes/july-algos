// Intersect Sorted Arrays

// Combine two already sorted multiset arrays into
// an array containing the sorted set intersection of the two.

// Only the shared values between the two arrays, deduped.

// input: [1,2,2,2,7], [2,2,6,6,7]
// output: [2,7]

// members: Taichi, Jason, Matthew, Arnold

function intersection(arr1, arr2) {
    let newArr = [];
    // while loop
    // idx1 for arr1, idx2 for arr2
    // while idx1 < arr1.length and idx2 <arr2.length
    // if arr1[idx1]  == arr2[idx2] then push value into newArr
    // otherwise, increment idx with the lower value.
    // return newArr
}

// === GLOSSARY ===
function hideStuff() {
    // collection: grouped data. arrays, lists, sets, multisets
    // set: a collection with no duplicates, does not track count of values
    // multiset: a collection that allows duplicates, tracks count of values
    // intersection: all the values that exist across multiple collections, deduped
}

function intersection(arr1, arr2) { // array
    let newArr = [];
    let idx1 = 0;
    let idx2 = 0;
    while (idx1 < arr1.length && idx2 < arr2.length) {
        if (arr1[idx1] === arr1[idx1 + 1]) {
            idx1++;
        }
        if (arr2[idx2] === arr2[idx2 + 1]) {
            idx2++;
        } else if (arr1[idx1] === arr2[idx2]) {
            newArr.push(arr1[idx1]);
            idx1++;
            idx2++;
        } else if (arr1[idx1] < arr2[idx2]) {
            idx1++;
        } else {
            idx2++;
        }
    }
    return newArr;
}


function freqIntersection(arr1, arr2) {
    freq1 = {};
    freq2 = {};
    newArr = [];
    for (var i = 0; i < arr1.length; i++) {
        freq1[arr1[i]] = 1;
    }
    for (var j = 0; j < arr2.length; j++) {
        freq2[arr2[j]] = 1;
    }
    Object.keys(freq1).forEach((key, index) => {
        if (key in freq2) {
            newArr.push(parseInt(key));
        }
    });
    return newArr;
}