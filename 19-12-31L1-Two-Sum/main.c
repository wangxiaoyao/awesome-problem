#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <string.h>

int* twoSum(int* nums, int numsSize, int target, int* returnSize){
    int *result;
    result = (int *) malloc((2)*sizeof(int));
    for(int i=0;i<numsSize;i++){
        for(int j = i+1; j<numsSize; j++){
            if (nums[j] == target-nums[i]){
                result[0] = i;
                result[1] = j;
//                *returnSize = 2;
                return result;
            }
        }
    }
    *returnSize =0;
    return NULL;
}

int main(void){
    int nums[] = {2,7,11,15};
    int numsSize = sizeof(nums)/sizeof(int);
    printf("%d\n",numsSize);
    int target = 9;
    int *returnSize = NULL;
    int *result=  twoSum(nums,numsSize,target,returnSize);
    printf("%d\n",result[0]);
    printf("%d\n",result[1]);
}
