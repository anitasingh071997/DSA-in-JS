// Maximum sum sub - array of size K

/* 1. Identification
    question will be array or string
    In question it will ask sub-arrays or sub-string
    Given : window size           or               window continuation 
                    |                                       |
            it will use in fixed size window    it will use in variable size window
   2. Problem statement - Input and Output
   IP : size = 7
   arr[]: {2,5,1,8,2,9,1}
   window size K : 3 = 2,5,1 => size of window 
   3. Abstract
   4. Code
   */

   /* SLIDING WINDOW PATTERN 

   A sliding window is a sublist or subarray that runs over an underlying data structure.
   The data structures is typically iterable and ordered, such as array or  string.

   Based on certain condition the window increases or closes, and a new window is created.
   It normally encompasses searching for a longest, shortest or optimal sequence that satisfies a given condition.
   */

   /* 
        QUESTION
        Write a function subArrayMaxSum which accepts an array of integers
        and a number called r (range,)
        Calculate the maximum sum of consecutive elements in the array of range r

        EXAMPLE:
        subArrayMaxSum([5,1,8,2,5,2,1],4); //17
        subArrayMaxSum([5,1,8,2,5,2,1],3); //15
        subArrayMaxSum([8,2,5,2,1],2); //10
        subArrayMaxSum([3],4); //null

     */
    
        
        // Naive solution 

        function subArrayMaxSum(arr, r){
            if (r > arr.length) return null;

            let largestSum = -Infinity;

            for (let i = 0; i < arr.length - r + 1; i++) {
                let tempSum = 0;

                console.log('curr value i--', i);

                for (let j = 0; j < r; j++) {
                    tempSum += arr[i+j]; // position of the sliding window

                    console.log('i val-', i, 'j val', j, i+j,arr[i + j] ,'tempsum', tempSum);

                    tempSum += arr[i+j];
                    console.log("final temp sum -",tempSum);
                }

                if (tempSum > largestSum) {
                    largestSum = tempSum;
                }
            }

            return largestSum;

        }

        // complexity : O(n^2)

        // optimised solution

        function subArrayMaxSum(arr, r) {
            if(r > arr.length) return null;

            let largestSum = 0;
            let tempSum = 0;


             for( let i = 0; i < r; i++) {  // sum all the element in the array
                largestSum += arr[i];
             }

             tempSum = largestSum;

             for( let j = r; j < arr.length; j++) {
                tempSum = tempSum - arr[j - r] + arr[j];

                largestSum = Math.max(largestSum, tempSum);
             }

             return largestSum;
        }

        // complexity : O(n)