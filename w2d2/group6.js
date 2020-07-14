/*
  Union Sorted Arrays
  Efficiently combine two already-sorted multiset arrays into a new sorted array containing the multiset union.
  Unions by default will take the set of dupes that has the highest occurences from one array.
*/

const arr1 = [1, 2, 2, 2, 7];
const arr2 = [2, 2, 6, 6, 7];
const output = orderedMultisetUnion(arr1, arr2);

/*
  Output: [1, 2, 2, 2, 6, 6, 7]
  Explanation: Every int from each set is included in the result,
  for dupes, like 2, include it 3 times, because it occurs 3 times at most in ONE set
*/

function orderedMultisetUnion(arr1, arr2) {

}

// no time / space constraints
// always integers, no floats/doubles 0.00
// no negatives
// can the arrays be different lengths? yes
// can the arrays empty? yes
// mutable
// can we create a new array? yes
// can we get strings instead of arrays? no
// is our data sorted? yes
// can undefined be returned as an accepted value? no, return an empty array


// Intersect Sorted Arrays

// Combine two already sorted multiset arrays into
// an array containing the sorted set intersection of the two.

// Only the shared values between the two arrays, deduped.

// input: [1,2,2,2,7], [2,2,6,6,7]
// output: [2,7]


// arr1 = [1,2,2,2,7];
// arr2 = [2,2,6,6,7];

function intersection(arr1, arr2) { // array
  let idx1 = 0;
  let idx2 = 0;

  const len1 = arr1.length;
  const len2 = arr2.length;
  const result = [];

  // as long as we don't read off an array

  // while loop is a for loop + an if statement
  while (idx1 < len1 && idx2 < len2) {
      // walk the smaller idx forward
      if (arr1[idx1] < arr2[idx2]) {
          idx1++;
      } else if (arr1[idx1] > arr2[idx2]) {
          idx2++;
          // else they are equal
      } else {
          // double check we've not already added this number
          if (result[result.length - 1] !== arr1[idx1]) {
              result.push(arr1[idx1]);
          }
          // walk forward both indexes
          idx1++;
          idx2++;
      }
  }
  return result;
}