#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char *strstr1(char *des, char *str){
    char *temp = str;
    char * p = NULL;
    while(*des !='\0'){
        p = des;
        while (*des==*temp && *temp!='\0') {
            des++;
            temp++;
        }
        if (*temp =='\0')
            return p;
        else
            temp = str;
        des = p;
        des++;
    }
    return NULL;
}



int main(int argc, const char * argv[]) {
    char des[]="hld";
    char str[]="ld";
    char *p = strstr1(des, str);
    printf("%s\n",p);
}
