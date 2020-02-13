#include "stdio.h"
#include "string.h"
#include <stdlib.h>
#include <stdint.h>


char* myStrcpy(char*des,const char*src){
    if (des!=NULL) {
        memset(des, 0, strlen(des)+1);
    }
     int index =0;
     while (src[index]!='\0') {
         des[index]=src[index];
         index++;
     }
     return des;
}

int main(void){
    char s1[] = "hello";
    char *s2 = "world";
    myStrcpy(s1,s2);
    printf("%s\n",s1);
};
