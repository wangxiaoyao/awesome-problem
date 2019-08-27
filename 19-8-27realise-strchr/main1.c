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
    int  i = 0;
    while (str[i]!='\0') {
        if (str[i]==ch) {
            return &str[i];
        };
        i++;
    }
    return NULL;
}

int main(int argc, const char * argv[]) {
    char str[]="hello world";
    char *p= strchrXiao(str,'e');
    printf("%s\n",p);
}
