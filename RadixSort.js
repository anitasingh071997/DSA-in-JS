 /* RADIX SORT

 1. Radix sort is a special sorting algorithm that works on lists of numbers.
 2. It never makes comparisons between elements!
 3. It exploits the fact that information about the size 
    of a number is encoded in the number of digits.
4.  More digits means a bigger number!
*/
/* RADIX SORT HELPERS

1.  In order to implement radix sort, it's helpful to build a few helper function first:
2.  getDigit(num, place) - returns the digit in num at the given place value
*/
        getDigit(12345, 0); // 5
        getDigit(12345, 1); // 4
        getDigit(12345, 2); // 3
        getDigit(12345, 3); // 2
        getDigit(12345, 4); // 1
        getDigit(12345, 5); // 0

        function getDigit(num, i) {
            return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
        }

// digitCount(num) - returns the number of digits in num 
         digitCount (1); // 1
         digitCount (25); // 2
         digitCount (314); // 3

         function digitCount(num) {
            if(num === 0) return 1;
            return Math.floor(Math.log10(Math.abs(num))) + 1;
         }

// mostDigits(nums) - Given an array of numbers, returns the number
// of digits in the largest numbers in the list.

         mostDigits([1234, 56, 7]); // 4
         mostDigits([1, 1, 11111, 1]); // 5
         mostDigits([12, 34, 56, 78]); // 2

         function mostDigits(nums) {
            let maxDigits = 0;
            for (let i = 0; i < nums.length; i++) {
                maxDigits = Math.max(maxDigits, digitCount(nums[i]));
            }
            return maxDigits;
         }

/* RADIX SORT PSEUDOCODE

1.  Define a function that accepts list of numbers.
2.  Figure out how many digits the largest number has.
3.  Loop from k = 0 up to this largest number of digits
4.  For each iteration of the loop:
         # Create buckets for each digit (0 to 9)
         # place each number in the corresponding bucket
           based on its kth digit.
5.  Replace our existing array with values in our buckets,
    staring with 0 and going up to 9
6.  Return list at the end!
*/

radixSort(nums) 
{
    let maxDigitCount = mostDigits(nums);
    for(let k = 0; k < maxDigitCount; k++){
        let digitBuckets = Array.from({length: 10}, () => []);
        for(let i = 0; i < nums.length; i++){
            let digit = getDigit(nums[i],k);
            digitBuckets[functiondigit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}



        
