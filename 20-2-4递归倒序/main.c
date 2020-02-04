//
//  main.c
//  C-test
//
//  Created by 王逍遥 on 2020/1/30.
//  Copyright © 2020 王逍遥. All rights reserved.
//
#include <stdio.h>
#include <string.h>
#include <stdlib.h>

void revertPrint(char *p){
    if (*p == '\0') {
        return;
    }
    revertPrint(p+1);
    printf("%c",*p);
}


int main(void){
    char *s = "abcd";
    revertPrint(s);
}
