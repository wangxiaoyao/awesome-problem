//
//  main.c
//  test
//
//  Created by 王逍遥 on 2019/8/24.
//  Copyright © 2019 王逍遥. All rights reserved.
//

#include <stdio.h>

int main(int argc, const char * argv[]) {
    
    int a,b,c;
    scanf("%d%d%d",&a,&b,&c);
    if (a>b) {
        if (a>c) {
            printf("a猪最重：%d\n",a);
        }else{
            printf("c猪最重：%d\n",c);
        }
    }else{
        if (b>c) {
            printf("b猪最重：%d\n",b);
        }else{
            printf("c猪最重：%d\n",c);
        }
    }
    printf("输入值为：%d,%d,%d\n",a,b,c);
    return 0;
}
