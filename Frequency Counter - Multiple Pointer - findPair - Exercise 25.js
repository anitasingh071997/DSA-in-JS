/* Frequency Counter / Multiple Pointer - findPair
Given an unsorted array and a number n, find if there exists a pair of elements in the array 
whose difference is n. This function should return true if the pair exists 
or false if it does not.

findPair([6,1,4,10,2,4], 2) // true
findPair([8,6,2,4,1,0,2,5,13],1) // true
findPair([4,-2,3,10],-6) // true
findPair([6,1,4,10,2,4], 22) // false
findPair([], 0) // false
findPair([5,5], 0) // true
findPair([-4,4], -8) // true
findPair([-4,4], 8) // true
findPair([1,3,4,6],-2) // true
findPair([0,1,3,4,6],-2) // true

Part 1 - solve this with the following requirements:
Time Complexity Requirement - O(n)
Space Complexity Requirement - O(n)

Part 2 - solve this with the following requirements:
Time Complexity Requirement - O(n log n)
Space Complexity Requirement - O(1)

*/ 

// Part 1 - solve this with the following requirements:
// Time Complexity Requirement - O(n)
// Space Complexity Requirement - O(n)

function findPair(arr, n) {
    if (arr.length === 0) return false;
    
    const numSet = new Set();
  
    for (let num of arr) {
      // Check if either of the two possible pairs exist
      if (numSet.has(num - n) || numSet.has(num + n)) {
        return true;
      }
      numSet.add(num); // Add the current number to the set
    }
  
    return false;
  }
  
  // Example usage:
  console.log(findPair([6, 1, 4, 10, 2, 4], 2)); 
  console.log(findPair([8, 6, 2, 4, 1, 0, 2, 5, 13], 1)); 
  console.log(findPair([4, -2, 3, 10], -6)); 
  console.log(findPair([6, 1, 4, 10, 2, 4], 22)); 
  console.log(findPair([], 0)); 
  console.log(findPair([5, 5], 0)); 
  console.log(findPair([-4, 4], -8)); 
  console.log(findPair([-4, 4], 8)); 
  console.log(findPair([1, 3, 4, 6], -2)); 
  console.log(findPair([0, 1, 3, 4, 6], -2)); 

//   Part 2 - solve this with the following requirements:
//   Time Complexity Requirement - O(n log n)
//   Space Complexity Requirement - O(1)
  
  function findPair(arr, n) {
    if (arr.length === 0) return false;
  
    arr.sort((a, b) => a - b); // Sort the array in ascending order
  
    let left = 0;
    let right = 1;
  
    while (right < arr.length) {
      const diff = arr[right] - arr[left];
  
      if (diff === n && left !== right) {
        return true; // Found the pair with the difference
      } else if (diff < n) {
        right++; // Increase the difference
      } else {
        left++; // Decrease the difference
      }
    }
  
    return false;
  }
  
  // Example usage:
  console.log(findPair([6, 1, 4, 10, 2, 4], 2));
  console.log(findPair([8, 6, 2, 4, 1, 0, 2, 5, 13], 1)); 
  console.log(findPair([4, -2, 3, 10], -6));
  console.log(findPair([6, 1, 4, 10, 2, 4], 22)); 
  console.log(findPair([], 0)); 
  console.log(findPair([5, 5], 0)); 
  console.log(findPair([-4, 4], -8)); 
  console.log(findPair([-4, 4], 8)); 
  console.log(findPair([1, 3, 4, 6], -2)); 
  console.log(findPair([0, 1, 3, 4, 6], -2)); 
  
  