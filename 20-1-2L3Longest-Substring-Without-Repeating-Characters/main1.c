#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <string.h>

// 错误解法
int lengthOfLongestSubstring1(char * s, int len){
    // 计数
    int num = 1;
    int result = 0;
    
    char arr[len];
    int i = 0;
    while (*s!='\0') {
        arr[i]= *s;
        s++;
        i++;
    }

    for (int j = 1; j<len; j++) {
        char arrNew[len];
        for (int k = 0; k<j; k++) {
            arrNew[k] = arr[k];
        }
        if (strchr(arrNew,arr[j]) != NULL) {
            num = 1;
            if (num > result) {
                result = num;
            }
        }else{
            num++;
            if (num > result) {
                result = num;
            }
        }
    }
    return result;
};



int main(void){
//    char *s1 = "abcabcbb";
//    char *s2 = "bbbbb";
//    char *s3 = "pwwkew";
    char *s4 = "asseabc";
    int len = strlen(s4);
    int outResult1 = lengthOfLongestSubstring1(s4,len);
    printf("%d\n",outResult1);
}

