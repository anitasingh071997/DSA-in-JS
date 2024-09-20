/* Question 1 : Pair with Target Sum

Task : Given a sorted array of integers, find if there exists a pair of elements that sum up to a specific
        target
*/

function hasPairWithSum(arr, target) {
    // Initialize two pointers: left at the start and right at the end of the array.
    let left = 0; 
    let right = arr.length - 1;

    // Calculate the sum of the elements at these two pointers.
    while (left < right) {
        const sum = arr[left] + arr[right];
        if (sum === target) {
            return true; // Found the pair
        } else if (sum < target) {
            left++; // Move left pointer to increase the sum
        } else {
            right--; // Move right pointer to decrease the sum
        }
    }

    return false; // No pair found

}

/*  1. If the sum matches the target, return true.
    2. If the sum is less than the target, move the left pointer right to increase the sum.
    3. If the sum is greater, move the right pointer left to decrease the sum.
    4. Repeat until the pointers meet.
*/

/* Question 2 : Remove Duplicates from Sorted Array

Task : Given a sorted array, remove the duplicates in place such that each element
        appears only once and return the new length of the array.
*/

function removeDuplicates(nums) {
    if (nums.length === 0) return 0; // If the array is empty, return 0.

    // Use a variable uniqueIndex to track where to place the next unique number.
    let uniqueIndex = 1; // Start checking from the second element 
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[uniqueIndex] = nums[i];  // Place the unique element
            uniqueIndex++;
        }
    }

    return uniqueIndex; // The new length
}

/*  1. Iterate through the array starting from the second element.
    2. If the current element is different from the previous one, place it at uniqueIndex and increment uniqueIndex.
    3. At the end, uniqueIndex will represent the length of the array without duplicates.
*/

/* Question 3 : Container with Most Water

Task : Given an array of non-negative integers representing the height of lines,
        Find two lines that together with the x-axis form a container that holds the most water.
*/

function maxArea(heights) {
    let left = 0;
    let right = heights.length - 1;
    let maxArea = 0;

    while(left < right) {
        const width = right - left;
        const height = Math.min(heights[left], heights[right]);
        const area = width * height;
        maxArea = Math.max(maxArea, area);

        if (heights[left] < heights[right]) {
            left++; // Move the left pointer to try for a taller line
        } else {
            right--; // Move the right pointer to try for a taller line
        }
    }
    return maxArea;
}

/*  1. Initialize left and right pointers at both ends of the array.
    2. Calculate the width between the two pointers and the height as the shorter of the two heights.
    3. Calculate the area and update maxArea if it's larger than the previous maximum.
    4. Move the pointer corresponding to the shorter height inward to potentially find a taller line.
    5. Repeat until the pointers meet.
*/

/*  Question 4 : Valid Palindrome ||

Task : Given a string, determine if it can be a palindrome after deleting at most one character.
*/

function ValidPalindrome(s) {
    const isPalindrome = (str, left, right) => {
        while (left < right) {
            if (str[left] !== str[right]) return false;
            left++;
            right--;
        }
        return true;
    };

    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) {
            // Try skipping either the left or right character
            return isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1);
        }
        left++;
        right--;
    }
    return true; // It's already a palindrone
}

/*  1. Use a helper function isPalindrome to check if a substring is a palindrome.
    2. Initialize two pointers and check characters from both ends.
    3. If characters don't match, try skipping either character and check again.
    4. If all characters match, it's a palindrome.
*/

/* Question 5 : 3Sum

Task : Given an integer array nums, return all the triplets [nums[a], nums[b], nums[c]] such that a, b, and c are distinct indices,
        and num[a] + nums[b] + nums[c] == 0.
*/

function threeSum(nums) {
    nums.sort((a, b) => a - b); // Sort the array
    const result = [];

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue; //Skip duplicates

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                while (nums[left] === nums[left + 1]) left++; // Skip duplicates
                while (nums[right] === nums[right - 1]) right--; //Skip duplicates
                left++;
                right--;
            } else if (sum < 0) {
                left++; // Increase the sum
            } else {
                right--; // Decrease the sum
            }
        }
    }
    return result;
}

/*  1. Sort the input array to make it easier to avoid duplicates.
    2. Iterate through the array using an index i.
    3. For each element, use two pointers (left and right) to find pairs that,
        when added to nums[i], yield zero.
    4. Skip duplicates to avoid redundant triplets in the result.
    5. Return the list of unique triplets.
*/
