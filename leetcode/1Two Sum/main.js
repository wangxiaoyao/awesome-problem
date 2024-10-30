// 1:Bruteforce.
/**
 * 
 * @param {number[]} nums 
 * @param {number} target 
 * @return {number[]}
 */
var twoSumFun1 = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
  return [];
};

// 2:hashTable
/**
 * @param {[]} arr
 * @return {Map}
 */

let arrToMap = (arr) => new Map(arr.map((val, key) => [val, key]));


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSumFun2 = function (nums, target) {
  let resultMap = arrToMap(nums);
  for (let i = 0; i < nums.length; i++) {
    let leftVal = target - nums[i];
    if (resultMap.get(leftVal) != i && resultMap.has(leftVal)) {
      return [resultMap.get(leftVal), i]
    }
  }
  return []
}