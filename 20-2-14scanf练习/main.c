//
//  main.c
//  19结构体数组
//
//  Created by 王逍遥 on 2019/9/2.
//  Copyright © 2019 王逍遥. All rights reserved.
//

#include <stdio.h>
#include <stdlib.h>
#include <strings.h>

struct stu{
    char name[21];
    unsigned int age;
    char tel[16];
    float scores[3];
    char sex;
};

int main(int argc, const char * argv[]) {
    // 首地址 age
    printf("age 所在的首地址偏移量：%lu\n", offsetof(struct stu, age));
   
    // 结构体数组: scanf("<格式化字符串>"，<地址表>); 注意输入的时候 有一个 “,” 否则乱码
    // 切记 scanf中必须为地址，  %s默认就是地址， %d %f %c需要补上& 成为地址
    struct stu s[1];
    printf("%s","姓名 年龄 电话 成绩1 成绩2 成绩3 性别");
    
    for (int i=0; i<2; i++) {
        scanf("%s %d %s %f %f %f,%c",
        s[i].name,  &s[i].age,   s[i].tel,
        &s[i].scores[0],&s[i].scores[1],&s[i].scores[2],
        &s[i].sex);
    }
    for (int i=0; i<2; i++) {
        printf("姓名：%s\n",s[i].name);
        printf("年龄：%d\n",s[i].age);
        printf("电话：%s\n",s[i].tel);
        printf("成绩：%0.2f,%0.2f,%0.2f\n",s[i].scores[0],s[i].scores[1],s[i].scores[2]);
        printf("性别：%s\n",s[i].sex=='M' ? "男" : "女");
    }
    
    return 0;
}
