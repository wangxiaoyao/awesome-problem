//
//  main.c
//  test
//
//  Created by 王逍遥 on 2019/8/24.
//  Copyright © 2019 王逍遥. All rights reserved.
//

#include <stdio.h>

// 比较两个字符串是否相同
void cmpXiao(char *str1,char *str2){
    unsigned long len1 = strlen(str1);
    unsigned long len2 = strlen(str2);
    if (len1!=len2) {
        printf("这两个字符串不相等\n");
    }else{
        int index=0;
        while (str1[index] ==str2[index]) {
            index++;
        }
        if (index-1 == len1) {
            printf("这两个字符串相等\n");
        }else{
            printf("这两个字符串不相等\n");
        }
    }
}
int main(int argc, const char * argv[]) {
    
    char str1[] = "abcd";
    char str2[] = "abc ";
    cmpXiao(str1,str2);
    return 0;
}
