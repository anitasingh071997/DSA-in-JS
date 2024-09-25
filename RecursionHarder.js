/* Question 1 : Reverse
    Task : Write a recursive function called reverse which accepts 
            a string and returns a new string in reverse.
        
    Example : 
        reverse ('awesome') // 'emosewa'
        reverse ('rithmschool') // 'loohcssmhtir'
*/

// Reverse Solution
function reverse(str){
    if(str.length <= 1) return str;
    return reverse(str.slice(1)) + str[0];
}

/* Question 2 : isPalindrome
    Task : Write a recursive function called isPalindrome
            which returns true if the string passed
            to it is a palindrone(reads the same forward and backward).
            Otherwise it returns false.

        Example : 
            isPalindrome('awesome') // false
            isPalindrome('foobar') // false
            isPalindrome('tacocat') // true
            isPalindrome('amanaplanacanalpanama') // true
            isPalindrome('amanaplanacanalpandemonium) // false
*/

// isPalindrome Solution 
function isPalindrome(str){
    if(str.length === 1) return true;
    if(str.length === 2) return str[0] === str[1];
    if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
        return false;
    
}

/* Question 3 : someRecursive
    Task : Write a recursive function called someRecursive
            which accepts an array and a callback. 
            The function returns true if a single value in the array
            returns true when passed to the callback. 
            Otherwise it returns false.

        Example : 
            SAMPLE INPUT / OUTPUT
            const isOdd = val => val % 2 !== 0;

            someRecursive([1,2,3,4], isOdd) // true
            someRecursive([4,6,8,9], isOdd) // true
            someRecursive([4,6,8], isOdd) // false
            someRecursive([4,6,8], val => val > 10); // false
*/

// someRecursive Solution
function someRecursive(array, callback) {
    if (array.length === 0) return false;
    if (callback(array[0])) return true;
    return someRecursive(array.slice(1),callback);
}

/* Question 4 : flatten
    Task : Write a recursive function called flatten 
            which accepts an array of arrays and returns 
            a new array with all values flattened.

        Example : 
            flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
            flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
            flatten([[1],[2],[3]]) // [1,2,3]
            flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]
*/

// flatten Solution
function flatten(oldArr){
  var newArr = []
  	for(var i = 0; i < oldArr.length; i++){
    	if(Array.isArray(oldArr[i])){
      		newArr = newArr.concat(flatten(oldArr[i]))
    	} else {
      		newArr.push(oldArr[i])
    	}
  } 
  return newArr;
}

/* Question 5 : capitalizeFirst
    Task : Write a recursive function called capitalizeFirst.
            Given an array of strings, capitalize the first letter
            of each string in the array.

        Example : 
             capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
*/

// capitalizeWords Solution
function capitalizeWords (array) {
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }
  let res = capitalizeWords(array.slice(0, -1));
  res.push(array.slice(array.length-1)[0].toUpperCase());
  return res;
 
}

/* Question 6 : nestedEvenSum
    Task : Write a recursive function called nestedEvenSum. 
            Return the sum of all even numbers in an object 
            which may contain nested objects.

        Example : 
            nestedEvenSum(obj1); // 6
            nestedEvenSum(obj2); // 10
*/

// nestedEvenSum Solution

function nestedEvenSum (obj, sum=0) {
    for (var key in obj) {
        if (typeof obj[key] === 'object'){
            sum += nestedEvenSum(obj[key]);
        } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0){
            sum += obj[key];
        }
    }
    return sum;
}

/* Question 7 : capitalizeWords
    Task : Write a recursive function called capitalizeWords.
            Given an array of words, return a new array 
            containing each word capitalized.

        Example :
            let words = ['i', 'am', 'learning', 'recursion'];
            capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
*/

// capitalizeFirst Solution

function capitalizeFirst (array) {
  if (array.length === 1) {
    return [array[0][0].toUpperCase() + array[0].substr(1)];
  }
  const res = capitalizeFirst(array.slice(0, -1));
  const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length-1)[0].substr(1);
  res.push(string);
  return res;
}

/* Question 8 : stringifyNumbers
    Task : Write a function called stringifyNumbers 
            which takes in an object and finds all of the values which are numbers and converts them to strings. 
            Recursion would be a great way to solve this!

            The exercise intends for you to create a 
            new object with the numbers converted to strings, and not modify the original.
            Keep the original object unchanged.
*/

// stringifyNumbers Solution
function stringifyNumbers(obj) {
  var newObj = {};
  for (var key in obj) {
    if (typeof obj[key] === 'number') {
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

/* Question 9 : collectStrings
    Task : Write a function called collectStrings 
            which accepts an object and returns an array 
            of all the values in the object 
            that have a typeof string

        Example : 
            collectStrings(obj) // ["foo", "bar", "baz"])
*/

// collectStrings Solution: Helper Method Recursion Version
function collectStrings(obj) {
    var stringsArr = [];
 
    function gatherStrings(o) {
        for(var key in o) {
            if(typeof o[key] === 'string') {
                stringsArr.push(o[key]);
            }
            else if(typeof o[key] === 'object') {
                return gatherStrings(o[key]);
            }
        }
    }
 
    gatherStrings(obj);
 
    return stringsArr;
}

// collectStrings Solution: Pure Recursion Version
function collectStrings(obj) {
    var stringsArr = [];
    for(var key in obj) {
        if(typeof obj[key] === 'string') {
            stringsArr.push(obj[key]);
        }
        else if(typeof obj[key] === 'object') {
            stringsArr = stringsArr.concat(collectStrings(obj[key]));
        }
    }
 
    return stringsArr;
}

