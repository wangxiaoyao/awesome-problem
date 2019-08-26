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
        printf("冒泡结束后：%d\n",arrayOri[i]);
    }
}

