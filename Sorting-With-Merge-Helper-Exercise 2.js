/* Sorting Exercise - merge helper
Given two sorted arrays, write a function called merge 
which accepts two SORTED arrays and returns a new array
with both of the values from each array sorted.

This function should run in O(n + m) time and O(n + m) space 
and should not modify the parameters passed to it.

As before, the function should default to sorting numbers in ascending order. 
If you pass in a comparator function as a third argument, 
this comparator is what will be used. 
(Note that the input arrays will always be sorted according to the comparator!)

Also, do not use the built in .sort method! 
We're going to use this helper to implement a sort, 
so the helper itself shouldn't depend on a sort.

Examples
var arr1 = [1,3,4,5];
var arr2 = [2,4,6,8];
merge(arr1,arr2) // [1,2,3,4,4,5,6,8]
 
arr1 // [1,3,4,5];
arr2 // [2,4,6,8];
 
var arr3 = [-2,-1,0,4,5,6];
var arr4 = [-3,-2,-1,2,3,5,7,8];
 
merge(arr3,arr4); // [-3,-2,-2,-1,-1,0,2,3,4,5,5,6,7,8]
 
var arr5 = [3,4,5]
var arr6 = [1,2]
 
merge(arr5,arr6) // [1,2,3,4,5]
 
var names = ["Bob", "Ethel", "Christine"]
var otherNames = ["M", "Colt", "Allison", "SuperLongNameOMG"]
 
function stringLengthComparator(str1, str2) {
  return str1.length - str2.length;
}
 
merge(names, otherNames, stringLengthComparator); // ["M", "Bob", "Colt", "Ethel", "Allison", "Christine", "SuperLongNameOMG"]
*/

function merge(arr1, arr2, comparator){
    // add whatever parameters you deem necessary - good luck!
    // default comparator operator for sorting numbers in ascending order
    if(typeof comparator !== 'function') {
        comparator = function(a, b) {
            return a - b;
        };
    }
    
    let mergedArray = [];
    let i = 0;
    let j = 0;
    
    // Merge the arrays while both have elements
    while(i < arr1.length && j < arr2.length) {
        if(comparator(arr1[i], arr2[j]) <= 0) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }
    
    // Add the remaining elements from arr1 if any
    
      while(i < arr1.length) {
          mergedArray.push(arr1[i]);
          i++;
      }
      
      // Add the remaining elements from arr2 if any
      
      while(j < arr2.length) {
          mergedArray.push(arr2[j]);
          j++;
      }
      
      return mergedArray;
  }
  
  // Example Usage
  var arr1 = [1, 3, 4, 5];
  var arr2 = [2, 4, 6, 8];
  console.log(merge(arr1, arr2)); 
  
  var arr3 = [-2, -1, 0, 4, 5, 6];
  var arr4 = [-3, -2, -1, 2, 3, 5, 7, 8];
  console.log(merge(arr3, arr4)); 
  
  var arr5 = [3, 4, 5];
  var arr6 = [1, 2];
  console.log(merge(arr5, arr6)); 
  
  var names = ["Bob", "Ethel", "Christine"];
  var otherNames = ["M", "Colt", "Allison", "SuperLongNameOMG"];
  function stringLengthComparator(str1, str2) {
    return str1.length - str2.length;
  }
  console.log(merge(names, otherNames, stringLengthComparator)); 