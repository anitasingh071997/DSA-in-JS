/* 

Multiple Pointers Pattern

The idea of the multiple pointer pattern revolves solely around creating identifiers or pointers that correspond to an index or position, which moves towards a specific direction based on the certain condition .

This pattern is quite efficient for solving problems with minimal space complexity.


*/

/* 

Question :
Write a function called findZeroSum which accepts a sorted array of integers.
Find the first pair of integers where the sum is 0 and return them in subarray.
If the pair doesnot exist return empty array

findZeroSum([-4, -3, -1, 0, 2, 3, 4], 3) //[-4,4]
findZeroSum([-4, -3, -1, 0, 2, 5]) //[]
findZeroSum([-4,0,2,5]) //[]

*/


/* Naive solution 

// with sum value passed 
function naivefindZeroSum(arr, sum) {

  // sort it first (if the input array is not sorted)
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == sum) {
        return [arr[i], arr[j]];
      }
    }
  }
  return [];
}

*/
// without  sum value passed 
function naivefindZeroSum(arr) {

    // sort it first (if the input array is not sorted)
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] == 0) {
          return [arr[i], arr[j]];
        }
      }
    }
    return [];
  }
  
  // complexity : O(n^2)
  
  
  
  /* Optimized Solution 
  // with sum value passed 
  function findZeroSum(arr , numSum) {
  
    let left = 0;
    let right = arr.length -1;
  
    while(left < right){
        let sum = arr[left] + arr[right];
  
        if(sum === numSum){
            return [arr[left], arr[right]];
        } else if(sum < numSum){
            left++
        } else if(sum > numSum){
            right--
        }
    }
  
    return []
  }
  // Time complexity : O(n)
  // Space complexity : O(1)
  
  findZeroSum([-4, -3, -1, 0, 2, 3, 4], 3)
  findZeroSum([-4, -3, -1, 0, 2, 3, 4], -2)
  
  */
  
  // without sum value passed 
  function findZeroSum(arr) {
  
    let left = 0;
    let right = arr.length -1;
  
    while(left < right){
        let sum = arr[left] + arr[right];
  
        if(sum === 0){
            return [arr[left], arr[right]];
        } else if(sum < 0){
            left++
        } else if(sum > 0){
            right--
        }
    }
  
    return []
  }
  // Time complexity : O(n)
  // Space complexity : O(1)
  
  console.log(findZeroSum([-4, -3, -1, 0, 2, 3, 4])) //[-4,4]
  console.log(findZeroSum([-4, -3, -1, 0, 2, 5])) //[]
  console.log(findZeroSum([-4,0,2,5])) //[]
  
  