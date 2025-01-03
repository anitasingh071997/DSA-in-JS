/* Coin Change - Greedy Algorithm
Write a function minCoinChange that takes two arguments: 
an array of coin denominations (coins) and a target amount number (amount). 
The provided array of coins is sorted in ascending order, 
starting from the smallest coin denomination to the largest.

Your task is to return an array representing the minimum number 
of coins needed to make the given amount. 
The result should be an array of the actual coins used, 
not their count or sum. To achieve this, you should start by considering 
the largest denominations first and use them as much as possible
before moving to smaller denominations. As a consequence of this, 
the result array should be sorted in descending order, 
starting from the largest coin denomination to the smallest.

Examples:
minCoinChange([1, 2, 3, 4, 5], 11); // this should return: [5, 5, 1]
minCoinChange([5, 10, 15, 20, 25], 85); // this should return: [25, 25, 25, 10]
minCoinChange([1, 5, 6, 9], 11); // this should return: [9, 1, 1]
*/

function minCoinChange(coins, amount) {
    // write your code here
  //   Array to store the result (coins used)
  let result = [];
  
  // Iterate over the coins Array in decending order
  
  for (let i = coins.length - 1; i >= 0; i--) {
      while(amount >= coins[i]) {
          amount -= coins[i]; //Subtract the coin value from the amount
          result.push(coins[i]); // Add the coin to the result Array
      }
  }
  
  return result;
  }
  
  // Example Usage
  
  console.log(minCoinChange([1, 2, 3, 4, 5], 11)); 
  console.log(minCoinChange([5, 10, 15, 20, 25], 85)); 
  console.log(minCoinChange([1, 5, 6, 9], 11)); 
  