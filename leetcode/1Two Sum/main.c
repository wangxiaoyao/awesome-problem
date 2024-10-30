#include <stdlib.h>

// 1:Bruteforce. 其中在leetcode官网运行时必须给returnSize赋值。否则返回[];
int* twoSumFun1(int* nums, int numsSize, int target, int* returnSize){
    for (int i = 0; i < numsSize; i++) {
        for (int j = i + 1; j < numsSize; j++) {
            if (nums[i] + nums[j] == target) {
                int *result = (int *)malloc(2 * sizeof(int));
                result[0] = i;
                result[1] = j;
                *returnSize = 2;
                return result;
            }
        }
    }
    return 0;
}

// 2:Hashtable
int* twoSumFun2(int* nums, int numsSize, int target, int* returnSize){

}
