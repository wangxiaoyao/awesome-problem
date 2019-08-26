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
    int pigWightNum[5];
    int resultPig=0;
    
    for (int i = 0; i<5; i++) {
        scanf("%d",&pigWightNum[i]);
    }
    
    for (int i=0; i<5; i++) {
        if (pigWightNum[i]>resultPig) {
            resultPig = pigWightNum[i];
        }
    }
    printf("最重的那头猪：%d",resultPig);
}

