#include "stdio.h"
#include "string.h"
#include <stdlib.h>
#include <stdint.h>

int myStrcmp(const char*des,const char*src){
     int k=0;
     int index=0;
     while (des[index]!='\0') {
         if (des[index]==src[index]) {
             k=0;
             index++;
         }else{
             k = des[index]-src[index];
             return k;
         };
     }
     return 0;
}

int main(void){
    
    char *s1 = "nihao";
    char *s2 = "zihao";
    printf("%d\n",myStrcmp(s1,s2));
};
