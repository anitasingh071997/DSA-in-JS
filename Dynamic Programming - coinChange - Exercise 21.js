/* Dynamic Programming - Coin Change
Write a function called coinChange which accepts two parameters: an array of denominations and a value. 
The function should return the number of ways you can obtain the value from the given collection of denominations. 
You can think of this as figuring out the number of ways to make change for a given value from a supply of coins.

Examples:
const denominations = [1, 5, 10, 25]
 
coinChange(denominations, 1) // 1
coinChange(denominations, 2) // 1
coinChange(denominations, 5) // 2
coinChange(denominations, 10) // 4
coinChange(denominations, 25) // 13
coinChange(denominations, 45) // 39
coinChange(denominations, 100) // 242
coinChange(denominations, 145) // 622
coinChange(denominations, 1451) // 425663
coinChange(denominations, 14511) // 409222339
*/

function coinChange(denominations, value) {
    // Create an array to store the number of ways to make each value, initialized to 0
    const ways = new Array(value + 1).fill(0);
    ways[0] = 1; // There is one way to make the value 0: using no coins
  
    // Loop through each denomination
    for (let coin of denominations) {
      // For each value from the coin to the target value, update the ways array
      for (let i = coin; i <= value; i++) {
        ways[i] += ways[i - coin];
      }
    }
  
    return ways[value]; // Return the number of ways to make the target value
  }
  
  // Example usage:
  const denominations = [1, 5, 10, 25];
  
  console.log(coinChange(denominations, 1)); 
  console.log(coinChange(denominations, 2)); 
  console.log(coinChange(denominations, 5)); 
  console.log(coinChange(denominations, 10)); 
  console.log(coinChange(denominations, 25));
  console.log(coinChange(denominations, 45)); 
  console.log(coinChange(denominations, 100)); 
  console.log(coinChange(denominations, 145)); 
  console.log(coinChange(denominations, 1451)); 
  console.log(coinChange(denominations, 14511)); 
  
  