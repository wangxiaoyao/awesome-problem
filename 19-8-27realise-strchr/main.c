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
    char newStr[strlen(str)];
    if (str) {
        int i = 0;
        while (p[i]!=ch) {
            i++;
        }
        for (int j =0; j<strlen(str); j++) {
            newStr[j]=str[i];
            i++;
//            printf("%c\n",str[i]);
//            printf("%s\n",newStr);
        }
    }else{
        printf("参数不存在");
    }
    return newStr;
}

int main(int argc, const char * argv[]) {
    char str[]="hello world";
    char *p= strchrXiao(str,'o');
    printf("%s\n",p);
}
