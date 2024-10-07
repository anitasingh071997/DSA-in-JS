// Given a array of positive integers, find the subarrays of integers that add up to a given number.
function getSubarrays (inputArr, desiredSum) {
    // validate input
    assert(desiredSum > 0, 'Desired sum must be greater than 0.')
  
    // current window sum and window sum start index
    let sum = 0; let sumStartIndex = 0
    const solutions = []
  
    inputArr.forEach((item, index) => {
      sum += item
  
      while (sum > desiredSum) {
        sum -= inputArr[sumStartIndex]
        sumStartIndex++
      }
  
      if (sum === desiredSum) solutions.push(inputArr.filter((_, i) => i >= sumStartIndex && i <= index))
    })
  
    return solutions
  }
  
