#include "stdio.h"
#include "string.h"
#include <stdlib.h>
#include <stdint.h>


 char* myStrcat(char *des,char *src){
     unsigned long desLen = strlen(des);
     
     char *p = des;
     char *p1 = src;
     
     while (*p1 !='\0') {
         *(p+desLen) = *p1;
         p1++;
         desLen++;
     }
     p[desLen]='\0';
     return p;
 };

int main(void){
    // s1必须是数组，开辟在栈区，若是写成指针字符串，则开辟在常量区。无法进行修改/追加
    char s1[] = "hello";
    char *s2 = "world";
    myStrcat(s1,s2);
    printf("%s\n",s1);
};
