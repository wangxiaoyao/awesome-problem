#include <stdio.h>
#include <stdlib.h>
#include <string.h>

void mystrcat(char *s1,char *s2){
    while (*s1) {
        s1++;
    }
//    while ( *s1++ = *s2++);
    while (*s2) {
        *s1 = *s2;
        s1++;
        s2++;
    }
    *s1 ='\0';
}

int main(int argc, const char * argv[]) {
    char s1[]= "hello";
    char *s2 = "world";

    mystrcat(s1, s2);
    printf("%s\n",s1);
}
