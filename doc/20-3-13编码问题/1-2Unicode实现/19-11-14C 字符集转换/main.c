//
//  main.c
//  19-11-14C 字符集转换
//
//  Created by 王逍遥 on 2019/11/14.
//  Copyright © 2019 王逍遥. All rights reserved.
//

#include <stdio.h>
#include <stdlib.h>

// 进制转换的函数，不要和字符串转为数字型弄混了  atoi atof atol
char* itoa(int value, char* result, int base) {
    // check that the base if valid
    if (base < 2 || base > 36) { *result = '\0'; return result; }
    
    char* ptr = result, *ptr1 = result, tmp_char;
    int tmp_value;
    
    do {
        tmp_value = value;
        value /= base;
        *ptr++ = "zyxwvutsrqponmlkjihgfedcba9876543210123456789abcdefghijklmnopqrstuvwxyz" [35 + (tmp_value - value * base)];
    } while ( value );
    
    // Apply negative sign
    if (tmp_value < 0) *ptr++ = '-';
    *ptr-- = '\0';
    while(ptr1 < ptr) {
        tmp_char = *ptr;
        *ptr--= *ptr1;
        *ptr1++ = tmp_char;
    }
    return result;
}

int main(int argc, const char * argv[]) {
    
    // 书面写法：B表示二进制，Q表示八进制 D十进制 H 表示16进制，
    // 1-1 不同进制的值的表示：零b开头2进制  零开头8进制  零x开头16进制  。
    int a1 = 3;
    int b1 = 027;
    int c1 = 0xA;
    int d1 = 0b10000001;
    printf("a1:%d\n b1:%d\n c1:%d\n d1:%d\n",a1,b1,c1,d1);
    
    // 1-2 不同进制的输出：使用printf： %o %d %x。可惜没有二进制
    // itoa并不是一个标准的C函数，它是Windows特有的。跨平台无法显示。我已经封装了函数，见上
    int e1 = 0b1100;
    printf("%oQ\n %dD\n %xH\n",e1,e1,e1);
    
    //将整数10转换为其他进制保存在str字符数组中：第一个参数：需要转换的值，第二个接受值，第三个进制
    int num = 10;
    char str[100];
    itoa(num, str, 2);
    printf("%s\n",str);
    
    
    return 0;
}
