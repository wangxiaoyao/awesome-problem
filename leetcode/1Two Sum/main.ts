// 1:Bruteforce.
/**
 * 
 * @param {number[]} nums 
 * @param {number} target 
 * @return {number[]}
 */
var twoSumFun1 = function (nums: number[], target: number): number[] {
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
 * @return {Array<Map>}
 */

let arrToMap = (arr: number[]): Map<number, number> => new Map(arr.map((val, key) => [val, key]));


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
type NumOrUndefined = number | undefined;
var twoSumFun2 = function (nums: number[], target: number): NumOrUndefined[] {
    let resultMap = arrToMap(nums);
    for (let i = 0; i < nums.length; i++) {
        let leftVal = target - nums[i];
        if (resultMap.get(leftVal) != i && resultMap.has(leftVal)) {
            return [resultMap.get(leftVal), i]
        }
    }
    return []
}