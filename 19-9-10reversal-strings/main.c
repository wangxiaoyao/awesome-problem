//
//  main.c
//  test
//
//  Created by 王逍遥 on 2019/8/24.
//  Copyright © 2019 王逍遥. All rights reserved.
//

#include <stdio.h>
#include <strings.h>
#include <stdlib.h>

void ret(char *str){
    unsigned int len = strlen(str);
    char *p1 = str;
    char *p2 = &str[len-1];
    while(p1<p2){
        char temp = *p1;
        *p1 = *p2;
        *p2 = temp;
        p1++;
        p2--;
    };
};
// 字符串反转
int main(int argc, const char * argv[]) {
    char str1[] = "abce";
    ret(str1);
    printf("%s",str1);
    return 0;
}

