//
//  main.c
//  test
//
//  Created by 王逍遥 on 2019/8/24.
//  Copyright © 2019 王逍遥. All rights reserved.
//

#include <stdio.h>
#include <string.h>

// 这种方式不行的原因：
// 我们假设一个原始指针  p(原始)，它指向str的首位地址。
// 循环：第一次 p[0] != ch
// p++ 此时，p改变了它指向的地址，也就是说此时的p 并不是p(原始)，而是在p(原始)的第二位开始：为p(二)；
// 循环：第二次 p(二)[1] 。这时，p所指向的地址应该是str的第三位了！！！而不是我们预期的第二位。

char *mystrchr(char str[],char ch){
    char *p = str;
    int index=0;
    while (p[index]!=ch) {
        p++;
        index++;
    }
    return p;
}

int main(int argc, const char * argv[]) {
    char str[]="hello world";
//    char *p = strchr(str, 'l');
    char *p = mystrchr(str, 'l');
    printf("%s\n",p);
    return 0;
}
