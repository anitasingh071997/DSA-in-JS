/* Divide and Conquer - countZeroes
Given an array of 1s and 0s which has all 1s
first followed by all 0s, write a function called 
countZeroes, which returns the 
number of zeroes in the array.

countZeroes([1,1,1,1,0,0]) // 2
countZeroes([1,0,0,0,0]) // 4
countZeroes([0,0,0]) // 3
countZeroes([1,1,1,1]) // 0

Time Complexity - O(log n)
*/

function countZeroes(arr){
    // add whatever parameters you deem necessary - good luck!!!
    let left = 0;
    let right = arr.length - 1;
    
  //   Binary search to find the first occurence of 0
      while(left <= right) {
      const mid = Math.floor((left + right) / 2);
      
      
      // if we find a 0 and it's the first 0 or preceded by 1, it's the first occurence of 0
      if(arr[mid] === 0 && (mid === 0 || arr[mid - 1] === 1)) {
          return arr.length - mid;
      } else if (arr[mid] === 1) {
          left = mid + 1; // move rigth if we are in the 1 section
      } else {
          right = mid - 1; // mmove left if we r in the 0 section but not at the first 0
      }
  }
  return 0; //return 0 if there is no 0
    
  }
  console.log(countZeroes([1, 1, 1, 1, 0, 0])) // 2
  console.log(countZeroes([1,0,0,0,0])) // 4
  console.log(countZeroes([0,0,0])) // 3
  console.log(countZeroes([1,1,1,1])) // 0