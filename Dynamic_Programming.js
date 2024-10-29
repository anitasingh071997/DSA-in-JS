/* DYNAMIC PROGRAMMING 

OBJECTIVES : 
1.  Define what dynamic programming is
2.  Explain what overlapping subproblems are
3.  Understand what optimal substructure is
4.  Solve more challenging problems using dynamic programming

What is Dynamic Programming?
"A method for solving a complex problem by breaking it down
Into a collection of simpler subproblems, solving each of those
subproblems, solving each of those subproblems
just once, and storing their solutions."

IT ONLY WORKS On PROBLEM WITH....
OPTIMAL SUBSTRUCTURE  & OVERLAPPING SUBPROBLEMS

OVERLAPPING SUBPROBLEMS
    A Problem is said to have overlapping subproblems if it can
    be broken down into subproblems which are reused several times.

FIBONACCI SEQUENCE
    "Every number after the first two is the sum of the two preceding ones."

OPTIMAL SUBSTRUCTURE
    A problem is said to have optimal substructure 
    if an optimal solution can be constructed from 
    optimal solutions of its subproblems.

*/

Fib(n) = Fib(n-1) + Fib(n-2)
// Fib(2) is 1
// Fib(1) is 1

// Recursive Solution

function fib(n){
    if(n <= 2) return 1;
    return fib (n-1) + fib (n-2);
}

/* MEMOIZATION
    Storing the results of expensive function calls
    and returning the cached result when the same inputs 
    occur again.
*/

// A MEMO-IZED SOLUTION

function fib (n, memo=[]) {
    if(memo[n] !== undefined) return memo [n]
    if(n <= 2) return 1;
    var res = fib(n-1, memo) + fib (n-2, memo);
    memo[n] = res;
    return res;
}

/* TABULATION
    Storing the result of a previous result in a "table"(usually an array).
    Usually done using iteration
    Better space complexity can be achieved using tabulation.
*/

// TABULATED VERSION

function fib (n) {
    if (n <= 2) return 1;
    var fibNums = [0,1,1];
    for(var i = 3; i <= n; i++){
        fibNums [i] = fibNums [i-1] + fibNums [i-2]
    }
    return fibNums [n];
}

/* Write a function called stairs which accepts n number of
stairs. Imagine that a person is standing at the bottom of 
the stairs and wants to reach the top and the person can
climb either 1 stair or 2 stairs at a time. Your function
should return the number of ways the person can reach 
the top by only climbing 1 or 2 stairs at a time.
*/
// What is the substructure?
stairs(n) = stairs(n - 1) + stairs(n - 2); 


function stairs(n) {
    if (n <= 0) return 0;
    if (n <= 2) return n;
    return stairs(n - 1) + stairs(n - 2);
  }

//   MEMOIZATION
//   Storing the result of an expensive function
//  Usually done using recursion

function stairs(n, memo=[]) {
    if (n <= 0) return 0;
    if (n <= 2) return n;
    if (memo[n] > 0) return memo[n];
    memo[n] = stairs(n - 1, memo) + stairs(n - 2, memo);
    return memo[n];
  }

//   TABULATION SOLUTION

function stairs(n) {
    if(n < 3) return n;
    let store = [1,1];
    for(let i = 2; i <= n; i++) {
      let total = store[1] + store[0]
      store[0] = store[1]
      store[1] = total
    }
    return store[1];
  }

//   Another Example

function fib(n) {
    if (n <= 0) return 0; 
    if (n <= 2) return 1; 

    return fib(n - 1) + fib(n - 2); 
}

// What is the substructure?
fib(n) = fib(n - 1) + fib(n - 2); 

// MEMOIZATION

function fib(n, savedFib={}) {
    // base case
    if (n <= 0) { return 0; }
    if (n <= 2) { return 1; }
 
    // memoize
    if (savedFib[n - 1] === undefined) {
         savedFib[n - 1] = fib(n - 1, savedFib);
    }
 
    // memoize
    if (savedFib[n - 2] === undefined) {
         savedFib[n - 2] = fib(n - 2, savedFib);
    }
 
    return savedFib[n - 1] + savedFib[n - 2];
 }

//  TABULATION

function fib(n){
    let arr = [0,1]
    // calculating the fibonacci and storing the values
    for(let i = 2; i <= n; i++){
      arr[i] = arr[i-1] + arr[i-2]
    }
    return arr[n]
}

// Using lists and matrices to break down problems

/* AN EXAMPLE:

Write a function called coinChange which accepts two 
parameters: an array of denominations and a value. The 
function should return the number of ways you can obtain 
the value from the given collection of denominations. You can 
think of this as figuring out the number of ways to make 
change for a given value from a supply of coins.

If amount > coin:
    combinations[amount] += combinations[amount-coin]
If amount > coin:
    combinations[amount] += combinations[amount-coin]
If amount > coin:
    combinations[amount] += combinations[amount-coin]

Where is this actually used?
1.  Artificial Intelligence
2.  Speech Recognition
3.  Caching
4.  Image Processing
5.  Shortest Path Algorithms
    Much, much more!
    */

    // Bottom-Up Approach (TABULATION)
    function coinChange(denominations, value) {
        // Create an array to store the number of ways to make each amount
        const dp = Array(value + 1).fill(0);
        
        // Base case: there's 1 way to make a value of 0 (by using no coins)
        dp[0] = 1;
    
        // Iterate over each denomination
        for (let coin of denominations) {
            // For each denomination, update the number of ways to make each amount
            for (let amount = coin; amount <= value; amount++) {
                dp[amount] += dp[amount - coin];
            }
        }
    
        // The answer is the number of ways to make the 'value' amount
        return dp[value];
    }
    