/* Divide and Conquer - sortedFrequency
Given a sorted array and a number, write 
a function called sortedFrequency that 
counts the occurrences of the number in 
the array

sortedFrequency([1,1,2,2,2,2,3],2) // 4 
sortedFrequency([1,1,2,2,2,2,3],3) // 1 
sortedFrequency([1,1,2,2,2,2,3],1) // 2 
sortedFrequency([1,1,2,2,2,2,3],4) // -1

Time Complexity - O(log n)
*/
function sortedFrequency(arr, num){
           
    const firstIndex = findFirst(arr, num);
    if(firstIndex === -1) return -1 // If number is not found return -1
    const lastIndex = findLast(arr, num);
    return lastIndex - firstIndex + 1;
  }
  
  // Helper function to find the first occurence of the target number
  
  function findFirst(arr, num){
      let left = 0;
      let right = arr.length - 1;
      while(left <= right){
          const mid = Math.floor((left + right) / 2)
          if(arr[mid] === num && (mid === 0 || arr[mid - 1] !== 1)){
              return mid;
       } else if (arr[mid] < num){
           left = mid + 1;
       } else {
           right = mid - 1;
       }
      }
      return -1;
  }
  
  // Helper function to find the last occurance of the target number
  function findLast(arr, num){
      let left = 0;
      let right = arr.length - 1;
      while(left <= right){
          const mid = Math.floor((left + right) / 2);
          if(arr[mid] === num && (mid === arr.length - 1 || arr[mid + 1] !== 1)) {
              return mid;
      } else if(arr[mid] > num){
          right = mid - 1;
      } else {
          left = mid + 1;
      }
    }
    
    return -1;
  }
  
  console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2)); 
  console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3)); 
  console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1)); 
  console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4)); 