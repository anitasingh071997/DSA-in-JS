/* MERGE SORT

1.  It's a combination of two things - merging and sorting!
2.  Exploits the fact that arrays of 0 or 1 element are always sorted.
3.  Works by decomposing an array into smaller arrays of 0 or 1 elements,
    then building up a newly sorted array.
*/

/* MERGING ARRAYS

1.  In order to implement merge sort, it's useful to first implement
    a function responsible for merging two sorted arrays.
2.  Given two arrays which are sorted, this helper function should
    create a new array which is also sorted, and consists of all of the elements
    in the two input arrays.
3.  This function should run in O(n + m) time and O(n + m) space
    and should not modify the parameters passed to it.
*/

/* MERGING ARRAYS PSEUDOCODE

1.  Create an empty array, take a look at the smallest values
    in each input array.
2.  While there are still values we haven't looked at...
        1.  If the value in the first array is samller than the value in 
            the second array, push the value in the first array into our
            results and move on to the next value in the first array.
        2.  If the value in the first array is larger tha the value in the
            second array, push the value in the second array into our
            results and move on to the next value in the second array.
        3.  Once we exhaust one array, push in all remaining values
            from the other array.
*/

// Merges two already sorted arrays
function merge(arr1, arr2){
    let results = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j])
            j++;
        }
    }
    while(i < arr1.length) {
        results.push(arr1[i])
        i++;
    }
    while(j < arr2.length) {
        results.push(arr2[j])
        j++;
    }
    return results;
}
merge([100,200], [1,2,3,5,6])

/* mergeSort Pseudocode

1.  Break up the array half until you have arrays that
    are empty or have one element.
2.  Once you have smaller sorted arrays, merge those arrays
    with other sorted arrays until you are back at the full
    length of the array.
3.  Once the array has been merged back together, return the 
    merged (and sorted!) array.
*/

// Merge function from earlier
function merge(arr1, arr2){
    let results = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j])
            j++;
        }
    }
    while(i < arr1.length) {
        results.push(arr1[i])
        i++;
    }
    while(j < arr2.length) {
        results.push(arr2[j])
        j++;
    }
    return results;
}

// Recrusive Merge Sort
function mergeSort(arr){
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, sright);
}

mergeSort([10,24,76,73])
