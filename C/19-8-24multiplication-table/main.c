//
//  main.c
//  test
//
//  Created by 王逍遥 on 2019/8/24.
//  Copyright © 2019 王逍遥. All rights reserved.
//

#include <stdio.h>

int main(int argc, const char * argv[]) {
    int a ,b,c;
    for (a=1; a<10; a++) {
        for (b=1; b<a+1; b++) {
            c=a*b;
            if (a==b) {
                printf("%d*%d=%d\n",b,a,c);
            }else{
                printf("%d*%d=%d ",b,a,c);
            }
        }
    }
}
