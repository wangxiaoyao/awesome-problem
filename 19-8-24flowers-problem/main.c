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
    for (a=0; a<10; a++) {
        for (b=0; b<10; b++) {
            for (c=0; c<10; c++) {
                if (a*a*a+b*b*b+c*c*c==a*100+b*10+c) {
                    printf("%d%d%d\n",a,b,c);
                }
            }
        }
    }
}
