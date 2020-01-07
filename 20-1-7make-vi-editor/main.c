#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <string.h>
#include <math.h>

// 自制VI编辑器
int main(void){

    // 1 创建文件名，路径
    printf("请输入文件名");
    char fileName[256];
    scanf("%s\n",fileName);
    // 接受换行
    getchar();
    
    // 2 创建文件
    FILE *fp = fopen(fileName, "w");
    
    // 3 文件打开判断
    if (!fp) {
        return -1;
    }
    // 3 遍历循环录入
    char buf[1024];
    while (1) {
        memset(buf, 0, 1024);
        fgets(buf, 1024, stdin);
        if (!strncmp("comm=exit", buf, 9)) {
            break;
        }
        
        // 4 将字符串写入文件中
        int i = 0;
        while (buf[i]) {
            fputc(buf[i++],fp);
        }
        
        // 5 更新缓冲区， 防止关闭文件
//        fpplus(fp);
    }
    
    fclose(fp);
    
    return EXIT_SUCCESS;
}

