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

// 结构体冒泡排序
struct student{
    char name[21];
    float scores[3];
};

int main(int argc, const char * argv[]) {
    struct student stu[3];
    printf("请输入学生的姓名  成绩\n");
    for (int i=0; i<3; i++) {
        scanf("%s %f %f %f",stu[i].name,
              &stu[i].scores[0],&stu[i].scores[1],&stu[i].scores[2]);
    }
    
    for (int i=0;i<3;i++) {
        for (int k = i+1;k<3;k++) {
            if (stu[i].scores[0]+stu[i].scores[1]+stu[i].scores[2]<stu[k].scores[0]+stu[k].scores[1]+stu[k].scores[2]) {
                struct student temp = stu[i];
                stu[i] = stu[k];
                stu[k]=temp;
            }
        }
    }
        for (int i=0; i<3; i++) {
            printf("姓名：%s\n",stu[i].name);
            printf("成绩：%0.2f，%0.2f，%0.2f\n",
                   stu[i].scores[0],stu[i].scores[1],stu[i].scores[2]);
        }
}
