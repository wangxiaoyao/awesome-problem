//
//  main.c
//  test
//
//  Created by 王逍遥 on 2019/8/24.
//  Copyright © 2019 王逍遥. All rights reserved.
//

#include <stdio.h>
#include <string.h>
#include <stdlib.h>

char *sortXiao(char *str[],int num){
    char temp[100];
    int index = 0;
//    printf("%s\n",str[1]);
//    printf("%s\n",*(str+1));
    for (int i=0; i<num; i++) {
        for (int j=0; j< strlen(*(str+i)); j++) {
            temp[index] = *(str[i]+j);
            index++;
        }
    };
    char *p = temp;
    unsigned long len = strlen(temp);
    for (int i =0; i<len; i++) {
        for (int j=i+1;j<len;j++ ) {
            if (temp[i]>temp[j]) {
                char tempChr = temp[i];
                temp[i] = temp[j];
                temp[j] = tempChr;
            }
        }
    }
    return p;
}

// 字符串数组排序A-Z sortXiao
int main(int argc, const char * argv[]) {
    char *str[]={"hello","world","linger"};
    int num = 3;
    char *p = sortXiao(str,num);
    printf("%s\n",p);
    return 0;
}
