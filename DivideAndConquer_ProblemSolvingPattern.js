/* 
DIVIDE AND CONQUER 

It is a recursive problem-solving approach that divides the problem into smaller subproblems,
recursively solves each subproblem, and combines the subproblem's solution to get the solution of the original problem.

There are four steps in the divide and conquer algorithm:

    1. Divide Step:
        we divide the problem into one or more than one smaller subproblems.
    
    2. Conquer Step:
        we solve each subproblem
    
    3. Combine Step:
        We combine the solutions of the subproblems to build the solution of the 
        original problem.

    4. Base Case:
        Return the solution.

*/
/*  Syntax of DIVIDE AND CONQUER
DAC (P){
    if(Small (P))
    {
        S(P);
    }
    else
    {
        divide P into p1, p2, p3..... pk
        Apply DAC(p1), DAC(p2).......DAC(pk)
        Combine (DAC(p1), DAC(p2)......DAC(pk))
    }
}
    */

/* BINARY SEARCH - 
    A binary search algorithm is a technique for finding a 
    position of specified value within a sorted array.

    Question : The binary search algorithm searches for a target value in a sorted array by repeatedly dividing the search interval in half.
*/

function binarySearch(arr, target, low, high) {
    // Base case: if the range is invalid
    if (low > high) {
        return -1; // Target not found
    }

    const mid = Math.floor((low + high) / 2); // Find the middle index

    // Check if the middle element is the target
    if (arr[mid] === target) {
        return mid; // Target found
    } else if (arr[mid] < target) {
        // Search in the right half
        return binarySearch(arr, target, mid + 1, high);
    } else {
        // Search in the left half
        return binarySearch(arr, target, low, mid - 1);
    }
}

// Example usage
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 7;
const result = binarySearch(arr, target, 0, arr.length - 1);

if (result !== -1) {
    console.log(`Element found at index ${result}`);
} else {
    console.log("Element not found");
}
