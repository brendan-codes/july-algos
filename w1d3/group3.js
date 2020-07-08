// Members: Taichi, Don, Zack

// Array: Merge Sort
// visualization: https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/

// Time Complexity
//  - Best case: O(n log(n))
//  - Average case: O(n log(n))
//   - Worst case: O(n log(n))

let array = [3,7,1,5,4,9]

function mergeSort(arr) {
    let len = arr.length;
    let mid = Math.floor(len/2);
    let l = arr.slice(0,mid);
    let r = arr.slice(mid);

    if( arr.length < 2){
        return arr;
    }
    return merge(mergeSort(l), mergeSort(r));
}

function merge(l, r) {
    let result = [];
    let indexl = 0;
    let indexr = 0;
    while (indexl < l.length && indexr < r.length){
        if(l[indexl] < r[indexr]) {
            result.push(l[indexl]);
            indexl ++;
        }
        else {
            result.push(r[indexr]);
            indexr ++;
        }
    }
    return result;

}

mergeSort(array);
console.log(array);




// MergeSort(arr[], l,  r)
// If r > l
//      1. Find the middle point to divide the array into two halves:
//              middle m = (l+r)/2
//      2. Call mergeSort for first half:
//              Call mergeSort(arr, l, m)
//      3. Call mergeSort for second half:
//              Call mergeSort(arr, m+1, r)
//      4. Merge the two halves sorted in step 2 and 3:
//              Call merge(arr, l, m, r)


// //steps:
//     1. create a merge function to merge two already sorted arrays into a single sorted array
//       - you do NOT need to work in place, ok to use a new array
//     2. create merge sort function to sort the provided array
//       - split the array into half and recursively merge the halves
//       - splitting of arrays stops when array can no longer be split
//       - an array of 1 item is by definition sorted, so two arrays of 1 item can therefore be merged into a sorted array



//   useful methods
//   - arr.concat(array2, array3, ..., arrayX)
//     - combines array arg(s) with the array that concat is called on
//     - returns new arr w/o mutating originals
//   - arr.slice([begin[, end]])
//     - returns a copy of the specified portion of the array
//     - end is exclusive
//       - if omitted, slices from provided 'begin' to end of array