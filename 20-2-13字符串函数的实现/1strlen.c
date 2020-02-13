#include "stdio.h"
#include "string.h"
#include <stdlib.h>
#include <stdint.h>

int myStrlen(const char*str){
    int i = 0;
    while (str[i]!='\0') {
        i++;
    }
    return i;
}

int main(void){
    
    char *s = "nihao";
    printf("%d\n",myStrlen(s));
    
};
