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
    int a ,b;
    for (a=1; a<10; a++) {
        for (b=1; b<=a; b++) {
            printf("%d*%d=%d\t",b,a,a*b);
        }
        printf("\n");
    }
}
