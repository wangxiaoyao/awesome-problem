#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <string.h>

int lengthOfLongestSubstring(char * s){
    int j_start = 0;
    int num = 1;
    int result = 1;
    
    if (!s[0]) {
        return 0;
    }else if (!s[1]){
        return result;
    }
    
    for (int i =1; s[i]; i++) {
        for (int j = j_start; j <i ; j++) {
            if (s[i]==s[j]) {
                j_start = j+1;
            }else{
                num++;
            }
        }
        if (num>result) {
            result = num;
        }
        num = 1;
    }
    return result;
}



int main(void){
//    char *s1 = "abcabcbb";
//    char *s2 = "bbbbb";
//    char *s3 = "pwwkew";
    char *s4 = "asseabc";
    int outResult = lengthOfLongestSubstring(s4);
    printf("%d\n",outResult);
}

