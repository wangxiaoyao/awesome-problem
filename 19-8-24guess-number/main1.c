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
    
    srand((unsigned) time(NULL));//用系统当前时间设置rand()随机序列种子，保证每次运行随机序列不一样
    b = rand()%100+1;
    printf("%d",b);
    while (1) {
        scanf("%d",&a);
        if (a>b) {
            printf("输入数字过大\n");
        }else if(a<b){
            printf("输入数字过小\n");
        }else{
            printf("恭喜\n");
            break;
        }
    }
}
