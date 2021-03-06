// Jason Brady, Nema, david
// Array: Partition


// partition(arr, left, right){}
// partition(arr, left, right){}
// [99, 77, 66, 33, 22, 11 ...... 222, 111]

// https://opendsa-server.cs.vt.edu/embed/quicksortAV
// https://www.youtube.com/watch?v=ZZuD6iUe3Pc
// https://upload.wikimedia.org/wikipedia/commons/8/84/Lomuto_animated.gif

// Steps:
// 1. Pick an item out of the arr to be your pivot value
//   - usually the middle item or the last item
// 2. Partition the array IN PLACE such that all values less than the pivot are to the left of it
//    and all values greater than the pivot are to the right (not perfectly sorted)
// 3. return: new idx of the pivot value


// Params: arr, left, right
    // - for now, left will be 0, and right will be the last idx
    // - later these params will be used to specify a sub section of the array to partition

function partition(arr, start = 0, end = arr.length -1){
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };

    //We are assuming the pivot is always the first element
    let pivot  = arr[start];
    let swapIdx = start;

for(let i = start + 1; i <= end; i++){

    }
}