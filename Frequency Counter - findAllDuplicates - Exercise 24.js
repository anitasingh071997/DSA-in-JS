/* Frequency Counter - findAllDuplicates
Given an array of positive integers, some elements appear twice and others 
appear once. Find all the elements that appear twice in this array. 
Note that you can return the elements in any order.

findAllDuplicates([4,3,2,7,8,2,3,1]) // array with 2 and 3
findAllDuplicates([4, 3, 2, 1, 0]) // []
findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3]) // array with 3, 2, and 1
Time Complexity - O(n)
*/

function findAllDuplicates(nums){
    // add whatever parameters you deem necessary - good luck!
    const duplicates = [];
    
    // Iterate through the Array 
    for (let i = 0; i < nums.length; i++) {
        const index = Math.abs(nums[i]) - 1; // Find the index corresponding to the current value
        
        // If the value at the index is negative, it means we have encountered this number before
        if (nums[index] < 0) {
            duplicates.push(Math.abs(nums[i])); // Add the duplicates 
        } else {
            // Mark the value at the index as visited by making it negative
            nums[index] = -nums[index];
        }
    }
    
    return duplicates;
  }
  
  // Example usage:
  console.log(findAllDuplicates([4, 3, 2, 7, 8, 2, 3, 1])); 
  console.log(findAllDuplicates([4, 3, 2, 1, 0]));
  console.log(findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3])); 
  