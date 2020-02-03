//
//  main.c
//  C-test
//
//  Created by 王逍遥 on 2020/1/30.
//  Copyright © 2020 王逍遥. All rights reserved.
//

#include <stdio.h>
#include <string.h>

void selectSort(char **p, int len){
    int min = 0;
    
    for (int i =0;  i<len; i++) {
        min = i;
        for (int j = i+1; j <len; j++) {
            if (strcmp(*(p+min), *(p+j)) > 0 ) {
                min = j;
            }
        }
        if (min != i) {
            char *temp = *(p+i);
            *(p+i) = *(p+min);
            *(p+min)= temp;
        }
    }
};

void printArr(char **p,int len){
    for (int i =0; i<len; i++) {
        printf("%s\n", *(p+i) );
    }
};

int main(int argc, const char * argv[]) {
    char* arr[]={ "ww", "zz" , "ee", "lle" };
    int len = sizeof(arr)/sizeof(arr[0]);
    printArr(arr,len);
    printf("================>\n");
    selectSort(arr, len);
    printArr(arr,len);
}
