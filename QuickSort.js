/* QUICK SORT

1.  Like merge sort, exploits the fact that arrays of 0 or 1
    element are always sorted.
2.  Works by selecting one element (called the "pivot")
    and finding the index where the pivot should end up
    in the sorted array.
3.  Once the pivot is positioned appropriately, quick sort
    can be applied on either side of the pivot.
*/
/* PIVOT HELPER

1.  In order to implement merge sort, it's useful to first implement a function
    responsible arranging elements in an array on either side of a pivot.
2.  Given an array, this helper function should designate an element as the pivot.
3.  It should then rearrange elements in the array so that all values less than the 
    pivot are moved to the left of the pivot, and all values greater than the pivot
    are moved to the right of the pivot.
4.  The order of elements on either side of the pivot doesn't matter!
5.  The helper should do this in place, that is, it should not create a new array.
6.  When complete, the helper should return the index of the pivot.
*/

/* PICKING A PIVOT 

1.  The runtime of quick sort depends in part on how one
    selects the pivot.
2.  Ideally, the pivot should be chosen so that it's roughly
    the median value in the data set you're sorting
3.  For simplicity, we'll always choose the pivot to be the
    first element.
*/
let arr = [ 5, 2, 1, 8, 4, 7, 6, 3 ]

pivot(arr); // 4;

arr;
// any one of these is an acceptable mutation:
// [2, 1, 4, 3, 5, 8, 7, 6]
// [1, 4, 3, 2, 5, 7, 6, 8]
// [3, 2, 1, 4, 5, 7, 6, 8]
// [4, 1, 2, 3, 5, 6, 8, 7]
// there are other acceptable mutations too!

/* PIVOT PSEUDOCODE 

1.  It will help to accept three arguments: an array, a start index,
    and an end index (these can default to 0 and the array length
    minus 1, respectively).
2.  Grab the pivot from the start of the array.
3.  Store the current pivot index in a variable (this will keep track of
    where the pivot should end up).
4.  Loop through the array from the start until the end
    # If the pivot is greater than the current element, increment the
      pivot index variable and then swap the current element with
      the element at the pivot index.
5.  Swap the starting element (i.e. the pivot) with the pivot index.
6.  Return the pivot index.
*/

// First Version
function pivot(arr, start=0, end=arr.length+1){
    function swap(array, i, j) {
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  
    var pivot = arr[start];
    var swapIdx = start;
  
    for(var i = start + 1; i < arr.length; i++){
      if(pivot > arr[i]){
        swapIdx++;
        swap(arr,swapIdx,i);
      }
    }
    swap(arr,start,swapIdx);
    return swapIdx;
  }
  
  // Version with ES2015 Syntax
  function pivot(arr, start = 0, end = arr.length - 1) {
    const swap = (arr, idx1, idx2) => {
      [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };
  
    // We are assuming the pivot is always the first element
    let pivot = arr[start];
    let swapIdx = start;
  
    for (let i = start + 1; i <= end; i++) {
      if (pivot > arr[i]) {
        swapIdx++;
        swap(arr, swapIdx, i);
      }
    }
  
    // Swap the pivot from the start the swapPoint
    swap(arr, start, swapIdx);
    return swapIdx;
  }
  
  pivot([4,8,2,1,5,7,6,3])





/* QUICK SORT PSEUDOCODE

1.  Call the pivot helper on the array
2.  When the helper returns to you the updated
    pivot index, recursively call the pivot helper on 
    the subarray to the left of that index, and the 
    subarray to the right of that index.
*/

//   quicksort

  function pivot(arr, start = 0, end = arr.length - 1) {
    const swap = (arr, idx1, idx2) => {
      [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };
  
    // We are assuming the pivot is always the first element
    let pivot = arr[start];
    let swapIdx = start;
  
    for (let i = start + 1; i <= end; i++) {
      if (pivot > arr[i]) {
        swapIdx++;
        swap(arr, swapIdx, i);
      }
    }
  
    // Swap the pivot from the start the swapPoint
    swap(arr, start, swapIdx);
    return swapIdx;
  }
  
  
  function quickSort(arr, left = 0, right = arr.length -1){
      if(left < right){
          let pivotIndex = pivot(arr, left, right) //3
          //left
          quickSort(arr,left,pivotIndex-1);
          //right
          quickSort(arr,pivotIndex+1,right);
        }
       return arr;
  } 
             
  quickSort([100,-3,2,4,6,9,1,2,5,3,23])
  
  
  
  
  // [4,6,9,1,2,5,3]
  // [3,2,1,4,6,9,5]
  //        4
  //  3,2,1    6,9,5
  //      3      6
  //  2,1      5  9
  //    2
  //  1
  
  
  
  