/* Radix Sort Helper - digitCount
Implement a function called digitCount  
which accepts a positive integer and returns 
the number of digits that the integer has.

Examples

digitCount(1); // 1
digitCount(9); // 1
digitCount(25); // 2
digitCount(314); // 3
digitCount(1234); // 4
digitCount(77777); // 5
*/
function digitCount(num) {
    // if the number is 0, it has 1 digit
    
    if(num === 0)
    return 1;
    
    // Use Math.floor and Math.log10 to count the number of digits
    
    return Math.floor(Math.log10(Math.abs(num))) + 1;
    
  }
  
  // Example usage
  
  console.log(digitCount(1)); // 1
  console.log(digitCount(9)); // 1
  console.log(digitCount(25)); // 2
  console.log(digitCount(314)); // 3
  console.log(digitCount(1234)); // 4
  console.log(digitCount(77777)); // 5
  