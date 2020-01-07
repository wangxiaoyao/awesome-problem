#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <string.h>
#include <math.h>

char * longestPalindrome(char * s){
    // 单个字符重复最大次数
    int max_num = 0;
    
    // 目标字符串下标
    int max_i = 0;
    int max_j = 0;
    
    // 目标字符串长度
    int lenth = 0;
    
    char newArr[100];
    
    // 求出max_i 和 max_j
    for (int i = 0; s[i]!='\0'; i++) {
        int num = 0;
        for (int j = i+1; s[j]!='\0'; j++) {
            if (s[i] == s[j]) {
                num++;
                max_j = j;
            }
        }
        if (max_num<num || max_num == num) {
            max_num = num;
            max_i = i;
        }
    }
    
    lenth = max_j - max_i +1;
    
    // 赋值给数组
    for (int i = 0; i<lenth ; i++ ,max_i++) {
        newArr[i] = s[max_i];
    };
    
    for (int i = 0; i<lenth; i++) {
        printf("%c\n",newArr[i]);
    }
    
    newArr[lenth] = '\0';
    char *p = newArr;
    return p;
};

int main(void){
    char arr[] = "babad";
    char * result = longestPalindrome(arr);
    printf("%s\n",result);
}

