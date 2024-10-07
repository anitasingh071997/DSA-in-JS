// Given an array of 0's and 1's,
// find the maximum sequence of continuous 1's that can be formed by flipping at-most k 0's to 1's.
function getMaxSequence (inputArr, maxFlips) {
    // validate input
    assert(maxFlips >= 0, 'Max flips cannot be negative.')
  
    let subArrStart = 0; let subArrEnd = 0
    let flippedZeroes = 0
    let longestSubArr = { start: 0, end: 0, len: 0 }
  
    inputArr.forEach((item, index) => {
      // always start by increasing window size
      subArrEnd = index
  
      if (item === 0) flippedZeroes++
  
      const subArrLen = 1 + subArrEnd - subArrStart
      if (flippedZeroes <= maxFlips && subArrLen > longestSubArr.len) longestSubArr = { start: subArrStart, end: subArrEnd, len: subArrLen }
  
      // decrease window size until we are less than or equal to the max flip limit
      while (flippedZeroes > maxFlips) {
        if (inputArr[subArrStart] === 0) flippedZeroes--
  
        subArrStart++
      }
    })
  
    return inputArr.slice(longestSubArr.start, longestSubArr.end + 1)
  }
  
  
  // test case #1
  const exampleInput1 = [1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0]
  const maxFlips1 = 2
  const solution1 = [0, 1, 1, 0, 1, 1]

