//
//  main.c
//  test
//
//  Created by 王逍遥 on 2019/8/24.
//  Copyright © 2019 王逍遥. All rights reserved.
//

#include <stdio.h>
#include <string.h>
#include <stdlib.h>

void printArr(int *arr,int len){
    for (int i=0; i<len; i++) {
        printf("%d\n",arr[i]);
    }
}

void sortXiao(int *arr,int len){
    for (int i=0; i<len; ++i) {
        int min = i;
        for (int j=i+1; j<len; ++j) {
            if (arr[j]<arr[i]) {
                min = j;
            }
        }
        if (min!=i) {
            int temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
}

// 选择排序法
int main(int argc, const char * argv[]) {
    int arr[6]={1,80,56,34,78,12};
    sortXiao(arr,6);
    printArr(arr,6);
    return 0;
}
