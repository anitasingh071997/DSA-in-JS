// function numberCompare(num1, num2) {
//      return num2 - num1;
// }

// [ 6, 4, 15, 10 ].sort(numberCompare);

function compareByLen(str1, str2) {
    return str2.length - str1.length;
}

["Anita", "Singh", "Data Structures", "Algorithms" ].sort(compareByLen);

/* Before we sort, we must swap!

        Many sorting algorithms involve some type of swapping
            functionality(e.g. swapping to numbers to 
                put them in order)
*/

// ES5
    function swap(arr, idx1, idx2) {
        var temp = arr[idx1];
        arr[idx1] = arr[idx2];
        arr[idx2] = temp;
    }

// ES2015
    const swap = (arr, idx1, idx2) => {
        [arr[idx1],arr[idx2]] = [arr[idx2],arr[idx1]];
    }

/* BUBBLE SORT PSEUDOCODE

1.  Start looping from with a variable called i the end of
    the array towards the beginning
2.  Start an inner loop with a variable called j from the
    beginning until i - 1
3.  If arr[j] is greater than arr[j+i], swap those two
    values!
4.  Return the sorted array.

*/  

// UNOPTIMIZED VERSION OF BUBBLE SORT
function bubbleSort(arr){
    for(var i = arr.length; i > 0; i--){
        for(var j = 0; j < i - 1; j++){
            console.log(arr, arr[j], arr[j+1]);
            if(arr[j] > arr[j+1]){
                // SWAP!
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
        console.log("ONE PASS COMPLETE!")
    }
    return arr;
}

bubbleSort([37, 45, 29, 8, 12, 88, -3]);
// [37,45,29,8]
// [37,29,8,45]
// [29,8,37,45]

// ES2015 Version
function bubbleSort(arr) {
    const swap = (arr, idx1, idx2) => {
      [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };
  
    for (let i = arr.length; i > 0; i--) {
      for (let j = 0; j < i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          swap(arr, j, j + 1);
        }
      }
    }
    return arr;
  }
  
  bubbleSort([8,1,2,3,4,5,6,7]);

  // Optimized BubbleSort with noSwaps
function bubbleSort(arr){
    var noSwaps;
    for(var i = arr.length; i > 0; i--){
      noSwaps = true;
      for(var j = 0; j < i - 1; j++){
        if(arr[j] > arr[j+1]){
          var temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = temp;
          noSwaps = false;         
        }
      }
      if(noSwaps) break;
    }
    return arr;
  }
  
  bubbleSort([8,1,2,3,4,5,6,7]);
