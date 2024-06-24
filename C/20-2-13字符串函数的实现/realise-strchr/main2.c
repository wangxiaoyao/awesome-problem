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

char *strchrXiao(char *str, char ch){
    char *p = str;
    while (*p!='\0') {
        if (*p==ch) {
            return p;
        };
        // 注意此处的p为地址
        p++;
    }
    return NULL;
}

int main(int argc, const char * argv[]) {
    char str[]="hello world";
    char *p= strchrXiao(str,'o');
    printf("%s\n",p);
}
