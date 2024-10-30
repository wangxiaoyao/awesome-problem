#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <string.h>
#include <math.h>

double findMedianSortedArrays(int* nums1, int nums1Size, int* nums2, int nums2Size){
    double prev = 0.0, median =0.0;
    int mid = (nums1Size + nums2Size)/2;
    for (int i =0,j=0; ;) {
        if (i == nums1Size) {
            median = nums2[j++];
        }else if (j==nums2Size){
            median = nums1[i++];
        }else if (nums1[i]>nums2[j]){
            median = nums2[j++];
        }else{
            median = nums1[i++];
        }
        if (i+j>mid) {
            if ( (nums1Size+nums2Size)%2==0) {
                median = (prev + median)/2;
            }
            return median;
        };
        prev = median;
    }
}

int main(void){
    
    int nums1[] = {1, 2};
    int nums1Size = sizeof(nums1)/sizeof(int);
    int nums2[] = {3,4,6,8,90};
    int nums2Size = sizeof(nums2)/sizeof(int);
    
    double result = findMedianSortedArrays(nums1, nums1Size, nums2, nums2Size);
    printf("%0.1f",result);

}

