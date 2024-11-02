/* Radix Sort
Write a function called radixSort  
which accepts an array of numbers and sorts them 
in ascending order.

You'll need to make use of the helper functions from the previous exercises here.

Examples
radixSort([8, 6, 1, 12]); // [1, 6, 8, 12]
radixSort([10, 100, 1, 1000, 10000000]); // [1, 10, 100, 1000, 10000000]
radixSort([902, 4, 7, 408, 29, 9637, 1556, 3556, 8157, 4386, 86, 593]); 
// [4, 7, 29, 86, 408, 593, 902, 1556, 3556, 4386, 8157, 9637]

*/
function getDigit(num, i) {
    
    // Helper function to get the digit at  the given position  
    return Math.floor(Math.abs(num) / Math.pow(10, i)) %10;
  }
  
  // Helper function to count the digits of the number
  
  function digitCount(num) {
    
    if (num === 0)
    return 1;
    
    return Math.floor(Math.log10(Math.abs(num))) + 1;
  }
  
  // Helper function to get the number of digits in the largest number in an array
  
  function mostDigits(nums) {
    
    let maxDigits = 0;
    for (let num of nums) {
        maxDigits = Math.max(maxDigits, digitCount(num));
    }
    
    return maxDigits;
  }
  
  function radixSort(nums) {

    let maxDigitCount = mostDigits(nums);
    
    for (let k = 0; k < maxDigitCount; k++) {
      //   create buckets for each digit (0-9)
      let digitBuckets = Array.from({ length: 10 }, () => []);
      
      // place each number in the corresponding bucket based on the current digit
      for(let i = 0; i < nums.length; i++) {
          let digit = getDigit(nums[i], k);
          digitBuckets[digit].push(nums[i]);
      }
      
      // Reassemble the array from the buckets
      
      nums = [].concat(...digitBuckets);
      
    }
    
    return nums;
  }
  
  // Example usage
  
  console.log(radixSort([8, 6, 1, 12])); 
  console.log(radixSort([10, 100, 1, 1000, 10000000]));
  console.log(radixSort([902, 4, 7, 408, 29, 9637, 1556, 3556, 8157, 4386, 86, 593]));
  