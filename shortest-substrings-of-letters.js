//  Given a string and n characters, find the shortest substring that contains all the given characters.
function getShortestSubstring (inputString, characters) {
    // current sliding window starting index
    let windowStartIndex = 0
  
    // start/end indexes of smallest window that has all the needed chars
    let smallestWindowStartIndex = 0; let smallestWindowEndIndex = 0
  
    // calculate how many times of which characters we need to find, resulting object will be like: {a: 2, b: 4, x: 1}
    const neededCharCounts = characters.split('').reduce((freq, char) => { freq[char] ? freq[char]++ : freq[char] = 1; return freq }, {})
  
    // how many of the needed chars we didn't find yet in the current window
    let missingCharCount = characters.length
  
    // traverse the entire string and look for missing needed chars
    for (let windowEndIndex = 0; windowEndIndex < inputString.length; windowEndIndex++) {
      const char = inputString[windowEndIndex]
  
      // if we found one of the missing needed chars, decrease its needed count by one
      if (char in neededCharCounts) {
        if (neededCharCounts[char] > 0) missingCharCount--
  
        // needed count might fall to negative since the current window might contain the needed char too many times
        neededCharCounts[char]--
      }
  
      // if we managed to find all the needed chars in the current sliding window
      // repeatedly shrink the window from left as long we still have all the needed chars in the window
      if (!missingCharCount) {
        let leftChar = inputString[windowStartIndex]
        while (windowStartIndex < windowEndIndex && (!(leftChar in neededCharCounts) || neededCharCounts[leftChar] < 0)) {
          if (leftChar in neededCharCounts) neededCharCounts[leftChar]++
          windowStartIndex++
          leftChar = inputString[windowStartIndex]
        }
  
        // take note of the smallest window (that has all the needed chars) that we found up to this moment
        if (!smallestWindowEndIndex || (windowEndIndex - windowStartIndex) < (smallestWindowEndIndex - smallestWindowStartIndex)) {
          smallestWindowStartIndex = windowStartIndex
          smallestWindowEndIndex = windowEndIndex
        }
      }
    }
  
    return inputString.slice(smallestWindowStartIndex, smallestWindowEndIndex + 1)
  }
  
  // test case #1
  const exampleInput1 = 'a93kdabc991cba35fg'
  const desiredCharacters1 = 'abcabc'
  const solution1 = 'abc991cba'
  
