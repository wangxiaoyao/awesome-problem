

#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <string.h>

char * strstr1(const char *des, const char *str){
    const char *desp = des;
    const char *strp = str;
    unsigned long strpLen = strlen(str);
    int index = 0;
    while (*desp!='\0') {
        if (*desp==*strp) {
            const char *p = desp;
            while (index<strpLen) {
                if (*desp!=*st rp) {
                    break;
                }
                desp++;
                strp++;
                index++;
            }
            if (*strp=='\0') {
                return p;
            }else{
                // 这一步：需要重置参数！
                strp = str;
                index = 0;
                desp++;
            }
        }else{
            desp++;
        }
    }
    if(*desp=='\0'){
        return NULL;
    }
    return 0;
}

int main(int argc, const char * argv[]) {
    // 实现strstr
    
    char des[]="hello world";
    char str[]="e";
    char *p = strstr1(des, str);
    printf("%s\n",p);
}

