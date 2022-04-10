/*
 * @lc app=leetcode id=238 lang=javascript
 *
 * [238] Product of Array Except Self
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let arr = [];
    /*
    [1,2,3,4]
    -> -> -> -> 
    <- <- <- <-

    Take Left side multiplications and right side multiplications total into variable

    */
    let leftMul = 1;
    let rightMul = 1;
    for(let l=0; l<nums.length; l++){
        arr[l] = leftMul;   // arr[1] = last Prev Element
        leftMul = leftMul*nums[l];
    }
    for(let r=nums.length-1; r>=0; r--) {
        // arr[1] = last Prev Element 
        //          * remaining right side multiplied values , without current
        arr[r] = arr[r]*rightMul;
        rightMul = rightMul*nums[r];
    }
    return arr;
};
// @lc code=end

