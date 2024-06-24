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
    
    // 必须使用int，若是使用char 则导致二进制文件减少。 并且这种方式用时为3S。可喜的是大小完全一样
    /*
    int ch;
    while ( (ch =fgetc(fp1)) != EOF ) {
        fputc(ch, fp2);
    }
     */
    
    // 错误写法！ 使用段缓存,拷贝的文件大小不一样。 原因在于使用了 char。 所以使用fread 和fwrite
    char ch[1024];
    while ( !feof(fp1) ) {
        memset(ch, 0, 1024);
        fgets(ch, 1024, fp1);
        fputs(ch, fp2);
    }
    
    fclose(fp1);
    fclose(fp2);
    
    unsigned int end_time = time(NULL);

    printf("花费的时间为：%d(秒)", end_time-start_time);
    return EXIT_SUCCESS;
}


