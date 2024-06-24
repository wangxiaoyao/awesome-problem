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

//*str[i] > *str[j] 可以换为二维数组： str[i][0]>str[j][0]本质是一样的，都是取字符串的首字符

void sortArray(char **str,int len){
    for (int i = 0; i<len; i++) {
        for (int j=i+1; j<len; j++) {
            if (*str[i] > *str[j] ) {
                char *temp = str[i];
                str[i] = str[j];
                str[j] = temp;
            }
        }
    }
};
// 字符数组排序
int main(int argc, const char * argv[]) {
    char *str1[] = {"asd","sdf","dfg","ghj","qscx"};
    int len = sizeof(str1)/sizeof(char *);
    sortArray(str1,len);
    for (int i = 0; i<len; i++) {
        printf("%s\n",str1[i]);
    }
    return 0;
}

