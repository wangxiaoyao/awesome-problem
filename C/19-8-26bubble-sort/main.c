//
//  main.c
//  test
//
//  Created by 王逍遥 on 2019/8/24.
//  Copyright © 2019 王逍遥. All rights reserved.
//

#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main(int argc, const char * argv[]) {
    clock_t start,finish;
    double duration;
    printf("开始\n");
    start = clock();
    int arrayOri[5]={1,43,34,6,33};
    int temp;
    
    for (int i=0; i<5; i++) {
        for (int k=i+1; k<5; k++) {
            if (arrayOri[i]>arrayOri[k]) {
                temp = arrayOri[i];
                arrayOri[i] = arrayOri[k];
                arrayOri[k] = temp;
            };
        }
    }
    for (int i =0; i<5; i++) {
        printf("%d\n",arrayOri[i]);
    }
    finish = clock();
    duration = (double)(finish-start) / CLOCKS_PER_SEC;
    printf("用时：%f\n",duration);
}

