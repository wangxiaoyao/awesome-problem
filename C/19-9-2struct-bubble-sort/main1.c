#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct student{
    char *name;
    float *scores;
};

int main(int argc, const char * argv[]) {
    
    // 创建空间，以及输入
    
    struct student *stu =(struct student*)malloc(sizeof(struct student)*3);
    
    printf("请输入学生的姓名  成绩\n");
    
    for (int i=0; i<3; i++) {
        stu[i].name = (char *)malloc(sizeof(char)*21);
        stu[i].scores = (float *)malloc(sizeof(float)*3);
        scanf("%s %f %f %f",stu[i].name,
              &stu[i].scores[0],&stu[i].scores[1],&stu[i].scores[2]);
    }
    
    // 冒泡
    for (int i=0;i<3;i++) {
        for (int k = i+1;k<3;k++) {
            if (stu[i].scores[0]+stu[i].scores[1]+stu[i].scores[2]<stu[k].scores[0]+stu[k].scores[1]+stu[k].scores[2]) {
                struct student temp = stu[i];
                stu[i] = stu[k];
                stu[k]= temp;
            }
        }
    }
    
    // 打印
    for (int i=0; i<3; i++) {
        printf("姓名：%s\n",stu[i].name);
        printf("成绩：%0.2f，%0.2f，%0.2f\n",
               stu[i].scores[0],stu[i].scores[1],stu[i].scores[2]);
    }
    
    // 释放
    for (int i=0 ; i<3; i++) {
        free(stu[i].name);
        free(stu[i].scores);
    }
    free(stu);
   
}
