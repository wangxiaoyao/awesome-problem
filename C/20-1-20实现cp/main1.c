#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <string.h>
#include <math.h>
#include <sys/types.h>
#include <sys/stat.h>
#define MAX_SIZE 1024*1024*10


// 实现 cp 拷贝命令:  mycp  XXX(原文件) XXX(复制的新文件)
int main(int argc, char *argv[]){
    
    unsigned int start_time = time(NULL);
    
    if (argc<3) {
        printf("缺少参数");
        return -1;
    }
    
    FILE *fp1 = fopen(argv[1], "r");
    FILE *fp2 = fopen(argv[2], "w");
    
    if (!fp1 || !fp2) {
        printf("操作文件失败");
        return -2;
    }
    
    // 1 获取文件属性
    struct stat s;
    stat(argv[1],&s);
    printf("%lld\n",s.st_size);
    char *ch;
    int max_size = 0;
    if (s.st_size <  MAX_SIZE || s.st_size ==  MAX_SIZE ) {
        ch = (char *)malloc(sizeof(ch)*s.st_size);
        max_size = s.st_size;
    }
    if (s.st_size > MAX_SIZE) {
        ch = (char *)malloc(sizeof(ch)*MAX_SIZE);
        max_size = MAX_SIZE;
    };

    while (!feof(fp1)) {
        // 控制污染
        memset(ch, 0, max_size);
        int len = fread(ch, 1, max_size, fp1);
        fwrite(ch, len,1, fp2);
    }
    fclose(fp1);
    fclose(fp2);
    
    unsigned int end_time = time(NULL);

    printf("花费的时间为：%d(秒)", end_time-start_time);
    return EXIT_SUCCESS;
}


