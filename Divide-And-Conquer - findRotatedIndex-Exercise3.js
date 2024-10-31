/* Divide and Conquer - findRotatedIndex
Write a function called findRotatedIndex 
which accepts a rotated array of sorted 
numbers and an integer. 
The function should return the index of the 
integer in the array. If the value is not found, 
return -1.

Constraints:
Time Complexity - O(log n)
Space Complexity - O(1)

findRotatedIndex([3,4,1,2],4) // 1
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8) // 2
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6
findRotatedIndex([37,44,66,102,10,22],14) // -1
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) // -1
findRotatedIndex([11,12,13,14,15,16,3,5,7,9], 16) // 5
*/
function findRotatedIndex(arr, target){
    
    let left = 0;
    let right = arr.length - 1;
    
    while(left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        // check if the middle element is the target 
          if(arr[mid] === target) return mid;
          
          // Determine which side is sorted
          if(arr[left] <= arr[mid]) {
              
              // left half is sorted 
              if(arr[left] <= target && target < arr[mid]){
                  
                  // target is in the left half
                  right = mid - 1;
              } else {
                  // target is in the right half
                  left = mid + 1;
              }
          } else {
              // Right half is sorted
              if(arr[mid] < target && target < arr[right]) {
                  
                  // target is in the right half
                  left = mid + 1;
              } else{
                  // target is in the left half
                  right = mid - 1;
              }
          }
    }
    
  //   if the target is not found
  return -1;
  }
  
  // Example usage
  
  console.log(findRotatedIndex([3, 4, 1, 2], 4)); 
  console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)); 
  console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3)); 
  console.log(findRotatedIndex([37, 44, 66, 102, 10, 22], 14)); 
  console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12)); 
  console.log(findRotatedIndex([11, 12, 13, 14, 15, 16, 3, 5, 7, 9], 16)); 