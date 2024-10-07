// Given an array of integers, find maximum sum subarray of the required size
function getMaxSubarray (inputArr, subarraySize) {
    // validate input
    assert(subarraySize > 0, 'Subarray size must be positive.')
  
    let currentSum = 0
    let maxSum = 0; let maxSumStartIndex = 0
  
    // iterate entire array from left to right
    inputArr.forEach((number, index) => {
      // increase the window size by one from the right
      currentSum += number
  
      if (index < subarraySize) {
        // continue to accumulate until we reach the desired subarray size (= max window size)
        maxSum = currentSum
      } else {
        // we are over the max window size so remove one element from the left
        currentSum -= inputArr[index - subarraySize]
  
        if (currentSum > maxSum) {
          // we have a new maximum sum window so record its starting index
          maxSum = currentSum
          maxSumStartIndex = index - subarraySize + 1
        }
      }
    })
  
    return inputArr.slice(maxSumStartIndex, maxSumStartIndex + subarraySize)
  }