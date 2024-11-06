/* Frequency Counter - constructNote
Write a function called constructNote, which accepts two strings, 
a message and some letters. The function should return true if 
the message can be built with the letters that you are given, 
or it should return false.

Assume that there are only lowercase letters and no space 
or special characters in both the message and the letters.

Bonus Constraints:
If M is the length of message and N is the length of letters:
Time Complexity: O(M+N)
Space Complexity: O(N)

Examples:
constructNote('aa', 'abc') // false
constructNote('abc', 'dcba') // true
constructNote('aabbcc', 'bcabcaddff') // true
*/

function constructNote(message, letters){
    // add whatever parameters you deem necessary - good luck!
  //   If the message is longer than the letters available, It's impossible to construct 
  if(message.length > letters.length) return false;
  
  
  // Create the frequency counter for the letters
  let letterFrequency = {};
  
  for(let char of letters) {
      letterFrequency[char] = (letterFrequency[char] || 0) +1;
  }
  
  // Check if we can contruct the message
  
  for (let char of letters) {
      if (!letterFrequency[char] || letterFrequency[char] === 0) {
          return false; // Not enough of the character
      }
      
      letterFrequency[char]--; // Use one of the character
  }
  
  return true;
  }
  
  // Example Usage
  
  console.log(constructNote('aa', 'abc')); 
  console.log(constructNote('abc', 'dcba')); 
  console.log(constructNote('aabbcc', 'bcabcaddff')); 