/*
frequency counters
This object uses objects or sets to collect values/frequencies of values.

Benifit : This can often avoid the need of using nested for loops or O(n^2) operations with arrays or strings

*/

/* Question:

Write a function called similarSquared , which accepts 2 arrays.
It should return true if every value in the 1st array has its corresoponding value squared in the second
array. The frequency of the values must be the same.

Examples:
       
        similarSquard([1,2,3],[4,1,9]) //true
    similarSquard([1,2,3],[1,9])  //false
    similarSquard([1,2,1],[4,4,1]) //false (must be same frequency)
we will solve this question with Naive Solution.
*/

// Naive solution
function similarSquard(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2); // ** use for getting squared value
        if (correctIndex === -1) {
            return false;
        }
        arr2.splice(correctIndex, 1);
    }
    return true;
}
// Time complexity : O(n^2)


// Optimised Solution
function _similarSquard(arr1, arr2) {   // accepting 2 arrays
    if (arr1.length !== arr2.length) {  // if length is not same return it false
        return false;
    }

    const frequencyCount1 = {};// Creating Objects
    const frequencyCount2 = {};

    for (let val of arr1) { //iterating through the array1
        frequencyCount1[val] = (frequencyCount1[val] || 0) + 1; //if the value is not available store 1 | if the value is avalable increment its value by 1
    }
    for (let val of arr2) { //iterating through the array2

        frequencyCount2[val] = (frequencyCount2[val] || 0) + 1;
    }

    console.log("frequencyCount1", frequencyCount1);
    console.log("frequencyCount2", frequencyCount2);

    for (let key in frequencyCount1) { // In this for loop we r basically checking the key
        if (!(key ** 2 in frequencyCount2)) { // if we loop through the frequencyCounter1
            return false;
        }

        if (frequencyCount2[key ** 2] !== frequencyCount1[key]) {  // Check the frequency Wheather the same or not
            return false;
        }
    }

    return true;
}
// Time Complexity : O(n)