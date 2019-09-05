//
//  main.c
//  test
//
//  Created by 王逍遥 on 2019/8/24.
//  Copyright © 2019 王逍遥. All rights reserved.
//

#include <stdio.h>
#include <string.h>
#include <stdlib.h>

struct Stu{
    int a;
    char b;
    double c;
    float d;
};

// 选择排序法
int main(int argc, const char * argv[]) {
    
    //分别说出结构体Stu的各部分占内存的偏移量，假设首地址为0；
    struct Stu stu = {1,'a',3.14,1.2};
    printf("%d\n",&stu.a);
    printf("%d\n",&stu.b);
    printf("%d\n",&stu.c);
    printf("%d\n",&stu.d);
    
    printf("%d\n",sizeof(stu));

}
